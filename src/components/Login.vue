<template>
  <h2>Login</h2>
  <form @submit.prevent="login">
    
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div v-if="error" class="error">{{error}}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignin from '../composables/useSignin'
export default {
    setup(){
         
        let email=ref("");
        let password=ref("");
        let {error,signIn}=useSignin();
        let login=async()=>{
          let res = await signIn(email.value,password.value);
          if(res){ 
            console.log(res.user);
          } 
        }
        return {email,password,login,error};
    }
}
</script>

<style>
</style>