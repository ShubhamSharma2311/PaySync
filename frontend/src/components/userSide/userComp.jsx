import { useEffect, useState } from "react"
import Button from '../Button'
import Send from "../../pages/Send";
import { replace, useNavigate } from "react-router-dom";
import axios  from 'axios'
export default function UserComponent (){
    const [showAll, setShowAll] = useState(false);  // To show all users or not
    const USERS_TO_SHOW = 5;                        // Number of users to show first

    const [users, setUsers] = useState([]);
    const [filter,setFilter] = useState('')
    useEffect ( ()=> {
      
      axios.get('http://localhost:3000/api/v1/user/bulk?filter='+filter).then(response=>setUsers(response.data.user))
         
    }, [filter])
    const displayedUsers = showAll ? users : users.slice(0, USERS_TO_SHOW);

    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e)=>setFilter(e.target.value)} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
        {displayedUsers.map(user => <User user={user} key={user._id} />)}
        </div>
        
        {users.length > USERS_TO_SHOW && (
        <button
           className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
           onClick={() => setShowAll(!showAll)}  // This will toggle showAll between true/false
  >
          {showAll ? "See less" : "See more"}
          </button>
         )}

      </>
}

function User({user}) {
    const navigate = useNavigate();
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstname[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstname} {user.lastname}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center px-5 mx-2">
            <Button label={"Send Money"} onClick={()=>{navigate('send?id=' + user._id + '&name='+ user.firstname, replace(false) )}} >Send money</Button>
        </div>
    </div>
    
}