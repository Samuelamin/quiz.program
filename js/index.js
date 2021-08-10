function aside(){
    var a = document.querySelector(".aside-bar");
    var b = document.querySelector(".aside-link");
    var c =document.getElementById("body");

    a.style.width='320px'; 
    b.style.display='block'; 
    c.style.marginLeft="320px"
   
}

function colse(){
    var a = document.querySelector(".aside-bar");
    var b = document.querySelector(".aside-link");
    var c =document.getElementById("body");

    a.style.width='0px'; 
    b.style.display='none'; 
    c.style.marginLeft="0px"
}

function dark(){
    var a = document.getElementById('moon');
    var b =document.body;

    a.classList.toggle('fa-sun');
    b.classList.toggle('dark-mode');

    a.classList.toggle('fa-moon');
  
}



var input = document.getElementById('input-text');
var btn = document.getElementById ('button-addon2');
var otput = document.getElementById ('otput-text');

btn.addEventListener("click",addlist);

function addlist(e){
   var creatli = document.createElement('li');

   var delbtn = document.createElement ("submit");
   delbtn.innerHTML ='<i class="fas fa-times"></i>';
   delbtn.classList.toggle("icon-remover");
   
   if(input.value !== ""){
       creatli.innerHTML = input.value;
       otput.appendChild(creatli);
       creatli.appendChild(delbtn);
       input.value = "";

      delbtn.addEventListener("click",function(){
        var parent = this.parentNode;
        parent.remove(); 
      });

   }
}


                                          /* -------------input.js.program-------------- */
                                         /* -------------input.js.program-------------- */              
                                         
                               
     var quizList = [
    

    {
        question : "what lang you staudy",
        a : "js",
        b : "html",
        c : "css",
        d : "sass",
        correct :"a",
    },
    {
        question : "what is your age",
        a : "above 10 yaers",
        b : "aborave 20 yaers",
        c : "above 30 yaers",
        d : "above 40 yaers",
        correct :"b",
    },
    {
        question : "امتى هنخلص الفرونت اند",
        a : "الله اعلم",
        b : "more 2 month",
        c : "more 3 month",
        d : "more 4 month",
        correct :"a",
    }

];

 var quiz = document.getElementById("quizz");
 var answerEls = document.querySelectorAll(".answer");
 var questionEl = document.getElementById("question");
 var a_text = document.getElementById("a-text");
 var b_text = document.getElementById("b-text");
 var c_text = document.getElementById("c-text");
 var d_text = document.getElementById("d-text");
 var submitbtn = document.getElementById("submit");

 var currentquiz = 0;
 var score = 0;



 function loadquiz(){
    deselectedanswer()
    var currentquizdata = quizList[currentquiz];
       questionEl.innerHTML = currentquizdata.question;
       a_text.innerHTML = currentquizdata.a;
       b_text.innerHTML = currentquizdata.b;
       c_text.innerHTML = currentquizdata.c;
       d_text.innerHTML = currentquizdata.d;
};

loadquiz();

   
function getselected(){
    let answer = undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
            console.log(answer);
        }
    });
   return answer;
};
 

function deselectedanswer(){

answerEls.forEach((answerEl) =>{
    answerEl.checked = false;
});
}
submitbtn.addEventListener("click",()=>{
      
    var answer = getselected ();
     if(answer){
            if(answer ===quizList[currentquiz].correct ){
            score ++;
            }
            currentquiz ++;

            if(currentquiz <quizList.length){
            loadquiz();
            }else{
            quiz.innerHTML = `
                             <h2>your answer correctly at  ${score}/${quizList.length} questions </h2> 
                             <button onclick = "location.reload()">Reload </button> 
                            `;
              }
            }
});

 