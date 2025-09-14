# Workflow repo for the CA

## How to run this project

1. Clone the repo
2. Run `npm install` to install everything

## Scripts you can use

- `npm run start` - start the dev server
- `npm run test:unit` - run the unit tests
- `npm run test:e2e` - run the e2e tests
- `npm run format` - fix code formatting
- `npm run lint` - check for code issues

## Environment variables

You need to create a `.env` file with these variables for the tests to work:

- `TEST_USER_EMAIL` - your test email (needs to be @stud.noroff.no or @noroff.no)
- `TEST_USER_PASSWORD` - your test password (at least 8 characters)

Example `.env` file:

```
TEST_USER_EMAIL=test@stud.noroff.no
TEST_USER_PASSWORD=testpassword123
```

## Tests

I added two types of tests:

### Unit tests

Tests for the helper functions like `isActivePath` and `getUsername`

### E2E tests

Tests that check the whole app works - login and navigation stuff

🌸🌸🌸
