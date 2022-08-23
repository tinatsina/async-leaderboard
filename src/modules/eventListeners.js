import listLoader from './listLoader.js';

export default function eventListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    const buttonUpdate = document.querySelector('.button-submit');
    const buttonRefresh = document.querySelector('.button-refresh');

    buttonUpdate.addEventListener('click', () => {
      alert('Update Clicked');
    });

    buttonRefresh.addEventListener('click', () => {
      listLoader();
    });
  });
}
