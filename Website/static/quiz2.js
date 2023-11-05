const questions = [
    {
        question: "What is the biggest sea animal?",
        optionA: "Blue Whale",
        optionB: "Crab",
        optionC: "Dolphin",
        optionD: "Oyster",
        correctOption: "optionA",
        message: "Blue Whales are the largest animals on Earth. They can weigh as much as 200 tons and reach lengths of up to 100 feet."
    },
    {
        question: "What is the name of the smallest ocean in the world?",
        optionA: "Arctic Ocean",
        optionB: "Southern Ocean",
        optionC: "Indian Ocean",
        optionD: "Atlantic Ocean",
        correctOption: "optionB",
        message: "The Southern Ocean is recognized as the smallest and youngest of the world's oceans, surrounding Antarctica."
    },
    {
        question: "Which ocean is home to the Great Barrier Reef, the world's largest coral reef system?",
        optionA: "Indian Ocean",
        optionB: "Atlantic Ocean",
        optionC: "Arctic Ocean",
        optionD: "Pacific Ocean",
        correctOption: "optionD",
        message: "The Pacific Ocean is where you'll find the Great Barrier Reef, stretching over 1,400 miles off the coast of Australia."
    },
    {
        question: "Which sea animal has a shell and can hide inside when it feels threatened?",
        optionA: "Squid",
        optionB: "Hermit Crab",
        optionC: "Shark",
        optionD: "Seahorse",
        correctOption: "optionB",
        message: "Hermit Crabs protect their soft bodies by finding and using discarded shells from other sea creatures as protective coverings."
    },
    {
        question: "What do you call a group of dolphins?",
        optionA: "Pod",
        optionB: "School",
        optionC: "Pack",
        optionD: "Flock",
        correctOption: "optionA",
        message: "A group of dolphins is known as a 'pod'. Dolphins often travel and hunt in pods, which can consist of dozens of these intelligent mammals."
    }
];

const max = 5;
let index = 0;
let score = 0;

function displaySolution(right, curr){
    document.getElementById("questions").style.display = "none";

    document.getElementById("solution").style.display = "block";
    if(right==1)
        document.getElementById("result").innerHTML = "Correct!"; 
    else    
        document.getElementById("result").innerHTML = "Wrong :(";
    document.getElementById("message").innerHTML = curr.message;

}

function checkAnswer(curr){
    right=0;
    console.log("index: " + index);
    var radios = document.getElementsByName('question');
    for (var i = 0, length = radios.length; i < length; i++) {
        console.log(radios[i].checked);
        if (radios[i].checked) {
            console.log("answer: " + radios[i].value + " correct: " + curr.correctOption);
            if(radios[i].value == curr.correctOption){
                right=1;
                score++;
            }
            radios[i].checked = false;
            }
        }
        displaySolution(right, curr);
        
    }


function first(){
    curr = questions[0]
    document.getElementById("question-words").innerHTML = curr.question;
    document.getElementById("optionA").innerHTML = curr.optionA;
    document.getElementById("optionB").innerHTML = curr.optionB;
    document.getElementById("optionC").innerHTML = curr.optionC;
    document.getElementById("optionD").innerHTML = curr.optionD;
    index++;
}

function NextQuestion(index){
    document.getElementById("questions").style.display = "block";
    curr = questions[index]
    document.getElementById("question-words").innerHTML = curr.question;
    document.getElementById("optionA").innerHTML = curr.optionA;
    document.getElementById("optionB").innerHTML = curr.optionB;
    document.getElementById("optionC").innerHTML = curr.optionC;
    document.getElementById("optionD").innerHTML = curr.optionD;

}

function endGame(){
    document.getElementById("questions").style.display = "none";
    document.getElementById("finished").style.display = "block";
    document.getElementById("solution").style.display = "none";
    document.getElementById("score").innerHTML = "Your score is " + score + "!";
}

function check(){
    checkAnswer(curr);
}



function next(){
    document.getElementById("solution").style.display = "none";
    if(index<max){
        NextQuestion(index);
        index++;
    }
    else{
        checkAnswer(curr);
        endGame();
    }
    
    
}

function start(){
    index=0;
    score=0;
    document.getElementById("questions").style.display = "block";
    document.getElementById("intro").style.display = "none";
    document.getElementById("solution").style.display = "none";
    document.getElementById("finished").style.display = "none";

    first();
}
// //Make radio btns look better
// $.each($('.radio-btn'), function(key, value) {
//     $(this).click(function(e) {
//       $('.radio-btn-selected')
//         .removeClass('radio-btn-selected')
//         .addClass('radio-btn');
  
//       $(this)
//         .removeClass('radio-btn')
//         .addClass('radio-btn-selected');
  
//       //do whatever you want on click
//     });
//   });



  