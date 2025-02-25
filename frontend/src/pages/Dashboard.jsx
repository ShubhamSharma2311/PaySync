import { useEffect, useState } from "react";
import AppBar from "../components/userSide/Appbar";
import { Balance } from "../components/userSide/balance";
import UserComponent from "../components/userSide/userComp";
import axios from "axios";

export default function UserDashBoard(){
  const [value,setValue] = useState(0);
  useEffect (()=>{
    axios.get('http://localhost:3000/api/v1/account/balance').then((res)=>{
      setValue(res.data.Balance)
    })

  },[value])
    return (
      <div>
        <AppBar/>
        <Balance value={value}/>
        <UserComponent/>
      </div>
    )
}