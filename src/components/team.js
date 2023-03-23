import './team.scss'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'


var staffList = [
    
    {
        img: 'ISTA OB/swaminathan.jpg',
        name: 'DR.S.Swamynathan',
        position: 'President'
    },
    {
        img: 'ISTA OB/selviravindran.jpg',
        name: 'DR.Selvi Ravindran',
        position: 'Staff Treasurer'
    },
]

var teamList = [
    {
    img: 'ISTA OB/akashram.PNG',
    name: 'Akashram J',
    position: 'Chairman'
    },
    {
    img: 'ISTA OB/ramya.jpg',
    name: 'Ramya N',
    position: 'Overall Coordinator'
    },
    {
    img: 'ISTA OB/praveen.jpg',
    name: 'Praveen R',
    position: 'Programming Head'
    },
    {
    img: 'ISTA OB/kalaiselvan.jpg',
    name: 'Kalaiselvan S',
    position: 'Treasurer'
    },
    {
    img: 'ISTA OB/Damodharan R.jpg',
    name: 'Damodharan R',
    position: 'Design Head'
    },
    {
    img: 'ISTA OB/miruthulla.jpg', 
    name: 'Mrithulla Padmanabhan',
    position: 'Industrial Relation'
    },
    {
    img: 'ISTA OB/Asmitha.jpg',
    name: 'Asmitha Shrree E',
    position: 'Industrial Relation'
    },
    {
    img: 'ISTA OB/anish.jpg',
    name: 'Anish Sridhar',
    position: 'Marketing'
    },
    {
    img: 'ISTA OB/prahadeesh K.jpg',
    name: 'Prahadeesh K',
    position: 'Web Development'
    },
    {
    img: 'ISTA OB/ewsar.jpg',
    name: 'Eswaramoorthy K',
    position: 'Internship Coordinator'
    },
    {
    img: 'ISTA OB/siva murugan.jpg',
    name: 'Sri Siva Murugan V',
    position: 'Placement Coordinator'
    },
    {
    img: 'ISTA OB/Nithin Raj.jpg',
    name: 'Nithinrhaj S',
    position: 'Magazine Head'
    },
    {
    img: 'ISTA OB/Srishti.jpg',
    name: 'Srishti Gulecha R',
    position: 'Co Chair'
    },
    {
    img: 'ISTA OB/aravind s.jpg',
    name: 'Aravind S',
    position: 'General Secretary'
    },
    {
    img: 'ISTA OB/nishanth.jpg',
    name: 'Nishanth S D',
    position: 'Deputy General Secretary'
    },
    
    
]






function Team(props) {

    const elemRef = useRef();

    let location = useLocation();
    var aboutSectionRef = useRef();

    useEffect(() => {


        
        if (location.hash == '#about') {
            aboutSectionRef.current.scrollIntoView()
        }
        else {
            // window.scrollTo(0,0)
        }


    }, [location])



    const mousenterfunc = (e) => {
        elemRef.current.style.animationPlayState = 'paused';
    }
    
    const mouseleavefunc = (e) => {
        elemRef.current.style.animationPlayState = 'running';
    }


    return (
        <div className="Team" ref={aboutSectionRef} >

            <h1>Our Team</h1>

            

            <div className="staff-sec">
                <div className="avatar-container">
                    <img src={staffList[0].img} alt="" className="avatart-img" />
                    <div className="nm-pos-div">
                        <span className="name">{staffList[0].name}</span>
                        <span className="position">{staffList[0].position}</span>
                    </div>
                </div>

                
                <div className="avatar-container">
                    <img src={staffList[1].img} alt="" className="avatart-img" />
                    <div className="nm-pos-div">
                        <span className="name">{staffList[1].name}</span>
                        <span className="position">{staffList[1].position}</span>
                    </div>
                </div>
            </div>

            <div className='itrix-sec' ref={elemRef} onMouseEnter={mousenterfunc} onMouseLeave={mouseleavefunc}>


                <div className="avatar-caraosal-slider">
                
                    {
                        teamList.map((itm, ind) => (
                            
                            <div className="avatar-container">
                                <img src={itm.img} alt="" className="avatart-img" />
                                <div className="nm-pos-div">
                                    <span className="name">{itm.name}</span>
                                    <span className="position">{itm.position}</span>
                                </div>
                            </div>


                        ))
                    }
                </div>

                <div className="avatar-caraosal-slider">
                
                    {
                        teamList.map((itm, ind) => (
                            
                            <div className="avatar-container">
                                <img src={itm.img} alt="" className="avatart-img" />
                                <div className="nm-pos-div">
                                    <span className="name">{itm.name}</span>
                                    <span className="position">{itm.position}</span>
                                </div>
                            </div>


                        ))
                    }

                </div>

            </div>


        </div>
    )
}



export default Team;