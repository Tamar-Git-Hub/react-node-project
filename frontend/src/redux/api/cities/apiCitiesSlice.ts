import apiSliceCity from "./apiSliceCities";
 
 const apiCitiesSlice = apiSliceCity.injectEndpoints({
   endpoints: (builder) => ({
     getAllCities: builder.query<Array<string>, void>({ 
       query: () => "/addFound",
     }),
   }),
 });
 
 export const {
   useGetAllCitiesQuery,
 } = apiCitiesSlice; 
 
 export default apiCitiesSlice;