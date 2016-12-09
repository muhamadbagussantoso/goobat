var Webservice = {
    // Application Constructor
    initialize: function() {
        this.doLogin();
    },

    key: function() {
		return 'ARMMR8JEW5FLK7AS63FLHUU72I29QDXP';
    },
	url: function(){
		return 'http://go-obat.com/markets/api';
	},
	schema: function(schema){
		return schema;
	},
	outputFormat: function(format){
		switch(format){
			case 'json':
				format = '?output_format=JSON';
				break;
			case 'schema0':
				format = '?schema=blank';
				break;
			case 'schema1':
				format = '?schema=synopsis';
				break;
		};
		return format;
	}
	
	
};
