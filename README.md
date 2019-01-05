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
          resource: 'product'
        }
      }
    ]
  };
```

## Configuration Options
These options are passed directly to the Gatsby config as seen in the install section.

| Option | Default | Description |
| --- | --- | --- |
| resource | none (required) | Name of resource to be used from JSONAPI |

Other options are available through environment variables set in an .env file. See [Data bite](https://www.npmjs.com/package/data-bite) for these options
