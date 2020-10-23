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

While this boilerplate was designed to be as minimal as possible, support for other tech could be added _in their own branches_.

### Current Extensions

- [`with-axios`](https://github.com/jmsv/simple-mern/tree/with-axios): Replaces Axios with fetch - [@leonlafa](https://github.com/leonlafa)
- [`with-react-router`](https://github.com/jmsv/simple-mern/tree/with-react-router): Adds React Router - [@leonlafa](https://github.com/leonlafa)
- [`with-material-ui`](https://github.com/jmsv/simple-mern/tree/with-material-ui): Adds Material UI - [@leonlafa](https://github.com/leonlafa)
- [`with-docker`](https://github.com/jmsv/simple-mern/tree/with-docker): Adds Docker & Docker Compose - [@alejandrotoga02](https://github.com/alejandrotoga02)
- [`with-redux`](https://github.com/jmsv/simple-mern/tree/with-redux): Adds Redux for state management - [@rahulSinha-01](https://github.com/rahulSinha-01)

### Ideas for Future Extensions

- Replace JavaScript with TypeScript
- Multi-user setup with social auth (e.g. Google, Facebook etc. login using Passport)
- [Redux](https://redux.js.org) or [MobX](https://mobx.js.org) global state management for tasks
- Static site generator using [GatsbyJS](https://www.gatsbyjs.org/) or [Next.js](https://nextjs.org/)

If you'd like to add support for any of the above or something else, please open an [issue](https://github.com/jmsv/simple-mern/issues) letting me know, and I'll create a new branch to base the PR against.
