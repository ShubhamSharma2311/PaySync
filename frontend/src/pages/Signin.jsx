import Heading from "../components/Heading";
import Paragraph from "../components/para";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <Heading>Sign In</Heading>
        <Paragraph text="Enter your credentials to access your account" />

        <InputBox label="Email" placeholder="johndoe@example.com" type="email" />
        <InputBox label="Password" placeholder="" type="password" />

        <Button>Sign In</Button>
        <Footer children={{ text: "Don't have an account?", linkText: "Sign Up" }} to="/signup" />
      </div>
    </div>
  );
}
