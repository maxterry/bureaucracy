Bureaucracy.cells = {};

Bureaucracy.cells.update = function(label, self) {
	var oldValue = self.innerText;
	var newValue = prompt(label, oldValue) || oldValue;
	self.innerHTML = newValue;
	return newValue;
}

Bureaucracy.cells.set = function(rowId, colId, self) {
	var row = Bureaucracy.rows.find(rowId);
	var col = Bureaucracy.cols.find(colId);
	var value = Bureaucracy.cells.update(col.name, self);
	row[col._id] = value;
}

Bureaucracy.cells.edit = function(placeholder) {
	return function(value, id) {
		if (value === null) value = placeholder;
		var link = document.createElement('a');
		link.href = '#';
		link.innerText = value;
		link.setAttribute('onClick', 'Bureaucracy.cells.set(\''+id+'\', \''+this._id+'\', this)');
		return link.outerHTML;
	}
}
