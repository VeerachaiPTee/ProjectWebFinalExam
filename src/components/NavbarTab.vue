<template>

<!-- component แสดงส่วนของ navbar ที่จะแสดงในแต่ละหน้า สามารถเรียกใช้ได้ในหน้าของ view -->
  <div id="navbar">
    <nav
      class="bg-gradient-to-b from-cyan-500 to-indigo-500 text-slate-200 font-semibold py-1"
    >
      <div class="flex items-center justify-between">
        <div class="flex">
          <div class="mx-4">
            <p class="p-3"><RouterLink to="/appview">Home</RouterLink></p>
          </div>
          <div class="mx-4">
            <p class="p-3"><button @click="admin()">Admin zone</button></p>
          </div>
        </div>
        <div class="flex">
          <div class="mx-4">
            <p class="p-3" v-if="loginOnline == 1">{{ email }}</p>
          </div>
          <button class="p-3" @click="login()" v-if="loginStatus == 0">
            Login
          </button>
          <div class="mx-4">
            <button class="p-3" @click="signup()" v-if="loginStatus == 0">
              Sign up
            </button>
            <button class="p-3" @click="logout()" v-if="loginStatus == 1">
              Log out
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../plugins/firebaseInit";

export default {
  data() {
    // กำหนดค่าของรูปภาพของข้อมูลและ status ของการโชว์ email ของผู้ที่ล๊อคอินเข้ามา
    return {
      loginStatus: 0,
      loginOnline: 0,
      image: "",
      email: "",
    };
  },
  // เช็คสถานะของการล๊อคอิน
  mounted() {
    this.checklogin();
  },
  methods: {

    // function ของ button บน navbar ของการตรวจเช็คการลีอคอินถ้ามี uid 
    // ตรงกับที่ตั้งไว้สามารถเข้าหน้าล๊อคอินได้ ถ้าไม่จะแสดง alert มาเตือนว่าเป็น user
    // email devtee1@gmail.com password a#12345 จะเป็น email ของแอดมิน
    admin() {
      onAuthStateChanged(auth, (user) => {
        if (user.uid == "Swls0NEomSd8PtMA2bRkhGVJUSn1") {
          const uid = user.uid;
          console.log(uid); 
          alert("Go to admin zone");
          this.$router.push("/adminview");
        } else {
          alert("You are user");
        }
      });
    },
    // function ของการตรวจเช็คการลีอคอินถ้ามี email ตรงกับที่ตั้งไว้จะโชว์ email แต่ถ้า status ของล๊อคอินเป็น 0 จะขึ้นแต่คำว่า Login
    checklogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.loginOnline = 1;
          this.loginStatus = 1;

          this.email = user.email;
        } else {
        }
      });
    },
    // function ให้ push ไปยังหน้า Login แบบกลับมาหน้าเดิมได้
    login() {
      this.$router.push("/login");
    },
    // function ให้ push ไปยังหน้า signup แบบกลับมาหน้าเดิมได้
    signup() {
      this.$router.push("/signup");
    },

    // function ให้ replace ไปยังหน้า default แบบย้อนกลับไมไ่ด้
    logout() {
      // const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.loginStatus = 0;
          this.loginOnline = 0;
          // Sign-out successful.
          this.$router.replace("/");
          alert("Logout success");
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>

<style></style>
