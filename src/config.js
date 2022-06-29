// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {
    getAuth,
    onAuthStateChanged,
    updatePassword,
    sendEmailVerification,
    updateProfile,
    updateEmail,
    getRedirectResult,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    TwitterAuthProvider,
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithPhoneNumber,
    RecaptchaVerifier,
    signInWithPopup,
    FacebookAuthProvider,
} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCM8xHE9RHHi98REfbZzuhY7rRfbzBHBZk",
    authDomain: "atmayogashala-3485c.firebaseapp.com",
    databaseURL: "https://atmayogashala-3485c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "atmayogashala-3485c",
    storageBucket: "atmayogashala-3485c.appspot.com",
    messagingSenderId: "961587176450",
    appId: "1:961587176450:web:9c07e30a5798d1dec5b31b",
    measurementId: "G-B1PXC0TV69",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
// const analytics = getAnalytics(app)

let signupEmail = (userid, password) => {
    // console.log('Signup with email loaded')
    createUserWithEmailAndPassword(auth, userid, password)
        .then(userCredential => {
            // Signed in
            // const user = userCredential.user;
            toast("Signed in with Email !")
            toast("Please Fill your Profile !")
            return userCredential
        })
        .catch(error => {
            console.error(error)
            toast(error.message)
            return error
        })
}

let loginEmail = (userid, password) => {
    // console.log('Login with Email loaded')
    signInWithEmailAndPassword(auth, userid, password)
        .then(userCredential => {
            // Signed in
            // const user = userCredential.user;
            toast("Signed in with Email !")
            return userCredential
        })
        .catch(error => {
            console.error(error)
            toast(error.message)
            // ..
            return error
        })
}

let loginGoogle = () => {
    const provider = new GoogleAuthProvider()
    provider.addScope("https://www.googleapis.com/auth/user.phonenumbers.read")
    signInWithRedirect(auth, provider)
        .then(res => {
            getRedirectResult(auth)
                .then(result => {
                    // This gives you a Google Access Token. You can use it to access Google APIs.
                    // const credential = GoogleAuthProvider.credentialFromResult(result)
                    // const token = credential.accessToken;
                    // The signed-in user info.
                    // const user = result.user
                    toast("Signed in with Google !")
                    return result
                })
                .catch(error => {
                    // Handle Errors here.
                    const errorMessage = error.message
                    // The email of the user's account used.
                    const email = error.email
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error)
                    // console.log(email, credential)
                    console.error(error)
                    toast(error.message)
                    return error
                })
        })
        .catch(error => {
            console.error(error)
            toast(error.message)
            return error
        })
}

let loginTwitter = () => {
    const provider = new TwitterAuthProvider()
    signInWithPopup(auth, provider)
        .then(res => {
            // console.log(res)
            getRedirectResult(auth)
                .then(result => {
                    // This gives you a Google Access Token. You can use it to access Google APIs.
                    // const credential = GoogleAuthProvider.credentialFromResult(result)
                    // const token = credential.accessToken;
                    // The signed-in user info.
                    // const user = result.user
                    // console.log(result)
                    toast("Signed in with Twitter !")
                    return result
                })
                .catch(error => {
                    // Handle Errors here.
                    // The email of the user's account used.
                    const email = error.email
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error)
                    // console.log(email, credential)
                    console.error(error)
                    toast(error.message)
                    return error
                })
        })
        .catch(error => {
            toast(error.message)
            if (error.code == "auth/account-exists-with-different-credential") toast(`Please use ${error.customData._tokenResponse.verifiedProvider} for ${error.customData.email}`)
            return error
        })
}

let loginFb = () => {
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth, provider)
        .then(res => {
            // console.log(res)
            getRedirectResult(auth)
                .then(result => {
                    // This gives you a Google Access Token. You can use it to access Google APIs.
                    // const credential = GoogleAuthProvider.credentialFromResult(result)
                    // const token = credential.accessToken;
                    // The signed-in user info.
                    // const user = result.user
                    // console.log(result)
                    toast("Signed in with Facebook !")
                    return result
                })
                .catch(error => {
                    // Handle Errors here.
                    // The email of the user's account used.
                    const email = error.email
                    // The AuthCredential type that was used.
                    const credential = FacebookAuthProvider.credentialFromError(error)
                    // console.log(email, credential)
                    console.error(error)
                    toast(error.message)
                    return error
                })
        })
        .catch(error => {
            toast(error.message)
            if (error.code == "auth/account-exists-with-different-credential") toast(`Please use ${error.customData._tokenResponse.verifiedProvider} for ${error.customData.email}`)
            return error
        })
}

let submitPhoneNumberAuth = phone => {
    let appVerifier = window.recaptchaVerifier
    signInWithPhoneNumber(auth, phone, appVerifier)
        .then(confirmationResult => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult
            toast("OTP Sent Successfully !")
            return { success: true, msg: "OTP_SENT" }
        })
        .catch(error => {
            // Error; SMS not sent
            console.error(error)
            toast(error.message)
            grecaptcha.reset(window.recaptchaWidgetId)

            // Or, if you haven't stored the widget ID:
            window.recaptchaVerifier.render().then(function (widgetId) {
                grecaptcha.reset(widgetId)
            })
        })
}

let submitPhoneNumberAuthCode = code => {
    if (code.length < 5) {
        toast("Invalid OTP")
        return { success: false, msg: "OTP_INVALID" }
    }
    confirmationResult
        .confirm(code)
        .then(result => {
            // User signed in successfully.
            toast("Login Success with Phone !")
            return result
        })
        .catch(error => {
            // User couldn't sign in (bad verification code?)
            console.error(error)
            toast(error.message)
            return error
        })
}

let initCaptcha = () => {
    // console.log('Login with phone loaded !')
    window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
            size: "invisible",
            callback: response => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                //submitPhoneNumberAuth(auth)

                return { success: true, msg: "CAPTCHA_VERIFIED" }
            },
            "expired-callback": () => {
                toast("ReCaptcha Loading Failed")
                return { success: false, msg: "CAPTCHA_EXPIREDD" }
            },
        },
        auth
    )
}

export { app, loginEmail, signupEmail, loginGoogle, initCaptcha, loginTwitter, loginFb }
