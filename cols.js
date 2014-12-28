Bureau.cols = {};

Bureau.cols.settings = {
	editable: true
};

Bureau.cols.types = {
	Boolean: {

	},
	Number: {
		sort: function() {
			console.log("Sort Number");
		},
		filter: function() {
			console.log("Filter Number");
		},
		move: function() {
			console.log("Drag Number");
		}
	},
	String: {
		sort: function() {
			console.log("Sort String");
		},
		filter: function() {
			console.log("Filter String");
		},
		move: function() {
			console.log("Drag String");
		}
	},
	Array: {

	},
	Location: {
		sort: function() {
			console.log("Sort Location");
		},
		filter: function() {
			console.log("Filter Location");
		},
		move: function() {
			console.log("Drag Location");
		}
	}
};

Bureau.cols.attributes = [
	'_id', 'name', 'type', 'editable', 'sort', 'filter', 'move'
];

Bureau.cols.schema = [
	{
		_id: "name",
		name: "Name",
		type: String,
		editable: true
	},
	{
		_id: "age",
		name: "Age",
		type: Number,
		editable: true
	},
	{
		_id: "things",
		name: "Things",
		type: Array,
		editable: true,
		// TODO
		// reference: {
		// 	'filing-cabinet': {
		// 		name: "Filing Cabinet"
		// 	}
		// },
		value: function(xs) {
			return xs.length;
		}
	},
	{
		_id: "location",
		name: "Location",
		type: Location,
		editable: true
	}
];

Bureau.cols._headings = [];

Bureau.cols.getHeadings = function() {
	if (!Bureau.cols._headings.length) {
		for (var i in Bureau.cols.schema) {
			Bureau.cols._headings.push(Bureau.cols.schema[i]._id);
		}
	}
	return Bureau.cols._headings;
}

Bureau.cols.getDefaultFunction = function(column, fn) {
	return column[fn] || Bureau.cols.types[column.type.name][fn];
}

Bureau.cols.push = function(props) {
	var column = {};
	for (var key in Bureau.cols.attributes) {
		column[i] = props[key] || null;
	}
	Bureau.cols.schema.push(column);
	Bureau.cols._headings.push(props._id);
}

Bureau.cols.find = function(key) {
	return Bureau.get(Bureau.cols.schema, key);
}
