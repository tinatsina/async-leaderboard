function fetchLeaderBoard(list) {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fjsAKla7v4whxFIG6uwc/scores/', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      json.result.forEach((item) => {
        list.innerHTML += `
              <li>
                <p class="list-name">${item.user}</p>
                <p class="list-score">${item.score}</p>
              </li>
        `;
      });
    });
}

export default function listLoader() {
  document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.js-list-loader');
    fetchLeaderBoard(list);
  });
}
