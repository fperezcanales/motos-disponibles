# NODE EXAMPLE

## Development Environment

### Required Tools

- Node 12.13
- NPM 6.11.3 (already packed with Node)

### Running app locally

First you need to install all application dependencies with:

```
npm install
```

Then, start the app in development mode (mock-serve, ui and bff)

```
npm start
```

### Test

```
npm test
```

### Coverage

```
npm run coverage
```

### Integration Test

```
npm run integration-test
```

## Keeping the project dependencies updated

We use 2 tools to do that: [depcheck](https://www.npmjs.com/package/depcheck) and [ncu](https://www.npmjs.com/package/npm-check-updates).

```
npm install -g depcheck npm-check-updates
```

### Finding outdated deps

```
ncu
```

and, if we want to upgrade:

```
ncu -u
```

### Finding unused or missing dependencies

```
depcheck
```
