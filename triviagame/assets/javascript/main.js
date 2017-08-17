function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var correct = 0;

	if (question1 == "true"){
		correct++;
}
	if (question2 == "Austin"){
		correct++;
}
	if (question3 == "Maple Leaf"){
		correct++;
}
	if (question4 == "Truman"){
		correct++;
}
	if (question5 == "Jupiter"){
		correct++;
}
	if (question6 == "Mark Zuckerberg"){
		correct++;
}



document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";

}