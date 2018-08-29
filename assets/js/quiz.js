function submitAnswers() {
	var total = 10;
	var score = 0;

	// Get the user Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var q6 = document.forms["quizForm"]["q6"].value;
	var q7 = document.forms["quizForm"]["q7"].value;
	var q8 = document.forms["quizForm"]["q8"].value;
	var q9 = document.forms["quizForm"]["q9"].value;
	var q10 = document.forms["quizForm"]["q10"].value;

	// Validation
	for(var i = 1; i <= total; i++) {
		if(eval('q'+i) == null || eval('q'+i) == ''){
			// alert("Il faut répondre à toutes les questions. Tu as oublié la question " + i);
			var error = document.getElementById("error");
			error.innerHTML = '<h3>Prends soin de répondre à toutes les questions !</h3>';
			return false;
		}
	}

	// Set Correct Answers

	var answers = ["b", "c", "b", "b", "b", "c", "b", "a", "b", "a"];

	// Check Answers
	for(var i = 1; i <= total; i++) {
		if(eval("q"+i) == answers[i - 1]){
		score++;
		} 
	}

	// Display Results
	var results = document.getElementById("results");
	results.innerHTML = '<h3>Tu as obtenu la note de <span>'+score+'</span> sur <span>'+total+'</span></h3>';

	var a1 = document.getElementById("Q1b");
	var a2 = document.getElementById("Q2a");
	var a3 = document.getElementById("Q3d");
	var a4 = document.getElementById("Q4b");
	var a5 = document.getElementById("Q5d");
	var a6 = document.getElementById("Q6c");
	var a7 = document.getElementById("Q7b");
	var a8 = document.getElementById("Q8a");
	var a9 = document.getElementById("Q9b");
	var a10 = document.getElementById("Q10a");


	// Display Answers
	var answer1 = document.getElementById("Q1b");
	for(var i = 1; i <= total; i++) {
		if(eval("q"+i) != answers[i - 1]){
		eval("a"+i).style.color = "#52c9aa";
		eval("a"+i).style.fontSize = "x-large";
		} 
	}

	return false
}
