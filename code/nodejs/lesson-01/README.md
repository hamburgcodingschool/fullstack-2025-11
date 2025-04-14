## Install

To install dependencies, run

```sh
npm install
```

## Testing requests
After starting up either one of the servers (vanilla or express), we can see them in action by running the requests in `index.http`.

## Run vanilla node.js server

`vanilla.js` contains an example of how one might set up a server without any additional dependencies. It also uses the CommonJS `require()` syntax for importing the `node:http` module.

To run it, use

```sh
npm run vanilla
```

## Run the express server

`index.mjs` provides the same functionality but this time using [express](http://expressjs.com). Express is a tiny library that builds on top of nodes http module to make writing http servers a lot simpler.

The "m" in the `.mjs` extension stands for module, meaning it uses the ES module system for its imports instead of CommonJS as in the vanilla example. As this is the same syntax we will later use in react, it is a good thing to start with it now. The only thing that changes are the import and later export statements, but its still just plain JavaScript!

You can start it running

```sh
npm run start
```
