// import React, { useState } from "react";
// import { auth } from '../../src/firebase'
// import { createUserWithEmailAndPassword } from "firebase/auth";
// const SigninUp = () => {
    
//     const [email, setEmail] = useState('')
//     const [password,setPassword] = useState('')

//     const signinUp = (e) => {
//         e.preventDefaul();
//         createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             console.log(userCredential);
//         }).catch((error) => {
//             console.log(error)
//         })
//     }

//     return (
//         <div>
//             <form onSubmit={signinUp}>
//                 <h1>Create accaut</h1>
//                 <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//                 <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
//                 <button type="button">Login</button>
//             </form>
//         </div>
//     )
// }

// export default SigninUp;