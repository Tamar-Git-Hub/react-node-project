import { useDispatch } from "react-redux"
import { setAllFounds } from "../redux/slice/foundSlice"
import { useGetAllFoundsQuery } from "../redux/api/apiFoundSlice"
import { useEffect } from "react";
const AllFounds = () => {
  const dispush=useDispatch()
  // const AllFoundsSelectore=useSelector()
  const {data:getAllFounds,isError,isLoading}=useGetAllFoundsQuery()
  useEffect(()=>{
    fetchingData()
    
  })
  const fetchingData=async()=>{
    try{
      await dispush(setAllFounds(getAllFounds))
      {console.log(getAllFounds)}
    }
    catch(error){
     console.error(error);
    };
  }
 

  return (
   
    <div>
     {
      isLoading?(<div>Loading....</div>):
      isError?(<div>{isError}</div>):
      (<div>
          {
          getAllFounds?.map(found=>(
             <div key={found._id?.toString()}>
              <div>{found.name}</div>
              <div>{found.categiry}</div>
              <div>{found.city}</div>
              <div>{found.street}</div>
              <div>{found.identifying.toString()}</div>
              {found.categiry}
              </div>
          ))
          }
      </div>)
    
     }
      
      AllFound
    </div>
  )
}

export default AllFounds