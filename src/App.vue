<template>
  <div class="header">
    <div class="border-b border-primary border-opacity-10">
      <div class="max-w-6xl mx-auto py-4 px-4 sm:px-8">

        <div class="grid grid-cols-5 w-full ">
          <div class="col-span-4 sm:col-span-4 md:col-span-3 flex space-x-16">

            <div class="self-center">
              <img src="@/assets/images/logo.svg" class="self-center">
            </div>
            <ul class="hidden md:flex  space-x-8 text-sm self-center nav">
              <li class="hover:opacity-50"><a href="#" class="active">Home</a></li>
              <li class="hover:opacity-50"><a href="#" class="">Community</a></li>
              <li class="hover:opacity-50"><a href="#" class="">Blog</a></li>
              <li class="hover:opacity-50"><a href="#" class="">Events</a></li>
            </ul>

          </div>

          <div class="hidden md:flex col-span-2 justify-end space-x-8  ">

            <div class="relative flex border-b border-light ">
              <img src="@/assets/images/search.svg" class="self-center">
              <input placeholder="Search Here..."
                class="pl-4 bg-transparent py-2.5 px-2 focus:outline-0 text-xs  self-center w-28">
            </div>

            <button class="btn_primary"> Log in</button>
          </div>

          <div class="col-span-1 md:hidden  self-center flex justify-end">
            <button class="btn_primary px-2 py-2 rounded bg-transparent border border-primary text-primary self-center"
              @click="state.show_menu = !state.show_menu">Menu</button>
            <div class="w-full absolute left-0 mx-auto top-20 bg-white z-10" v-if="state.show_menu">
              <div class="space-y-4 bg-white p-3 border border-primary border-opacity-10 rounded -mt-3 shadow">
                <ul class="nav ">
                  <li class="my-2"><a href="#" class="active py-2">Home</a></li>
                  <li class="my-2"><a href="#" class="py-2">Community</a></li>
                  <li class="my-2"><a href="#" class="py-2">Blog</a></li>
                  <li class="my-2"><a href="#" class="py-2">Events</a></li>
                </ul>

                <div class="relative flex border-b border-light ">
                  <img src="@/assets/images/search.svg" class="self-center">
                  <input placeholder="Search Here..."
                    class="pl-4 bg-transparent py-2.5 px-2 focus:outline-0 text-xs  self-center w-28">
                </div>

                <button class="btn_primary py-2"> Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Banner -->
    <div class="max-w-6xl mx-auto pb-10 py-10 sm:py-8 md:py-4 md:pb-20 px-4 sm:px-8">
      <div class="grid grid-cols-5 pt-2 overflow-hidden">
        <div class="col-span-5 sm:col-span-2 flex">

          <div class="self-center space-y-8 animate__animated animate__fadeInLeft">
            <div>
              <buttton
                class=" btn_primary bg-opacity-10 rounded-lg text-primary font-medium hover:text-white cursor-pointer">
                Netbook Community
              </buttton>
            </div>
            <h1 class="text-5xl font-bold ">Your Solutions For Community!</h1>
            <p class="paragraph text-sm">More than 2 billion people in over countries use socibook to stay in touch with
              friend & family.</p>

            <div class="flex space-x-6">

              <button class="btn_primary py-4">About More</button>
              <button class="btn_primary py-4 bg-transparent border border-primary text-primary font-medium">Invite
                Friend</button>
            </div>
          </div>
        </div>

        <div class="hidden sm:flex sm:col-span-3 flex justify-end animate__animated animate__fadeInRight">
          <img src="@/assets/images/group.svg" class="self-center  h-auto w-auto  object-right">
        </div>
      </div>
    </div>
  </div>

  <!-- About US -->
  <div class="max-w-6xl mx-auto py-6 sm:py-10 md:py-16 px-4 sm:px-8">
    <div class="grid grid-cols-2 flex">
      <div class="col-span-2 sm:col-span-1 space-y-6 max-w-md self-center">
        <a class="text-primary">Whats Netbooks?</a>

        <h2 class="text-4xl font-bold">Why Join to Netbook Social Network?</h2>

        <p class="paragraph">Recent surveys has indicated that small businesses recognise the need they have to connect
          with consumer.</p>

        <ul class="space-y-2">
          <li class="flex space-x-2"> <img src="@/assets/images/radio.svg" class="self-center "> <span>Groups</span></li>
          <li class="flex space-x-2"><img src="@/assets/images/radio.svg" class="self-center "><span>Messages</span></li>
          <li class="flex space-x-2"><img src="@/assets/images/radio.svg"
              class="self-center animate__animated animate__fadeInUp"><span>Share</span></li>
        </ul>
      </div>
      <div class="col-span-2 sm:col-span-1">
        <div class="grid grid-cols-2 gap-6 py-4">
          <div class="col-span-1 items-center flex">
            <img src="@/assets/images/about_one.svg"
              class="self-center animate__animated animate__fadeInUp animate__delay-0.2s">
          </div>
          <div class="col-span-1 flex-col space-y-6 ">
            <img src="@/assets/images/about_two.svg" class="self-center animate__animated animate__fadeInUp">
            <img src="@/assets/images/about_three.svg"
              class="self-center animate__animated animate__fadeInUp  animate__delay-0.5s">
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Acheivements -->
  <div class="max-w-6xl mx-auto py-6 sm:py-10 md:py-16 px-4 sm:px-8">
    <div class="grid grid-cols-3 gap-10">

      <div
        class="col-span-3 md:col-span-1 border border-primary border-opacity-10 rounded-xl hover:border-none hover:shadow-2xl p-8 transition transition-smooth space-y-6">
        <div class="flex space-x-4">
          <img src="@/assets/images/star.svg" class="self-center">
          <h4 class="self-center text-lg font-semibold">4.8 Rating</h4>
        </div>

        <div class="flex space-x-2 ">
          <div class="flex self-center">
            <img src="@/assets/images/pgroup_3.svg" class="self-center -ml-4">
            <img src="@/assets/images/pgroup_2.svg" class="self-center -ml-8">
            <img src="@/assets/images/pgroup_1.svg" class="self-center -ml-8">
          </div>

          <h4 class="self-center text-md font-medium -mt-1"><span class="text-primary">+836</span> Members</h4>
        </div>

        <p class="paragraph text-[#8C8C8C]">More than 2 billion we people over countries use socibooks we to stay in touch
          with friends.</p>

        <div>
          <a class="text-primary font-medium flex space-x-2">
            <span class="self-center">Join Our Community</span>
            <img src="@/assets/images/arrow-right-blue.svg" class="self-center text-primary">
          </a>
        </div>
      </div>
      <div
        class="col-span-3 md:col-span-1 border border-primary border-opacity-10 rounded-xl hover:border-none hover:shadow-2xl p-8 transition space-y-6">

        <div class="flex space-x-4">
          <img src="@/assets/images/trophy.svg" class="self-center">
          <h4 class="self-center text-lg font-semibold">Awwwards</h4>
        </div>

        <div class="flex space-x-2 ">
          <img src="@/assets/images/github.svg" class="self-center -ml-2">

          <h4 class="self-center text-md font-medium -mt-1">Best of <span class="text-primary">2021</span> on Github</h4>
        </div>
        <p class="paragraph text-[#8C8C8C]">More than 2 billion we people over countries use socibooks we to stay in
          touch with friends.</p>

        <div>
          <a class=" font-medium flex space-x-2">
            <span class="self-center">Go To Awards</span>
            <img src="@/assets/images/arrow-right-grey.svg" class="self-center ">
          </a>
        </div>

      </div>
      <div class="col-span-3 md:col-span-1 p-6 py-2 space-y-4">
        <a class="text-primary">Our Acheivement</a>
        <h2 class="text-2xl font-bold">We are Connecting You The Digital Life.</h2>
        <p class="paragraph">The scope the Social Media becomes crucial Is helps the business to directly engage with
          their needs and wants.</p>

        <button class="btn_primary flex space-x-2   shadow shadow-primary/50">
          <span class="self-center">Discover me</span>
          <img src="@/assets/images/arrow-right.svg" class="self-center">
        </button>
      </div>

    </div>
  </div>

  <!-- Members -->
  <div class="max-w-6xl mx-auto py-6 sm:py-10 md:py-16 px-4 sm:px-8 space-y-10">

    <div class="text-center max-w-sm space-y-2 mx-auto">
      <div class="text-center"> <a class="text-primary font-medium ">Join Our Community</a>
      </div>
      <h2 class="text-4xl font-bold">Our Active Members</h2>
      <p class="paragraph">when an unknown printer took a galley of type and meeting fari scrambled it.</p>
    </div>

    <div
      class="bg-primary rounded-lg bg-opacity-10 w-full md:max-w-sm p-2 mx-auto flex flex-col sm:flex-row  justify-between">
      <button @click="state.active_tab = 'one'" class="btn_primary"
        :class="state.active_tab === 'one' ? '' : 'bg-opacity-0 text-[#2F2C4A] font-medium shadow-none hover:bg-opacity-100 hover:text-white'">Newst</button>
      <button @click="state.active_tab = 'two'" class="btn_primary"
        :class="state.active_tab === 'two' ? '' : 'bg-opacity-0 text-[#2F2C4A] font-medium shadow-none hover:bg-opacity-100 hover:text-white'">Popular</button>
      <button @click="state.active_tab = 'three'" class="btn_primary"
        :class="state.active_tab === 'three' ? '' : 'bg-opacity-0 text-[#2F2C4A] font-medium shadow-none hover:bg-opacity-100 hover:text-white'">Active</button>
    </div>

    <div class="grid grid-cols-4 gap-6">

      <div
        class="col-span-4 sm:col-span-2 md:col-span-1 px-3 py-8 space-y-1 text-center hover:shadow-2xl rounded-xl border border-[#F3F3F3] border-width-[2px]    ">
        <img src="@/assets/images/user_one.svg" class="self-center mx-auto">

        <h2 class="text-xl font-semibold">Fahim Rahman</h2>
        <p class="paragraph">@rahman</p>
      </div>
      <div
        class="col-span-4 sm:col-span-2 md:col-span-1 px-3 py-8 space-y-1 text-center hover:shadow-2xl rounded-xl border border-[#F3F3F3] border-width-[2px] ">
        <img src="@/assets/images/user_two.svg" class="self-center mx-auto">

        <h2 class="text-xl font-semibold">Kazi Rehman</h2>
        <p class="paragraph">@Rahman</p>
      </div>
      <div
        class="col-span-4 sm:col-span-2 md:col-span-1 px-3 py-8 space-y-1 text-center hover:shadow-2xl rounded-xl border border-[#F3F3F3] border-width-[2px] ">
        <img src="@/assets/images/user_three.svg" class="self-center mx-auto">

        <h2 class="text-xl font-semibold">Masterero Ali</h2>
        <p class="paragraph">@Master</p>
      </div>
      <div
        class="col-span-4 sm:col-span-2 md:col-span-1 px-3 py-8 space-y-1 text-center hover:shadow-2xl rounded-xl border border-[#F3F3F3] border-width-[2px] ">
        <img src="@/assets/images/user_four.svg" class="self-center mx-auto">

        <h2 class="text-xl font-semibold">Alia Karon</h2>
        <p class="paragraph">@Alia</p>
      </div>




    </div>

  </div>



  <!-- Footer -->
  <div class="bg-[#2B2B39] ">
    <div class="max-w-6xl mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-8 space-y-10">

      <div class="grid grid-cols-6 gap-1 space-y-4 md:space-y-0">
        <div class="col-span-6  md:col-span-1 self-center ">
          <img src="@/assets/images/logo-light.svg" class="self-center mx-auto md:ml-0">
        </div>

        <div class="col-span-6 md:col-span-4 grid grid-flow-row md:grid-flow-col auto-rows-max md:grid-rows-1 ">
          <div class=" self-center ">
            <p class="text-white text-center">Home</p>
          </div>
          <div class=" self-center">
            <p class="text-white text-center">Resources</p>
          </div>
          <div class=" self-center">
            <p class="text-white text-center">Community</p>
          </div>
          <div class=" self-center">
            <p class="text-white text-center">Members</p>
          </div>
        </div>

        <div class="col-span-6  md:col-span-1 self-center flex space-x-2 justify-center md:justify-end">
          <div>
            <img src="@/assets/images/t.svg" class="self-center object-contain">
          </div>
          <div>
            <img src="@/assets/images/i.svg" class="self-center object-contain">
          </div>
          <div>
            <img src="@/assets/images/f.svg" class="self-center object-contain">
          </div>
          <div>
            <img src="@/assets/images/in.svg" class="self-center object-contain">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

let state = reactive({
  show_menu: false,
  active_tab: "three"
})
</script>


