
import { useParams } from "react-router";
import { useGetFoundByIdQuery } from "../redux/api/founds/apiFoundSlice";
import { skipToken } from "@reduxjs/toolkit/query";
const FoundDetails = () => {
    const { id } = useParams();
    const { data: found, isLoading, isError } = useGetFoundByIdQuery(id ? id : skipToken);
    console.log("id:", id);
    console.log("found:", found);
  

  return (
    <div>
        {
            isLoading? <div>Loading...</div>:isError?<div>error...</div>:found ? (
                <div>
                  <h2>Found Details</h2>
                  <p>ID: {found.name}</p>
                </div>
              ) : (
                <div>Found not found.</div>
              )
        }
      
    </div>
  );
};

export default FoundDetails;