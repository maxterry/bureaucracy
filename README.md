# Bureaucracy

Dynamic data tables.
For organizing information.

(Still very early and unstable!)

## Start

To easily get started,
just change `Bureau.start.cols` and `.rows` in `scripts/start.js`.

## Cols

### Add

Concatenate an array of column objects.

### Find

Get column by `key` (or all).

### Remove

Remove column by `key` (or all).

## Rows

An array of objects,
each consisting of fields keyed with column headings.

### Add

Concatenate an array of row objects.

### Find

Get row by `_id` (or all).

### Remove

Remove row by `_id` (or all).

## Table

Takes `cols` (array of objects),
`rows` (array of objects),
and `parent` (DOM element).

## License

The MIT License (MIT)

Copyright (c) 2014 &ndash; 2015 Max Terry.

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
