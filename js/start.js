const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = qnaList.length;
const select = new Array(endPoint).fill(0);
let totalscore = 0;

function calResult(){
    for (let i = 0; i < select.length; i++) {
        totalscore += qnaList[i].a[select[i]].score; 
    }
    return totalscore;
}

function setResult(){
    let point = calResult();
    const resultName= document.querySelector('.resultname');
    const resultDesc = document.querySelector('.resultDesc');
    const resultImg = document.getElementById('resultImg');
    const totalScoreElement = document.getElementById('totalScore');

    

    totalScoreElement.textContent = `총 점수: ${point}`;
    
    let resultInfo = 0;
    if (point >= 90) {
        resultInfo = infoList[0]; // A+학점
    } else if (point >= 80) {
        resultInfo = infoList[1]; // A0
    } else if (point >= 70) {
        resultInfo = infoList[2]; // B+
    } else if (point >= 60) {
        resultInfo = infoList[3]; // B0
    } else if (point >= 50) {
        resultInfo = infoList[4]; // C+
    } else if (point >= 40) {
        resultInfo = infoList[5]; // C0
    } else if (point >= 30) {
        resultInfo = infoList[6]; // D+
    } else if (point >= 20) {
        resultInfo = infoList[7]; // D0
    } else {
        resultInfo = infoList[8]; // F
    }

    resultName.innerHTML = `<p>당신의 학점은 <strong>${resultInfo.name}</strong> 입니다.</p>`;
    resultDesc.innerHTML = `<p>${resultInfo.desc}</p>`;

    resultImg.innerHTML = ''; 
    const img = document.createElement('img');
    img.src = resultInfo.r_img; 
    img.alt = resultInfo.name;
    img.classList.add('img-fluid');
    resultImg.appendChild(img);
}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            qna.style.display = "none";
            result.style.display = "block";
            setResult();
        },450)
    },450);
    console.log(select);
}

function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-1');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    a.appendChild(answer);
    answer.innerHTML = answerText;


    answer.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(()=> {
            select[qIdx] = idx;
            for(let i = 0; i< children.length;i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        },450)
        },false);
}

function goNext(qIdx){
    if(qIdx === endPoint){
        goResult();
        return;
    }
    var q =document.querySelector('.qBox');
    var img = document.getElementById('q-img');
    q.innerHTML = qnaList[qIdx].q;
    img.src = qnaList[qIdx].img;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer ,qIdx, i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint)*(qIdx+1) + '%';
}

function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            main.style.display = "none";
            qna.style.display = "block";
        },450)
        let qIdx = 0;
        goNext(qIdx);
    },450);
}