import React from 'react';
import './styles/App.scss';
import toyotaLogo from './Toyota_logo_(Red).svg';

const App: React.FC = () => {
  return (
    <main className="toyota-404" role="main">
      <div className="toyota-404__container">
        <header className="toyota-404__logo">
          <img src={toyotaLogo} alt="Toyota Logo" width="160" height="32" />
        </header>
        <div className="toyota-404__content">
          <h1 aria-label="Error 404">404</h1>
          <h2>Page Not Found</h2>
          <p>The road you're looking for seems to have taken a different turn.</p>
          <a href="/" className="toyota-404__button" role="button">
            Return to Homepage
          </a>
        </div>
        <div className="toyota-404__illustration" aria-hidden="true">
          <div className="toyota-404__car">
            <div className="wheel wheel--front"></div>
            <div className="wheel wheel--rear"></div>
            <div className="headlight"></div>
            <div className="taillight"></div>
            <div className="grill"></div>
          </div>
          <div className="toyota-404__road"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
