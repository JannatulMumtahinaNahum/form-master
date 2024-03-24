import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StateFullForm from './components/StateFullForm/StateFullForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {


//   const handleSignUpSubmit = data => {
//     console.log('sign up' , data)
// }
  
// const handleUpdateProfile = data => {
//   console.log('update profile' , data)
// }
  return (
    <>
      
      <h1>Form Master</h1>



      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      

{/*       
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>Please sign up right now!</p>
        </div>
      </ReusableForm>

      <ReusableForm formTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Update profile</h2>
          <p>Always keep your profile updated!</p>
        </div>
      </ReusableForm> */}



      <GrandPa></GrandPa>
     
    </>
  )
}

export default App
