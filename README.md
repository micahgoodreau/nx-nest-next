# Full-Stack Example App
## Nx, NestJS(Fastify), GraphQL(Mercurius), Prisma, NestJS, 




part 1
Youtube tutorial https://www.youtube.com/watch?v=TRNf5T_97tg&t=969s


npm i @nestjs/platform-fastify @nestjs/graphql @nestjs/mercurius graphql mercurius

npm uninstall @nestjs/platform-express

nx g @nrwl/nest:resource -p api --directory="app/resources" --type="graphql-code-first" --crud --name user

nx g @nrwl/nest:lib api/data-access-db --buildable --tags "scope:api"

npx prisma init
npm i -D prisma
npm i -D env-cmd
npm install @prisma/client
pnpm i prisma-nestjs-graphql

nx g @nrwl/nest:lib api/generated/db-types --buildable --tags "scope:api"

pnpm i class-validator
pnpm i class-transformer


part 2
Youtube tutorial https://www.youtube.com/watch?v=srFCxdA3D4M

pnpm i -D @nrwl/next
nx g @nrwl/next:app web
pnpm i -D concurrently
pnpm i urql


pnpm i -D graphql-codegen @graphql-codegen/cli @graphql-codegen/near-operation-file-preset @graphql-codegen/typed-document-node @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-urql

nx g @nrwl/node:lib client/generated/graphql-types --tags "scope:client"

part 3
Youtube tutorial https://www.youtube.com/watch?v=ptXawkMiix4
npm i @fastify/cookie@6

npm i bcrypt
npm i @nestjs/passport @nestjs/jwt






# NxNestNext

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@nx-nest-next/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
