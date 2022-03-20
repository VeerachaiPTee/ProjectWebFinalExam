<template>
  <div>
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
    </section>
    <footer class="text-center text-white mt-10" style="background-color: #caced1">
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
// เรียกใช้ component ของ navbar มาใช้

import NavbarTab from "@/components/NavbarTab.vue";
export default {
  components: {
    NavbarTab,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
