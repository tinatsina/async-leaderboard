export default function listLoader() {
  document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.js-list-loader');
    list.innerHTML = `
              <li>
                <p class="list-name">Tshaka Zulu</p>
                <p class="list-score">187</p>
              </li>
              <li>
                <p class="list-name">Alpha Blondie</p>
                <p class="list-score">456</p>
              </li>
              <li>
                <p class="list-name">Good Name</p>
                <p class="list-score">908</p>
              </li>
              <li>
                <p class="list-name">Jack Baur</p>
                <p class="list-score">954</p>
              </li>
              <li>
                <p class="list-name">John Snow</p>
                <p class="list-score">754</p>
              </li>
    `;
  });
}
