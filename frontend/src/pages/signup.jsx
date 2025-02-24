import Heading from "../components/Heading";
import Paragraph from "../components/para";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from 'axios'
export default function SignUp() {
 
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <Heading>Sign Up</Heading>
        <Paragraph>Enter your information to create an account</Paragraph>
        <InputBox onChange={(e)=>{
            setFirstname(e.target.value)
        }}
        label="First Name" placeholder="John" />
        <InputBox oncChange = {(e)=>{
            setLastname(e.target.value)
        }}
        label="Last Name" placeholder="Doe" />
        <InputBox oncChange = {(e)=>{
            setEmail(e.target.value)
        }}
         label="Email" placeholder="johndoe@example.com" type="email" />
        <InputBox oncChange = {(e)=>{
            setPassword(e.target.value)
        }}
         label="Password" placeholder="" type="password" />
        <Button onClick={()=>{
           axios.put('http://localhost/3000/api/vi/user/signup',{
            firstName,
            lastName,
            email,
            password
           })
        }}>Sign Up</Button>
        <Footer children={{ text: "Already have an account?", linkText: "Sign In" }} to="/signin" />
      </div>
    </div>
  );
}
