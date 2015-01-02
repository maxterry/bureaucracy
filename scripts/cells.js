Bureaucracy.cells = {};

Bureaucracy.cells.value = function(col, cell) {
	var col = Bureaucracy.cols.find(col);
	return col && col.value? col.value(cell) : cell;
}
