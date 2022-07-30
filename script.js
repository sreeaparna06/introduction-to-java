const topicButton00 = document.querySelector("#topic00")
const result = document.querySelector("#result")
 const randomNumber = Math.floor(Math.random() * 10)
console.log("doing cheating", randomNumber)

topicButton00.addEventListener("click", () => {
 
  const input = prompt("Guess a numbert 🤔")
  if (randomNumber === Number(input)) {
    result.innerHTML = "Woah! you guessed it right ! 🥁"
  } else {
    result.innerHTML = "Nah! try again 👀"
  }
})