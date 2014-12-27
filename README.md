# Bureau

Dynamic data tables.
For organizing information.

## Install

TODO

## Properties

### Settings

Override schema properties: currently just `Bureau.settings.editable`,
but this doesn't even do anything yet.

### Headings

Headings include the following default keys:

`_id`, `name`, `type`, `editable`, `filter`, `move`, and `value`.

### Schema

Define heading properties:

* `_id` (String): Internal identifier
* `name` (String): External label
* `type` (Object): TODO
* `editable` (Boolean): Whether modifiable (TODO)
* `filter`, `move`, `value`: TODO

### Data

An array of objects,
each consisting of fields keyed with headings from the schema.

## Methods

* `addHeading`: Add a new heading
* `getHeading`: Retrieve a heading object
* `addRow`: TODO
* `getRow`: TODO
* `render`: Convert JS(ON) data to HTML

## License

&copy; Max Terry 2014. Some rights reserved.
