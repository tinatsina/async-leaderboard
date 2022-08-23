const updateLeaderBoard = async (userName, userScore) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fjsAKla7v4whxFIG6uwc/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const leaderBoardUpdate = await response.json();
  return leaderBoardUpdate;
};

const listPush = () => {
  const userName = document.querySelector('.input-name');
  const userScore = document.querySelector('.input-score');

  updateLeaderBoard(userName.value, userScore.value);
};

export default listPush;