import { Button, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { zodResolver } from '@hookform/resolvers/zod'
import LogInSchema from "../schemas/LogInSchema";
import { errorCss } from "../globalStyle";


interface LoginProps {
  setIsOpenModal: (isOpenModal: boolean) => void
}
const Login = ({ setIsOpenModal }: LoginProps) => {


  const { handleSubmit, register, formState: { errors } } = useForm({ resolver: zodResolver(LogInSchema) })

  const onSubmit = () => {
    setIsOpenModal(false)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div onClick={() => setIsOpenModal(false)}> <CancelRoundedIcon /></div>
        <div><TextField id="filled-basic" label="מייל" variant="filled"  {...register("email")} /></div>
        {errors.email && <p style={errorCss}>{errors.email.message} </p>}
        <div><TextField id="filled-basic" label="סיסמה" variant="filled" /></div>

        <Button type="submit" variant="outlined"> log in</Button>
      </form>
    </div>
  )
}

export default Login
