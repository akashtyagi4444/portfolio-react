import React,{useState} from 'react';
import './Nav.scss';
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import {BiBook,BiMessageSquareDetail} from "react-icons/bi"
import {MdWorkOutline} from "react-icons/md"

function Nav() {
  const [activeNav,setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav("#")} className={activeNav == '#' ? "active" : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={()=> setActiveNav("#about")} className={activeNav == '#about' ? "active" : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={()=> setActiveNav("#experience")} className={activeNav == '#experience' ? "active" : ''}><BiBook /></a>
      <a href='#portfolio' onClick={()=> setActiveNav("#portfolio")} className={activeNav == '#portfolio' ? "active" : ''}><MdWorkOutline /></a>
      <a href='#contact' onClick={()=> setActiveNav("#contact")} className={activeNav == '#contact' ? "active" : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav