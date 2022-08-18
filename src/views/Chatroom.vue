<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core';
import getUser from '../composables/getUser';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import NewChatForm from '@/components/NewChatForm.vue';
import ChatWindow from '../components/ChatWindow.vue'
export default {
  components:{Navbar,NewChatForm,ChatWindow},
  setup(){
    let{user}=getUser();
    let router=useRouter();
    watch(user,()=>{
      if(!user.value){
        router.push("/");
      }
    })
  }
}
</script>

<style>
   
</style>