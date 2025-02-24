import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate()
    return (
      <p className="text-sm text-center mt-4">
        Already have an account?{' '}
        <NavLink  className={"text-blue-500 hover:underline"} >Login</NavLink>
      </p>
    );
  }

  // className=