var Bureaucracy = {};

Bureaucracy.find = function(obj, key) {
	for (var i in obj) {
		if (obj[i]._id === key) {
			return obj[i];
		}
	}
}

Bureaucracy.clone = function(arr) {
	return Array.prototype.slice.call(arr);
}

Bureaucracy.sort = function(col, isDescending) {
	var data = [];
	var values = Bureaucracy.clone(Bureaucracy.cols.values(col));
	var sorted = Bureaucracy.clone(values).sort();
	isDescending && (sorted = sorted.reverse());
	for (var i=0, l=sorted.length; i<l; i++) {
		var index = values.indexOf(sorted[i]);
		values[index] = null; // Unstable
		data.push(Bureaucracy.rows.data[index]);
	}
	Bureaucracy.rows.data = data;
	return Bureaucracy.rows.data;
}

Bureaucracy.table = function(cols, rows, parent, copy) {

	if (copy !== false) {
		Bureaucracy.start.cols = Bureaucracy.clone(cols);
		Bureaucracy.start.rows = Bureaucracy.clone(rows);
	}

	parent = parent || document.body;

	function render(table) {
		parent.innerHTML = "";
		parent.appendChild(table);
	}

	function sort(event) {
		var id = event.target.id;
		if (document.getElementById(id).classList.contains('sorted-desc')) {
			Bureaucracy.sort(id, true);
			render(Bureaucracy.table(Bureaucracy.cols.data, Bureaucracy.rows.data, parent, false));
			document.getElementById(id).classList.remove('sorted-desc');
			document.getElementById(id).classList.add('sorted-asc');
		}
		else if (document.getElementById(id).classList.contains('sorted-asc')) {
			render(Bureaucracy.table(Bureaucracy.start.cols, Bureaucracy.start.rows, parent));
			document.getElementById(id).classList.remove('sorted-asc');
		}
		else {
			Bureaucracy.sort(id);
			render(Bureaucracy.table(Bureaucracy.cols.data, Bureaucracy.rows.data, parent, false));
			document.getElementById(id).classList.add('sorted-desc');
		}
	}

	function addCols(table) {
		Bureaucracy.cols.remove();
		Bureaucracy.cols.add(cols);
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
		Bureaucracy.rows.remove();
		Bureaucracy.rows.add(rows);
		var trs = [];
		for (var i=0, l=cols.length; i<l; i++) {
			var col = cols[i]._id;
			for (var j=0, jl=rows.length; j<jl; j++) {
				var row = rows[j];
				var cell = row[col];
				var value = Bureaucracy.cells.value(col, cell)
				var td = document.createElement('td');
				td.innerText = value;
				trs[j] = trs[j] || document.createElement('tr');
				trs[j].appendChild(td)
			}
		}
		for (var i in trs) {
			table.appendChild(trs[i])
		}
	}

	var table = document.createElement('table');
	addCols(table);
	addRows(table);
	render(table);
	return table;

}
