let loading = `
    <style>
    @keyframes gradient {
        0% {background-position: 0% 50%;}
        50% {background-position: 100% 50%;}
        100% {background-position: 0% 50%;}
    }
    #loading {
        position: fixed;
        top: 0;
        left: 0;
        height: 5px;
        width: 100vw;
        background-color: var(--ap);
        z-index: 100;
        background: var(--gradient);
        background-size: 400% 400%;
        animation: gradient 2s ease infinite;
    }
    </style>
    <div id="loading" class="hidden"></div>`
document.querySelector("body").insertAdjacentHTML("afterbegin", loading)
console.log("Added Loader !")
let le = document.querySelector("#loading")

let hideLoader = () => {
    le.classList.add("hidden")
}
let showLoader = () => {
    le.classList.remove("hidden")
}
module.exports = { hideLoader, showLoader }
