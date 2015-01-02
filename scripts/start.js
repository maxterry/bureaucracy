Bureau.start = {};

Bureau.start.cols = [
	{
		_id: 'name',
		name: "Name",
		type: String
	},
	{
		_id: 'date',
		name: "Travel Date",
		type: Date
	},
	{
		_id: 'age',
		name: "Age",
		type: Number
	},
	{
		_id: 'things',
		name: "Things",
		type: Array,
		value: function(xs) {
			return xs.length;
		}
	},
	{
		_id: 'location',
		name: "Location",
		type: Location
	}
];

Bureau.start.rows = [
	{
		_id: 'edgar',
		name: "Edgar",
		age: 77,
		things: ["filing-cabinet"],
		location: "DC",
		date: "2015-02-01"
	},
	{
		_id: 'dale',
		name: "Dale",
		age: 55,
		things: ["microcassette recorder"],
		location: "WA",
		date: "2015-02-11"
	},
	{
		_id: 'clarice',
		name: "Clarice",
		age: 52,
		things: ["dresser", "cabinet"],
		location: "OH",
		date: "2015-01-30"
	}
];
