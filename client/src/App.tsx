import './App.css';
import React, { FC } from 'react';
import { Footer, Navbar, Services, Transactions, Welcome } from './components';
import './style/index.scss';

const App: FC = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App;
