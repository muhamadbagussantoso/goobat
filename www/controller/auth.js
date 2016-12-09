var Auth = class Auth{
    // Application Constructor
	constructor(x, y) {
    this.uname = x;
    this.upass = y;
	}
    initialize(){
        return this.doLogin(u,p);
    }

    doLogin(u,p) {
		//return this.uname+' ini '+this.upass;
		//var username = u;
        $.getScript("../../controller/employees.js").done(function( script, textStatus , username) {
			console.log( script+textStatus+username+p );
		  })
		  .fail(function( jqxhr, settings, exception ) {
			$( "div.log" ).text( "Triggered ajaxError handler." );
		});
    }
};
