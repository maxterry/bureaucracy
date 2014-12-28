# Bureau

Dynamic data tables.
For organizing information.

## Cols

### Settings

Override schema properties: currently just `Bureau.settings.editable`,
but this doesn't even do anything yet.

### Types

Values in a column are of a static type, currently consisting of
`Boolean`, `Number`, `String`, `Array`, and `Location`.

Each type has default functions, which are used for columns of
that type, unless overridden in the schema.

### Schema

The schema specifies each columns' properties, including
the `_id`, displayed `name`, `type`, whether `editable` (`true` by default),
and functions for `sort`, `filter`, `move`, and display `value`.

### Headings

`Bureau.cols.getHeadings()` returns a list of the current heading IDs.

### Default Functions

`Bureau.cols.getDefaultFunction(col, fn)` returns the col's default function.

### Push

Add a col.

### Find

Select a single col, by ID.

## Rows

An array of objects,
each consisting of fields keyed with headings from the schema.

### Push

Add a row.

### Find

Get a row by ID.

### Remove

TODO

## Table

`Bureau.table()` renders the actual table, returning a DOM collection,
which can be inserted into a document where desired,
e.g. `document.body.appendChild(Bureau.table())`.

## License

&copy; Max Terry 2014. Some rights reserved.
