import './imageCaraosal.scss'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'






function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}







function ImageCaraosal(props) {


    var imgList = props.imgList    
    var caroSliderRef = useRef()
    var nextRef = useRef()

    let location = useLocation();

    // var height = props.height;
    // var width  = (props.width / 1536)* 100;

    var isPaused = false;


        
    function pauseScroll () {
        isPaused = true

        setTimeout(() => {
            isPaused = false
        }, 1000 * 60);
    }


    var curcarInd=0;
    

    const next = (e) => {

        pauseScroll()


        var height = caroSliderRef.current.children[0].clientHeight
        var width  = caroSliderRef.current.children[0].clientWidth


        if (curcarInd < imgList.length) {
            curcarInd = (curcarInd+1)
            caroSliderRef.current.style.left = `-${curcarInd*width}px`
        }
        else if (curcarInd == imgList.length) {
            curcarInd = 1
            caroSliderRef.current.style.transition = '0s'
            caroSliderRef.current.style.left = 0

            setTimeout(() => {
                caroSliderRef.current.style.transition = '1s'
                caroSliderRef.current.style.left = `-${curcarInd*width}px`
            }, 10)
   
        }

    }
    
    const prev = (e) => {
        
        pauseScroll()

        var height = caroSliderRef.current.children[0].clientHeight
        var width  = caroSliderRef.current.children[0].clientWidth

        if (curcarInd > 0) {
            curcarInd = (curcarInd-1)
            caroSliderRef.current.style.left = `-${curcarInd*width}px`
        }
        else if (curcarInd == 0) {

            curcarInd = imgList.length-1
            caroSliderRef.current.style.transition = '0s'
            caroSliderRef.current.style.left = `-${imgList.length*width}px`
            
            setTimeout(() => {
                caroSliderRef.current.style.transition = '1s'
                caroSliderRef.current.style.left = `-${curcarInd*width}px`
            }, 10)
   
        }

        
        // console.log(curcarInd%(imgList.length))

    }


    useEffect(() => {


        setTimeout(() => {
            setInterval(() => {

                // if (!isPaused) {                    
                //     nextRef.current.click() 
                // }
    
                if (!isPaused) {
                    var height = caroSliderRef.current.children[0].clientHeight
                    var width  = caroSliderRef.current.children[0].clientWidth
    
    
                    if (curcarInd < imgList.length) {
                        curcarInd = (curcarInd+1)
                        caroSliderRef.current.style.left = `-${curcarInd*width}px`
                    }
                    else if (curcarInd == imgList.length) {
                        curcarInd = 1
                        caroSliderRef.current.style.transition = '0s'
                        caroSliderRef.current.style.left = 0
    
                        setTimeout(() => {
                            caroSliderRef.current.style.transition = '1s'
                            caroSliderRef.current.style.left = `-${curcarInd*width}px`
                        }, 10)
            
                    }
                }
                    
    
            }, 1000 * 5)
        }, 1000 * props.delay)
        


        

    
    }, [location]) 
    



    

    return (
        <div className="img-caraousal-container">
            <div className="img-caraousal">


                <div className="img-slider" ref={caroSliderRef}>

                        {
                            imgList.map((itm, ind) => (
                                <div className="img-caro-item" item-ID={ind}>
                                    <img src={itm} alt="" />
                                </div>
                            )) 
                        }

                        <div className="img-caro-item" item-ID={0}>
                            <img src={imgList[0]} alt="" />
                        </div>


                </div>


                <button onClick={next} ref={nextRef} className="next"><span>{'>'}</span></button>
                <button onClick={prev} className="prev"><span>{'<'}</span></button>

            </div>


            {/* <div className="img-slider-dots" ref={caroSliderDotsRef}>
                {
                    imgList.map((itm, ind) => (
                        <div className={`img-slider-dots-${ind} ${curcarInd == ind ? 'active': ''}`}></div>
                    ))
                }
            </div> */}

        </div>
    )
}




export default ImageCaraosal;