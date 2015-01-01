var Bureau = {};

Bureau.find = function(obj, key) {
	for (var i in obj) {
		if (obj[i]._id === key) {
			return obj[i];
		}
	}
}

Bureau.sort = function(col, isDescending) {
	function clone(arr) { return Array.prototype.slice.call(arr); }
	var data = [];
	var values = clone(Bureau.cols.values(col));
	var sorted = clone(values).sort();
	isDescending && (sorted = sorted.reverse());
	for (var i=0, l=sorted.length; i<l; i++) {
		var index = values.indexOf(sorted[i]);
		values[index] = null; // Unstable
		data.push(Bureau.rows.data[index]);
	}
	Bureau.rows.data = data;
	return Bureau.rows.data;
}

Bureau.table = function(cols, rows, parent) {

	cols = cols || Bureau.start.cols || Bureau.cols.data;
	rows = rows || Bureau.start.rows || Bureau.rows.data;
	parent = parent || document.body;

	function render(table) {
		parent.innerHTML = "";
		parent.appendChild(table);
	}

	function sort(event) {
		var id = event.target.id;
		if (document.getElementById(id).classList.contains('sorted-desc')) {
			Bureau.sort(id, true);
			render(Bureau.table());
			document.getElementById(id).classList.remove('sorted-desc');
			document.getElementById(id).classList.add('sorted-asc');
		}
		else if (document.getElementById(id).classList.contains('sorted-asc')) {
			render(Bureau.table(Bureau.start.cols, Bureau.start.rows));
			document.getElementById(id).classList.remove('sorted-asc');
		}
		else {
			Bureau.sort(id);
			render(Bureau.table());
			document.getElementById(id).classList.add('sorted-desc');
		}
	}

	function addCols(table) {
		Bureau.cols.remove();
		Bureau.cols.add(cols);
		var tr = document.createElement('tr');
		for (var i in cols) {
			var th = document.createElement('th');
			th.id = cols[i]._id;
			th.innerText = cols[i].name;
			th.className = cols[i].type.name;
			th.onclick = sort;
			tr.appendChild(th);
		}
		table.appendChild(tr);
	}

	function addRows() {
		Bureau.rows.remove();
		Bureau.rows.add(rows);
		for (var i in rows) {
			var tr = document.createElement('tr');
			var row = rows[i];
			for (var col in row) {
				var cell = row[col];
				if (Bureau.cols.find(col)) {
					var td = document.createElement('td');
					var value = Bureau.cells.value(col, cell);
					td.innerText = value;
					tr.appendChild(td);
				}
			}
			table.appendChild(tr);
		}
	}

	var table = document.createElement('table');
	addCols(table);
	addRows(table);
	render(table);
	return table;

}
