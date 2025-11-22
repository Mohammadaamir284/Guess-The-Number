
let a = Math.floor(Math.random() * 200) + 1
let score = 8;
let scan = false
let output = document.getElementById("OutPut")




function sendme() {
    if (scan) return
    let space = document.getElementById("input").value.trim()
    let userInput = document.getElementById("input").value = ""
    let input = parseInt(space)

    if (space === "") {
        scan = false
        return
    }
    if (isNaN(input) || input < 1 || input > 200) {
        scan = true;
        userInput
        document.querySelector(".restart-button").style.display = "block"
        return output.textContent = "Invalid input! Enter a number between 1 and 200."
    }
    if (input === a) {
        scan = true;
        userInput
        document.querySelector(".restart-button").style.display = "block"
        return output.textContent = `🎉 Congratulations! You guessed it right!\nThe number was ${a}.\nYour final score: ${score}`;
    }
    score--
    if (score <= 0) {
        scan = true;
        userInput
        document.querySelector(".restart-button").style.display = "block"
        console.log(score);
        return output.textContent = ` Game Over! You've run out of tries. The correct number was ${a}.`
    }

    if (input > a) {
        userInput
        return output.textContent = ` 📉 Your guess is too high! Try again.\n You’ve got ${score} chances left.`
    }
    else if (input < a) {
        userInput
        return output.textContent = ` 💹 Your guess is too low! Try again. \n You’ve got ${score} chances left.`
    }

}
document.querySelector(".btn2").addEventListener("click", () => {
    a = Math.floor(Math.random() * 200) + 1;
    document.getElementById("input").value = ""
    score = 8
    scan = false
    output.textContent = "Enter your Number and Play Again"
    document.querySelector(".restart-button").style.display = "none"
    console.log(a);
})
console.log(a);