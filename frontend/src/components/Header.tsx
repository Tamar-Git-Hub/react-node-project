// import { Dialog, DialogActions, Modal } from "@mui/material"
import { Dialog, DialogActions, Modal } from "@mui/material"
import {  useState } from "react"
import { NavLink } from "react-router"
import Login from "./Login"
import { CSSProperties } from "react";
import SighUp from "./SighUp";
const navStyle:CSSProperties={
 display:'flex',
//  backgroundColor: "red",
 position: "fixed", 
 top: "0px", 
 right: "0px",
 left: "0px",
justifyContent: "space-between" ,
  padding:'2%'

}
const logingStyle={
// margin:'auto',
 display:'flex'
}
const moveLeft={
    marginLeft:'1vw'
}
const Header = () => {
    const [isOpenModal,setIsOpenModal]=useState<boolean>(false)
    const [isSighUpModal,setIsSighUpModal]=useState<boolean>(false)
    return (
        <div>
            <nav style={navStyle}>
                <NavLink to="/">Losses & founds</NavLink>
                <div style={logingStyle}>
                <div style={moveLeft} onClick={()=>setIsOpenModal(!isOpenModal)}>log in</div>
                <Modal open={isOpenModal}>
                    <Dialog  open={isOpenModal} >
                        <DialogActions/>
                          <div>
                              <Login setIsOpenModal={setIsOpenModal}/>
                          </div>
                    </Dialog>
                </Modal>
                <div style={moveLeft}>|</div>
                <div style={moveLeft} onClick={()=>setIsSighUpModal(!isSighUpModal)}>sign up</div>
                <Modal open={isSighUpModal}>
                    <Dialog  open={isSighUpModal} >
                        <DialogActions/>
                          <div>
                              <SighUp setIsSighUpModal={setIsSighUpModal}/>
                          </div>
                    </Dialog>
                </Modal>
                </div>
            </nav>
        </div>
    )
}

export default Header
