# Storybook

- [Storybook](#storybook)
  - [Overview](#overview)
  - [QuickStart](#quickstart)

## Overview

[Storybook](https://storybook.js.org/) allows us, the developers, to create and test components in isolation.
We use storybook as a playground for UI components and pages.

Basic topics covered in the storybook

- basic configuration for storybook
- added stories for all the components
- storybook performance addon

All the code related to storybook is present in the folder

```
  packages/
  └── client/
        └──.storybook/
          └── main.js
          └── preview.js
        └──src/
          └── componenets/
            └── Button/
              └── Button.stories.tsx
            └── Accordion/
              └── Accordion.stories.tsx
                .
                .
                .
```

## QuickStart

1. Install the dependencies and run the storybook
   ```Shell
   cd <your project folder>
   yarn install
   yarn workspace client storybook:start
   ```
