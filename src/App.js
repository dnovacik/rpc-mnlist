import React, { Component } from 'react';
import './App.css';

// REDUX
import { Provider } from 'react-redux';
import { Store } from './Store';

// CUSTOM IMPORTS
import { coin, refreshTime, masternodesOnPage, mainColor } from './config/config';
import Header from './components/Header';
import MasternodeListHeader from './components/MasternodeListHeader';
import MasternodeList from './components/MasternodeList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
            <MasternodeListHeader coinName={coin.name} logoUrl={coin.iconurl} mainColor={mainColor} />
            <MasternodeList refreshTime={refreshTime} masternodesOnPage={masternodesOnPage} mainColor={mainColor} />
            <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
