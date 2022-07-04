function isEmpty(element) {
	return (element.value == "" ? true : false);
}

function isValid(value, pattern) {
	re = new RegExp(pattern);
	return re.test(value);
}


/* Durch Aufruf der Funktion noBack()im Body wird beim Oeffnen der Seite automatisch die
* naechste Seite der History geoeffnet (falls diese existiert).
*
* das Body-Tag im HTML muss dann so definiert werden :
* <BODY onload="noBack();" onpageshow="if (event.persisted) noBack();" onunload="">
*/
function noBack() { 
    window.history.forward();
}


function doOnLoad() {
  formElements = document.forms[0];
  for(i = 0; i < formElements.length; i++) {
    if(formElements[i].type != "hidden") {
      formElements[i].focus();
      return;
    }
  }
}

function doOnLoadNoBack() {
    noBack();
    doOnLoad();
}

function doOnLoadEinsicht() {
  doOnLoadNoBack();
  clearForm();
}

function writeScreenSolution() {
  document.write(screen.availWidth + "x" + screen.availHeight);
}

function clearForm() 
{
  function log(txt)
  {
    if (window.console) {
        console.log(txt);
    }      
  } // log
  
  var elements = document.forms[0];

  for(i=0; i<elements.length; i++) {
        var element = elements[i];
        
        if (element) {
            var type = element.type;
            
            if (type) {
                var field_type = elements[i].type.toLowerCase();

                switch(field_type) {
                        case "text": 
                        case "password": 
                        case "textarea":
                            log("Feldtyp: " + field_type + ' wird von "' + elements[i].value + '" auf "" gesetzt');
                                elements[i].value = ""; 
                                break;
                        case "radio":
                        case "checkbox":
                                log("Feldtyp: " + field_type + " wird auf unchecked gesetzt");
                                elements[i].checked = false; 
                                break;
                        case "select-one":
                        case "select-multi":
                                log("Feldtyp: " + field_type + " wird zurueckgesetzt");                            
                                elements[i].selectedIndex = 0;
                                break;
                        default:
                                log("Feldtyp: " + field_type + " wird nicht bearbeitet");
                                break;
                }
            }
        }
    }
}

/*
function() {
	$("#aus").click(function() {
		$("#pdfgen input").filter(":checkbox").prop('checked', true);
	});
	$("#ab").click(function() {
		$("#pdfgen input").filter(":checkbox").prop('checked', false);
	});
	$(".datepicker").datepicker($.datepicker.regional["de"]);
	$(".missing-property").focus(function() {
		$(this).css("background", "none");
	});
	$(".missing-property").blur(function() {
		if ($(this).val() === '')
			$(this).css("background", "pink");
	});
};
*/