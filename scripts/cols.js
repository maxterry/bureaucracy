Bureau.cols = {};

Bureau.cols.data = [];
Bureau.cols._keys = [];

Bureau.cols.add = function(cols) {
	Bureau.cols.data = Bureau.cols.data.concat(cols);
}

Bureau.cols.find = function(key) {
	if (key) {
		return Bureau.find(Bureau.cols.data, key);
		// return Bureau.cols.find()[key];
	}
	if (!Bureau.cols._keys.length) {
		for (var i in Bureau.cols.data) {
			Bureau.cols._keys.push(Bureau.cols.data[i]._id);
		}
	}
	return Bureau.cols._keys;
}

Bureau.cols.remove = function(key) {
	if (key) {
		var index = Bureau.cols._keys.indexOf(key);
		Bureau.cols.data.splice(index, 1);
	}
	else {
		Bureau.cols.data = [];
		Bureau.cols._keys = [];
	}
}

Bureau.cols.values = function(col) {
	var values = [];
	for (var i in Bureau.rows.data) {
		var value = Bureau.cells.value(col, Bureau.rows.data[i][col]);
		values.push(value);
	}
	return values;
}
