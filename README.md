# LAP 3 paired coding challenge!

## Welcome!

Welcome to Faisal and Elwin's attempt to use the GIthub API to retrieve information about a user's repos.  Please continue reading to find out more about how to use our site, and how we put the project together.

## Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/0c5a4a24-26c7-4929-b91d-39528f1b6f48/deploy-status)](https://app.netlify.com/sites/faisal-elwin-github/deploys)

View our site by following the link below!

https://faisal-elwin-github.netlify.app/

***

## Installation and Usage

### Installation

- Fork and clone this repo
- `cd` into the repo and follow the usage instructions below

### Usage 

Open a new terminal and type the following:

- `npm install` the required dependencies

- To run the dev environment: `npm run dev`
     - Client can be viewed on "localhost:8080"
- To build for production: `npm run build`
- To run tests: `npm run test` (N.B. we currently have no tests, but would love to add some in the future!)
- To run coverage: `npm run coverage`

***

## Changelog

For a full changelog, see our commit history on Github.


****

## Requirements

(copied from project brief)

- Your app should make use of React
- Your repo tracker should have an input for users to give their GitHub username
- After submitting their username, use the GitHub API to retrieve that user's list of repos
- When selecting a repo, a User should be shown some data about that repo eg. issue count, stargazers, forks etc.

#### Existing bugs (check once fixed)

- [ ] Opening the repo info page in a new tab, or refreshing the page itself, results in failure to retrieve required information
     - We believe we know how to solve this problem by using redux-persist

#### Failing tests

- We will update this once we've written some!

****

#### Miscellaneous tasks

- [x] Refactor code as necessary
    - Initially, we did not use redux, but spent Wednesday morning incorporating it into our data flow

***

## Wins and challenges

### Wins

- We have a (mostly) functioning app!
- Learnt and implemented a redux flow
- Implemented dynamic link segments

### Challenges

- Initially writing the fetch requests proved to be a little tricky.  However, we got it working, and this made converting to redux relatively simple
- Initially forgot to create a blank feedback (but managed it in the end!)

### General notes

We really enjoyed working on this project!

There are a lot more things we would like to do, especially styling-wise, if we had more time.

***