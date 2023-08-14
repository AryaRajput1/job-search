<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto"
      >
        <a class="flex h-full items-center text-xl" :href="url">{{
          company
        }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex list-none h-full">
            <li
              v-for="menuItem in menuItems"
              class="ml-9 h-full first:m-0"
              :key="menuItem"
            >
              <a class="flex h-full items-center py-2.5 cursor-pointer">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ProfileImage v-if="isLoggedIn"/>
          <action-button v-else type="primary" @click="handleClick" text="Sign In"/>

        </div>
      </div>
    </div>
  </header>
</template>
<script>
import ActionButton from './ActionButton.vue'
import ProfileImage from './ProfileImage.vue'

export default {
  name: "MainNav",
  components:{
    ActionButton,
    ProfileImage
  },
  data() {
    return {
      company: "Job Careers",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Location",
        "Life at Job Careers",
        "Students",
        "Jobs",
      ],
      isLoggedIn:false,
    };
  },
  methods:{
    handleClick(){
      this.isLoggedIn = true;
    }
  }
};
</script>
