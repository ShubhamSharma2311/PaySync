import { Link , useNavigate} from "react-router-dom";

export default function AppBar() {
  return (
    <div className="flex justify-between items-center px-6 py-3 border-b shadow-sm">
      <Link to="/" className="text-lg font-semibold">
      <span className="text-gray-800">Pay</span>
      <span className="text-blue-500">Sync</span>
      </Link>
      <div className="flex items-center space-x-3">
        <span className="text-sm">Hello</span>
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-200 text-sm font-medium">
          U
        </div>
      </div>
      <LogoutButton/>
    </div>
  );
}

 function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-sm"
    >
      Logout
    </button>
  );
}