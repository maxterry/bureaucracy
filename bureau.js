var Bureau = {};

Bureau.get = function(obj, key) {
	for (var i in obj) {
		if (obj[i]._id === key) {
			return obj[i];
		}
	}
}

Bureau.table = function(schema, data) {

	Bureau.cols.getHeadings();

	schema = schema || Bureau.cols.schema;
	data = data || Bureau.rows.data;

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

	for (var i in data) {
		var tr = document.createElement('tr');
		for (var id in data[i]) {
			if (Bureau.cols._headings.indexOf(id) > -1) {
				var td = document.createElement('td');
				var h = Bureau.cols.find(id);
				td.innerText = h && h.value? h.value(data[i][id]) : data[i][id];
				tr.appendChild(td);
			}
		}
		table.appendChild(tr);
	}

	return table;

}
