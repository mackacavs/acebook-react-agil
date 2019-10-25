# Acebook-react-agil

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

Once this thin slice had been established, we built our front-end with the same functionality that we'd already added to our [previous application](https://github.com/mackacavs/acebook-agil)-

* Users can register
* Users can post messages
* Users can edit messages
* Users can login
* Users can logout

We build our application 

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

# AceBook

*** HEROKU admin instructions ***

To install Heroku, use brew : brew tap heroku/brew && brew install heroku

Log in by typing 'heroku login -i' on terminal.


## Running this Project ##

This project has been split into two parts

1) A Rails front end and back end which can be run from this project using the quickstart instructions below.  Please note we are starting the server on port 2000 because the React app runs on port 3000.  You can also see this app from Heroku with the following link : https://hidden-ocean-16005.herokuapp.com

2) A completely seperate React front end, which can be found in this repository : https://github.com/irafaelasilva/acebook-react-agil

## Quickstart

First, clone this repository. Then:

```bash
> bundle install
> bin/rails db:drop # Only needed if the database has changed since the app was last installed
> bin/rails db:create
> bin/rails db:migrate

> bundle exec rspec # Run the tests to ensure it works
> bin/rails server -p 2000 # Start the server at localhost:2000

```
