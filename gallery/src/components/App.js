import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Nav from "./Nav"
import Search from "./Search"
import NotFound from './NotFound';
import PhotoContainer from './PhotoContainer'
import apiKey from './config'
import axios from 'axios'



export default class App extends Component {
  constructor() {
    super()
    this.state = {
      photos: [
        {planes: [], trains: [], automobiles: []}
        
      ]
    }
   
  }
  componentDidMount() {
    this.searchPhotos()
    this.searchPhotos()
    this.searchPhotos()
  }

  searchPhotos = (query='planes') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
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
      <Route exact path='/' 
        render={ () => <Redirect to='/planes' />} />
      <Route path='/planes'
      render={() => <PhotoContainer data={this.photos.planes} />} />
      <Route path='/trains'
      render={() => <PhotoContainer data={this.photos.trains} />} />
      <Route path='/automobiles'
      render={() => <PhotoContainer data={this.photos.automobiles} cars={this.searchPhotos(this.query="automobiles")} />}/>

        <Route component={NotFound} />
      </Switch>
        
        <PhotoContainer data={this.state.photos}/>
      </div>
      </BrowserRouter>

    )
  }



  
}




