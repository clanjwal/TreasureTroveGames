const questions = [
    {
        question: "What's your idea of a perfect weekend?",
        optionA: "Trying a new activity & exploring new places",
        optionB: "Learning new things",
        optionC: "Spending time with friends",
        optionD: "Relaxing at home",
        
    },
    {
        question: "How do you respond to change?",
        optionA: "Face it head on",
        optionB: "Consider potential effects and plan ahead",
        optionC: "Embrace it and adapt quickly",
        optionD: "Approach it slowly and cautiously",
        
    },
    {
        question: "How do you handle disagreements with others?",
        optionA: "Confront others directly",
        optionB: "Think about the issue logically and seek compromise",
        optionC: "Talk to all parties involved",
        optionD: "Avoid confrontation and give people space",
    },
    {
        question: "Which of the following hobbies are your favorite?",
        optionA: "Sports or outdoor activities",
        optionB: "Solving puzzles or brain teasers",
        optionC: "Hosting gatherings and socializing",
        optionD: "Meditation or yoga",
    },
    {
        question: "What is your ideal vacation destination?",
        optionA: "A camping trip",
        optionB: "An old city with historical landmarks",
        optionC: "A popular tourist destination in a big city",
        optionD: "A quiet, secluded cabin in the woods",
    },
    {
        question: "What do you want to be remembered for?",
        optionA: "My athletic ability & strength",
        optionB: "My intelligence & academic accomplishments",
        optionC: "My friendliness",
        optionD: "My patience & resilience",
    },
    {
        question: "When faced with a difficult decision, you:",
        optionA: "Choose whatever option seems most exciting",
        optionB: "Conduct thorough research to figure out what option's best",
        optionC: "Ask friends and family for their opinions",
        optionD: "It doesn't matter what you choose, everything works out in the end",
    },
    {
        question: "What does your calendar look like?",
        optionA: "Jam packed with trips",
        optionB: "Booked full with meetings and appointments",
        optionC: "Usualy about half full, I have a great work-life balance",
        optionD: "I don't use a calendar - I just go with the flow",
    },
    {
        question: "When doing a group project:",
        optionA: "I'm always the group leader, and will fight to keep that title",
        optionB: "I enjoy doing the research, I love to learn",
        optionC: "I'm more interested in becoming friends with my groupmates than completing the assignment",
        optionD: "I mostly keep to myself, except for when I have to mediate fights between group members",
    }
]
const paragraphs = [
    "Sharks are powerful, and are the apex predators of the ocean. They are known for their agility and hunting skills. They are often admired for their determination and strength. You display many similar characteristics to sharks!",
    "Dolphins are intelligent and curious creatures. They are often regarded as excellent problem solvers and great communicators. You display many similar characteristics to dolphins!",
    "Sea otters are very social creatures. They are very playful and friendly. They are also fiercely loyal. You display many similar characteristics to sea otters!",
    "Sea turtles are known for their slow and steady approach to life. They are ancient and resilient creatures that have been around for millions of years. They are often associated with patience and peacefulness. You display many similar characteristics to sea turtles!",
    "Sea sponges are simple animals that attach themselves to the ocean floor. They don't have the ability to move and rely on ocean currents to bring their food. You are similar due to the fact that you were unable to answer any of these questions."
]


const max = 9;
result = '';
tot = 0;
index = 0;
let sharkTot = 0; 
let dolphinTot = 0; 
let otterTot = 0;
let turtleTot = 0;
animalNames = ['Shark', 'Dolphin', 'Sea Otter', 'Sea Turtle']


function checkAnswer(curr){
    var radios = document.getElementsByName('question');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            console.log(radios[i].value);
            if(radios[i].value == "optionA")
                sharkTot++;
            if(radios[i].value == "optionB")
                dolphinTot++;
            if(radios[i].value == "optionC")
                otterTot++;
            if(radios[i].value == "optionD")
                turtleTot++;

            radios[i].checked = false;
        } 
    }
} 

function NextQuestion(index){
    const curr = questions[index]
    document.getElementById("question-words").innerHTML = curr.question;
    document.getElementById("optionA").innerHTML = curr.optionA;
    document.getElementById("optionB").innerHTML = curr.optionB;
    document.getElementById("optionC").innerHTML = curr.optionC;
    document.getElementById("optionD").innerHTML = curr.optionD;
    checkAnswer(curr);
}

function endGame(){
    document.getElementById("questions").style.display = "none";
    document.getElementById("finished").style.display = "block";
    document.getElementById("score").innerHTML = "You are a " + result + "!";
    document.getElementById("explanation").innerHTML = resultpar;
    //"score"
}

function next(){
    if(index<max){
        NextQuestion(index);
        index++;
    }
    else{
        checkAnswer(questions[index]);
        animals = [sharkTot, dolphinTot, otterTot, turtleTot];
        console.log(animals);

        for(var i = 0, length = animals.length; i < length; i++){
            if(animals[i] > tot){
                console.log("hi");
                tot = animals[i];
                result = animalNames[i];
                resultpar = paragraphs[i];
                
            }
        }
        if(tot == 0){
            result = "Sea Sponge";
            resultpar = paragraphs[4];
        }
        endGame();

    }
}

/*
function checkButton(){    
    if(document.getElementById('optionA').checked) {   
        sharkTot ++;
    }
    if(document.getElementById('optionB').checked) {   
        dolphinTot++;
    }
    if(document.getElementById('optionC').checked) {   
        otterTot++;
    }
    if(document.getElementById('optionD').checked) {   
        turtleTot++;
    }
}
*/

function start(){
    tot = 0;
    index = 0;
    sharkTot = 0; 
    dolphinTot = 0; 
    otterTot = 0;
    turtleTot = 0;
    document.getElementById("questions").style.display = "block";
    document.getElementById("intro").style.display = "none";
    document.getElementById("finished").style.display = "none";
    next();
}

