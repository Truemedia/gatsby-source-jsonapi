# Gatsby Source JSONAPI
JSONAPI compliant source plugin for Gatsby

## Installation

NPM
```bash
    npm i --save gatsby-source-jsonapi
```

Yarn
```bash
    yarn add gatsby-source-jsonapi
```

In `gatsby-config.js`:
```js
  module.exports = {
    plugins: [
      {
        resolve: 'gatsby-source-jsonapi',
        options: {
          key: 'API_KEY'
        }
      }
    ]
  };
```
