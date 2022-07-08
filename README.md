# Designo Agency React App [2022]

>Front-end Single-page application (SPA) built with React. This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT).

## Table of contents
- [1. Built With](#built-with)
- [2. Getting Started](#getting-started)
- [3. Dependencies](#dependencies)
- [4. Routes](#routes)

## <a name="built-with">1. Built With</a>
- HTML5
- CSS3
- Mobile-first workflow
- JavaScript
- [React](https://reactjs.org/) - JS library

## <a name="getting-started">2. Getting Started</a>
1. Run the following command in root directory to install all the dependencies of `package.json` file. 
  ```
  $npm install
  ```
2. Run the following command in root directory to start the project in development mode. 
  ```
  $npm start
  ```
Project starts running at [http://localhost:3000](http://localhost:3000).

## <a name="dependencies">3. Dependencies</a>
### `react-router-dom` 
For building a SPA. 
### `commitizen` 
For generating clear and standard commit messages.
### `@mui/material`
Well, because I wanted to :).
### `@emotion/react`
For writing css styles with JavaScript.

## <a name="routes">4. Routes</a>
### `/`
Homepage set as the default route.
### `/web-design`
### `/app-design`
### `/graphic-design`
### `/about`
### `/locations`
### `/contact`
### `*`
Handles nonexistent routes. It is redirected to `/404` that displays a not found message.