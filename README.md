# inventory_ecl_backend

# nvm save version

```shell
node -v > .nvmrc
```

`nvm`, or Node Version Manager, is a great tool for managing multiple active Node.js versions. It allows you to switch
between Node versions with ease.

If you're working on a project and want to make sure that anyone who clones the repository uses the correct Node.js
version, you can specify the node version in a `.nvmrc` file.

Here's how you can create this file:

1. Navigate to the root directory of your project.

2. Run the command `node -v > .nvmrc`. This will write the version of Node.js you're currently using into a file
   named `.nvmrc`.

Now, whenever someone clones your project and has `nvm` installed, they can just run `nvm use` in the project root,
and `nvm` will switch to the version specified in the `.nvmrc` file.

If the version specified is not already installed, they can run `nvm install` (without a version number), and `nvm` will
install the version specified in the `.nvmrc` file.

This helps to ensure that all developers on the project are using the same Node.js version, which can help prevent bugs
and inconsistencies due to differing Node.js versions.

# Fastify workflow

```shell
npm install fastify-cli --global
```

```shell
fastify generate . --standardlint
```

Install all dependencies

```shell
yarn
```

Then we can run the app in dev mode

```shell
yarn dev
```

---

# Getting Started with [Fastify-CLI](https://www.npmjs.com/package/fastify-cli)

This project was bootstrapped with Fastify-CLI.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

For production mode

### `npm run test`

Run the test cases.

## Learn More

To learn Fastify, check out the [Fastify documentation](https://www.fastify.io/docs/latest/).


---


When you create a new Fastify project using Fastify CLI, the generated directory structure might look like this:

- `app.js`: This is the entry point of your application where you would bootstrap your Fastify application.
- `package.json`: It's the heart of any Node.js application. It stores metadata about the project, like project name,
  version, description. It also lists all dependencies that your project needs.
- `routes/`: This directory is used to store all your route files. In Fastify, routes can be organized in separate files
  and directories to structure your application.
- `services/`: This directory can contain business logic for your app. You might have services
  like `userService.js`, `productService.js` etc, depending on the needs of your application.
- `plugins/`: This directory can hold Fastify plugins. Plugins can be used to extend Fastify's core functionality, for
  instance by adding support for authentication, database interactions, etc.
- `test/`: This directory would contain all your test files. It is good practice to write tests for your application and
  Fastify is designed with first-class support for testing in mind.

Remember, this is a typical project structure. Depending on the complexity of your project, you might need more
directories or files. For example, you might need a `config/` directory for storing configuration files,
a `middlewares/` directory for storing middleware functions, and so on. It's always good to structure your project based
on its specific needs.


---

### fastify.jwt.sign()

- '30s' — Expires in 30 seconds.
- '1m' — Expires in 1 minute.
- '3h' — Expires in 3 hours.
- '1d' — Expires in 1 day.
- '7d' — Expires in 7 days.

---




