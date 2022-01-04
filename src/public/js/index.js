const switchBetweenPages = document.querySelectorAll(".add")
const Choices = document.querySelectorAll(".Choices")


const display = () => {
    Array.from(switchBetweenPages).map(e => {
        e.addEventListener("click", () => {
            Array.from(Choices).map(f => {
                if (f.getAttribute('dataset') != e.id) {
                    f.style.display = "none"
                } else {
                    f.style.display = "block"
                }
            })
        })
    })
}


display()

