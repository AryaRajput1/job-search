<template>
    <form class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3" @submit.prevent="searchForJobs">
        <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
        <div class="flex flex-nowrap w-full h-full text-base font-light ">
            <div class="flex h-full flex-1 relative items-center pr-3">
                <label for="role" class="absolute left-0 -top-10 ">Role</label>
                <TextInput id="role" placeholder="Software Engineer" v-model="role"/>
            </div>
            <span class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3">in</span>
            <div class="flex h-full flex-1 relative items-center pr-3">
                <label for="location" class="absolute left-0 -top-10 ">Where?</label>
                <TextInput id="location" placeholder="Los Angles" class="pl-2" v-model="location"/>
            </div>
            <ActionButton type="secondary" text="Search" class="rounded-r-3xl" />
        </div>
    </form>
</template>
<script >
import ActionButton from '../Shared/ActionButton.vue'
import TextInput from '../Shared/TextInput.vue'
export default {
    name: "JobSearchForm",
    components: {
        ActionButton,
        TextInput
    },
    data(){
        return {
            role:'',
            location:''
        }
    },
    methods:{
        updateRole(e){
            console.log(e)
            this.role = e
        },
        updateLocation(e){
            console.log(e)
            this.location = e
        },
        searchForJobs(){
            this.$router.push({
                name: 'JobResults',
                query: {
                    role: this.role,
                    location: this.location
                }
            })
        }
    }
}
</script>
