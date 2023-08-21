<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto"
      >
        <router-link class="flex h-full items-center text-xl" to="/">{{
          company
        }}</router-link>
        <nav class="ml-12 h-full">
          <ul class="flex list-none h-full">
            <li
              v-for="menuItem in menuItems"
              class="ml-9 h-full first:m-0"
              :key="menuItem"
            >
              <a class="flex h-full items-center py-2.5 cursor-pointer">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button
            v-else
            type="primary"
            @click="handleClick"
            text="Sign In"
          />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>
<script>
import ActionButton from "../Shared/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
import TheSubnav from "./TheSubnav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav,
  },
  data() {
    return {
      company: "Job Careers",
      menuItems: [
        "Teams",
        "Location",
        "Life at Job Careers",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    handleClick() {
      this.isLoggedIn = true;
    },
  },
};
</script>
