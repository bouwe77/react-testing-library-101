# React Testing Library 101

An introduction to testing React components with Testing Library.

# Topics

- Running tests

- `describe` and `test` blocks

- TDD

- Rendering components

- Scope of a test: integration vs unit

- Debugging with `screen.debug`

- `getBy` queries

  - Getting elements
  - Implicit expectation: Throws when not found

- User events

  - Asynchronous events with `userEvent`
  - Synchronous events

- `findBy` queries

  - For getting elements asynchronously
  - Use when you need to wait for a promise or rerender

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

- Testing hooks

- Mocking
