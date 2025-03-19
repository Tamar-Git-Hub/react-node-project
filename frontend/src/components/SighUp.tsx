import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form'
import { errorCss } from '../globalStyle';
import { zodResolver } from '@hookform/resolvers/zod';
import UserSchema from '../schemas/UserSchema';
interface SighUpProps {
    setIsSighUpModal: (isOpenModal: boolean) => void
}

const SighUp = ({ setIsSighUpModal }: SighUpProps) => {

    const { handleSubmit, register, formState: { errors } } = useForm({resolver:zodResolver(UserSchema)})

    const onSubmit = () => {
        setIsSighUpModal(false)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div onClick={() => setIsSighUpModal(false)}> <CancelRoundedIcon /></div>
                <div>שם:</div>
                <TextField id="filled-basic" label="שם" variant="filled" {...register("name")} />
                {errors.name&&<p style={errorCss}>{errors.name.message}</p>}
                <div>מייל:</div>
                <TextField id="filled-basic" label="מייל" variant="filled" {...register("email")} />
                {errors.email&&<p style={errorCss}>{errors.email.message}</p>}
                <div>טלפון:</div>
                <TextField id="filled-basic" label="טלפון" variant="filled" {...register("phone")} />
                {errors.phone&&<p style={errorCss}>{errors.phone.message}</p>}
                <div>סיסמה:</div>
                <TextField id="filled-basic" label="סיסמה" variant="filled" type='password' {...register("password")} />
                {errors.password&&<p style={errorCss}>{errors.password.message}</p>}
                <div><Button type="submit" variant="outlined"> Sigh up</Button></div>
            </form>
        </div>
    )
}

export default SighUp
