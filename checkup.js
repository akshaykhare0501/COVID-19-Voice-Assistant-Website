const btn2 = document.getElementById('checkUp');

let probability = 0;


const speech1 = function() {
    const response1 = new SpeechSynthesisUtterance();
    response1.text = `Hello I\'m your COVID-19 health assistant. Just Answer my questions in yes or no. Are you facing any difficulty in breathing?`;
    synth.speak(response1);
    // using settimeout function to run recognition asynchronously i.e. after specified milliseconds
    setTimeout(() =>recognition1.start(), 8000);
};

btn2.addEventListener('click', speech1);

// First Recognition
const recognition1 = new SpeechRecognition();

recognition1.onresult = function(el) {
    console.log(el);

    const transcript = el.results[0][0].transcript;
    console.log(transcript);
    speech2(transcript);
};

const speech2 = function(el){
    const response2 = new SpeechSynthesisUtterance();
    response2.text = 'Ok. Do you have a sore throat or are you facing any problem or difficulty in your throat?'

    if(el == 'yes'){
        probability += 25;
        setTimeout(() =>recognition2.start(), 7000);
    } else if(el == 'no'){
        probability += 0;
        setTimeout(() =>recognition2.start(), 7000);
    } else{
        response2.text = 'Answer only in yes or no. Click the button and start the test again';
    }
    
    synth.speak(response2);
};


// Second Recognition
const recognition2 = new SpeechRecognition();

recognition2.onresult = function(el) {

    const transcript = el.results[0][0].transcript;
    speech3(transcript);
    
};

const speech3 = function(el){
    const response3 = new SpeechSynthesisUtterance();
    response3.text = 'Ok. Do you have a cough or common cold?';

    if(el == 'yes'){
        probability += 20;
        setTimeout(() =>recognition3.start(), 7000);
    } else if(el == 'no'){
        probability += 0;
        setTimeout(() =>recognition3.start(), 7000);
    } else{
        response3.text = 'Answer only in yes or no. Start the test again';

    }
    
    synth.speak(response3);
};

// Third Recognition
const recognition3 = new SpeechRecognition();

recognition3.onresult = function(el) {

    const transcript = el.results[0][0].transcript;
    speech4(transcript);
    
};

const speech4 = function(el){
    const response4 = new SpeechSynthesisUtterance();
    response4.text = 'Ok. Do you have a fever?';

    if(el == 'yes'){
        probability += 15;
        setTimeout(() =>recognition4.start(), 7000);
    } else if(el == 'no'){
        probability += 0;
        setTimeout(() =>recognition4.start(), 7000);
    } else{
        response4.text = 'Answer only in yes or no. Start the test again';

    }
    
    synth.speak(response4);
};

// Fourth Recognition
const recognition4 = new SpeechRecognition();

recognition4.onresult = function(el) {

    const transcript = el.results[0][0].transcript;
    speech5(transcript);
    
};

const speech5 = function(el){
    const response5 = new SpeechSynthesisUtterance();
    response5.text = 'Ok. Do you have a pain or pressure in your chest?';

    if(el == 'yes'){
        probability += 15;
        setTimeout(() =>recognition5.start(), 7000);
    } else if(el == 'no'){
        probability += 0;
        setTimeout(() =>recognition5.start(), 7000);
    } else{
        response5.text = 'Answer only in yes or no. Start the test again';
    }
    
    synth.speak(response5);
};

//Fifth Recognition
const recognition5 = new SpeechRecognition();

recognition5.onresult = function(el) {

    const transcript = el.results[0][0].transcript;
    speech6(transcript);
    
};

const speech6 = function(el){
    const response6 = new SpeechSynthesisUtterance();
    response6.text = 'Ok. Do you feel tiredness or regular fatigue?';

    if(el == 'yes'){
        probability += 20;
        setTimeout(() =>recognition6.start(), 7000);
    } else if(el == 'no'){
        probability += 0;
        setTimeout(() =>recognition6.start(), 7000);
    } else{
        response6.text = 'Answer only in yes or no. Start the test again';
    }
    
    synth.speak(response6);
};

// Sixth Recognition
const recognition6 = new SpeechRecognition();

recognition6.onresult = function(el) {

    const transcript = el.results[0][0].transcript;
    speech7(transcript);
    
};

const speech7 = function(el){
    const response7 = new SpeechSynthesisUtterance();
    response7.text = 'Did you physically come in contact with anyone in the last 14 days who has now been tested positive?';
    

    if(el == 'yes'){
        probability += 10;
        setTimeout(() =>recognition7.start(), 7000);
    } else if(el == 'no'){
        probability += 0;
        setTimeout(() =>recognition7.start(), 7000);
    } else {
        response7.text = 'Answer only in yes or no. Start the test again';
    }
    
    synth.speak(response7);
};

// Seventh Recognition
const recognition7 = new SpeechRecognition();

recognition7.onresult = function(el) {

    const transcript = el.results[0][0].transcript;
    speech8(transcript);
    
};

const speech8 = function(el){
    const response8 = new SpeechSynthesisUtterance();


    if(el == 'yes'){
        probability += 25;
        response8.text = finalRes(probability, response8);
    } else if(el == 'no'){
        probability += 0;
        response8.text = finalRes(probability, response8);
    } else{
        response8.text = 'Answer only in yes or no. Start the test again';
    }

    synth.speak(response8);
};

const finalRes = function(p, resp) {
    const advice = 'Maintain social distancing, wear mask when you go outside of your house and use sanitizer.';
    if (p > 75){
        resp = `You have very high chances of covid-19. Do your covid-19 test immediately at the nearest medical center. Isolate yourself from others.`
    } else if (p > 50){
        resp = `you have some symptoms of covid-19. Do your covid-19 test immediately at the nearest medical center. ${advice}`;
    } else if(p > 30) {
        resp = `You have minor symptoms of covid-19. Go to the nearest medical center for your health checkup. ${advice}`;
    } else if(p > 15) {
        resp = `You have very less symptoms of covid-19. ${advice}`;
    } else if (p == 0){
        resp = `As you are not facing any symptom of COVID-19, you are safe. ${advice}`;
    }

    return resp;
};
