const chooseSubject = document.getElementById("chooseSubject")
const parent = document.getElementById("parent")
const child = document.querySelectorAll(".child")

Array.from(child).map(e => e.style.display = "none")


chooseSubject.addEventListener("click", () => {
    console.log(chooseSubject.value);
    if (chooseSubject.value == "Parent") {
        parent.style.display = "block"
        Array.from(child).map(e => e.style.display = "none")
        if (window.location.href !== 'http://localhost:4444/subject') {
            window.location.href = ''
            window.location.href = 'http://localhost:4444/subject'
        }
    } else if (chooseSubject.value == "Child") {
        parent.style.display = "none"
        Array.from(child).map(e => e.style.display = "block")
    }
})