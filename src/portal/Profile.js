import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import './portal.scss'
import { CgProfile } from "react-icons/cg";
import {MdDelete} from "react-icons/md"
import { FiPlusCircle } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import {Tooltip} from 'react-tooltip';



export default function Profile() {

   
       

  return (
    <>
    <div className='profile-div'>
        

        <div className='profile-left'>
            <div className='profile-account'>
                
                <h2 className='profile-icon1' data-tooltip-id="account-tooltip"
                data-tooltip-content="2022115000" ><CgProfile/></h2>
                <Tooltip id="account-tooltip" place="right" effect="solid" />
                <Link to="/portal"><h2
                className=" profile-icon1"
                data-tooltip-id="logout-tooltip"
                data-tooltip-content="Logout"
            >
                <IoIosLogOut />

                
            </h2>
            </Link>
            <Tooltip id="logout-tooltip" place="right" effect="solid" />

                
                
            </div>
            
            {/* <div className='list-of-grievances'>
                <div>
                <ul className="list-of-items">
                    <li className="one-list-item">
                        <div className="content-list">The href attribute is required for an anchor to be keyboard 
                            accessible. Provide a valid, navigable address as the href value. If you cannot provide
                             an href, but still need the element to resemble a link, use a button and change
                              it with ap  Provide a valid, navigable address as the href value. If you cannot provide
                             an href, but still need the element to resemble a link, use a button and change
                              it with ap
                        </div>
                        <div className="status-list-pending">Pending</div>
                        <div className="delete-list"><MdDelete/></div>
                    </li>
                    <li className="one-list-item">
                        <div className="content-list">hello first</div>
                        <div className="status-list-approved">Approved</div>
                        
                    </li>

                    <li className="one-list-item">
                        <div className="content-list">hello first</div>
                        <div className="status-list-rejected">Rejected</div>
                        <div className="delete-list"><MdDelete/></div>
                        
                    </li>
                    
                </ul>
                </div>

                <div className="adding-new">
                    <div><input className="next-grievances"/></div>
                    <div><button className="send-button">send</button></div>
                </div>
            </div> */}
        
           
            
            
            
            
        </div>
        
    </div>
    </>
  )
}
