import listLoader from './listLoader.js';
import listPush from './listPush.js';

export default function eventListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    const buttonUpdate = document.querySelector('.button-submit');
    const buttonRefresh = document.querySelector('.button-refresh');

    buttonUpdate.addEventListener('click', () => {
      listPush();
    });

    buttonRefresh.addEventListener('click', () => {
      listLoader();
    });
  });
}
