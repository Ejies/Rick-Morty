# Rick-Morty
RestAPI endpoints to list the episodes of Rick&amp;Morty Series


[![Maintainability](https://api.codeclimate.com/v1/badges/1a3b099d1073ca4f9985/maintainability)](https://codeclimate.com/github/Ejies/Rick-Morty/maintainability)

## Table of Contents

* [About](#banka)
* [Required Features](#required-features)
* [Heroku Deployment](#heroku-deployment)
* [Technologies Used](#technologies-used)
* [Acknowledgements](#acknowledgements)
* [Author](#author)

## Required Features

* User view the list of all episodes.
* User view all characters in an episode.
* User add comment to an episode.
* User view the count (Number) of comments in a episode.
* User show all the comments of an episode.

## Heroku Deployment

Application was deployed to Heroku. Use public URL [https://rick-morty1.herokuapp.com/](https://rick-morty1.herokuapp.com/) with API endpoints.

## Swagger Documentation

API Documention was generated with [Swagger](https://rick-morty1.herokuapp.com/api-docs/).

## Docker

[Docker](https://hub.docker.com/r/eeeshofonie/rick-morty).s


## Technologies Used

* [Node-js](https://nodejs.org/en/) Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
* [Postgres / ElephantSql](https://www.elephantsql.com/) 
* [Babel](https://babeljs.io/) used for transpiling codes from ES6 to ES5

## Installations

### Getting started

* You need to have Node and NPM installed on your computer.
* Installing [Node](node) automatically comes with npm.

### Clone

* Clone this project to your local machine `https://github.com/Ejies/Rick-Morty.git`

### Setup

* Installing the project dependencies
  > Run the command below

```shell
   npm install

```
git 
* Start your node server
  > run the command below

```shell
  npm run start-dev
```

* Use `http://localhost:4000` as base url for endpoints

### Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS
| ------ | --------------------------------------- | -------------------------
| GET    | Get the list of all episodes            | `/api/v1/episodes`
| GET    | Get a characters in a episode           | `/api/v1/episodes/:id/characters`
| POST   | Add comment to an episode               | `/api/v1/episodes/:id/addcomment`
| GET    | Get all the comments of an episode      | `/api/v1/episodes/:13/showcomments`
| GET    | show comment count of an episode        | `/api/v1/episodes/:id/episodecommentcount`



## Author

[Emmanuel Eshofonie](https://github.com/Ejies)
