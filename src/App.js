// import Signin from './components/signin'
// import SigninUp from './components/signingUp';
// // import firebase from './firebase'

// function App() {

//   return (
//     <div className="App">
//         <Signin/>
//         <SigninUp/>
        
//     </div>
//   );
// }

// export default App;
import {signInWithGoogle } from './firebase'

function App() {
  return (
    <div>
      <button onClick={signInWithGoogle}> Sign in With Google</button>
    </div>
  );
}

export default App;
