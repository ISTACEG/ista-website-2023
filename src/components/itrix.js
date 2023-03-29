import './itrix.scss'
import ImageCaraosal from './imageCaraosal'

import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'





function Itrix(props) {


    let location = useLocation();
    var itrixSectionRef = useRef();

    useEffect(() => {


        if (location.hash == '#Itrix') {
            itrixSectionRef.current.scrollIntoView()
        }
        else {
            // window.scrollTo(0,0)
        }


    }, [location])


    function importAll(r) {
        return r.keys().reverse().map(r);
    }
  


    var itrixImgList = importAll(require.context(process.env.PUBLIC_URL+'/public/gallery/itrix/', true, /\.(png|jpe?g|svg)$/));




    return (

        <div className="Itrix" ref={itrixSectionRef}>

            <h1>What we do</h1>
            <div className='itrix-sec'>
                <ImageCaraosal imgList={itrixImgList} delay={2} /> 
                
                <div className='sec-desc'>
                    <h2>ITrix</h2>
                    <p>
                    ITRIX every year in the month of March, ITRIX is ISTA’s premium inter-college symposium at the Department of Information Science and Technology, College of Engineering, Guindy. With a footfall of nearly 4000 odd participants every year, we play our part in striving hard to bring all minds, from every nook and corner of the country under one roof to compete and success at a variety of technical and non-technical events.
                    </p>
                </div>
            </div>
            

        </div>


    )
}





export default Itrix;