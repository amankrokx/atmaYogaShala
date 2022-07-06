let smack_html = `
<style>
div#smacks {
    display: flex;
    position: fixed;
    bottom: 50px;
    right: 25px;
    z-index: 100;
    height: auto;
    max-width: calc(100% - 50px);
    flex-direction: column-reverse;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    color: var(--white);
}
#smacks .smackbar {
    background: var(--ptc);
    margin-top: 10px;
    border-radius: 10px;
    height: 36px;
    width: 100%;
    line-height: 36px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-direction: row;
    align-items: center;
    padding: 0 11px;
    box-shadow: var(--shadow);
}
#smacks span.material-icons {
    font-size: 24px;
}
@media only screen and (min-width: 756px) {
    #smacks {
        width: 50%;
    }
}
@media only screen and (max-width: 755px) {
    #smacks {
        width: calc(100% - 50px);
    }
}
</style>
<div id="smacks" ></div>
`
document.body.insertAdjacentHTML("beforeend", smack_html)
let toast = value => {
    let id = Math.round(Math.random() * 10000)
    document
        .querySelector("#smacks")
        .insertAdjacentHTML("afterbegin", `<div id="t${id}" class="smackbar"><span class="value">${value}</span><span class="material-icons" onclick="this.parentNode.remove()" >close</span></div>`)
    setTimeout(() => {
        try {
            document.querySelector(`#t${id}`).remove()
        } catch (error) {
            console.log("Toast already Dismissed !")
        }
    }, 5000)
}

module.exports = toast
