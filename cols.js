Bureau.cols = {};

Bureau.cols.types = {
	_keys: ['_id', 'name', 'type', 'editable', 'sort', 'filter', 'move']
};

Bureau.cols.types.data = {

	Object: {
		editable: true
	},

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

Bureau.cols.types.getDefaultFunction = function(col, fn) {
	return col[fn] || Bureau.cols.types.data[col.type.name][fn];
}

Bureau.cols.headings = {
	_keys: []
};

Bureau.cols.headings.data = [
	{
		_id: 'name',
		name: "Name",
		type: String
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
		_id: 'location',
		name: "Location",
		type: Location
	}
];

Bureau.cols.headings.add = function(props) {
	var column = {};
	for (var key in Bureau.cols.attributes) {
		column[i] = props[key] || null;
	}
	Bureau.cols.headings.data.push(column);
	Bureau.cols.headings._keys.push(props._id);
}

Bureau.cols.headings.find = function(key) {
	return Bureau.find(Bureau.cols.headings.data, key);
}

Bureau.cols.headings.get = function() {
	if (!Bureau.cols.headings._keys.length) {
		for (var i in Bureau.cols.headings.data) {
			Bureau.cols.headings._keys.push(Bureau.cols.headings.data[i]._id);
		}
	}
	return Bureau.cols.headings._keys;
}

Bureau.cols.headings.has = function(id) {
	var headings = Bureau.cols.headings.get();
	return headings.indexOf(id) > -1;
}

Bureau.cols.values = {
	_data: {}
};

Bureau.cols.values.add = function(id, value) {
	Bureau.cols.values._data[id] = Bureau.cols.values._data[id] || [];
	Bureau.cols.values._data[id].push(value);
}

Bureau.cols.values.get = function(id) {
	return Bureau.cols.values._data[id];
}
