<script type="text/javascript">
    app.initialize();
	
	

	var url = 'http://go-obat.com/markets/api/products?output_format=JSON';
	var urlDetailsProduct = "http://go-obat.com/markets/api/products/";
	var username = "ARMMR8JEW5FLK7AS63FLHUU72I29QDXP";
	var password = "";
	
	$.ajaxSetup({
		cache: false ,
		beforeSend: function (xhr) {
			xhr.setRequestHeader("Allow", "GET, HEAD, PUT, DELETE");
		},
	});
	
	$.getJSON(url, 
		function(datas){
		var products = datas['products'];
		var html='';
			for(i = 0; i < products.length; i++) {
				var idProduct = products[""+i+""]["id"];
				
				var setUrlProducts = "http://go-obat.com/markets/api/products/"+idProduct+"?output_format=JSON";
				$.getJSON(setUrlProducts, 
					function(setUrlProduct){
					var Detailproductsname ='';
					 Detailproductsname += '<div id="" />'+ setUrlProduct["product"]["name"] +' id kategori = '+ setUrlProduct["product"]["associations"]["categories"][0]["id"]+' id gambar= '+ setUrlProduct["product"]["associations"]["images"][0]["id"]+'</div>';
					$('#Detailproductsname').append(Detailproductsname);
				});
				html += '<div id="div'+ products[""+i+""]["id"] +'" />'+ products[""+i+""]["id"] +'</div>';	
			}
		$('#products').append(html);
					
		$.ajaxSetup({ cache: true });
	});
</script>