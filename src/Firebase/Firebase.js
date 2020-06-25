import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config={
    apiKey: "AIzaSyDVf5vWxQlm5V6craZyi_N1dBE3bVfeGyw",
    authDomain: "e-commerce-da378.firebaseapp.com",
    databaseURL: "https://e-commerce-da378.firebaseio.com",
    projectId: "e-commerce-da378",
    storageBucket: "e-commerce-da378.appspot.com",
    messagingSenderId: "927248104741",
    appId: "1:927248104741:web:48606a52b4f5648fc1eecc",
    measurementId: "G-BP335WXSC6"
  };


  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapshot=await userRef.get()

    if(!snapshot.exists){
      const {displayName,email}=userAuth
      const createdAt=new Date()
      try{
        await userRef.set({
          displayName,email,createdAt,...additionalData
        })
      }
      catch(error){
        console.log("create user error",error.message)
      }
    }
    return userRef
  }
  firebase.initializeApp(config)


  export const auth=firebase.auth()
  export const firestore=firebase.firestore()

  const provider=new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:"select_account"})
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase