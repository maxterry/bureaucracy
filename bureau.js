Bureau = {}

Bureau.settings = {
	editable: true
}

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
}

Bureau.headings = [
	{
		_id: "name",
		name: "Name",
		type: String,
		editable: true,
		filter: function() {
			alert("Click")
		},
		move: function() {
			alert("Drag")
		}
	},
	{
		_id: "age",
		name: "Age",
		type: Number,
		editable: true,
		filter: function() { },
		move: function() { }
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
			return xs.length
		}
	},
	{
		_id: "location",
		name: "Location",
		type: Location,
		editable: true,
		filter: function() { },
		move: function() { }
	}
]

Bureau.data = [
	{
		name: "Edgar",
		age: 77,
		things: ["filing-cabinet"],
		origin: "DC",
		destination: ""
	},
	{
		name: "Dale",
		age: 55,
		things: ["microcassette recorder"],
		location: "WA"
	},
	{
		name: "Clarice",
		age: 52,
		things: ["dresser", "cabinet"],
		location: "OH"
	}
]

Bureau.getHeading = function(key) {
	for (var i in Bureau.headings) {
		if (Bureau.headings[i]._id === key) {
			return Bureau.headings[i]
		}
	}
}

Bureau.getRow = function() {
	// TODO
}

Bureau.render = function(schema, data) {
	schema = schema || Bureau.headings
	data = data || Bureau.data
	var table = document.createElement('table')
	var ths = document.createElement('tr')
	var tr = document.createElement('tr')
	for (var i in schema) {
		var td = document.createElement('th')
		td.innerText = schema[i].name
		td.className = schema[i].type.name
		// TODO
		// td.onClick = schema[i].filter
		// td.onDrag = schema[i].move
		tr.appendChild(td)
	}
	table.appendChild(tr)
	for (var i in data) {
		var tr = document.createElement('tr')
		for (var j in data[i]) {
			var td = document.createElement('td')
			var h = Bureau.getHeading(j)
			td.innerText = h && h.value? h.value(data[i][j]) : data[i][j]
			tr.appendChild(td)
		}
		table.appendChild(tr)
	}
	document.write(table.outerHTML)
}
