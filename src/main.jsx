import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect} from 'react-router';

import Home from './components/home.jsx';

require('./styles/reset.scss');
require('./styles/main.scss');

class App extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
       <Redirect from='/' to='/home'/>
       <Route path='/home' component={Home}/>
       {/*<Route path='*' component={NotFound}/>*/}
     </Router>
   );
  } //render close
} //App close






ReactDOM.render(<App/>, document.getElementById('react-app'));


//state is the data driving you UI over time
//properties are also data, props are the data assoc with React comps that doesnt change
