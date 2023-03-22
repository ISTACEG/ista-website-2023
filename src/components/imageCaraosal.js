import './imageCaraosal.scss'
import { useRef } from 'react'














function ImageCaraosal(props) {


    var imgList = props.imgList    
    var caroSliderRef = useRef()


    // var height = props.height;
    // var width  = (props.width / 1536)* 100;


    var curcarInd=0;
    

    const next = (e) => {

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


                <button onClick={next} className="next"><span>{'>'}</span></button>
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