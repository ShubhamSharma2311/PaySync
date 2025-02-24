import AppBar from "../components/userSide/Appbar";
import { Balance } from "../components/userSide/balance";
import UserComponent from "../components/userSide/userComp";

export default function UserDashBoard(){
    return (
      <div>
        <AppBar/>
        <Balance/>
        <UserComponent/>
      </div>
    )
}