import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;