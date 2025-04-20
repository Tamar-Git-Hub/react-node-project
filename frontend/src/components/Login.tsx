import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
// import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { zodResolver } from "@hookform/resolvers/zod"
import LogInSchema from "../schemas/LogInSchema";

import { errorCSS } from "../globalStyle";

import {  LogInUser, User} from "../interfaces/models";
import { useAddLoginMutation } from "../redux/api/loging/apiLoginSlice";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";

const LogIn = () => {
  const [addLogin] = useAddLoginMutation();
  const { handleSubmit, register, formState: { errors } } = useForm({ resolver: zodResolver(LogInSchema) })
  const [loggedInUserId, setLoggedInUserId] = useState<string>("");
  const [currentUser,setCurrentUser] = useState<User>()
  const navigate = useNavigate();
  const onSubmit = async(data: LogInUser) => {
       try {
        const result = await addLogin(data).unwrap() 
        console.log(result);
        console.log("שם המשתמש:", result.user?.name);
        console.log("טלפון",result.user?.phone);

        setLoggedInUserId(result.user._id.toString());
        setCurrentUser({_id:result.user._id, name: result.user.name, email:result.user.email,  phone: result.user.phone, password: result.user.password})

        navigate('/');
    } catch (err) {
      
    }
    finally{   


   }
  }

  useEffect(() => {
    if (currentUser) {
      console.log("פרטי משתמש (מ-useGetUserByIdQuery):", currentUser);
    }
  }, [currentUser]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField id="filled-basic" label="מייל" variant="filled" {...register("email",)} />
          {errors.email && <p style={errorCSS}>{errors.email.message}</p>}
        </div>
        <div>
          <TextField id="filled-basic" label="סיסמה" variant="filled" {...register("password",)}/>
          {errors.password && <p style={errorCSS}>{errors.password.message}</p>}
        </div>
        <Button variant="outlined" type="submit">log in</Button>
      </form>
      <Button variant="outlined">
        <Link to="/">ביטול</Link>
      </Button>
    </div>
  )
}

export default LogIn