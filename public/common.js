document.querySelector("#sitemap").onclick = e => {
    e.preventDefault()
    document.querySelector("footer").scrollIntoView({ behavior: "smooth", block: "start" })
}

if (window.location.pathname.includes("index.html")) document.querySelector("#home").classList.add("nav-active")
else if (window.location.pathname.includes("contact.html")) document.querySelector("#contact").classList.add("nav-active")
else if (window.location.pathname.includes("products.html")) document.querySelector("#products").classList.add("nav-active")
else if (window.location.pathname.includes("about.html")) document.querySelector("#about").classList.add("nav-active")
else document.querySelector("#home").classList.add("nav-active")

// footer accordian 
const accordianIteamHeader = document.querySelectorAll(".acc-item-header");
accordianIteamHeader.forEach(accordianIteamHeader =>{
    accordianIteamHeader.addEventListener("click",event => {
        accordianIteamHeader.classList.toggle("active");
        const accordianIteamBody = accordianIteamHeader.nextElementSiblings;
        if(accordianIteamHeader.classList.container("active")){
            accordianIteamBody.style.maxHeight = accordianIteamBody.scrollHeight + "px";
        }
        else{
            accordianIteamBody.style.maxHeight = 0;
        }
    });
});
