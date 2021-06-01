const joke = document.querySelector(".joke-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", generateJoke);
generateJoke();

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json"
    }
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  joke.innerHTML = data.joke;
}

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json"
//     }
//   };
//   fetch("https://icanhazdadjoke.com/", config)
//     .then((res) => res.json())
//     .then((data) => {
//       joke.innerHTML = data.joke;
//     });
// }
