import React, { Component } from 'react'
import { Consumer } from '../context';
import classnames from 'classnames';

class Post extends Component {
  state = {
    message: ''
  }

  onDeleteClick = (id, dispatch, e) => {

    e.preventDefault()
    var url = `http://localhost:2000/api/v1/posts/${id}`;

    if (process.env.REACT_APP_ACE === 'production') {
      url = `https://hidden-ocean-16005.herokuapp.com/api/v1/posts/${id}`
    }
    fetch(url, {
      method: 'DELETE'
    }).then(response => response.json())

    dispatch({ type: "DELETE_POST", payload: id });
  };

  onUpdateClick = (id, dispatch, e) => {
    console.log(this.state.message)
    e.preventDefault()

    const newPost = {
      id: id,
      message: this.state.message
    }

    var url = 'http://localhost:2000/api/v1/posts/';

    if (process.env.REACT_APP_ACE === 'production') {
      url = 'https://hidden-ocean-16005.herokuapp.com/api/v1/posts/'
    }
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        message: this.state.message
      }),
      headers: {
        'Content-Type': 'application/json'
      }

    }).then(response => response.json())

    dispatch({ type: "UPDATE_POST", payload: newPost });
    this.setState({ message: '' })

  };

  onChange = e => this.setState({
    message: e.target.value
  })

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
              <h6>
                <input
                  type="text"
                  id='updateMessage'
                  name="updateMessage"
                  //className={classnames('form-control form-control-lg')}
                  placeholder="Enter Update..."
                  value={this.state.message}
                  onChange={this.onChange}
                />
                <i value={id} className="fas fa-save"
                  style={{ float: 'right', color: 'red' }}
                  onClick={this.onUpdateClick.bind(this, id, dispatch)}
                />
              </h6>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Post