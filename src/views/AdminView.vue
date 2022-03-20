<template>
  <div class="w-full">
    <div class="">
      <div class="text-center text-5xl">Admin Editer</div>
      <p class="text-center text-3xl mt-5">Update data for travel ticket</p>
      <div class="flex justify-around mt-12">
        <div class="grid grid-rows-4 grid-flow-col gap-4 items-center flex-wrap">
          <div class="my-3 p-1 hover:bg-slate-200 shadow-lg shadow-blue-500/50 ease-in-out duration-200">
            <p class="">
              Doc name
              <input type="text" v-model="ticketname" class="w-20 ml-3 p-2" />
            </p>
          </div>
          <div class="my-3 p-2 hover:bg-slate-200 shadow-lg shadow-blue-500/50 ease-in-out duration-200">
            <p class="">
              Time <input type="time" v-model="time" class="ml-3" />
            </p>
          </div>
          <div class="my-3 p-2 hover:bg-slate-200 shadow-lg shadow-blue-500/50 ease-in-out duration-200">
            <p class="">
              Date <input type="date" v-model="date" class="w-32 ml-3" />
            </p>
          </div>
          <div class="my-3 p-2 hover:bg-slate-200 shadow-lg shadow-blue-500/50 ease-in-out duration-200">
            <p class="">
              From
              <select v-model="from" class="ml-3">
                <option v-for="(item, index) in fromLocation" :key="index">
                  {{ item }}
                </option>
              </select>
            </p>
          </div>
          <div class="my-3 p-2 hover:bg-slate-200 shadow-lg shadow-blue-500/50 ease-in-out duration-200">
            <p class="">
              To<select v-model="goto" class="ml-3">
                <option v-for="(item, index) in toLocation" :key="index">
                  {{ item }}
                </option>
              </select>
            </p>
          </div>
          <div class="my-3 p-2 hover:bg-slate-200 shadow-lg shadow-blue-500/50 ease-in-out duration-200">
            <p class="">
              Airline<select v-model="airline" class="w-24 ml-3">
                <option v-for="(item, index) in airlines" :key="index">
                  {{ item }}
                </option>
              </select>
            </p>
          </div>
          <div class="my-3 p-2 hover:bg-slate-200 shadow-lg shadow-blue-500/50 ease-in-out duration-200">
            <p class="">
              Price ticket<input
                class="w-20 ml-3"
                type="number"
                v-model="price"
              />
            </p>
          </div>
          <div class="my-3 p-2 text-center hover:bg-slate-200 shadow-lg shadow-blue-500/50 ease-in-out duration-200">
            <button @click="addTicket()">Add ticket</button>
          </div>
        </div>
      </div>
      <div class="text-center my-5">
            <button @click="readData()" class="p-1 text-center rounded-3xl hover:bg-slate-200 shadow-lg shadow-blue-500/50 ease-in-out duration-200">Show Data</button>
          </div>
      <div class="flex justify-center items-center">
          <table>
            <tr class="border-b bg-blue-100 border-green-400 max-w-2xl">
              <th class="py-2 px-3 text-center">Doc name</th>
              <th class="py-2 px-3 text-center">Time</th>
              <th class="py-2 px-3 text-center">Date</th>
              <th class="py-2 px-3 text-center">From</th>
              <th class="py-2 px-3 text-center">To</th>
              <th class="py-2 px-3 text-center">Airline</th>
              <th class="py-2 px-3 text-center">Price</th>
              <th class="py-2 px-3 text-center">Delete</th>
            </tr>
            <tr v-for="(item, index) in ShowTicket" :key="index">
              <td class="py-2 px-3 text-center">{{ item.name }}</td>
              <td class="py-2 px-3 text-center">{{ item.dateTicket }}</td>
              <td class="py-2 px-3 text-center">{{ item.timeTicket }}</td>
              <td class="py-2 px-3 text-center">{{ item.fromTicket }}</td>
              <td class="py-2 px-3 text-center">{{ item.toTicket }}</td>
              <td class="py-2 px-3 text-center">{{ item.airlineTicket }}</td>
              <td class="py-2 px-3 text-center">{{ item.priceTicket }}</td>
              <td class="py-2 px-3 text-center hover:bg-slate-200 shadow-lg shadow-blue-500/50 ease-in-out duration-200"><button @click="deleteDoc(item,index)">Remove</button></td>
            </tr>
          </table>
        </div>
    </div>
  </div>
</template>

<script>

// import doc, setDoc, getDocs, collection,deleteDoc db เพื่อเรียกใช้ข้อมูลบน firebase 

import { doc, setDoc, getDocs, collection,deleteDoc } from "firebase/firestore";
import { db } from "../plugins/firebaseInit";
export default {
  data() {
    return {
      airline: "",
      ticketname: "",
      time: "",
      date: "",
      from: "",
      goto: "",
      price: "",
      airlines: ["Air Asia", "Nok Air", "Bangkok Airline"],
      fromLocation: ["Bangkok", "Chiang Mai", "Nan"],
      toLocation: ["Bangkok", "Chiang Mai", "Nan"],
      ticket: [], 
      ShowTicket: [],
    };
  },
  methods: {
    //add ข้อมูลจาก firebase โดยการเรียกใช้จากชื่อของ doc และตัว subdoc
    async addTicket() {
      await setDoc(doc(db, "location", this.ticketname), {
        name: this.ticketname,
        timeTicket: this.time,
        dateTicket: this.date,
        fromTicket: this.from,
        toTicket: this.goto,
        airlineTicket: this.airline,
        priceTicket: this.price,
      });
      this.ticketname = '',
      this.time = "";
      this.date = "";
      this.from = "";
      this.goto = "";
      this.airline = "";
      this.price = "";
    },
    //อ่านค่าข้อมูลทั้งหมดที่อยู่ใน doc location ไม่ได้อ่านเป็นแบบ realtime
    async readData() {
      const querySnapshot = await getDocs(collection(db, "location"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.ShowTicket.push(doc.data());
      });
    },
    //ลบ Data ของ doc ใน firebase และลบค่าในตารางตามที่เรากด
    deleteDoc(item,index){
      this.ShowTicket.splice(index,1)
      deleteDoc(doc(db, "location", item.name));
    }
  },
};
</script>

<style scoped>

</style>>
