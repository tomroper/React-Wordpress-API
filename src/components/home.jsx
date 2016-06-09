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


  _fetchData() {
    jQuery.ajax({
      method: 'GET',
      url: 'http://fourth.academy.red/wp-json/wp/v2/posts',
      success: data => this.setState({
        data: data
        })
    })
  }



  render() {
    const {data} = this.state;
console.log(data[0]);
  if (data.length > 0 ){
    return (
      <div>
        {data.map((d, i) => <p key={i}>{d.title.rendered}</p>)}
      </div>);

  } else {
    return <p>no data - loading</p>;
  }


  } //render close
} //App close
