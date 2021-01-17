# Hello Express

This is a simple example app using the Express web framework for Node.js.

I basically just annotated the [example from the official docs](http://expressjs.com/en/starter/hello-world.html) with some
comments, and expanded the javascript syntax to be more obvious.

Other files in this repo:
- `package.json` is a file at the root of every project that uses Node. 
  It has some information about the project (the package), including the other packages it depends on.
  I used the yarn package manager to generate the file with `yarn init`.
  Then I installed `express` as the only dependency by running `yarn add express`.
- `node_modules` is a directory managed by Yarn. 
  It contains a local copy of our project's dependencies (Express) and _their_ dependencies.
  So if you have multiple packages that rely on Express, you don't need to worry about keeping their versions in sync.
  Each uses its own copy of Express from its own `node_modules` directory.
  - `node_modules` is not checked into version control—it's listed in the `.gitignore` file.
    When you check out a Node project from a git remote, you have to run `yarn install` to download local copies of 
    all your dependencies to `node_modules`.
    - `package.json` _is_ checked into version control and it's how Yarn knows what to download into `node_modules`.
- `yarn.lock` is another file managed by Yarn. It complements `package.json` and you pretty much never have to look at it.

## TLDR
- (Assume Node and Yarn installed)
- `git checkout git@github.com:brendantang/hello_world_express.git`
- `cd hello_world_express`
- `yarn` (short for `yarn install`)
- `node app.js`
