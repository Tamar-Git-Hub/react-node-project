import apiSlice from "./apiSlice";
import { Lost } from "../../interfaces/models";

const apiLostSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllLosts: builder.query<Lost[], void>({
      query: () => "/losts",
      providesTags: ["Lost"],
    }),
    getLostById: builder.query<Lost, string>({
      query: (id) => `/losts/${id}`,
      providesTags: ["Lost"],
    }),
    addLost: builder.mutation<Lost, Lost>({
      query: (newLost) => ({
        url: "/losts",
        method: "POST",
        body: newLost,
      }),
      invalidatesTags: ["Lost"],
    }),
    updateLost: builder.mutation<Lost, Lost>({
      query: (updateLost) => ({
        url: `/losts/${updateLost._id}`,
        method: "PUT",
        body: updateLost,
      }),
      invalidatesTags: ["Lost"],
    }),
    deleteLost: builder.mutation<void, string>({
      query: (id) => ({
        url: `/losts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Lost"],
    }),
  }),
});


export const {
  useGetAllLostsQuery,
  useGetLostByIdQuery,
  useAddLostMutation,
  useUpdateLostMutation,
  useDeleteLostMutation,
} = apiLostSlice;
export default apiLostSlice