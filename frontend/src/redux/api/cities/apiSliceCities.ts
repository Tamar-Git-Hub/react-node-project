import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 import { Cookies } from 'react-cookie';
 const cookies = new Cookies();
 
 const apiSliceCity = createApi({
   reducerPath: "addFound",
   baseQuery: fetchBaseQuery({
     baseUrl: 'http://localhost:5000',
     credentials: 'include',
     prepareHeaders: (headers) => {
        const token = cookies.get('token'); 
       console.log('Token from cookie:', token);
       if (token) {
         headers.set('Authorization', `Bearer ${token}`);
       }
       return headers;
     },
   }),
    tagTypes: ["String"],
    endpoints: (builder) => ({ 
     getAllCities: builder.query<Array<string>, void>({
       query: () => "/addFound", 
     }),
   }),
 });
 
 export const {
   useGetAllCitiesQuery,
 } = apiSliceCity;
 
 export default apiSliceCity;