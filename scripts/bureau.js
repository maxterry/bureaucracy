var Bureau = {};

Bureau.find = function(obj, key) {
	for (var i in obj) {
		if (obj[i]._id === key) {
			return obj[i];
		}
	}
}

Bureau.table = function(parent, headings, rows) {

	function render(table) {
		parent.innerHTML = "";
		parent.appendChild(table);
	}

	parent = parent || document.body;
	headings = headings || Bureau.cols.headings.data;
	rows = rows || Bureau.rows.data;

	var table = document.createElement('table'),
		ths = document.createElement('tr'),
		tr = document.createElement('tr');

	for (var i in headings) {
		var th = document.createElement('th');
		th.id = headings[i]._id;
		th.innerText = headings[i].name;
		th.className = headings[i].type.name;
		th.onclick = function(event) {
			Bureau.cols.sort(event.target.id);
			Bureau.table(parent);
		}
		tr.appendChild(th);
	}
	table.appendChild(tr);

	for (var i in rows) {
		var tr = document.createElement('tr');
		var row = rows[i];
		for (var col in row) {
			var cell = row[col];
			if (Bureau.cols.headings.has(col)) {
				var td = document.createElement('td');
				var value = Bureau.cols.value(col, cell);
				td.innerText = value;
				tr.appendChild(td);
			}
		}
		table.appendChild(tr);
	}

	render(table);
	return table;

}
