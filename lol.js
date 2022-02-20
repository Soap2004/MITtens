
function getSpecificImage() {
    const name = document.querySelector('#dog-name').value;
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then((res) => res.json())
    .then(function (res) {
        if (res.status === "error") {
            alert("Click the image to see the endangered species list!");
        } else {
        console.log(res.message);
        document.querySelector("#dog-image").style.backgroundImage= `url("${res.message}")`;
    }
})
    }


