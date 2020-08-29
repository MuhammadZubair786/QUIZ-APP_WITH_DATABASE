var inp=document.getElementById('name');
var hd=document.getElementById('newchk');
var fm=document.getElementById('frm');
var sname=document.getElementById('stdname')
var div_res=document.getElementById('result_div');
var tq=document.getElementById('tquest')
var cqu=document.getElementById('cquest')
var WANS=document.getElementById('wans')
var PERC=document.getElementById('per')


var arr=[
    {
        'Q ' :'What does HTML stand for?',
        'opt ' : ['Home Tool Markup Language','Hyper Text Markup Language','HyperLink Mark up Language','HyperLink and Text Markup Language'],
        'cans' : '2'
        
    },
    {
        'Q ' :'Choose the correct HTML element for the largest heading:',
        'opt ' : ['<h1>','<h3>','<h6>','<h4>'],
        'cans' : '1'

    },
    {
        'Q ' :'What is the correct HTML element for inserting a line break?:',
        'opt ' : ['<break>','<rb>','<br>','<hr>'],
        'cans' : '3'

    },
    {
        'Q ' :'Which character is used to indicate an end tag?:',
        'opt ' : ['^','<','/','*'],
        'cans' : '3'

    },
    {
        'Q ' :'How can you open a link in a new tab/browser window?:',
        'opt ' : ['<a href="url" new >','<a href="url" target="_blank">','<a href="url" target="new">','<a href="url" targets="_blanks">'],
        'cans' : '2'

    },
    {
        'Q ' :'Which of these elements are all <table> elements?:',
        'opt ' : ['<table><tr><tt>','<table><td><tr>','<table><th><td>','<table><tr><td>'],
        'cans' : '4'

    },
    {
        'Q ' :'How can you make a numbered list?:',
        'opt ' : ['<ol>','<li>','<ul>','<list>'],
        'cans' : '1'

    },
    {
        'Q ' :'What is the correct HTML for making a text input field?:',
        'opt ' : ['<input type="textfield">','<input type="text">','<input type="field">','<textinput type="textfield">'],
        'cans' : '2'

    },
    {
        'Q ' :'In HTML,which attribute is used an input field must be filled out?:',
        'opt ' : ['validate','placeholder','get','required'],
        'cans' : '4'

    },
    {
        'Q ' :'Type Of Tag In Html:',
        'opt ' : ['1','3','2','4'],
        'cans' : '3'

    },
]

main_c=document.getElementById('main_div')
quest=document.getElementById('question')
var qno=document.getElementById('qof')
var p1=document.getElementById('option1')
var p2=document.getElementById('option2')
var p3=document.getElementById('option3')
var p4=document.getElementById('option4')
var result=document.getElementById('res')
var heading=document.getElementById('head')
var dp=document.getElementById('dp')
var agnbtn=document.getElementById('again')
var cquestion = 0
var score=0
var tQ=arr.length
var atmp=1
var milisec=document.getElementById('mili')
var msec=document.getElementById('sec')
var mnt=document.getElementById('min')
var milsnd=0
var snd=0
var mint=0







function questionget(num){
   
    var q=arr[num]
    quest.textContent=(num+1) +' ).' + arr[num]['Q ']
    p1.textContent=q['opt '][0]
    p2.textContent=q['opt '][1]
    p3.textContent=q['opt '][2]
    p4.textContent=q['opt '][3]
    qno.textContent="Question "+(num+1) +" of 10"
    // interval=setInterval(function timer(){
    //   milsnd++
    //   milisec.innerText=milsnd
    //   if(milsnd>=60){
    //       milsnd=0
    //       snd +=1
    //       msec.innerText=snd
         
    //   }
    //   if(snd>=60){
    //       snd=0
    //       mint+=1
    //       mnt.innerText=mint
    //   }
    // },10)
    
   

}
function nextques(){
    var sOption = document.querySelector('input[type=radio]:checked');
  if (sOption == null) {
      alert('Please select your answer!');
      return;
  }
  var answer = sOption.value;
  console.log('CORRECT ANSWER :',arr[cquestion].cans)
  console.log("YOUR ANSWER :",answer)
  if (arr[cquestion].cans  == answer) {
      score += 1;
  }
 console.log('score :', score)

sOption.checked = false;
cquestion++;
if (cquestion == tQ) {
    
    
    console.log("total question ",tQ)
    console.log('Name :',inp.value)
    console.log('score :', score)

   
   main_c.style.display='none'
   div_res.style.display=''
   result.style.display=''
   result.textContent='Your Total Score : '+score+'/ 10'
   agnbtn.style.display='block'
   sname.style.display=''
   tq.style.display=''
   tq.textContent="Total Question : "+  tQ
    sname.textContent="Student name : "+ inp.value
   dp.style.display='block'
   cqu.style.display=''
   cqu.textContent='Correct Answer : '+score
   WANS.style.display=''
   WANS.textContent='Wrong Answer : '+(10-score)
   heading.style.display=''
   heading.textContent='HTML QUIZ'
   PERC.style.display=''
   PERC.textContent='Percentage : '+((score*100)/10) +"%"


   

    if(score>=8){

    
    dp.innerHTML="<b>'Result : Excellent Good Job  Congratulation You Passed'</b>"
    rmark="Excellent Good Job  Congratulation You Passed"

        }
    else if(score<=7 && score>=5){
        dp.innerHTML="<b>'Result : Congratulation You Passed'</b>"
        rmark="Congratulation You Passed"
    }
    else{
    dp.innerHTML="<b>'Result : fail'</b>"
    rmark="fail"
}

    key = firebase.database().ref("result").push().key;
    console.log(key)
    wrong = (10-score)


var resultdb={
    key : key,
    Name : inp.value,
    Total_Question : tQ,
    correct_ans : score,
    wrong_ans : wrong,
    score: score*10,
    quiz : "HTML QUIZ",
    percentage : ((score*100)/10) +"%",
    Remark : rmark,



}

console.log(resultdb)
firebase.database().ref("result/" +key).set(resultdb)


   
   return
}





questionget(cquestion)

}


function restart(){
    location = 'htmlq.html';

}



function getdata(){
    console.log(inp.value)
    if(inp.value==''){
        alert("Please Enter Your Name ")
    }
    else{

        console.log(fm)
        fm.style.display='none'
        main_c.style.display=''
        questionget(cquestion)

    }
}


console.log(firebase)
console.log(firebase.database)