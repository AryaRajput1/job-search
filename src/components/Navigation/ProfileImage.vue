<template>
  <img :src="imageLink"
  class="h-8 w-8 rounded-3xl object-contain  border-brand-blue-1 border-solid border"
  alt="User Profile Image"
  />
</template>
<script>
export default {
  name:'ProfileImage',
  data(){
    return {
      imageLink:'https://static.vecteezy.com/system/resources/previews/006/719/267/original/smiling-young-man-avatar-in-flat-cartoon-style-cute-male-character-boy-portrait-isolated-on-white-background-for-social-media-web-chat-vector.jpg'
    }
  }
}
</script>
