// horoscope program

const question = document.getElementById('question').value;
const trueAns = document.getElementById('answer');
const answers = ['Yes', 'Nope', 'Maybe', 'Not possible', 'You need to work hard for that', 'No doubt about it', 'Signs point to yes', 'Signs point to no', `Even the universe can't decide`, 'Even the universe is against your stupid question/ decision', 'Such a moronic mindset', 'Good', 'Bad', 'At this point, shut the fuck up', 'The good place is waiting for you', 'The BAD place is waiting for you', `You're rude`];

const resetBtn = document.getElementById("reset");
resetBtn.style.display = "none";

function theTruth(){
    /*if (question == null || question == ""){
        console.log('Ask a question first');
    } else {
        console.log(ques);
    }*/
    let i = Math.floor(Math.random() * answers.length);
    console.log(i);

    trueAns.innerText = answers[i];
    resetBtn.style.display = "inline"
}

function reset(){
    trueAns.innerText = "";
    resetBtn.style.display = "none";
}
