import { useEffect } from 'react';
import ButtomNav from "./ButtomNav";
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser,selectCurrentUser} from "../redux/slice/currentUserSlice";
import { User } from '../interfaces/models';
const HomePage = () => {
  const [cookies] = useCookies(['token']);
  const token = cookies.token;
  const dispatch=useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  console.log("currentUser",currentUser)
  useEffect(() => {
    function decodeJwtPayload(token:string) {
      try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
      } catch (error) {
        console.error("Error decoding JWT payload:", error);
        return null;
      }
    }

    if (token) {
      const payload = decodeJwtPayload(token);
      if (payload) {
        const userDetailsToSend: User = {
          _id:payload._id||'',
          name: payload.name || '',
          email: payload.email || '',
          password: payload.password || '',
          phone: payload.phone || '',
        };
        dispatch(setCurrentUser(userDetailsToSend));
      }
    } else {
      console.log("טוקן לא נמצא בקוקיז.");
    }
  }, [token]); 

  return (
    <>
      <div>HomePage</div>
      <div>שלום </div>
      <ButtomNav />
    </>
  );
};

export default HomePage;