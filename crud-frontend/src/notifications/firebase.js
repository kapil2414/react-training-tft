// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBrIIXi8W4KSUl0eQmbsTSNcdWbs9FkWc",
  authDomain: "push-notifications-c7b65.firebaseapp.com",
  projectId: "push-notifications-c7b65",
  storageBucket: "push-notifications-c7b65.appspot.com",
  messagingSenderId: "353635617680",
  appId: "1:353635617680:web:0aa14fd8be40547c774115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission)
  if (permission === "granted") {
    const token = await getToken(
      messaging,
      {
        vapidKey: "BPevFXf18glZPs5rGnEO5DHYWRl8h70-UTM33I5hGGmIxrAbYPfUHetThtPL9H7qrMLbw4uNaP6ntKnRU3WL6dw"
      }
    )
    console.log(token)
  }

}