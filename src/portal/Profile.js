import React from "react"
import {  useState } from 'react'
import './portal.scss'
import { CgProfile } from "react-icons/cg";
import {MdDelete} from "react-icons/md"
import { FiPlusCircle } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";

export default function Profile() {

       

  return (
    <>
    <div className='profile-div'>
        

        <div className='profile-left'>
            <div className='profile-account'>
                
                <h2 className='profile-icon'><CgProfile/></h2>
            </div>
            <div className="account-logout">
                <h3 className="account-rollno">2022111111</h3>
                <button className="logout-button"><IoIosLogOut/>LOGOUT</button>

            </div>
            <div className='list-of-grievances'>

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
        
           
            <div className="add-list">
                <button className="addling-button"><FiPlusCircle/></button>
            </div>
            
        </div>
        
    </div>
    </>
  )
}
