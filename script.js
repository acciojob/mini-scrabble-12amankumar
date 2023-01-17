//your code here
let textEl=document.querySelector("#evaluatedText");
let counterEl=document.querySelector("#letterCount");
 
textEl.addEventListener("input",text);

function text(){
    let word=evaluatedText.value;
    let wordlength=word.length;
    letterCount.innerHTML= wordlength;
}