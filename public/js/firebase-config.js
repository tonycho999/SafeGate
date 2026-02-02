// Firebase SDK 임포트
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 사용자의 Firebase 설정값
const firebaseConfig = {
  apiKey: "AIzaSyBWjkkSIS2DK3ku8zP92LatPFDzcTnOAaM",
  authDomain: "saftgate.firebaseapp.com",
  databaseURL: "https://saftgate-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "saftgate",
  storageBucket: "saftgate.firebasestorage.app",
  messagingSenderId: "533559910861",
  appId: "1:533559910861:web:5f142dcde62e6b8761a484",
  measurementId: "G-TD8GS7XQ23"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// 다른 파일에서 사용할 수 있도록 export
export const auth = getAuth(app);
export const db = getFirestore(app);
