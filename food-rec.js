const btn = document.getElementById('food-exe');
const synth = window.speechSynthesis;

// Accessing the speech recognition object constructor from global window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// creating a new speech recognition object
const recognition = new SpeechRecognition();
 
// adding event listener to the btn
btn.addEventListener('click', () => {
    // callback function
    recognition.start();
});

// using onresult event handler and passing a callback function to it having event as argument
recognition.onresult = function(event) {
    // Printing the event results to the console
    console.log(event);
    // Accessing the transcript property from recognition event
    const transcript = event.results[0][0].transcript;

    readOutLoud(transcript);
};

// function for the text to speech conversion    
function readOutLoud(el) {
    // creating new speech synthesis object
    const speech = new SpeechSynthesisUtterance();
    
        if(el.includes('lungs' || 'asthma' || 'breathing problem' || 'respiratory')){
            // assigning answer string to text property of speech object
            speech.text =  'For lungs problem, Asthma and breathing issues you should eat apples, walnuts. Also you should add Ginger, Garlic and Turmeric in your food.'; 
        } else if(el.includes('sore throat')){
            speech.text = 'For sore throat,  you should eat mashed potatoes, cloves, pomegranates, ginger and fenugreek. You should drink warm water and tea.';
        } else if(el.includes('cough' || 'common cold')){
            speech.text = 'For cough or common cold, should drink warm water, ginger tea. You can also take honey.';
        } else if(el.includes('fever')){
            speech.text = 'If you have fever , you should take, honey, fruits, coconut water, green vegetables soups, garlic and hot tea.';
        } else if(el.includes('high blood pressure' || 'high bp')){
            speech.text = 'For high blood pressure problem you should eat citrus fruits like oranges, lemons and grapes. You should avoid high sodium salt. Green vegetables like spinach and cabbage help to keep blood pressure in check.';
        } else if (el.includes('diabetes' || 'sugar')) {
            speech.text = 'For diabetes, you should add sweet potato, carrots, walnuts, soya beens and black pepper to your diet. Studies have revealed that drinking coffee can help to control diabetes.';
        } else if (el.includes('low blood pressure' || 'low bp')) {
            speech.text = 'For low blood pressure problem you should add more fluids to your diet as staying hydrated is important. Eat foods rich in vitamin B12 like cereals. Also salty foods and caffeine helps to increase blood pressure';
        } else if (el.includes('coronary heart disease' || 'heart disease')) {
            speech.text = 'Eat fresh fruits and vegetables, add olive oil, nuts and seeds and whole grains like high-fiber cereals to your diet.';
        } else if (el.includes('kidney')) {
            speech.text = 'In case of kidney problems, you should eat apples, strawberries, cherries. Also add cauliflower, cabbage, garlic and olive oil to your diet.';
        } else if (el.includes('tuberculosis' || 'tb')) {
            speech.text = 'If you have tuberculosis, add foods rich in vitamin A, C and E like orange, mango, sweet pumpkin and carrots, guava, amla, tomato, nuts and seeds to your diet.';
        } else if (el.includes('cancer')) {
            speech.text = 'For people having cancer, foods like oranges, peppers, berries, tomatoes and broccoli are very important as these are rich in vitamin C which produces antibodies. Also they should add milk, cheese, eggs, seeds and nuts to their diet.';
        } else {
            // using open method from global window object to run search query
            window.open('http://google.com/search?q='+el);
        }

    // passing speech object into speak method
    synth.speak(speech);
};
    

