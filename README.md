# Alchemy React Base Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use this template for all your "from scratch" deliverables. To start, simply run

- `npm install`
- `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

goal of this lab is to load up list of countries from supabase

set up file tree
get supabase credentials in env.development.local

getCountries should call supabase and return all countries from the table
App.js make a useEffect() to call getCountries similar to getBlogs()
console log to make sure getcountries is working before moving on and if it is ACP. if not ask for help

Import and utilize `useEffect()` and `useState()` to manage database calls and update State for `countries`, `continents`, and a `query` search function
create state variable to hold all the countries
loop through the countries and display their name & flag. if it works ACP
