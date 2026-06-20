let speechIndex=0;

function showSpeech(){

home.classList.add("hidden");
speechPage.classList.remove("hidden");

loadSpeech();
}

function loadSpeech(){

let v=vocab[speechIndex];

speechWord.innerText=v.word;
ipa.innerText=v.ipa;

percent.innerText="0%";

speechMessage.innerText="";
nextSpeech.classList.add("hidden");
}

const SpeechRecognition=
window.SpeechRecognition ||
window.webkitSpeechRecognition;

const recognition=
new SpeechRecognition();

recognition.lang="en-US";

micBtn.onclick=()=>{

recognition.start();

};

recognition.onresult=(e)=>{

let said=
e.results[0][0].transcript
.toLowerCase()
.trim();

let target=
vocab[speechIndex]
.word.toLowerCase();

let score=
calculateSimilarity(
said,
target
);

percent.innerText=
score+"%";

if(score>=70){

percent.style.color="green";

speechMessage.innerText=
randomMessage(goodMessages);

nextSpeech.classList.remove("hidden");

}
else{

percent.style.color="red";

speechMessage.innerText=
"💖 Keep practicing!";

}

};

function calculateSimilarity(a,b){

if(a===b)
return 100;

let same=0;

for(let i=0;i<
Math.min(a.length,b.length);
i++){

if(a[i]===b[i])
same++;

}

return Math.floor(
same/
b.length
*100
);
}

nextSpeech.onclick=()=>{

speechIndex++;

if(
speechIndex>=vocab.length
){

speechMessage.innerText=
"🏆 Congratulations! You finished Mission 2!";

nextSpeech.classList.add("hidden");

return;
}

loadSpeech();

};
