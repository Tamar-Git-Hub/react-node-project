import { Button } from "@mui/material";
import { CSSProperties } from "react";
import { NavLink } from "react-router";


const ButtomNuv = () => {
  const navStyle: CSSProperties = {
    display: 'flex',
    //  backgroundColor: "red",
    position: "fixed",
    bottom: "0px",
    right: "0px",
    left: "0px",
    justifyContent: "space-between",
    padding: '2%',



  }
  return (
    <div>
      <nav style={navStyle}>
        <NavLink to='/addLost'> <Button variant="contained" disableElevation>הוספת אבדה</Button></NavLink>
        <NavLink to='/addFound'><Button variant="contained" disableElevation>הוספת מציאה</Button></NavLink>
        <NavLink to='/allLosts'> <Button variant="contained" disableElevation>צפיה בכל האבדות</Button></NavLink>
        <NavLink to='/allFounds'>  <Button variant="contained" disableElevation>צפיה בכל המציאות</Button></NavLink>
      </nav>
    </div>
  );
}

export default ButtomNuv;
