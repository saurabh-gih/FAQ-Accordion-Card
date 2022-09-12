const quess = document.querySelector(".ques")
console.log(quess.parentNode.classList);

const questions = document.querySelectorAll(".ques")
    questions.forEach((question) => question.addEventListener("click", () =>{
        // if there is active present just remove active
        if(question.parentNode.classList.contains("active")) {
            question.parentNode.classList.toggle("active")
            //toggle - adds token class if result of classList.toggle is true
                    // else removes token
        }
        // else remove active from all others and add active to it.
        else {
            questions.forEach(question => question.parentNode.classList.remove("active"))
            question.parentNode.classList.add("active")
        }

    }))


