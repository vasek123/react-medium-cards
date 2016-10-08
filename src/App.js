import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';
import articles from './res/articles';

class App extends Component {
  renderCard(article, key) {
    return <Card key={key} article={article}/>
  }

  render() {
    return (
      <div className="App">
        {articles.map((article, i) => this.renderCard(article, i))}
      </div>
    );
  }
}

export default App;
