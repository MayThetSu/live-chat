import { ref } from 'vue';
import {auth} from '../firebase/config'
let error=ref(null);
let signOutUser=async()=>{
    try{
        await auth.signOut();
        console.log("user logged out");
    }catch(err){
        error.value=err.message;
        console.log(error.value);
    }
}

let signout=()=>{
    return {error,signOutUser}
}

export default signout;