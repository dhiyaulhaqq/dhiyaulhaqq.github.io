$(document).ready(function(){
    $(".btn").click(function(){
		forms = document.forms["bar_Volume"];
		valid = forms.checkValidity();

		if (valid) {
			length = $("input[name=length]").val();
			width  = $("input[name=width]") .val();
			height = $("input[name=height]").val();
			result = length * width * height;
			$("#result").text(result);
		}

		forms.reportValidity();
    });
})
