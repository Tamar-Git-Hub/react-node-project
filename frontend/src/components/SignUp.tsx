import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
// import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { errorCSS } from "../globalStyle";
import { zodResolver } from "@hookform/resolvers/zod";
import UserSchema from "../schemas/UserSchema";
import { useAddUserMutation } from "../redux/api/users/apiUserSlice";
import { User } from "../interfaces/models";
import { Link } from "react-router";
// import {setOpenSignUpModal } from "../redux/slice/userSlice";
// import { useDispatch } from "react-redux";

const SignUp = () => {
    //   const disputch= useDispatch()
    const { handleSubmit,register, formState: {errors} } = useForm({resolver: zodResolver(UserSchema)})
    const [AddUserMutation]= useAddUserMutation()
    const onSubmit  = async(data: User) => {
        try {
            const result = await AddUserMutation({
              name: data.name,
              password: data.password,
              phone: data.phone,
              email: data.email,
            }).unwrap();
            console.log('User added successfully:', result);
          } 
          catch (error) {
            console.error('Error adding user:', error);
        }
        finally{
        }
       
    }
    return (
        <div>
            {/* <div onClick={() => {  disputch(setOpenSignUpModal(false)) }}><CancelRoundedIcon /></div> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>שם:</div>
                <TextField id="filled-basic" label="שם" variant="filled" {...register("name")}/>
                {errors.name&&<p style={errorCSS}>{errors.name.message}</p>}
                <div>מייל:</div>
                <TextField id="filled-basic" label="מייל" variant="filled" {...register("email")}/>
                {errors.email&&<p style={errorCSS}>{errors.email.message}</p>}
                <div>טלפון:</div>
                <TextField id="filled-basic" label="טלפון" variant="filled" {...register("phone")}/>
                {errors.phone&&<p style={errorCSS}>{errors.phone.message}</p>}
                <div>סיסמה:</div>
                <TextField id="filled-basic" label="סיסמה" variant="filled" type="password" {...register("password")}/>
                {errors.password&&<p style={errorCSS}>{errors.password.message}</p>}
                <div> <Button variant="outlined" type="submit" >sign up</Button></div>
            </form>
            <Button variant="outlined">
           <Link to="/">ביטול</Link>
      </Button>
        </div>
    )
}
export default SignUp









