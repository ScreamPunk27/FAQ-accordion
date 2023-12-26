const questions=document.querySelectorAll('.question');
const questionsTitle=document.querySelectorAll('.question__title');
const paragraphs=document.querySelectorAll('.text');
const plus=document.querySelectorAll('.plus');
const minus=document.querySelectorAll('.minus');
let arrSwitches=[];


for(let i=0; i<questions.length; i++){
    arrSwitches.push(false);
}

for(let i=0; i<questionsTitle.length; i++){
    questionsTitle[i].addEventListener('click',(e)=>{
        (arrSwitches[i]===false)
        ? showText(i)
        : hideText(i)       
    })
}



const showText = (number)=>{
    questions[number].style.height="105.39px";
    plus[number].style.visibility="hidden";
    minus[number].style.visibility="visible";
    arrSwitches[number]=true;
}

const hideText = (number)=>{
    questions[number].style.height="35px";
    plus[number].style.visibility="visible";
    minus[number].style.visibility="hidden";
    arrSwitches[number]=false;
}

