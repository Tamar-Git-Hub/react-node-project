import { ObjectId } from "mongoose"
export interface User {
    name: String,
    password: String,
    phone: String,
    email: String,
    _id: ObjectId
}
enum Category {
    "תכשיטים ושעונים",
    "תיקים ומזוודות",
    "ארנקים וכספים",
    "טלפונים ואלקטרוניקה",
    "יהדות",
    "ביגוד",
    "בעלי חיים",
    "ציוד רפואי",
    "אחר"
}
export interface Lost {
    category:Category
    name: String,
    city: String,
    street: String,
    owner: User
    date: Date,
    _id:ObjectId
}
export interface Found {
    category:Category
      name:String,
      city:String,
      street:String,
      owner:User
      date:Date,
      identifying:Array<String>,
      _id:ObjectId
}