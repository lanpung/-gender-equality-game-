let current = 0;

function randomMessage(arr){
return arr[
Math.floor(Math.random()*arr.length)
];
}

function showQuiz(){

home.classList.add("hidden");
quizPage.classList.remove("hidden");

loadQuestion();
}

function loadQuestion(){

let v=vocab[current];

word.innerText=v.word;

options.innerHTML="";

let answers=[v.meaning];

while(answers.length<4){

let m=
allMeanings[
Math.floor(Math.random()*
allMeanings.length)
];

if(!answers.includes(m))
answers.push(m);
}

answers.sort(()=>Math.random()-0.5);

answers.forEach(a=>{

let btn=document.createElement("button");

btn.innerText=a;

btn.className="optionBtn";

btn.onclick=()=>checkAnswer(a);

options.appendChild(btn);

});

message.innerText="";
nextBtn.classList.add("hidden");
}

function checkAnswer(ans){

let correct=vocab[current].meaning;

if(ans===correct){

message.innerText=
randomMessage(goodMessages);

}
else{

message.innerText=
randomMessage(badMessages);

}

nextBtn.classList.remove("hidden");
}

nextBtn.onclick=()=>{

current++;

if(current>=vocab.length){

message.innerText=
"🏆 Congratulations! You finished Mission 1!";

nextBtn.classList.add("hidden");

return;
}

loadQuestion();

};
