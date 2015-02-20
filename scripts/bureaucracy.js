var Bureaucracy = {};

Bureaucracy.find = function(obj, key) {
	for (var i in obj) {
		if (obj[i]._id === key) {
			return obj[i];
		}
	}
}

Bureaucracy.rows = {};

Bureaucracy.rows.data = [];

Bureaucracy.rows.add = function(rows) {
	Bureaucracy.rows.data = Bureaucracy.rows.data.concat(rows);
}

Bureaucracy.rows.find = function(id) {
	if (id) {
		return Bureaucracy.find(Bureaucracy.rows.data, id);
	}
	return Bureaucracy.rows.data;
}

Bureaucracy.rows.remove = function(id) {
	if (id) {
		// TODO
		var index = Bureaucracy.rows.find(id);
		Bureaucracy.rows.data.splice(index, 1);	
	}
	else {
		Bureaucracy.rows.data = [];
	}
}

Bureaucracy.cols = {};

Bureaucracy.cols.data = [];
Bureaucracy.cols._keys = [];

Bureaucracy.cols.add = function(cols) {
	Bureaucracy.cols.data = Bureaucracy.cols.data.concat(cols);
}

Bureaucracy.cols.find = function(key) {
	if (key) {
		return Bureaucracy.find(Bureaucracy.cols.data, key);
	}
	if (!Bureaucracy.cols._keys.length) {
		for (var i in Bureaucracy.cols.data) {
			Bureaucracy.cols._keys.push(Bureaucracy.cols.data[i]._id);
		}
	}
	return Bureaucracy.cols._keys;
}

Bureaucracy.cols.remove = function(key) {
	if (key) {
		var index = Bureaucracy.cols._keys.indexOf(key);
		Bureaucracy.cols.data.splice(index, 1);
	}
	else {
		Bureaucracy.cols.data = [];
		Bureaucracy.cols._keys = [];
	}
}

Bureaucracy.cols.values = function(col) {
	var values = [];
	for (var i in Bureaucracy.rows.data) {
		// var value = Bureaucracy.value(Bureaucracy.rows.data[i], col._id);
		values.push(Bureaucracy.rows.data[i][col._id]);
	}
	return values;
}

Bureaucracy.cells = {};

Bureaucracy.cells.set = function(rowId, colId, self) {
	var row = Bureaucracy.rows.find(rowId);
	var col = Bureaucracy.cols.find(colId);
	row[col._id] = self.value;
}

Bureaucracy.cells.edit = function(row, col) {
	if (row[col._id] === null) row[col._id] = "";
	// TODO
	if (col.type == Object) {
		var a = document.createElement('a');
		a.href = '#';
		a.innerHTML = row[col._id];
		a.setAttribute('onClick', 'alert("TODO")')
		return a.outerHTML;
	}
	else {
		var input = document.createElement('input');
		input.id = row._id + '-' + col._id;
		input.type = 'text' // TODO
		input.setAttribute('value', row[col._id]);
		input.setAttribute('onBlur', 'Bureaucracy.cells.set(\''+row._id+'\', \''+col._id+'\', this)');
		return input.outerHTML;
	}
}

Bureaucracy.clone = function(arr) {
	return Array.prototype.slice.call(arr);
}

Bureaucracy.sort = function(col, direction) {
	var data = [];
	var values = Bureaucracy.cols.values(col);
	var sorted = Bureaucracy.clone(values).sort();
	direction === 'descending' && (sorted = sorted.reverse());
	for (var i=0, l=sorted.length; i<l; i++) {
		var index = values.indexOf(sorted[i]);
		values[index] = undefined; // Unstable
		data.push(Bureaucracy.rows.data[index]);
	}
	Bureaucracy.rows.data = data;
	return Bureaucracy.rows.data;
}

Bureaucracy.value = function(row, col) {
	return col && col.value? col.value(row, col) : row[col._id];
}

Bureaucracy.start = {};

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
			Bureaucracy.sort(Bureaucracy.cols.find(id), 'descending');
			render(Bureaucracy.table(Bureaucracy.cols.data, Bureaucracy.rows.data, parent, false));
			document.getElementById(id).classList.remove('sorted-desc');
			document.getElementById(id).classList.add('sorted-asc');
		}
		else if (document.getElementById(id).classList.contains('sorted-asc')) {
			render(Bureaucracy.table(Bureaucracy.start.cols, Bureaucracy.start.rows, parent));
			document.getElementById(id).classList.remove('sorted-asc');
		}
		else {
			Bureaucracy.sort(Bureaucracy.cols.find(id));
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
			var col = cols[i];
			for (var j=0, jl=rows.length; j<jl; j++) {
				var row = rows[j];
				var value = Bureaucracy.value(row, col);
				var td = document.createElement('td');
				td.innerHTML = value;
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

Bureaucracy.list = function(parent) {

	function render(lists) {
		parent.innerHTML = "";
		parent.appendChild(lists);
	}

	var lists = document.createElement('div');
	var rows = Bureaucracy.rows.data;

	for (var i in rows) {
		var list = document.createElement('ul');
		for (var j in rows[i]) {
			var item = document.createElement('li');
			var col = Bureaucracy.cols.find(j);
			if (col) {
				var heading = document.createElement('strong');
				heading.innerHTML = col.name;
				item.innerHTML = [heading.outerHTML, rows[i][j]].join(': ');
				list.appendChild(item);
			}
		}
		lists.appendChild(list);
	}

	render(lists);
	return lists;

}
