var Bureau = {};

Bureau.find = function(obj, key) {
	for (var i in obj) {
		if (obj[i]._id === key) {
			return obj[i];
		}
	}
}

Bureau.table = function(schema, rows) {

	Bureau.cols.getHeadings();

	schema = schema || Bureau.cols.schema;
	rows = rows || Bureau.rows.data;

	var table = document.createElement('table'),
		ths = document.createElement('tr'),
		tr = document.createElement('tr');

	for (var i in schema) {
		var th = document.createElement('th');
		th.innerText = schema[i].name;
		th.className = schema[i].type.name;
		th.onclick = Bureau.cols.getDefaultFunction(schema[i], 'sort');
		th.ondblclick = Bureau.cols.getDefaultFunction(schema[i], 'filter');
		th.draggable = true;
		// TODO Drag
		tr.appendChild(th);
	}
	table.appendChild(tr);

	for (var i in rows) {
		var tr = document.createElement('tr');
		var row = rows[i];
		for (var id in row) {
			var cell = row[id];
			if (Bureau.cols.hasHeading(id)) {
				var td = document.createElement('td');
				var h = Bureau.cols.find(id);
				var value = h && h.value? h.value(cell) : cell;
				td.innerText = value;
				tr.appendChild(td);
				Bureau.cols.addValue(id, value)
			}
		}
		table.appendChild(tr);
	}

	return table;

}
