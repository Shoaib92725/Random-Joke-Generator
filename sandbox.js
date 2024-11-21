const bucket = document.getElementById("bucket");
const button = document.querySelector("button");

function jokeGenerator() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        bucket.innerHTML = JSON.parse(this.responseText).value;
      } else {
        bucket.innerHTML = "Something went wrong !!!";
      }
    }
  };

  xhr.send();
}

button.addEventListener("click", jokeGenerator);
document.addEventListener("DOMContentLoaded", jokeGenerator);
