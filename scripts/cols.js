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
		var value = Bureaucracy.value(Bureaucracy.rows.data[i], col);
		values.push(value);
	}
	return values;
}
