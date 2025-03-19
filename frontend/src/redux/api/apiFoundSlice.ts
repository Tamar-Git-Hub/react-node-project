import apiSlice from "./apiSlice";
import { Found } from "../../interfaces/models";

const apiFoundSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllFounds: builder.query<Found[], void>({
      query: () => "/founds",
      providesTags: ["Found"],
    }),
    getFoundById: builder.query<Found, string>({
      query: (id) => `/founds/${id}`,
      providesTags: ["Found"],
    }),
    addFound: builder.mutation<Found, Found>({
      query: (newFound) => ({
        url: "/founds",
        method: "POST",
        body: newFound,
      }),
      invalidatesTags: ["Found"],
    }),
    updateFound: builder.mutation<Found, Found>({
      query: (updateFound) => ({
        url: `/founds/${updateFound._id}`,
        method: "PUT",
        body: updateFound,
      }),
      invalidatesTags: ["Found"],
    }),
    deleteFound: builder.mutation<void, string>({
      query: (id) => ({
        url: `/founds/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Found"],
    }),
  }),
});


export const {
  useGetAllFoundsQuery,
  useGetFoundByIdQuery,
  useAddFoundMutation,
  useUpdateFoundMutation,
  useDeleteFoundMutation,
} = apiFoundSlice;
export default apiFoundSlice