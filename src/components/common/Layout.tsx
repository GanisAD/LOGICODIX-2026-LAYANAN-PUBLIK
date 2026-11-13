import React from 'react';
import Header from './Header';
import DisclaimerFooter from './DisclaimerFooter';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-root">
      <Header />
      <main className="layout-main" role="main">
        {children}
      </main>
      <DisclaimerFooter />
    </div>
  );
};

export default Layout;
