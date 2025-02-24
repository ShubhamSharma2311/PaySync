import Heading from "../components/Heading";
import Paragraph from "../components/para";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <Heading>Sign Up</Heading>
        <Paragraph>Enter your information to create an account</Paragraph>
        <InputBox label="First Name" placeholder="John" />
        <InputBox label="Last Name" placeholder="Doe" />
        <InputBox label="Email" placeholder="johndoe@example.com" type="email" />
        <InputBox label="Password" placeholder="" type="password" />
        <Button>Sign Up</Button>
        <Footer />
      </div>
    </div>
  );
}
