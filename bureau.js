var Bureau = {};

Bureau.settings = {
	editable: true
};

Bureau.types = {
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

Bureau.headingProperties = [
	'_id', 'name', 'type', 'editable', 'sort', 'filter', 'move'
];

Bureau.headings = [
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

Bureau.data = [
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

Bureau._headingKeys = [];

Bureau.getHeadingKeys = function() {
	if (!Bureau._headingKeys.length) {
		for (var i in Bureau.headings) {
			Bureau._headingKeys.push(Bureau.headings[i]._id);
		}
	}
	return Bureau._headingKeys;
}

Bureau.addHeading = function(props) {
	var heading = {};
	for (var key in Bureau.headingProperties) {
		heading[i] = props[key] || null;
	}
	Bureau.data.push(heading);
	Bureau._headingKeys.push(props._id);
}

Bureau.get = function(obj, key) {
	for (var i in obj) {
		if (obj[i]._id === key) {
			return obj[i];
		}
	}
}

Bureau.getHeading = function(key) {
	return Bureau.get(Bureau.headings, key);
}

Bureau.getRow = function(key) {
	return Bureau.get(Bureau.data, key);
}

Bureau.addRow = function(obj) {
	Bureau.data.push(obj);
}

Bureau.typeDefault = function(heading, fn) {
	return heading[fn] || Bureau.types[heading.type.name][fn];
}

Bureau.render = function(schema, data) {

	Bureau.getHeadingKeys();

	schema = schema || Bureau.headings;
	data = data || Bureau.data;

	var table = document.createElement('table'),
		ths = document.createElement('tr'),
		tr = document.createElement('tr');

	for (var i in schema) {
		var th = document.createElement('th');
		th.innerText = schema[i].name;
		th.className = schema[i].type.name;
		th.onclick = Bureau.typeDefault(schema[i], 'sort');
		th.ondblclick = Bureau.typeDefault(schema[i], 'filter');
		th.draggable = true;
		// TODO Drag
		tr.appendChild(th);
	}
	table.appendChild(tr);

	for (var i in data) {
		var tr = document.createElement('tr');
		for (var id in data[i]) {
			if (Bureau._headingKeys.indexOf(id) > -1) {
				var td = document.createElement('td');
				var h = Bureau.getHeading(id);
				td.innerText = h && h.value? h.value(data[i][id]) : data[i][id];
				tr.appendChild(td);
			}
		}
		table.appendChild(tr);
	}

	document.body.appendChild(table);

}
