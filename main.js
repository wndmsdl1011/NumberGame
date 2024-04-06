// 랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호 Down!!
// ~~~


let computerNum =0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area");
let history=[]

playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value=""})

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value;

    if(userValue<1 || userValue>100){
        resultArea.textContent="1과100사이 숫자를 입력해주세요"
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요.";
        return;
    }
    chances -- ;
    chanceArea.textContent=`남은 기회:${chances}번`;
    console.log("chance",chances);

    if(userValue < computerNum) {
        resultArea.textContent = "UP!!!"
    }else if(userValue > computerNum) {
        resultArea.textContent = "DOWN!!!"
    }else {
        resultArea.textContent = "맞췄습니다!!!"
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);

    if(chances <1){
        gameOver = true
    }
    
    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset() {
    userInput.value = ""
    pickRandomNum()
}
pickRandomNum();