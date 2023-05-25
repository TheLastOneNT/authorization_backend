### pg-promise

The `any` method is one of the query methods provided by `pg-promise`. It's designed to return the result of a query
where you're expecting any number of rows in the response. This could be 0, 1, or many rows.

Here's a breakdown of some of the common `pg-promise` query methods:

- `none`: This is used for queries that don't return any data, such as `INSERT`, `UPDATE`, or `DELETE` queries.

- `one`: This is used when you expect exactly one row of data from your query. If no rows or more than one row is
  returned, it will result in a rejection.

- `oneOrNone`: This is used when you expect either one row or no rows from your query. If more than one row is returned,
  it will result in a rejection.

- `many`: This is used when you expect one or more rows from your query. If no rows are returned, it will result in a
  rejection.

- `manyOrNone` (or `any`): This is used when you're expecting any number of rows, including none, from your query.

Each of these methods corresponds to a different expectation for the result of the query, and they can help you handle
different scenarios more accurately. For example, if you use the `one` method but your query actually returns multiple
rows, `pg-promise` will automatically reject the promise, indicating that something didn't go as expected.