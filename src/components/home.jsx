import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect} from 'react-router';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title : ''
    }
  }

  componentWillMount(){
    this._fetchData();
  }


  _fetchData() {
    jQuery.ajax({
      method: 'GET',
      url: 'http://fourth.academy.red/wp-json/wp/v2/posts',
      success: (data) => {this.setState({ title: data[0].title.rendered })}
    })
  }



  render() {
    return (
      <h1> 
        {this.state.title}
      </h1>
    )
  } //render close
} //App close
