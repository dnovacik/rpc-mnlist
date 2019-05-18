import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// REDUX
import { Provider } from 'react-redux';
import { Store } from './Store';

// CUSTOM IMPORTS
import MasternodeListHeader from './components/MasternodeListHeader';
import MasternodeList from './components/MasternodeList';
import LoaderCointaner from './components/LoaderContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      coin: null
    }
  }

  componentWillMount = () => {
    axios.get('http://localhost:4000/coinsettings')
    .then(res => {
      this.setState({coin: res.data})
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Provider store={Store}>
          {this.state.coin === null
          ? <div>
              <LoaderCointaner mainColor='#6610f2' />
            </div>
          : <div>
              <MasternodeListHeader coinName={this.state.coin.name} logoUrl={this.state.coin.icon} mainColor={this.state.coin.color} />
              <MasternodeList refreshTime={this.state.coin.refresh} masternodesOnPage={this.state.coin.masternodesPerPage} mainColor={this.state.coin.color} />
           </div>}
      </Provider>
    );
  }
}

export default App;
