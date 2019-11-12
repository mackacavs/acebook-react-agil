Acebook
==================

As part of our challenge to build an acebook clone - our product owner gave us the task of exposing the [back-end via an api](https://github.com/mackacavs/acebook-agil/tree/master/app/controllers/api). Further to this, we had to create a new front-end that could interact with our back-end. As a team, we took this as an opportunity to build our front-end with React and call our restful API in order to access our data.

Process
-----

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


```
As a user
I want to signup to AceBook
So I can login and use the app  

As a user
I want to login to AceBook
So that I can access my posts

As a user
I want to enter my email and password on the signup page
So that I can create a user account

As a user
I want a helpful message if I enter incorrect login details
So that I can see what I have done wrong

As a user
I want to be redirected to the posts page after login
So that I can see my posts

As a user
I want to be redirected to the login page if I am not logged in
So that I can sign in and see my posts

As a user
I want to view post in desc date order
So that I can see newest posts first

As a user
I want to view the date a post was created
So that I can see how old it is

As a user
I only want to view my posts
So that I can see how many posts i have done

```

When we first built our application in React, in order to re-create our functionality as quickly as possible we put all our logic in the same Posts.js file. This gave us a couple of problems-

* Lack of readability
* An inability to scale

The biggest issue though was the fact that our state was only accessible through the Posts.js file, meaning we couldn't create other components in react without sending information through our props to access the state in the Posts.js file. In order to remedy this, we refactored our application using the [context API](https://github.com/mackacavs/acebook-react-agil/blob/master/src/context.js).

### Screenshots

<img src="images/app.png?" width="400px">

The main app component

<img src="images/postsComponent.png?" width="400px">

Our posts component - hopefully you can see how "skinny" we've made it

<img src="images/postComponent.png?" width="400px">

The post component - that also has a delete button connected to it

Technologies Used
-----

* React
  * We used React to build the application in our front-end
* Context API
  * Although not a technology as such, the context API was a crucial feature in helping us a build a scalable application
* Heroku
  * Heroku was used to deploy the application. Please see below for links to sites
* CircleCI
  * Our Continuous Integration was tested through CircleCI

Installation
-----

* Git clone the project into your own local repository
* Run bundle install in order to download the relevant gems

This project has been split into two parts

1) A Rails front end and back end which can be run from this project using the instructions in this(link) ReadMe.  You can also see this app from Heroku with the following link: https://hidden-ocean-16005.herokuapp.com

2) A completely seperate React front end, which can be found in this repository loaded here: https://secret-lake-91806.herokuapp.com
