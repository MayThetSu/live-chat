import { auth } from '@/firebase/config';
import { ref } from '@vue/reactivity';
let user=ref(auth.currentUser);
auth.onAuthStateChanged((_user)=>{
    user.value=_user;
})

let getUser=()=>{
    return {user};
}

export default getUser;