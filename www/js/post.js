function xmlToString(xmlData){ 
    var xmlString;
    if (window.ActiveXObject){
        xmlString = xmlData.xml;}
    else{xmlString = (new XMLSerializer()).serializeToString(xmlData);}
    return xmlString;}
	
function codeReturn(name){
	var code;
	switch(name){
			case 'orders': code = 0; break;
			case 'carts': code = 1; break;
			case 'customers': code = 2; break;
			case 'products': code = 3; break;
			case 'zones': code = 4; break;}
	return code;}
	
function postData(objectName){					
		$.get( urlapi + objectName + "?schema=blank",
			function(xml) {
				var objectCode = 4;
				var objectCode = codeReturn(objectName);
				console.log(objectCode);
				var objectChildren = $(xml).children().children()[0];
				var childLength = objectChildren.children.length;
				var lastArray = childLength - 1;
				var associationExistence = 0;
				
				if ( objectChildren.children[lastArray].nodeName == 'associations' ){
					var associationChildren = objectChildren.children[lastArray].children[0].children[0];
					var associationLength = associationChildren.children.length
					associationExistence = 1;}
				
				for ( i = 1 ; i < childLength ; i++ ){
					if ( i == lastArray && associationExistence == 1 ){
						for ( j = 0 ; j < associationLength ; j++ ){
							if ( associationChildren.children[j].nodeName == 'id' )
								 { continue;}
								associationChildren.children[j].innerHTML = objectData[objectCode][i-1+j];}}
							else
								{objectChildren.children[i].innerHTML = objectData[objectCode][i-1];}}
					
				console.log($(xml).children().children());
				var xmlText = xmlToString(xml); 
				$.post( urlapi + objectName, xmlText, 'text');},
			'xml');}