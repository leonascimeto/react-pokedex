import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import AboutUs from '../views/aboutUs'
import Galery from '../views/galery'
import Home from '../views/home'
import Pokemon from '../views/pokemon'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/galery' exact component={Galery} />
        <Route path='/pokemon' exact component={Pokemon} />
        <Route path='/pokemon/:id' exact component={Pokemon} />
        <Route path='/' exact component={AboutUs} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
