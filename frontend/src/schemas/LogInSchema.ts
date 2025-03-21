import { z } from "zod";
const EMAILREGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LogInSchema=z.object({
    email:z.string().regex(EMAILREGEX,{ message: "כתובת מייל לא חוקית" })
})

export default LogInSchema