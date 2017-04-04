
// Contact Us Form Validation
function validateForm() {
    var x = document.forms["ContactForm"]["firstname"].value;
    var y = document.forms["ContactForm"]["lastname"].value;
    var z = document.forms["ContactForm"]["emailaddress"].value;

    	if (x==null || x=="" || y==null || y=="" || z==null || z=="") {
    		alert("Please Fill out all the the fields");
    		return false;
    	}
    }

 // date 
var d = new Date();
document.getElementById("date").innerHTML = d;
