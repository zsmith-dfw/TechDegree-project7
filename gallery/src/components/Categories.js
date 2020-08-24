import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import PhotoContainer from './PhotoContainer'



const Categories = () => (
  <div >

    <Route exact path='/' 
        render={ () => <Redirect to='/planes' />} />
    <Route path='/planes'
    render={() => <PhotoContainer data={this.photos} />} />
    <Route path='/trains'
    render={() => <PhotoContainer data={this.photos} />} />
    <Route path='/automobiles'
    render={() => <PhotoContainer data={this.photos} />} />

  </div>
);

export default Categories;


