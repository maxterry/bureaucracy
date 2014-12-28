Bureau.rows = {};

Bureau.rows.data = [
	{
		_id: 'edgar',
		name: "Edgar",
		age: 77,
		things: ["filing-cabinet"],
		location: "DC"
	},
	{
		_id: 'dale',
		name: "Dale",
		age: 55,
		things: ["microcassette recorder"],
		location: "WA"
	},
	{
		_id: 'clarice',
		name: "Clarice",
		age: 52,
		things: ["dresser", "cabinet"],
		location: "OH"
	}
];

Bureau.rows.push = function(obj) {
	Bureau.rows.data.push(obj);
}

Bureau.rows.find = function(key) {
	return Bureau.get(Bureau.rows.data, key);
}

Bureau.rows.remove = function() {
	// TODO
}
