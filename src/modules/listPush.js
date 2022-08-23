function updateLeaderBoard(userName, userScore) {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fjsAKla7v4whxFIG6uwc/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((result) => result)
    .then((response) => response);
}

export default function listPush() {
  const userName = document.querySelector('.input-name');
  const userScore = document.querySelector('.input-score');

  updateLeaderBoard(userName.value, userScore.value);
}
