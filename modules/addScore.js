const addScore = document.querySelector('#add-score');
const userName = document.querySelector('#name');
const userScore = document.querySelector('#score');

addScore.addEventListener('submit', (e) => {
  e.preventDefault();

  if (userName.value === '' || userScore.value === '') return;

  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CWfQ94AJNRuIhIWKDLIg/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: userName.value,
        score: userScore.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );

  userName.value = '';
  userScore.value = '';
});
