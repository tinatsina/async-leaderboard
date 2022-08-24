const fetchLeaderBoard = async (list) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fjsAKla7v4whxFIG6uwc/scores/');
  const json = await response.json();
  const listArray = json.result;

  listArray.forEach((item) => {
    list.innerHTML += `
          <li>
            <p class="list-name">${item.user}</p>
            <p class="list-score">${item.score}</p>
          </li>
    `;
  });
};

const listLoader = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.js-list-loader');
    fetchLeaderBoard(list);
  });
};

export default listLoader;