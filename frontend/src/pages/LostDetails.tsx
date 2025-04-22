
import { useParams } from "react-router";
import { useGetLostByIdQuery } from "../redux/api/losts/apiLostSlice";
import { skipToken } from "@reduxjs/toolkit/query";
const LostDetails = () => {
    const { id } = useParams();
    const { data: lost, isLoading, isError } = useGetLostByIdQuery(id ? id : skipToken);
    console.log("id:", id);
    console.log("lost:", lost);
  return (
    <div>
        {
            isLoading? <div>Loading...</div>:isError?<div>error...</div>:lost ? (
                <div>
                  <h2>Lost Details</h2>
                  <p>ID: {lost.name}</p>
                </div>
              ) : (
                <div>Lost not found.</div>
              )
        }
      
    </div>
  );
};

export default LostDetails;