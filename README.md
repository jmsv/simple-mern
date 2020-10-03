<p align="center">
  <img src="https://user-images.githubusercontent.com/14852491/64910580-cc163700-d70f-11e9-99ec-8c49095a8c3b.png" />
  <br/>
  the simplest MERN (MongoDB, Express, React and Node) setup
</p>

## Why?

While there are many MERN starters on the interwebs already, I've struggled to find a 'minimal viable' MERN app. Existing examples usually involve other libraries and tools such as Redux, React Router, Typescript, Docker etc. These are all great things, but add unnecessary complexity when you just want to start simple.

This MERN starter, `simple-mern` aims to be the minimum you need to get started with the stack.

## Getting Started

### Development

1. Install MongoDB and run on default port `27017`
2. `npm install` in both root directory and `client` directory
3. `npm start` in both root directory and `client` directory
4. Head to [localhost:3000](http://localhost:3000) to see the 'My Tasks' app

### Production

```bash
npm install
npm run build
npm run start:prod
```

The production app will be running at [localhost:5000](http://localhost:5000/).

## Extend `simple-mern`

While this boilerplate was designed to be as minimal as possible, support for other tech could be added *in their own branches*.

### Current Extensions

> coming soon

### Ideas for Future Extensions

- Docker support with compose file and nginx reverse proxy
- Multi-user setup with social auth (e.g. Google, Facebook etc. login using Passport)
- [React Router](https://github.com/ReactTraining/react-router) for routing
- [Redux](https://github.com/reduxjs/redux) (or [Unstated](https://github.com/jamiebuilds/unstated) or something) for state management
- [axios](https://github.com/axios/axios) in place of fetch
- UI frameworks such as [Material-UI](https://github.com/mui-org/material-ui) or [reactstrap](https://github.com/reactstrap/reactstrap)
- Static site generator using [GatsbyJS](https://www.gatsbyjs.org/) or [Next.js](https://nextjs.org/)
- Replace JavaScript with TypeScript

If you'd like to add support for any of the above or something else, please open an [issue](https://github.com/jmsv/simple-mern/issues) letting me know, and I'll create a new branch to base the PR against.
