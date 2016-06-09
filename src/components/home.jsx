import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect} from 'react-router';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data : []
    }
  }

  componentWillMount(){
    this._fetchData();
  }

  componentDidMount(){
    console.log(this.state.data);
  }

  _fetchData() {
    jQuery.ajax({
      method: 'GET',
      url: 'http://fourth.academy.red/wp-json/wp/v2/posts',
      success: (data) => {this.setState({ data: data })}
    })
  }



  render() {
    return (
      <h1> This React.js App is pulling from an external API</h1>
    )
  } //render close
} //App close
