Bureau.types = {};

Bureau.types._keys = ['_id', 'name', 'type', 'editable', 'sort', 'filter', 'move'];

Bureau.types.data = {

	Object: {
		editable: true
	},

	Boolean: {

	},

	Number: {
		sort: function() {
			console.log("Sort Number");
		},
		filter: function() {
			console.log("Filter Number");
		},
		move: function() {
			console.log("Drag Number");
		}
	},

	String: {
		filter: function() {
			console.log("Filter String");
		},
		move: function() {
			console.log("Drag String");
		}
	},

	Array: {

	},

	Location: {
		sort: function() {
			console.log("Sort Location");
		},
		filter: function() {
			console.log("Filter Location");
		},
		move: function() {
			console.log("Drag Location");
		}
	}

};

// Bureau.types.getDefaultFunction = function(col, fn) {
// 	return col[fn] ||
// 		Bureau.cols.types.data[col.type.name][fn] ||
// 		Bureau.cols.types.data['Object'][fn];
// }
