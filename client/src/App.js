import React, { Component } from 'react';
import Banner from './components/banner'
import Input from './components/Input'
import List from './components/List'
import _ from 'lodash'
import './App.css';

const SEARCH_URL = '/api'
class App extends Component {
  state = {
    items: []
  }

  searchTerm = async (type, location) => {
    console.log(type, location)
    const response = await fetch(`${SEARCH_URL}/${type}/${location}`);
    console.log('Response', response)
    const body = await response.json();
    console.log(response, body)
    if (response.status !== 200) throw Error(body.message);

    this.setState({items: body.businesses})
  }

  render() {
    const searchTerm = _.debounce((type, location) => {this.searchTerm(type, location)}, 450)
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Banner />
            <Input onSearchTermChange={searchTerm}/>
            <List items={this.state.items}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
