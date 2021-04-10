function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("The Full form of PAL is?", ["Programmable Arithmetic Logic", "Programmable Amplitude Logic","Programmable Array Logic", "Programmable Auxillary Logic"], "Programmable Array Logic"),


    new Question("What do the programmable Logic Devices (PLDs) designed specially for the combinational circuits comprise?", ["Only gates", "Only flip flops","Both a and b", "None of the above"], "Both a and b"),
    

    new Question("PLA is used to implement?", ["A complex sequential circuit", "A simple sequential cicuit","A complex combinational circiut", "A simple combinational circuit"], "A complex sequential circuit"),
    

    new Question("For programmable logic functions, which type of PLD should be used?", ["PLA", "PAL","CPLD", "SLD"], "PAL"),

     
    new Question("The inputs in the PLD is given through?", ["NAND gates", "OR gates", "NOR gates", "AND gates"], "AND gates"),


    new Question("PLA contains?", ["AND and OR arrays", "NAND and OR arrays", "NOT and AND arrays", "NOR and OR arrays"], "AND and OR arrays"),

    
    new Question("PLD contains a large number of?", ["Flip-flops", "Gates", " Registers", "All of the Mentioned"], "All of the Mentioned"),


    new Question("The types of PLD are?", ["2", "3", "4", "5"], "2"),


    new Question("PLAs CPLDs,and FPGAs are all which type of device?", ["SLD", "PLD", "EPROM", "SRAM"], "PLD"),


    new Question("The EPROM starts out with?", ["1s", "0s", "Null", "Both 1s and 0s"], "0s"),


];


var quiz = new Quiz(questions);


populate();

