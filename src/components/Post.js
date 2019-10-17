import React, { Component } from 'react'
import { Consumer } from '../context';

class Post extends Component {

  onDeleteClick = (id, dispatch, e) => {

    e.preventDefault()
    var url = `http://localhost:2000/api/v1/posts/${id}`;
  
    if(process.env.REACT_APP_ACE === 'production'){
      url = `https://hidden-ocean-16005.herokuapp.com/api/v1/posts/${id}`
    }
    fetch(url, {
      method: 'DELETE'
    }).then(response => response.json())

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, message } = this.props
    return (

      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card card-body mb-3">
              <h6>{message} <i value={id} className="fas fa-times"
                style={{ float: 'right', color: 'red' }}
                onClick={this.onDeleteClick.bind(this, id, dispatch)}
              /></h6>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Post