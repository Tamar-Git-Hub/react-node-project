import { ObjectId } from "mongodb";

export interface User {
    name: string,
    password: string,
    phone: string,
    email: string,
    _id?: ObjectId
}
enum Categiry{
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
    categiry: Categiry,
    name: string,
    city: string,
    street: string,
    owner:  User,
    date: Date,
    _id?: ObjectId
}
export interface Found{
    categiry:Categiry,
    name: string,
    city: string,
    street: string,
    owner: User,
    date: Date,
    identifying: Array<string>,
    _id?: ObjectId
}
export interface LogInUser{
    email: string,
    password: string,
    _id?:ObjectId
}
export interface LoginResponse {
  accessToken: string;
  user: {
    email: string;
    name: string;
    password: string; 
    phone: string;
    _id: ObjectId;
  };
}