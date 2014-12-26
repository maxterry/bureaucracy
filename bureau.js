var Bureau = {};

Bureau.settings = {
	editable: true
};

Bureau.types = {
	Boolean: {

	},
	Number: {

	},
	String: {

	},
	Array: {

	},
	Location: {

	}
};

Bureau.headingKeys = [
	'_id', 'name', 'type', 'editable', 'filter', 'move'
]

Bureau.headings = [
	{
		_id: "name",
		name: "Name",
		type: String,
		editable: true,
		filter: function() {
			alert("Click");
		},
		move: function() {
			alert("Drag");
		}
	},
	{
		_id: "age",
		name: "Age",
		type: Number,
		editable: true,
		filter: function() {
			alert("Click");
		},
		move: function() {
			alert("Click");
		}
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
		editable: true,
		filter: function() {
			alert("Click");
		},
		move: function() {
			alert("Drag");
		}
	}
];

Bureau.data = [
	{
		// _id: 'edgar',
		name: "Edgar",
		age: 77,
		things: ["filing-cabinet"],
		location: "DC"
	},
	{
		// _id: 'dale',
		name: "Dale",
		age: 55,
		things: ["microcassette recorder"],
		location: "WA"
	},
	{
		// _id: 'clarice',
		name: "Clarice",
		age: 52,
		things: ["dresser", "cabinet"],
		location: "OH"
	}
];

Bureau.addHeading = function(props) {
	var heading = {};
	for (var key in Bureau.headingKeys) {
		heading[i] = props[key] || null;
	}
	Bureau.data.push(heading);
}

Bureau.getHeading = function(key) {
	for (var i in Bureau.headings) {
		if (Bureau.headings[i]._id === key) {
			return Bureau.headings[i];
		}
	}
}

Bureau.getRow = function() {
	// TODO
}

Bureau.addRow = function() {
	// TODO
}

Bureau.render = function(schema, data) {

	schema = schema || Bureau.headings;
	data = data || Bureau.data;

	var table = document.createElement('table'),
		ths = document.createElement('tr'),
		tr = document.createElement('tr');

	for (var i in schema) {
		var th = document.createElement('th');
		th.innerText = schema[i].name;
		th.className = schema[i].type.name;
		th.onclick = schema[i].filter;
		th.draggable = true;
		// th.ondrag = schema[i].move; // addEventListener('dragstart', schema[i].move);
		tr.appendChild(th);
	}
	table.appendChild(tr);

	for (var i in data) {
		var tr = document.createElement('tr');
		for (var j in data[i]) {
			var td = document.createElement('td');
			var h = Bureau.getHeading(j);
			td.innerText = h && h.value? h.value(data[i][j]) : data[i][j];
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}

	document.body.appendChild(table);

}
