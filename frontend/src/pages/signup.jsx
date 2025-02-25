import Heading from "../components/Heading";
import Paragraph from "../components/para";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from 'axios'
import { replace, useNavigate } from "react-router-dom";
export default function SignUp() {
 
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState('')
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <Heading>Sign Up</Heading>
        <Paragraph>Enter your information to create an account</Paragraph>
        <InputBox onChange={(e)=>{
            setFirstname(e.target.value)
        }}
        label="First Name" placeholder="John" />
        <InputBox onChange = {(e)=>{
            setLastname(e.target.value)
        }}
        label="Last Name" placeholder="Doe" />
        <InputBox onChange = {(e)=>{
            setEmail(e.target.value)
        }}
         label="Email" placeholder="johndoe@example.com" type="email" />
        <InputBox onChange = {(e)=>{
            setPassword(e.target.value)
        }}
         label="Password" placeholder="" type="password" />
        <Button onClick={async ()=>{
         try {
          const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
            firstname,
            lastname,
            username,
            password
           })
           localStorage.setItem("token",response.data.token)
           navigate('/dashboard',{replace : true})
         } catch (error) {
            setError(error.response.data.msg);

         }
        }}>Sign Up</Button>
         
        <Footer children={{ text: "Already have an account?", linkText: "Sign In" }} to="/signin" />
        <div className="p-2  text-center text-xl text-red-600"> {error} </div>
      </div>
    </div>
  );
}
