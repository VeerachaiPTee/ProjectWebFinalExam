<template>
  <div id="appview">
    <header>
      <NavbarTab />
    </header>
    <section>
      <div class="">
        <div
          class="h-72 flex justify-center items-center bg-[url('/src/assets/UZNgqr.jpg')] bg-cover bg-center"
          id="contentheader"
        >
          <div class="text-center">
            <p class="text-6xl font-semibold uppercase">BOOKING travel</p>
          </div>
        </div>

        <!-- selectprovince -->
        <div class="text-center pt-10">
          <div class="text-5xl uppercase">
            <p>popular attractions in thailand</p>
          </div>
          <div class="flex justify-center items-center pt-10 text-xl">
            <div class="text-center mx-5">
              <button
                class="bg-slate-200 rounded-full w-36 h-36 shadow-2xl hover:shadow-cyan-200/100"
              >
                <img
                  src="/src/assets/1_9395_02.jpg"
                  class="rounded-full w-36 h-36"
                />
              </button>
              <p>Bangkok</p>
            </div>
            <div class="text-center mx-5">
              <button
                class="bg-slate-400 rounded-full w-36 h-36 shadow-2xl hover:shadow-pink-200/100"
              >
                <img
                  src="/src/assets/1_7401_02.jpg"
                  class="rounded-full w-36 h-36"
                />
              </button>
              <p>Chiang Mai</p>
            </div>
            <div class="text-center mx-5">
              <button
                class="bg-slate-400 rounded-full w-36 h-36 shadow-2xl hover:shadow-green-200/100"
              >
                <img
                  src="/src/assets/4-6660.png"
                  alt=""
                  class="rounded-full w-36 h-36"
                />
              </button>
              <p>Nan</p>
            </div>
          </div>
        </div>
      </div>

      <!-- table show ticket -->

      <div class="mt-10">
        <div>
          <div class="text-center text-3xl">Ticket list on sell</div>
          <div class="flex justify-center mt-4 text-2xl font-semibold">
            <button
              @click="readData()"
              class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold rounded-3xl hover:shadow-xl shadow p-3 animate-[bounce_2s_ease-in-out_infinite]"
            >
              Show ticket
            </button>
          </div>
          <table class="mt-3 justify-center m-auto">
            <tr class="border-b bg-blue-100 border-blue-200 max-w-3xl">
              <th class="py-2 px-7 text-center">Time</th>
              <th class="py-2 px-5 text-center">Date</th>
              <th class="py-2 px-5 text-center">From</th>
              <th class="py-2 px-5 text-center">To</th>
              <th class="py-2 px-5 text-center">Airline</th>
              <th class="py-2 px-5 text-center">Price</th>
              <th class="py-2 px-5 text-center">Status</th>
            </tr>
            <tr
              v-for="(item, index) in ticketshow"
              :key="index"
              class="border-b bg-green-100 border-green-200 max-w-3xl"
            >
              <td class="py-2 px-7 text-center">{{ item.dateTicket }}</td>
              <td class="py-2 px-5 text-center">{{ item.timeTicket }}</td>
              <td class="py-2 px-5 text-center">{{ item.fromTicket }}</td>
              <td class="py-2 px-5 text-center">{{ item.toTicket }}</td>
              <td class="py-2 px-5 text-center">{{ item.airlineTicket }}</td>
              <td class="py-2 px-5 text-center">{{ item.priceTicket }}</td>
              <td
                class="py-2 px-5 text-center hover:bg-purple-500 ease-in-out duration-700"
              >
                <button @click="addCart(item, index)">Buy</button>
              </td>
            </tr>
          </table>
          <div class="mt-10">
            <div class="text-center text-3xl">Show ticket to buy</div>
            <div class="text-center font-semibold text-3xl">
              <p>
                Total {{ total() }} ฿
                <button
                  @click="deleteTicket2(item)"
                  class="py-1 px-3 text-center rounded-3xl bg-indigo-200 hover:bg-indigo-400 duration-700"
                >
                  Confirm
                </button>
              </p>
            </div>
            <table class="mt-3 justify-center m-auto">
              <tr class="border-b bg-blue-100 border-blue-200 max-w-3xl">
                <th class="py-2 px-7 text-center">Time</th>
                <th class="py-2 px-5 text-center">Date</th>
                <th class="py-2 px-5 text-center">From</th>
                <th class="py-2 px-5 text-center">To</th>
                <th class="py-2 px-5 text-center">Airline</th>
                <th class="py-2 px-5 text-center">Price</th>
                <th class="py-2 px-5 text-center">Status</th>
              </tr>
              <tr
                v-for="(item, index) in cartPurchase"
                :key="index"
                class="border-b bg-green-100 border-green-200 max-w-3xl"
              >
                <td class="py-2 px-7 text-center">{{ item.cartTime }}</td>
                <td class="py-2 px-5 text-center">{{ item.cartDate }}</td>
                <td class="py-2 px-5 text-center">{{ item.cartFrom }}</td>
                <td class="py-2 px-5 text-center">{{ item.cartTo }}</td>
                <td class="py-2 px-5 text-center">{{ item.cartAirline }}</td>
                <td class="py-2 px-5 text-center">{{ item.cartPrice }}</td>
                <td>
                  <button
                    @click="deleteTicket1(index)"
                    class="py-2 px-5 text-center hover:bg-red-400 duration-700"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
    <footer
      class="text-center text-white mt-10"
      style="background-color: #caced1"
    >
      <div class="container p-6">
        <div class="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
          <div class="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
          <div class="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
          <div class="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
          <div class="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
          <div class="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
          <div class="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2050 Copyright:
        <a class="text-white" href="https://tailwind-elements.com/"
          >Travel Thailand</a
        >
      </div>
    </footer>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../plugins/firebaseInit";
import NavbarTab from "@/components/NavbarTab.vue";
export default {
  components: {
    NavbarTab,
  },
  data() {
    return {
      ticketshow: [],
      cartPurchase: [],
      status: 0,
    };
  },

  //่ อ่านค่าข้อมูล ที่อยู่ใน doc และเก็บเข้าไปใน array ของ ticketshow
  methods: {
    async readData() {
      const querySnapshot = await getDocs(collection(db, "location"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.ticketshow.push(doc.data());
      });
    },
    addCart(item) {
      this.cartPurchase.push({
        cartTime: item.dateTicket,
        cartDate: item.timeTicket,
        cartFrom: item.fromTicket,
        cartTo: item.toTicket,
        cartAirline: item.airlineTicket,
        cartPrice: item.priceTicket,
        cartName: item.name,
      });
    },

    //ฟังชั่นการลบบัตร ถ้าลบจะมีแจ้งเตือนว่า ต้องการลบบัตรหรือไม่
    deleteTicket1(index) {
      alert("Do you want remove this ticket ?");
      confirm(this.cartPurchase.splice(index, 1));
    },
    //ฟังชั่นการยืนยันการซื้อ โดนการแจ้งเตือนเมื่อกดปุ่มจ่ายเงินและแจ้งเตือนว่า ชำระเรียบร้อย
    deleteTicket2(item) {
      this.cartPurchase.splice(item);
      alert("Purchase success");
    },
    //ฟังชั่นการคำนวนเงินโดนการรวมค่าของราคา
    total: function () {
      var sum = 0;
      this.cartPurchase.forEach(function (item) {
        sum += item.cartPrice;
      });
      return sum;
    },
  },
};
</script>

<style scoped>
#appview {
  background-color: rgb(248, 241, 232);
}
</style>
>
