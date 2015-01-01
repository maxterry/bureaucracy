Bureau.rows = {};

Bureau.rows.data = [];

Bureau.rows.add = function(rows) {
	Bureau.rows.data = Bureau.rows.data.concat(rows);
}

Bureau.rows.find = function(id) {
	if (id) {
		return Bureau.find(Bureau.rows.data, id);
	}
	return Bureau.rows.data;
}

Bureau.rows.remove = function(id) {
	if (id) {
		// TODO
		var index = Bureau.rows.find(id);
		Bureau.rows.data.splice(index, 1);	
	}
	else {
		Bureau.rows.data = [];
	}
}
