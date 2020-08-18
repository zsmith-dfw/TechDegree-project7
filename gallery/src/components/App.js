import React, { Component } from 'react';
import Nav from "./Nav"
import Search from "./Search"
import NotFound from './NotFound';
import PhotoContainer from './PhotoContainer'
// import apiKey from './config'
import axios from 'axios'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      photos: []
    }
   
  }
  componentDidMount() {
    axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=219f6801dd3486cf7fea71957aaf1195&tags=sunsets&per_page=24&format=json&nojsoncallback=1')
  .then(response => {
    this.setState({
      photos: response.data.photos
    })
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
  }


  render() {
    console.log(this.state.photos)
    return(
      <div className="container">
      <Search />
      <Nav />
        
        <PhotoContainer data={this.state.photos} />
        <NotFound />
      </div>

    )
  }
}



