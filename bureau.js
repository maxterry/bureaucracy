var Bureau = {};

Bureau.find = function(obj, key) {
	for (var i in obj) {
		if (obj[i]._id === key) {
			return obj[i];
		}
	}
}

Bureau.table = function(headings, rows) {

	headings = headings || Bureau.cols.headings.data;
	rows = rows || Bureau.rows.data;

	var table = document.createElement('table'),
		ths = document.createElement('tr'),
		tr = document.createElement('tr');

	for (var i in headings) {
		var th = document.createElement('th');
		th.innerText = headings[i].name;
		th.className = headings[i].type.name;
		th.onclick = Bureau.cols.sort(headings[i]._id);
		// th.ondblclick = Bureau.cols.types.getDefaultFunction(headings[i], 'filter');
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
				// Bureau.rows.values.add(id, value);
			}
		}
		table.appendChild(tr);
	}

	return table;

}
