# Redux

- [Redux](#redux)
  - [Overview](#overview)
  - [Redux-thunk middleware](#redux-thunk-middleware)

## Overview

We are using react-redux library for routing in the project. This allows us to maintain the state of the application. It creates a global state which you can share between react components.

Basic topics covered in the react-redux

- example source code of counter with redux implementation.
- creates a global store for redux
- testing
- redux developer tools.

All the code related to redux is present in the folder

```
  packages/
  └── client/
        └──src/
          └── pages/
            └── redux/
```

## Redux-thunk middleware

We use redux-thunk to write the middlewares for handling async logic and data fetching.Follow the [link](https://redux.js.org/tutorials/fundamentals/part-6-async-logic) for more information
