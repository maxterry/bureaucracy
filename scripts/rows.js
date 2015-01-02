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
