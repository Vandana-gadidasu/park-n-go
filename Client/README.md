# Getting Started

[![Node.js CI](https://github.com/twCatalyst/ui-react-catalyst/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/twCatalyst/ui-react-catalyst/actions/workflows/node.js.yml)
![Status](https://github.com/twCatalyst/getting-started/blob/main/badges/stable.svg)

## Table Of Contents

- [Getting Started](#getting-started)
  - [Table Of Contents](#table-of-contents)
    - [Prerequisites](#prerequisites)
    - [Features](#features)
    - [Quick start](#quick-start)
    - [Documentation](#documentation)
    - [Recommended third party libraries](#recommended-third-party-libraries)
  - [Core Team](#core-team)

---

### Prerequisites

- Node
- npm
- yarn

**_Note:_**

![Status](https://raw.githubusercontent.com/twCatalyst/getting-started/main/badges/incubating.svg)

</h1>

### Features

<details>
  <summary>
    Aspects covered (available in current version)
  </summary>
  <ul>
    <li>Webpack</li>
    <li>Hot Module reloading</li>
    <li>Typescript support</li>
    <li>CSS/SASS/SCSS loader</li>
    <li>Tests</li>
    <li>Mock Server</li>
    <li>Linting</li>
    <li>Editor Config</li>
     <li>Redux</li>
     <li>React Router v6.0</li>
    <li>
      Axios
      <ul>
        <li>HTTP Calls</li>
      </ul>
    </li>
    <li>Interceptor</li>
      <li>Talisman Integration</li>
    <li>Audit</li>
    <li>Yarn Audit</li>
    <li>Commit message validator</li>
    <li>Husky Precommit hooks</li>
    <li>e2e Testing using Cypress</li>
    <li>Storybook</li>
    <li>Snapshot Testing</li>
      <li>LightHouse integration</li>
    <li>Dockerizing the app</li>

  </ul>
</details>

<details>
  <summary>
    Aspects Backlog (upcoming in future versions)
  </summary>
  <ul>
    <li>Redux-saga</li>
    <li>Logging</li>
    <li>Analytics</li>
  </ul>
</details>

<br />

### Quick start

1.  Clone this repo using `git clone git@github.com:twCatalyst/ui-react-catalyst.git`
2.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
3.  Run `yarn link-all` to link all the packages.
4.  Run `yarn install` to install all the dependencies required to bootstrap the project.
5.  Run `yarn workspace components build` to build the components library.
6.  Run `yarn workspace client start` to see the react catalyst at [`http://localhost:3000`](http://localhost:3000).

### Documentation

- [Overview](docs): A short overview of the react catalyst.

### Recommended third party libraries

1.  For forms [`https://react-hook-form.com/get-started`](https://react-hook-form.com/get-starte).
2.  For form validations[`https://github.com/jquense/yup`](https://github.com/jquense/yup)
3.  For middleware [`https://redux-saga.js.org/`](https://redux-saga.js.org)

## Core Team<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section. -->

<!-- prettier-ignore-start -->
<!-- markdownlint-disable  -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ravinder-tw"><img style="border-radius:20px"src="https://avatars.githubusercontent.com/u/88770719?s=400&u=51753ede41c6bf4ce0797f20c31863258e6a57da&v=4" width="200px;" alt=""/><br /><sub><b>Ravinder Mahajan</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/alicekile-tw"><img style="border-radius:20px"src="https://avatars.githubusercontent.com/u/79923065?v=4" width="200px;" alt=""/><br /><sub><b>Alice Kile</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/shyamkondisetty"><img style="border-radius:20px"src="https://avatars.githubusercontent.com/u/46221531?v=4" width="200px;" alt=""/><br /><sub><b>Shyam Kondisetty</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/pranali1997"><img style="border-radius:20px"src="https://avatars.githubusercontent.com/u/58458049?v=4" width="200px;" alt=""/><br /><sub><b>Pranali Lembhe</b></sub></a><br /></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
