# Acebook-react-agil

Testing
As part of our challenge to build an acebook clone - our product owner gave us the task of exposing the [back-end via an api](https://github.com/mackacavs/acebook-agil/tree/master/app/controllers/api). Further to this, we had to create a new front-end that could interact with our back-end. As a team, we took this as an opportunity to build our front-end with React and call our restful API in order to access our data.

## Process

As it was our first time using React - our first aim was to build a thin slice through the application that allowed us to achieve the following-

* Access our activeRecord database using Restful API calls
* Display part of the data retrieved in React using React components, more specifically the 'render' method.

We used the following API call in our posts.js component-

```  
componentDidMount() {
    var url = 'http://localhost:2000/api/v1/posts/';

    fetch(url, {
      method: 'GET',
    }
    ).then(response => response.json()
    ).then(data => {
      document.getElementById('testElement').innerHTML = data[0].email
    })
  }
```
From there, we displayed our data in the render method-

```  
render() {
        return (
          <div>
            <p id="testElement"></p>
          </div>
        )
      }
```

Once this thin slice had been established, we built our front-end with the same functionality that we'd already added to our [previous application](https://github.com/mackacavs/acebook-agil) built in Ruby on Rails-

* Users can register
* Users can post messages
* Users can edit messages
* Users can login
* Users can logout

When we first built our application in React, in order to re-create our functionality as quickly as possible we put all our logic in the same Posts.js file. This gave us a couple of problems-

* Lack of readability
* An inability to scale

The biggest issue though was the fact that our state was only accessible through the Posts.js file, meaning we couldn't create other components in react without sending information through our props to access the state in the Posts.js file. In order to remedy this, we refactored our application using the context API. 


## Running this Project ##

This project has been split into two parts

1) A Rails front end and back end which can be run from this project using the quickstart instructions below.  Please note we are starting the server on port 2000 because the React app runs on port 3000.  You can also see this app from Heroku with the following link : https://hidden-ocean-16005.herokuapp.com

2) A completely seperate React front end, which can be found in this repository loaded here : https://secret-lake-91806.herokuapp.com
