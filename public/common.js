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
        default:
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
