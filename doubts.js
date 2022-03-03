const btn3 = document.getElementById("doubts-id");
const recognDoubts = new SpeechRecognition();


btn3.addEventListener('click', () => {
    recognDoubts.start();
});

recognDoubts.onresult = function(ev){
    console.log(ev);
    
    const transcript = ev.results[0][0].transcript;
    console.log(transcript);
    doubtsRes(transcript);
}

function doubtsRes(el){
    const answDoubts = new SpeechSynthesisUtterance();
    

        if(el.includes('What' && 'novel' && 'coronavirus')){
            answDoubts.text = 'A novel coronavirus is a coronavirus that has not been previously identified.';
        } else if (el.includes(('coronavirus' || 'corona' || 'covid-19') && 'transmitted' && 'food')) {
            answDoubts.text = 'There is currently no evidence that people can catch COVID-19 from food. The virus that causes COVID-19 can be killed at temperatures similar to that of other known viruses and bacteria found in food.';
        } else if(el.includes('people' && 'mild' && ('coronavirus' || 'corona' || 'covid-19') && 'symptoms' && 'recover' && 'home')){
            answDoubts.text = 'People with mild symptoms who are otherwise healthy should manage their symptoms at home. On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.';
        } else if (el.includes('new' && ('coronavirus' || 'corona' || 'covid-19') && 'strain' && 'more deadly')) {
            answDoubts.text = 'The new variant is believed to be more contagious but not more lethal than other strains.';
        } else if (el.includes('what' && 'is' && 'covid-19')) {
            answDoubts.text = 'COVID-19 is a disease caused by a new strain of coronavirus. \'CO\' stands for corona, \'VI\' for virus, and \'D\' for disease. Formerly, this disease was referred to as 2019 novel coronavirus';
        } else if (el.includes('what should' && 'do' && 'if' && 'symptoms' && ('coronavirus' || 'corona' || 'covid-19'))) {
            answDoubts.text = 'Stay home and self-isolate even if you have minor symptoms such as cough, headache, mild fever, until you recover. Call your health care provider or hotline for advice.';
        } else if (el.includes('when' && 'sense' && 'taste' && 'come back')) {
            answDoubts.text = 'Most regain their senses of smell and taste after they recover, usually within weeks.';
        } else if (el.includes('what' && 'common' && 'symptoms' && ('coronavirus' || 'corona' || 'covid-19'))) {
            answDoubts.text = 'The most common symptoms of COVID-19 are fever, dry cough, and tiredness. Other symptoms that are less common and may affect some patients include loss of taste or smell, aches and pains, headache or a sore throat';
        } else if (el.includes(('elderly' || 'elder') && ('vulnerable' || 'endangered') && ('coronavirus' || 'corona' || 'covid-19'))) {
            answDoubts.text = 'Although all age groups are at risk of contracting COVID-19, older people face significant risk of developing severe illness if they contract the disease due to physiological changes that come with ageing and potential underlying health conditions.';
        } else if (el.includes('dangerous' && ('coronavirus' || 'corona' || 'covid-19') )) {
            answDoubts.text = 'Although for most people COVID-19 causes only mild illness, it can make some people very ill. More rarely, the disease can be fatal.';
        } else if (el.includes('masks' && 'prevent' && ('coronavirus' || 'corona' || 'covid-19'))) {
            answDoubts.text = 'Masks should be used as part of a comprehensive strategy of measures to suppress transmission and save lives; the use of a mask alone is not sufficient to provide an adequate level of protection against COVID-19.';
        } else if (el.includes('relieve' && 'stress' && 'pandemic')) {
            answDoubts.text = 'Find ways to exercise. Staying active will help you release anxiety, relieve stress, and manage your mood. Have a walk outside or if you are stuck at home try meditation';
        } else if (el.includes('what' && 'contact' && 'tracing')) {
            answDoubts.text = 'contact tracing is the process of identifying all people that a COVID-19 patient has come in contact with in the last two weeks.';
        } else if (el.includes(('physical' || 'social') && 'distancing' && 'help')) {
            answDoubts.text = 'Physical distancing helps limit the spread of COVID-19 – this means we keep a distance of at least 1m from each other and avoid spending time in crowded places or in groups.';
        } else if (el.includes(('foods' || 'food') && 'eat' && 'during' && ('coronavirus' || 'corona' || 'covid-19'))) {
            answDoubts.text = 'You should eat a variety of fresh and unprocessed foods every day to get the vitamins, minerals, dietary fibre, protein and antioxidants your body needs. Drink enough water. Eat fruits, vegetables, nuts and whole grains';
        } else if (el.includes (('foods' || 'food') && 'avoid' && 'during' && ('coronavirus' || 'corona' || 'covid-19'))) {
            answDoubts.text ='When cooking and preparing food, limit the amount of salt. Avoid foods for example snacks that are high in salt and sugar.  Limit your intake of soft drinks or sodas and other drinks that are high in sugar';
        } else if (el.includes ('immune' && ('coronavirus' || 'corona' || 'covid-19') && 'get' && 'once')) {
            answDoubts.text ='Research is still ongoing into how strong that protection is and how long it lasts. WHO is also looking into whether the strength and length of immune response depends on the type of infection a person has: without symptoms, mild or severe.';
        } else if (el.includes ('heat' && 'prevent' && ('coronavirus' || 'corona' || 'covid-19'))) {
            answDoubts.text ='Exposing yourself to the sun or temperatures higher than 25°C DOES NOT protect you from COVID-19. You can catch COVID-19, no matter how sunny or hot the weather is. Countries with hot weather have reported cases of COVID-19.';
        } else if (el.includes (('coronavirus' || 'corona' || 'covid-19') && 'enter' && 'body' && 'hands')) {
            answDoubts.text ='Hands touch too many surfaces and can quickly pick up viruses. Once contaminated, hands can transfer the virus to your face, from where the virus can move inside your body, making you feel unwell.';
        } else if (el.includes (('coronavirus' || 'corona' || 'covid-19') && 'transmitted' && 'between' && 'humans' && 'animals') ) {
            answDoubts.text ='Available evidence suggests that the virus is predominantly transmitted between people through respiratory droplets and close contact, but there are also examples of transmission between humans and animals.';
        } else {
            window.open('http://google.com/search?q='+el);
        }

    synth.speak(answDoubts);
};