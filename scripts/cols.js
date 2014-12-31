Bureau.cols = {};

Bureau.cols.headings = {
	_keys: []
};

Bureau.cols.headings.data = [
	{
		_id: 'name',
		name: "Name",
		type: String
	},
	{
		_id: 'age',
		name: "Age",
		type: Number
	},
	{
		_id: 'things',
		name: "Things",
		type: Array,
		// TODO
		// reference: {
		// 	'filing-cabinet': {
		// 		name: "Filing Cabinet"
		// 	}
		// },
		value: function(xs) {
			return xs.length;
		}
	},
	{
		_id: 'location',
		name: "Location",
		type: Location
	}
];

Bureau.cols.headings.add = function(props) {
	var column = {};
	for (var key in Bureau.cols.attributes) {
		column[i] = props[key] || null;
	}
	Bureau.cols.headings.data.push(column);
	Bureau.cols.headings._keys.push(props._id);
}

Bureau.cols.headings.find = function(key) {
	return Bureau.find(Bureau.cols.headings.data, key);
}

Bureau.cols.headings.get = function() {
	if (!Bureau.cols.headings._keys.length) {
		for (var i in Bureau.cols.headings.data) {
			Bureau.cols.headings._keys.push(Bureau.cols.headings.data[i]._id);
		}
	}
	return Bureau.cols.headings._keys;
}

Bureau.cols.headings.has = function(id) {
	var headings = Bureau.cols.headings.get();
	return headings.indexOf(id) > -1;
}

Bureau.cols.value = function(col, cell) {
	var h = Bureau.cols.headings.find(col);
	return h && h.value? h.value(cell) : cell;
}

Bureau.cols.values = function(col) {
	var values = [];
	for (var i in Bureau.rows.data) {
		var value = Bureau.cols.value(col, Bureau.rows.data[i][col]);
		values.push(value);
	}
	return values;
}

Bureau.cols.sort = function(col, isDescending) {

	var clone = function(arr) { return Array.prototype.slice.call(arr); }
	var data = [];
	var values = clone(Bureau.cols.values(col));
	var sorted = clone(values).sort();
	isDescending && (sorted = sorted.reverse());

	for (var i=0, l=sorted.length; i<l; i++) {
		var index = values.indexOf(sorted[i]);
		values[index] = null; // Unstable
		data.push(Bureau.rows.data[index]);
	}

	Bureau.rows.data = data;
	return Bureau.rows.data;

}
