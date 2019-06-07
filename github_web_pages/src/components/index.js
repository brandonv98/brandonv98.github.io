import React, {Component} from 'react';
// Components lib
import {ProjectsData} from '../data/Projects'; // local DB
// Loading module styles //
import LoadingCss from '../LoaderStyles.css';
// Load Modules
import {
  Head,
  Container,
  GitHub,
  Footer,
  Badges,
  ContactForm
} from './modules';
// Dependencies
import {Route, Switch} from 'react-router-dom';
// Not Found Page
import NotFound from './404Error/NotFound';

export default class Home extends Component {
  render() {
    console.log('Looking for the source code? Just send me a email for it! Brandon@csdevs.io :)');
    return (
      <div className="App">
        <Head/>
        <Switch>
          {/* SWITCH */}
          <Route path='/:repo/github' component={GitHub}/>
          <Route exact path='/:badge/badges' component={Badges}/>
          <Route exact path='/:message/contact' component={ContactForm}/>
          <Route path='/bio' render={() => <Container data={ProjectsData}/>}/>
          <Route component={NotFound}/>
        </Switch>
        <Route path='/' component={Footer}/>
      </div>
    );
  }
}
