import React, { Component } from 'react';
import CustomHeader from './components/CustomHeader';
import ListNews from './components/ListNews';

class  App extends Component {

  state = { 
    news: [],
    customDesign: []
  }

componentDidMount() {

  this.callNews();
  this.callCustomItems();
  window.addEventListener('scroll', this.listenToScroll);

}

componentWillUnmount() {
  window.removeEventListener('scroll', this.listenToScroll)
}

listenToScroll = () => {

  if(window.scrollY > 400) {
    this.hideNavSections();
  } else {
    this.displayNavSections();
  }

  if(window.scrollY > 800) {
    this.displayGreenBurger();
  } else {
    this.hideGreenBurger();
  }

}

displayNavSections = () => {
  document.querySelector('.nav-section').style = 'display: inline-block';
}

hideNavSections = () => {
  document.querySelector('.nav-section').style = 'display: none';
}

displayGreenBurger = () => {
  document.querySelector('.navbar-brand').style = 'display: none';
  document.querySelector('.roundBackground').style = 'display: inline-block'; 
}

hideGreenBurger = () => {
  document.querySelector('.navbar-brand').style = 'display: inline-block';
  document.querySelector('.roundBackground').style = 'display: none';
}


callNews = async () => {
  const url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=xxxx`;

  const response = await fetch(url);
  const news = await response.json();
  
  this.setState({
    news : news.articles
  })
}

callCustomItems = async () => {
  const url2 =`https://5d4b069b00dbb10014879772.mockapi.io/api/v1/designElements`;

  const responseItems = await fetch(url2);
  const customDesign = await responseItems.json();
  
  
  
  this.setState({
    customDesign : customDesign[0]
  })


}



  render() { 

  
    return ( 
      
      <div className="container-fluid pl-0 pr-0">

     
      <CustomHeader
        customdesign = {this.state.customDesign}
      />
      
      <ListNews 
          news = {this.state.news}
        />

        <p className="mb-5"></p>

      </div>
    
    
    );
  }
}
 
export default App;
