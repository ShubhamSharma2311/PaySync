import {NavLink, replace, useNavigate} from 'react-router-dom'

export default function Footer({ children, to }) {
  const navigate = useNavigate();
  return (
    <p className="text-sm text-center mt-4">
      {children.text} {" "}
      <button
        className="text-blue-500 hover:underline"
        onClick={() => navigate(to, {replace : true})}
      >
        {children.linkText}
      </button>
    </p>
  );
}


  // x