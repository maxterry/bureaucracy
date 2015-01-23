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
