import { showLoader, hideLoader } from "./loader.js"
// Dynamically load scripts
export const loadScript = (FILE_URL, async = true, type = "text/javascript") => {
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
                showLoader()
                const scriptEle = document.createElement("script")
                scriptEle.type = type
                scriptEle.async = async
                scriptEle.src = FILE_URL
                loadScript.loadedScripts.push(FILE_URL)
                scriptEle.addEventListener("load", ev => {
                    console.log("loaded")
                    hideLoader()
                    resolve({ status: true })
                })

                scriptEle.addEventListener("error", ev => {
                    console.error(ev)
                    hideLoader()
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
