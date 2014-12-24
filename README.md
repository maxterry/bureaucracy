# Bureau

Dynamic data tables.
For organizing information.

## Install

TODO

## Properties

### Settings

Override schema properties: currently just `Bureau.settings.editable`,
but this doesn't even do anything yet.

### Schema

Definitions of headings:

* `_id` (String): Internal identifier
* `name` (String): External label
* `type` (Object): TODO
* `editable` (Boolean): Whether modifiable (TODO)
* `filter`, `move`, `value`: TODO

### Data

An array of objects,
each consisting of fields keyed with headings from the schema.

## Methods

* `getHeading`: Retrieve a heading object
* `getRow`: TODO
* `render`: Convert JS(ON) data to HTML

## License

MIT?
