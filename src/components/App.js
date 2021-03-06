import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Nav from "./Nav";
import Search from "./Search";
import PhotoContainer from "./PhotoContainer";
import apiKey from "./config";
import axios from "axios";

// each link has their own state

export default class App extends Component {
  state = {
    planes: [],
    trains: [],
    automobiles: [],
    search: []
}

// each link has own method for making API call

  componentDidMount() {
    this.searchPlanes();
    this.searchTrains();
    this.searchAutomobiles();
    this.searchPhotos();
  }

  searchPlanes = (query = "planes") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          planes: response.data.photos.photo,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  searchTrains = (query = "trains") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          trains: response.data.photos.photo,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  searchAutomobiles = (query = "automobiles") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          automobiles: response.data.photos.photo,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  searchPhotos = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          search: response.data.photos.photo,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Search search={this.searchPhotos}/>
          <Nav />

          <Switch>
            <Route exact path="/" render={() => <Redirect to="/planes" />} />
            <Route
              path="/planes"
              render={() => <PhotoContainer data={this.state.planes} />}
            />
            <Route
              path="/trains"
              render={() => <PhotoContainer data={this.state.trains} />}
            />
            <Route
              path="/automobiles"
              render={() => <PhotoContainer data={this.state.automobiles} />}
            />
              <Route
              exact path="/search/:query" 
              render={() => <PhotoContainer data={this.state.search} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



