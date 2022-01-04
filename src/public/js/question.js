const idParent = document.getElementById("idParent")

if (window.location.href) {
    let id = window.location.href.split("/")
    idParent.value = id[4]

    console.log(idParent);
    console.log(idParent.value);
}

