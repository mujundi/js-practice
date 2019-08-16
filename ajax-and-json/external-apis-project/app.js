document.querySelector(".get-jokes").addEventListener("click", getJokes);
const jokesOutput = document.querySelector(".jokes");

function getJokes(e) {
  const numberOfJokes = document.querySelector("#number").value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);
  xhr.onload = function() {
    if (this.status === 200) {
      const jokesList = JSON.parse(this.responseText).value;

      let output = "";
      jokesList.forEach(function(joke) {
        output += `<li>${joke.joke}</li>`;
      });

      jokesOutput.innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
