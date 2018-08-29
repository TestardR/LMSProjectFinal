var teachingChoice = document.getElementById("teachingChoice");
var choices = teachingChoice.getElementsByClassName("choice");

for (var i = 0; i < choices.length; i++) {
	choices[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace("active", "");
		this.className += " active";
  });
}
