import { createApi,fetchBaseQuery }from "@reduxjs/toolkit/query";

const apiSlice=createApi({
 reducerPath:'api',
 baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000/api'}),
 tagTypes:["User","Lost","Found"],
 endpoints: () => ({})
})
export default apiSlice


    
