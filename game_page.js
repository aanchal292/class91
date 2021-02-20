
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;


	actual_answer1 = parseInt(number1) * parseInt(number2);
	console.log(actual_answer1);
    
	question_number1 = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box1 = "<br>Answer : <input type='text' id='input_check_box1'>";
    row1 =  question_number1 + input_box1  ; 
    document.getElementById("output1").innerHTML = row1;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";




    actual_answer2 = parseInt(number1) + parseInt(number2);
	console.log(actual_answer2);

    question_number2 = "<h5>" + number1 + " + "+ number2 +"</h5>";
    input_box2 = "<br>Answer : <input type='text' id='input_check_box2'>";
    row2 =  question_number2 + input_box2 ; 
    document.getElementById("output2").innerHTML = row2;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";




	actual_answer3 = parseInt(number1) - parseInt(number2);
	console.log(actual_answer3);

    question_number3 = "<h5>" + number1 + " - "+ number2 +"</h5>";
    input_box3 = "<br>Answer : <input type='text' id='input_check_box3'>";
    row3 =  question_number3 + input_box3 ; 
    document.getElementById("output3").innerHTML = row3;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";





	actual_answer4 = parseInt(number1) / parseInt(number2);
	console.log(actual_answer4);

    question_number4 = "<h5>" + number1 + " / "+ number2 +"</h5>";
    input_box4 = "<br>Answer : <input type='text' id='input_check_box4'>";
    check_button4 = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row4 =  question_number4 + input_box4 + check_button4 ; 
    document.getElementById("output4").innerHTML = row4;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}





