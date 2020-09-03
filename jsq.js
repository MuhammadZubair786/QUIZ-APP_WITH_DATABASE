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
        'Q ' :'Inside which HTML element do we put the JavaScript??',
        'opt ' : ['<javascript>','<js>','<script>','<java>'],
        'cans' : '3'
        
    },
    {
        'Q ' :'What is the correct syntax for external script called "xxx.js"?:',
        'opt ' : ['<script href="app.js">','<script src="app.js">','<script name="app.js">','None Of These'],
        'cans' : '2'

    },
    {
        'Q ' :'How do you write "Hello World" in an alert box?:',
        'opt ' : ['alert("Hello World")','msg("Hello World")','alertBox("Hello World")','msgBox("Hello World")'],
        'cans' : '1'

    },
    {
        'Q ' :'How do you create a function in JavaScript?:',
        'opt ' : ['function =myFunction()','function myFunction()','function.myFunction()','function:myFunction()'],
        'cans' : '2'

    },
    {
        'Q ' :'How does a FOR loop start?:',
        'opt ' : ['for(i=0;i<=10;i)','for(i<=10;i++)','for(i=0;i<=10;i++)','for i to 5'],
        'cans' : '3'

    },
    {
        'Q ' :'var num; This statement called as _______ statement:',
        'opt ' : ['Golblization','incleration','Subsitution','Declaration'],
        'cans' : '4'

    },
    {
        'Q ' :'What is the correct JavaScript syntax to write "Hello World"?:',
        'opt ' : ['System.out.println("Hello World")','   println ("Hello World")','document.write("Hello World")','response.write("Hello World")'],
        'cans' : '3'

    },
    {
        'Q ' :'Which event occurs when the user clicks on an HTML element?:',
        'opt ' : ['onmouseclick','onchange','onclick','onmouseover'],
        'cans' : '3'

    },
    {
        'Q ' :'Which operator is used to assign a value to a variable?:',
        'opt ' : ['=','*','/','+'],
        'cans' : '1'

    },
    {
        'Q ' :' The ___ method of an Array object adds or removes elements an array.:',
        'opt ' : ['Reverse','Shift','Slice','Splice'],
        'cans' : '4'

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




function questionget(num){
    var q=arr[num]
    quest.textContent=(num+1) +' ).' + arr[num]['Q ']
    p1.textContent=q['opt '][0]
    p2.textContent=q['opt '][1]
    p3.textContent=q['opt '][2]
    p4.textContent=q['opt '][3]
    qno.textContent="Question "+(num+1) +" of 10"

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
   heading.textContent='JAVASCRIPT QUIZ'
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
    quiz : "JS QUIZ",
    percentage : ((score*100)/10) +"%",
    Remark : rmark,





}

console.log(resultdb)
firebase.database().ref("result/" +key).set(resultdb)




   
   return
}





questionget(cquestion)

}
questionget(cquestion)

function restart(){
    location = 'jsq.html';

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