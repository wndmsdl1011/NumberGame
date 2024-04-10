// 필요한 html elements 다 가져오기
let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.querySelector(".button-reset");
let userInput = document.querySelector("#user-input");
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 5; // 남은 기회
let userValueList = []; // 유저가 입력한 숫자들 리스트

chanceArea.innerHTML = `남은 기회:${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {
  // 랜덤숫자 뽑기

  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNumber);
}

function play() {
  // 숫자 추측하기
  const userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultText.textContent = "1부터 100 사이의 숫자를 입력 해주세요";

    return;
  }

  if (userValueList.includes(userValue)) {
    resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";

    return;
  }

  chances--;
  chanceArea.innerHTML = `남은 기회:${chances}`;
  userValueList.push(userValue);
  if (userValue < computerNumber) {
    resultAreaImg.src =
      "https://i.pinimg.com/564x/50/16/7b/50167be7bc753e46752be0ec1d55d919.jpg";
    resultText.textContent = "Up!";
  } else if (userValue > computerNumber) {
    resultAreaImg.src = "https://i.pinimg.com/564x/50/16/7b/50167be7bc753e46752be0ec1d55d919.jpg";
    resultText.textContent = "Down!";
  } else {
    resultAreaImg.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMAA9vGxQLoiHi8dsoVutR7SVoyS-RO2iDQqBB3tAkw&s";
    resultText.textContent = "정답!";
    gameOver = true;
  }

  if (chances == 0 || gameOver) { // 기회가 다 끝나거나 게임이 종료되면
    playButton.disabled = true;
    if (!gameOver) { // 만약 게임이 종료되지 않은 상태라면
      resultText.textContent = `정답은 ${computerNumber}였어...`; // 정답을 보여줌
    }
  }
}

function focusInput() {
  userInput.value = "";
}

function reset() {
  //리셋
  pickRandomNumber();
  userInput.value = "";
  resultAreaImg.src =
    "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MjZfNjgg/MDAxNjE5NDQyMzI5OTU4.oYpZZ36ixGITA_gXt4sF-CS7dIZM87h6sCCdLsTftb4g.ecVzDGH8ypITCHi5voQx2-uxqE-hxoZPSrAVYEDYTAgg.JPEG.wldnjs3368/1619441584684.jpg?type=w800";
  resultText.textContent = "또하면 맞출거같아?";
  gameOver = false;
  playButton.disabled = false;
  chances = 5;
  chanceArea.innerHTML = `남은 기회:${chances}`;
  userValueList = [];
}

pickRandomNumber();
