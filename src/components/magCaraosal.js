import './magCaraosal.scss'
import { useRef } from 'react'








function MagCaraosal(props) {


    var imgList = props.imgList    
    var caroSliderRef = useRef()


    // var height = props.height;
    // var width  = props.width;


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

        // console.log(curcarInd%(imgList.length))

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
        <div className="mag-caraousal-container" >
            <div className="mag-caraousal">


                <div className="mag-slider" ref={caroSliderRef}>

                        {
                            imgList.map((itm, ind) => (
                                <div className="mag-caro-item" item-ID={ind}>
                                    <a href={itm.link} target='_blank'>
                                        <img src={itm.img} alt="" />
                                    </a>
                                </div>
                            )) 
                        }

                        <div className="mag-caro-item" item-ID={0}>
                            <a href={imgList[0].link} target='_blank'>
                                <img src={imgList[0].img} alt="" />
                            </a>
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




export default MagCaraosal;