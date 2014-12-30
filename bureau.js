var Bureau = {};

Bureau.find = function(obj, key) {
	for (var i in obj) {
		if (obj[i]._id === key) {
			return obj[i];
		}
	}
}

Bureau.table = function(schema, rows) {

	schema = schema || Bureau.cols.headings.data;
	rows = rows || Bureau.rows.data;

	var table = document.createElement('table'),
		ths = document.createElement('tr'),
		tr = document.createElement('tr');

	for (var i in schema) {
		var th = document.createElement('th');
		th.innerText = schema[i].name;
		th.className = schema[i].type.name;
		th.onclick = Bureau.cols.types.getDefaultFunction(schema[i], 'sort');
		th.ondblclick = Bureau.cols.types.getDefaultFunction(schema[i], 'filter');
		// TODO
		// th.draggable = true;
		tr.appendChild(th);
	}
	table.appendChild(tr);

	for (var i in rows) {
		var tr = document.createElement('tr');
		var row = rows[i];
		for (var id in row) {
			var cell = row[id];
			if (Bureau.cols.headings.has(id)) {
				var td = document.createElement('td');
				var h = Bureau.cols.headings.find(id);
				var value = h && h.value? h.value(cell) : cell;
				td.innerText = value;
				tr.appendChild(td);
				Bureau.cols.values.add(id, value);
			}
		}
		table.appendChild(tr);
	}

	return table;

}
