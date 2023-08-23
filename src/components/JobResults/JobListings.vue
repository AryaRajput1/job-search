<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <JobListing v-for="job in displayJobs" :job="job" :key="job.id" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link role="link" v-if="previousPage" :to="{
            name: 'JobResults',
            query: {
              page: previousPage
            }
          }" class="mx-3 text-sm font-semibold text-brand-blue-1">Previous</router-link>
          <router-link role="link" v-if="nextPage" :to="{
            name: 'JobResults',
            query: {
              page: nextPage,
            }
          }" class="mx-3 text-sm font-semibold text-brand-blue-1">Next</router-link>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import axios from "axios";
import JobListing from "./JobListing.vue";

export default {
  name: "JobListings",
  data() {
    return {
      jobs: [],
    };
  },
  components: {
    JobListing,
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/jobs");
    this.jobs = response.data;
  },
  computed: {
    currentPage() {
      return parseInt(this.$route.query.page || "1");
    },
    previousPage() {
      const prevPage = this.currentPage-1;
      return prevPage >=1 ? prevPage : undefined;
    },
    nextPage() {
      const maxPage =Math.ceil(this.jobs.length / 10);
      return this.currentPage + 1 <= maxPage ? this.currentPage + 1 : undefined;
    },
    displayJobs() {
      const page = this.currentPage;
      const offset = (page - 1) * 10;
      return this.jobs.slice(offset, offset + 10);
    },
  },
};
</script>
