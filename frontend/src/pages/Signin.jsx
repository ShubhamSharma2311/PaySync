import Heading from "../components/Heading";
import Paragraph from "../components/para";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [username , setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState('')
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <Heading>Sign In</Heading>
        <Paragraph text="Enter your credentials to access your account" />

        <InputBox onChange={(e)=> setUsername(e.target.value)} label="Email" placeholder="johndoe@example.com" type="email"  />
        <InputBox onChange={(e)=> setPassword(e.target.value) }label="Password" placeholder="" type="password" />

        <Button onClick={ async ()=>{
          try {
            const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
              username,
              password
            })
            localStorage.setItem('token',response.data.token)
            navigate('/dashboard', {replace : true})
          } catch (error) {
            setError(error.response.data.msg)
          }
          
        }} >Sign In</Button>
        <Footer children={{ text: "Don't have an account?", linkText: "Sign Up" }} to="/signup" />
        <div className="p-2 text-xl text-center text-red-600">{error}</div>
      </div>
    </div>
  );
}
