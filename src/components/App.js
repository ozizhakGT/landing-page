import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import history from '../history';
import NotFound404Page from './404';
import PopPush from './pop-push/PopPush';

class App extends React.Component {
  
  
  render() {
  return (
    <div>
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={PopPush}/>
                <Route path="/popPush" exact component={PopPush}/>
                <Route component={NotFound404Page} />
            </Switch>
        </Router>
    </div>
    )
  }
}

export default App;
