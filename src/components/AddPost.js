import React, { Component } from 'react';
import { Consumer } from '../context';
import classnames from 'classnames';

class AddPost extends Component {
  state = {
    message: '',
    errors: {}
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    if (this.state.message === '') {
      this.setState({ errors: { message: 'Message is required' } })
      return;
    }

    const newPost = {
      created_at: null,
      id: null,
      message: this.state.message
    }

    const data = new FormData(e.target)
    var url = 'http://localhost:2000/api/v1/posts/';
  
    if(process.env.REACT_APP_ACE === 'production'){
      url = 'https://hidden-ocean-16005.herokuapp.com/api/v1/posts/'
    }

    fetch(url, {
      method: 'POST',
      body: data,
    }
    ).then(response => response.json()
    ).then(data => {
      newPost.id = data.id
      newPost.created_at = data.created_at
      dispatch({ type: 'ADD_POST', payload: newPost })
    })

    this.setState({ message: '', errors: {} })

  }

  onChange = e => this.setState({
    message: e.target.value
  })

  render() {

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
            
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    
                    <input
                      type="text"
                      id='message'
                      name="message"
                      className={classnames('form-control form-control-lg', {
                        'is-invalid': this.state.errors.message
                      })}
                      placeholder="Enter Post..."
                      value={this.state.message}
                      onChange={this.onChange}
                    />
                    {<div className="invalid-feedback">Please enter a post</div>}
                  </div>
                  <input type="submit" value="Add your post" className="btn btn-block btn-light" />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddPost