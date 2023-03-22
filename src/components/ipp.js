import './ipp.scss'
import ImageCaraosal from './imageCaraosal'
import {ippImgList} from '../resources/imglist'

import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'







function Ipp(props) {




    let location = useLocation();
    var ippSectionRef = useRef();

    useEffect(() => {

        if (location.hash == '#Ipp') {
            ippSectionRef.current.scrollIntoView()
        }
        else {
            // window.scrollTo(0,0)
        }

    }, [location])




    return (

        <div className="Ipp" ref={ippSectionRef}>

            <div className='ipp-sec'>
                
                <div className='sec-desc'>
                    <h2>I++</h2>
                    <p>
                    
                    I++, the flagship intra college symposium which is organized by the industrious Information Science and Technology Association which the entire Anna University looks forward too. I++ is the perfect blend of brain-wracking workshops, technical events and non-technical events.
                    </p>

                    <p className="goto-p">
                        <a href="http://ipp.istaceg.in/">
                            To know more about I++ click here...
                        </a>
                    </p>
                </div>

                <ImageCaraosal imgList={ippImgList} /> 
                
            </div>
            

        </div>


    )
}





export default Ipp;