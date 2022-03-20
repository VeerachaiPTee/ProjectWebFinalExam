<template>
  <div
    class="bg-[url('/src/assets/circuit_board_art-wallpaper-1280x720.jpg')] min-h-screen min-w-full bg-center"
  >
    <div class="w-full max-w-md m-auto text-white">
      <div class="text-center p-5">
        <p class="text-5xl animate-bounce">Register</p>
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
                @click="signup()"
                class="rounded-lg shadow-lg shadow-indigo-500/40 py-2 px-4 hover:shadow-indigo-500/75 ease-in-out duration-200 bg-gradient-to-b hover:from-slate-900 hover:to-slate-800"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../plugins/firebaseInit";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      // const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          this.$router.replace("/appview");
          alert("Sign up success!!");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert("error");
          // ..
        });
    },
  },
};
</script>

<style></style>
