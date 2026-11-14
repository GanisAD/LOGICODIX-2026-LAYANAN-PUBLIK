import ktpService from './adminduk-ktp-01.json';
import bpjsService from './health-bpjs-pbi-02.json';
import umkmService from './permits-microbusiness-03.json';

// 1. Complete service schemas mapped by ID (consumed by WizardEngine & ResultPage)
export const SERVICES_MAP = {
  [ktpService.id]: ktpService,
  [bpjsService.id]: bpjsService,
  [umkmService.id]: umkmService,
};

export const ALL_SERVICES = Object.values(SERVICES_MAP);

// UI metadata mapping for legacy CatalogCard components
const UI_META_MAP = {
  'adminduk-ktp-01': {
    initials: 'DK',
    status: 'Layanan Aktif',
    statusType: 'active',
  },
  'health-bpjs-pbi-02': {
    initials: 'BP',
    status: 'Layanan Aktif',
    statusType: 'active',
  },
  'permits-microbusiness-03': {
    initials: 'IU',
    status: 'Online / Loket',
    statusType: 'online',
  },
};

// 2. Backward-compatible adapter for CatalogView / CatalogCard
export const servicesData = ALL_SERVICES.map((service) => {
  const primaryLocation = service.locations?.[0] || {};
  const defaultResult = Object.values(service.results || {})[0] || {};
  const antiExtortionChannels =
    service.antiExtortionBanner?.channels || service.antiExtortionChannels || [];
  const uiMeta = UI_META_MAP[service.id] || {
    initials: service.category.slice(0, 2).toUpperCase(),
    status: 'Layanan Aktif',
    statusType: 'active',
  };

  return {
    id: service.id,
    slug: service.slug,
    initials: uiMeta.initials,
    category: service.category,
    title: service.title,
    description: service.shortDescription,
    schedule: primaryLocation.operatingHours || 'Senin – Jumat: 08.00 – 15.00 WIB',
    estimatePrefix: 'Estimasi Proses:',
    estimate: service.estimatedProcessingTime,
    status: uiMeta.status,
    statusType: uiMeta.statusType,
    details: {
      agency: service.agency,
      location: primaryLocation.name || '-',
      contact: antiExtortionChannels[0]?.contact || '-',
      cost: service.officialFeeLabel,
      requirements: (defaultResult.documents || []).map((doc) => doc.name),
      procedures: defaultResult.steps || [],
    },
  };
});

// 3. Lookup helper for WizardPage
export function getServiceById(serviceId) {
  return SERVICES_MAP[serviceId] || SERVICES_MAP['permits-microbusiness-03'];
}

// 4. Graph resolver for ResultPage (supports direct resultId or answer-path traversal)
export function resolveWizardResult(serviceId, resultId, answers = {}) {
  const service = getServiceById(serviceId);
  if (!service) return null;

  // Direct lookup via ?res=...
  if (resultId && service.results?.[resultId]) {
    return { service, result: service.results[resultId] };
  }

  // Fallback: traverse question graph from startQuestionId using recorded answers
  let currentNodeId = service.startQuestionId;
  const visited = new Set();

  while (currentNodeId && !visited.has(currentNodeId)) {
    visited.add(currentNodeId);

    if (service.results?.[currentNodeId]) {
      return { service, result: service.results[currentNodeId] };
    }

    const question = service.questions?.find((q) => q.id === currentNodeId);
    if (!question) break;

    const chosen = answers[question.id];
    const matchedOption = question.options.find(
      (opt) => opt.nextId === chosen || opt.label === chosen
    );

    if (!matchedOption) break;
    currentNodeId = matchedOption.nextId;
  }

  // Final fallback: return the first result node
  const fallbackKey = Object.keys(service.results || {})[0];
  return {
    service,
    result: fallbackKey ? service.results[fallbackKey] : null,
  };
}