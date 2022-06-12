document.querySelector("#sitemap").onclick = e => {
    e.preventDefault()
    document.querySelector("footer").scrollIntoView({ behavior: "smooth", block: "start" })
}

if (window.location.pathname.includes("index.html")) document.querySelector("#home").classList.add("nav-active")
else if (window.location.pathname.includes("contact.html")) document.querySelector("#contact").classList.add("nav-active")
else if (window.location.pathname.includes("products.html")) document.querySelector("#products").classList.add("nav-active")
else if (window.location.pathname.includes("about.html")) document.querySelector("#about").classList.add("nav-active")
else document.querySelector("#home").classList.add("nav-active")


