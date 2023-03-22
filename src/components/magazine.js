import { useRef } from 'react'
import './magazine.scss'
import MagCaraosal from './magCaraosal'
import {magList} from '../resources/imglist'








function Magazine() {








    return (

        <div className="Magazine">

            <div className='magazine-sec'>
                <MagCaraosal imgList={magList}  /> 
                    

                <div className='sec-desc'>
                    <h2>Magazines</h2>
                    <p>
                    Cache is the magazine created by the Information Science & Technology Association to engage with the IST Department in a creative and collaborative manner. This was initiated with the mindset of providing prodigious opportunities to all the students in the college who have an open interest for Information Technology. From interviews with respected faculty and articles on various achievements of student students, to creative enigmatic puzzles, games, memes and contests, Cache has it all. 
                    </p>
                    <p className='goto-p'>Click on the Magazines to read...</p>
                </div>

                
            </div>
            

        </div>


    )
}





export default Magazine;