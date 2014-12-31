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

The MIT License (MIT)

Copyright (c) 2014 Max Terry.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
