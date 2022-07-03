import "./css/common.css"
import "./assets/material-icons.css"
import header from "./html/header.html"
import footer from "./html/footer.html"
import loader from "./modules/loader"

// Dynamically load scripts
const loadScript = (FILE_URL, async = true, type = "text/javascript") => {
    return new Promise((resolve, reject) => {
        if (typeof loadScript.loadedScripts == "undefined") loadScript.loadedScripts = []
        if (loadScript.loadedScripts.includes(FILE_URL)) {
            console.error("Already Loading script !")
            reject({
                status: false,
                message: `Already loading/loaded the script ${FILE_URL}`,
            })
        } else {
            try {
                const scriptEle = document.createElement("script")
                scriptEle.type = type
                scriptEle.async = async
                scriptEle.src = FILE_URL
                loadedScripts.push(FILE_URL)
                scriptEle.addEventListener("load", ev => {
                    console.log("loaded")
                    resolve({ status: true })
                })

                scriptEle.addEventListener("error", ev => {
                    console.error(ev)
                    loadScript.loadedScripts.splice(loadScript.loadedScripts.indexOf(FILE_URL), 1)
                    reject({
                        status: false,
                        message: `Failed to load the script ${FILE_URL}`,
                    })
                })

                document.body.appendChild(scriptEle)
            } catch (error) {
                reject(error)
            }
        }
    })
}

document.querySelector("body").insertAdjacentHTML("afterbegin", header)
document.querySelector("body").insertAdjacentHTML("beforeend", footer)

let sign_ui = document.querySelector("div.sign")
document.querySelector("#sitemap").onclick = e => {
    e.preventDefault()
    changeHash("sitemap")
}

if (window.location.pathname.includes("index.html")) document.querySelector("#home").classList.add("nav-active")
else if (window.location.pathname.includes("contact.html")) document.querySelector("#contact").classList.add("nav-active")
else if (window.location.pathname.includes("products.html")) document.querySelector("#products").classList.add("nav-active")
else if (window.location.pathname.includes("about.html")) document.querySelector("#about").classList.add("nav-active")
else document.querySelector("#home").classList.add("nav-active")

let dealWithHash = () => {
    let hash = window.location.hash.substring(1)
    console.log(hash)
    switch (hash) {
        case "sitemap":
            document.querySelector("footer").scrollIntoView({ behavior: "smooth", block: "start" })
            break
        case "login":
            sign_ui.style["opacity"] = "1"
            sign_ui.style["visibility"] = "visible"
            break
        default: // Hide active popups
            sign_ui.style["opacity"] = "0"
            sign_ui.style["visibility"] = "hidden"
            break
    }
}
let changeHash = hash => {
    if (window.location.hash.substring(1) === hash) window.dispatchEvent(new HashChangeEvent("hashchange"))
    else window.location.hash = hash
}
dealWithHash()
addEventListener("hashchange", dealWithHash)

// Animations...
document.querySelector("div.sign div.wrapper").onscroll = e => {
    e.target.style["background-position-x"] = (e.target.scrollTop / e.target.children[0].clientHeight) * 30 + "%"
}
document.querySelector("div.sign div.wrapper div.abstraction button").onclick = e => {
    document.querySelector("div.sign div.wrapper div.logup").scrollIntoView({ behavior: "smooth", block: "start" })
}
sign_ui.onclick = e => {
    if (e.target.id === "sign") {
        window.location.hash = ""
        sign_ui.style["opacity"] = "0"
        sign_ui.style["visibility"] = "hidden"
    }
}
document.querySelector("nav div.login").onclick = e => {
    window.location.hash = "login"
}
