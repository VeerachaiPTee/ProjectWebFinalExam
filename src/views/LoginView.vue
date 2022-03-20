<template>
  <div
    class="bg-[url('/src/assets/nouman-younas-TM4522xcNRs-unsplash.jpg')] min-h-screen min-w-full bg-center bg-cover"
  >
    <div class="w-full max-w-md m-auto text-white">
      <div class="text-center p-5">
        <p class="text-5xl animate-bounce">Sign in</p>
      </div>
      <div>
        <div class="m-5 flex justify-center">
          <div
            class="p-8 rounded-3xl shadow-2xl shadow-white /50 py-4 px-6 bg-black"
          >
            <div class="mb-5 rounded-lg">
              <p class="mb-3">Email</p>
              <input
                type="email"
                v-model="email"
                placeholder="example@gmail.com"
                class="text-black rounded-lg w-80 py-2 px-3 hover:bg-slate-200 shadow-lg shadow-blue-500/50 ease-in-out duration-200"
              />
            </div>
            <div class="mb-5 rounded-lg">
              <p class="mb-3">Password</p>
              <input
                type="password"
                v-model="password"
                placeholder="**********"
                class="text-black rounded-lg w-80 py-2 px-3 hover:bg-slate-200 shadow-lg shadow-blue-500/50 ease-in-out duration-200"
              />
            </div>
            <div class="flex justify-center mb-3">
              <button
                @click="login()"
                class="rounded-lg shadow-lg shadow-indigo-500/40 py-2 px-4 hover:shadow-indigo-500/75 ease-in-out duration-200 bg-gradient-to-b hover:from-slate-900 hover:to-slate-800"
              >
                Sign in
              </button>
            </div>
            <div class="text-center mb-3">
              <p>or</p>
            </div>
            <div class="flex justify-center">
              <div class="mr-4">
                <button
                  class="rounded-lg shadow-lg shadow-indigo-500/40 py-2 px-4 hover:shadow-indigo-500/75 ease-in-out duration-200 bg-gradient-to-b hover:from-slate-900 hover:to-slate-800"
                  @click="loginGoogle()"
                >
                  <img
                    src="https://img.icons8.com/color/50/000000/google-logo.png"
                    class="w-5"
                  />
                </button>
              </div>
              <div>
                <button
                  class="rounded-lg shadow-lg shadow-indigo-500/40 py-2 px-4 hover:shadow-indigo-500/75 ease-in-out duration-200 bg-gradient-to-b hover:from-slate-900 hover:to-slate-800"
                  @click="loginFacebook()"
                >
                  <img
                    src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
                    class="w-5"
                  />
                </button>
              </div>
            </div>
            <div class="mt-5 flex justify-center items-center">
              <div class="mr-14"><p>Don't have account</p></div>
              <div>
                <button
                  @click="getSignup()"
                  class="hover:text-red-400 ease-in-out duration-200 hover:underline decoration-red-500 decoration-2"
                >
                  Sign up now
                </button>
              </div>
            </div>
            <!-- <div class="mt-5">
              <div>
                <button class="ml-5 hover:text-red-400 ease-in-out duration-200 hover:underline decoration-red-500 decoration-2" @click="getLoginAdmin()">Sign in for admin</button>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import ส่วนของการ Login ด้วย email และ password Google account,Facbook

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "@/plugins/firebaseInit";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
      
        .then((userCredential) => {
          
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
          this.$router.replace("/appview");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          alert("Email or Password incorrect");
        });
    },
    loginGoogle() {
      const provider = new GoogleAuthProvider();
      //   const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          // ให้ไปที่หน้า appview โดยที่ไม่กลับมาหน้าเดิม
          this.$router.replace("/appview");
          // ...
        })
    },
    loginFacebook() {
      const provider = new FacebookAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;

          this.$router.replace("/appview");

          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);

          // ...
        });
    },

    // ลงทะเบียนใหม่โดยการไปหน้า signup
    getSignup() {
      this.$router.replace("/signup");
    },
  },
};
</script>

<style></style>
