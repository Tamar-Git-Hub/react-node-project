

export interface User {
  name: String,
  password: String,
  phone: String,
  email: String,
  _id?: string 
}
enum Category{
'תכשיטים ושעונים',
'תיקים ומזוודות',
'ארנקים וכספים',
'טלפונים ואלקטרוניקה',
'יהדות',
'ביגוד',
'בעלי חיים',
'ציוד רפואי',
'אחר'
}
export interface Lost{
  category: Category,
  name: String,
  city: String,
  street: String,
  owner:  User,
  date: Date,
  _id?: string 
}
export interface Found{
  category:Category,
  name: String,
  city: String,
  street: String,
  owner: User,
  date: Date,
  identifying: Array<String>,
  _id?: string 
}
export interface LogInUser{
  email: String,
  password: String,
  _id?:string 
}
export interface LoginResponse {
  accessToken: String;
  user: {
    email: String;
    name: String;
    password: String; 
    phone: String;
    _id: string ;
  };
}