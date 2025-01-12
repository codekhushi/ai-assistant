let btn=document.querySelector("#btn");
let content=document.querySelector("#content");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()  
    let hours = day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning")
    }
    else if (hours>=12 && hours<16){
        speak("Good Afternoon")
}
    else{
        speak("Good Evening")
    }
}

window.addEventListener('load', () => {
    wishMe();
});


let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition();
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
     let transcript=event.results[currentIndex][0].transcript
     content.innerText=transcript
     takeCommand(transcript.toLowerCase())
    console.log(event)
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"

    if(message.includes("hello ")|| message.includes("hey")|| message.includes("hi"))
    {
        speak("hello sir, how can i help you?")
    }
    else if (message.includes("kaun ho tum")){
        speak("i am virtual assistant sophia , created by khushi soni")
    }
    else if (message.includes("open youtube")){
        window.open("https://youtube.com/","_blank")
        speak("opening youtube...")
    }
    else if (message.includes("open facebook")){
        window.open("https://facebook.com/","_blank")
        speak("opening facebook...")
    }
    else if (message.includes("open instagram")){
        window.open("https://instagram.com/","_blank")
        speak("opening instagram...")
    }
    else if (message.includes("open google")){
        window.open("https://google.com/","_blank")
        speak("opening google...")
    }
    else if (message.includes("open github")){
        window.open("https://github.com/","_blank")
        speak("opening github...")
    }
    else if (message.includes("open calculator")){
        window.open("calculator://")
        speak("opening calculator")
    }
    else if (message.includes("open whatsapp")){
        window.open("whatsapp://")
        speak("opening whatsapp...")

    }   
    else if (message.includes("play ")) {
        let song = message.replace("play ", "").trim();
        if (song) {
            let youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(song)}`;
            window.open(youtubeSearchUrl, "_blank");
            speak(`Playing ${song} on YouTube.`);
        } else {
            speak("Please specify a song name.");
        }
        }
    else if (message.includes("time")){
    let time= new Date().toLocaleTimeString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
    }   
    else if (message.includes("date")){
    let date= new Date().toLocaleTimeString(undefined,{day:"numeric",month:"short"})
    speak(date)
    }   
    else
    {
        speak(`this what i found regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}