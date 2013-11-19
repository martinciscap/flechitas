//Flechitas es un JS que permite moverse entre inputs usando "las flechitas"
//Creado por Martin Cisneros Capistrán

$(function() {

	$("table.flechitas input").on("keydown", null, "right", function(e) {		
		e.preventDefault();
		var _this = this;
		var td = $(this).parent().nextAll("td");
		for (var i = 0; i <= td.length; i++) {			

			if (i == td.length) {

				if ($(_this).parents("tr").next("tr").find("input:first").length == 1) {
					$(_this).parents("tr").next("tr").find("input:first").focus().select();							
				} else {													
					var nextTable = $(this).parents("table").nextAll("table");					
					if (nextTable.length > 0) {
						$(nextTable[0]).find("input:first").focus().select();	
					}					
				}
			}

			if ($(td[i]).find("input").length == 1) {
				var input = $(td[i]).find("input");
				if (!$(input[0]).is(":focus")) {
					$(input[0]).focus().select();					
					break;
				}
			}
		}
	});	

	$("table.flechitas input").on("keydown", null, "left", function(e) {	
		e.preventDefault();
		var _this = this;
		var td = $(this).parent().prevAll("td");
		
		for (var i = 0; i < td.length; i++) {			
			if ($(td[i]).find("input").length == 1) {
				var input = $(td[i]).find("input");					
				if (!$(input[0]).is(":focus")) {						
					$(input[0]).focus().select();											
					return;
				}
			}
		}
		
		if ($(_this).parents("tr").prev("tr").find("input").length > 0) {				
			var input = $(_this).parents("tr").prev("tr").find("input").focus().select();						
		} else {													
			var prevTable = $(_this).parents("table").prevAll("table");								
			if (prevTable.length > 0) {
				$(prevTable[0]).find("input:last").focus().select();					
			}							
		}		
	});

	/*
	$("input").live("keyup", "up", function() {					
		var name = $(this).attr("name");
		var tr = $(this).parents("tr").prev("tr").find("[name="+name+"]");			
		if (tr.length != 0) {			
			tr[0].focus();	
			tr[0].select();	
		} else {						
			var prevTable = parseInt($(this).parents("table").attr("equ"))-1;			
			$("table:eq("+prevTable+") [name="+name+"]").focus();
			$("table:eq("+prevTable+") [name="+name+"]").select();
		}
	});	

	$("input").live("keyup", "down", function() {					
		var name = $(this).attr("name");
		var tr = $(this).parents("tr").next("tr").find("[name="+name+"]");			
		if (tr.length != 0) {			
			tr[0].focus();
			tr[0].select();
		} else {						
			var nextTable = parseInt($(this).parents("table").attr("equ"))+1;			
			$("table:eq("+nextTable+") [name="+name+"]").focus();
			$("table:eq("+nextTable+") [name="+name+"]").select();
		}
	});
	*/
});
