
document.addEventListener("DOMContentLoaded", () => {
  // ✅ Firebase Config
  const firebaseConfig = {
    apiKey: "AIzaSyAbjfKTtyRuv8BCHVoF4nQ3R0apS8DFp-w",
    authDomain: "quickcare-16e49.firebaseapp.com",
    projectId: "quickcare-16e49",
    storageBucket: "quickcare-16e49.appspot.com",
    messagingSenderId: "716596316222",
    appId: "1:716596316222:web:1cd9794547113d92f4a96f"
  };

  // ✅ Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  // ✅ Detect and Show User Email
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("✅ Logged in as:", user.email);
      const emailSpan = document.getElementById("userEmail");
      if (emailSpan) {
        emailSpan.textContent = "Logged in as: " + user.email;
      }
    } else {
      console.warn("❌ No user found. Redirecting...");
      window.location.href = "login.html";
    }
  });

  // ✅ Logout Function (exposed globally)
  window.logout = function () {
    auth.signOut()
      .then(() => {
        console.log("✅ Logged out");
        localStorage.clear();
        setTimeout(() => {
          window.location.assign("login.html");
        }, 500);
      })
      .catch((error) => {
        console.error("Logout failed:", error);
        alert("Logout failed: " + error.message);
      });
  };

  // ✅ Select Hospital
  window.selectHospital = function (hospitalName) {
    localStorage.setItem("selectedHospital", hospitalName);
    window.location.href = "branches.html";
  };


console.log("Selected Hospital:", localStorage.getItem("selectedHospital"));
console.log("Selected Branch:", localStorage.getItem("selectedBranch"));



});