const scoresTable = document.querySelector('.scores-table');

const loadScores = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CWfQ94AJNRuIhIWKDLIg/scores',
  );
  const results = await response.json();
  const resultsArray = results.result;
  return resultsArray;
};

document.addEventListener('DOMContentLoaded', async () => {
  let resultsArr = [];
  try {
    resultsArr = await loadScores();
  } catch (error) {
    // can display error in the frontend
  }
  resultsArr.forEach((result) => {
    scoresTable.innerHTML += `
            <div class="student-score">${result.user}: ${result.score}</div>
            `;
  });
});
