import React, { Component } from 'react'

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  handleDelete(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    var url = 'http://localhost:2000/api/v1/posts';
  
    if(process.env.REACT_APP_ACE === 'production'){
      url = 'https://hidden-ocean-16005.herokuapp.com/api/v1/posts'
    }
    fetch(url, {
      method: 'DELETE',
      body: data,
    }
    ).then(response => response.json()
    ).then(data => this.fetchData())
  }

  fetchData() {
    var url = `http://localhost:2000/api/v1/posts/${localStorage.getItem('id')}`;
  
    if(process.env.REACT_APP_ACE === 'production'){
      url = `https://hidden-ocean-16005.herokuapp.com/api/v1/posts/${localStorage.getItem('id')}`
    }
    fetch(url, {
      method: 'GET',
    }
    ).then(response => response.json())
      .then(data => this.setState({
        isLoaded: true,
        posts: data
      }))
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    var url = 'http://localhost:2000/api/v1/posts';
  
    if(process.env.REACT_APP_ACE === 'production'){
      url = 'https://hidden-ocean-16005.herokuapp.com/api/v1/posts'
    }
    fetch(url, {
      method: 'POST',
      body: data,
    }
    ).then(response => response.json()
    ).then(data => this.fetchData())
    document.getElementById(`newMessage`).value = "";

  }

  handleUpdate(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    var url = 'http://localhost:2000/api/v1/posts';
  
    if(process.env.REACT_APP_ACE === 'production'){
      url = 'https://hidden-ocean-16005.herokuapp.com/api/v1/posts'
    }
    fetch(url, {
      method: 'PUT',
      body: data,
    }
    ).then(response => response.json()
    ).then(data => this.fetchData())
    document.getElementById(`${event.target[0].value}`).value = "";
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>Posts</h1>
        {posts.map(post => (
          <div key={post.id}>
            <form onSubmit={this.handleDelete.bind(this)}>
              {post.message}
              <input id="id" name="id" value={post.id} type="text" readOnly hidden />
              <button>delete</button>
            </form>
            <form onSubmit={this.handleUpdate.bind(this)}>
              <input id="id" name="id" value={post.id} type="text" readOnly hidden />
              <input id={post.id} name="message" type="text" />
              <button>update</button>
            </form>
          </div>
        ))}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input id="newMessage" name="message" type="text" /><br />
          <input id="id" name="user_id" value={localStorage.getItem('id')} type="text" readOnly hidden />
          <button type="submit">Add Post</button>
        </form>
      </div>
    );
  }
}
export default Posts;
