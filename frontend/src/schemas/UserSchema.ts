import { z } from "zod";

const EMAILREGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
const UserSchema=z.object({
    name:z.string().min(2,{message:"שם חייב להכיל לפחות 2 אותיות"}),
    email:z.string().regex(EMAILREGEX,{ message: "כתובת מייל לא חוקית" }),
    phone:z.string().min(9,{message:"טלפון צריך להכיל לפחות 9 ספרות"}).max(10,{message:"טלפון צריך להכיל עד 10 ספרות"}),
    password:z.string().regex(PASSWORD,{message:"חייב להכיל לפחות אות גדולה,אות קטנה ומספר"})
})
export default UserSchema