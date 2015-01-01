Bureau.cells = {};

Bureau.cells.value = function(col, cell) {
	var col = Bureau.cols.find(col);
	return col && col.value? col.value(cell) : cell;
}
