# Cypress Component Testing Demo

This repo is for accessibility testing of React components with Cypress.

## Setup

```
npm install
```

## Open in a browser

```
npm run dev
```

## Run Cypress integration tests

Integration tests for accessibility can cover whole pages with multiple components. This configuration adds Cypress-axe for running the axe-core API on a page.

```
npm test
```

## Run Cypress component tests

Cypress component testing is for more isolated units, as well as small groups of components.

```
npm run test:components
```