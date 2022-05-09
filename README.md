# React Testing Library 101

An introduction to testing React components with Testing Library.

It's about how to do the actual testing, and not about setting up your environment, etc.

# Topics

- Running tests from the CLI, watch mode, etc.

- `describe` and `test` blocks

- TDD

- Rendering components

- Scope of a test: integration vs unit

- Debugging with `screen.debug`

- `getBy` queries

  - Getting elements
  - Implicit expectation: Throws when element not found

- User events

  - Asynchronous events with `userEvent`
  - Synchronous events on elements, e.g. `element.click`

- `findBy` queries

  - For getting elements asynchronously
  - Use when you need to wait for a promise or rerender
  - Implicit expectation: Throws when element not found

- `queryBy` queries

  - Does not throw when element not found
  - Use to check an element is NOT there with `expect`

- Asserting with `expect`

- Recap of Queries, and which one to use when:

  - `getBy`
  - `await findBy`
  - `queryBy`

- Avoiding testids and other implementation details

- Making components a11y through tests

# Not in scope

- Setting up a project with Jest, etc. (will not cover this at all)

- Testing hooks (later video)

- Mocking (later video)
