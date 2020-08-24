import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Nav from "./Nav"
import Search from "./Search"
import NotFound from './NotFound';
import PhotoContainer from './PhotoContainer'
import Categories from './Categories'
// import apiKey from './config'
import axios from 'axios'



export default class App extends Component {
  constructor() {
    super()
    this.state = {
      photos: [
        
      ]
    }
   
  }
  componentDidMount() {
    this.searchPhotos()
  }

  searchPhotos = (query='planes') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=219f6801dd3486cf7fea71957aaf1195&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });

  }

testMethod() {
  console.log('just a test')
}


  render() {


    
    console.log(this.state.photos)
    return(
      <BrowserRouter>
      <div className="container">
      <Search search={this.searchPhotos}/>
 
      <Switch>
      <Nav />
      <Route path="/" component={Categories} testing={this.testMethod()}/>

        <Route component={NotFound} />
      </Switch>
        
        <PhotoContainer data={this.state.photos}/>
      </div>
      </BrowserRouter>

    )
  }



  
}

