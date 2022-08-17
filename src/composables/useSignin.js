import { ref } from "vue";
import { auth } from '../firebase/config'
let error=ref(null);
let signIn=async(email,password)=>{
    try{
        let res = await auth.signInWithEmailAndPassword(email,password);
        if(!res){
            throw new Error("can't login account");
        }
        return res;
    }catch(err){
       error.value=err.message; 
    }
}

let useSignin = ()=>{
    return {error,signIn};
}

export default useSignin;