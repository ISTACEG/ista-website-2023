
import '../components/footer.scss'



function Footer() {
    return (
        <>
            <footer>
                <div className="footer-div">

                    <div className="social-div">
                        <img src={process.env.PUBLIC_URL+"/ISTA_logo.png"} className='ista-logo' alt="" />

                        <div className='social-handles'>
                            <a href="https://www.instagram.com/ista__ceg/" target="_blank">
                                <img src="../Instagram-icon.svg" alt="" />
                            </a>
                            <a href="mailto:auista.council@gmail.com" target="_blank">
                                <img src="../email-icon.svg" class="email-logo" alt="" />
                            </a>
                            <a href="https://www.linkedin.com/company/ista-ceg/mycompany/" target="_blank">
                                <img src="../linkedin-icon.svg" alt="" />
                            </a>
                        </div>
                    </div>


                    <div className='contact-div'>
                        <span className='contact-title'>Contact Us</span>
                        
                        <div className='contact-person-div-row'>
                            <div className='contact-person-div'>
                                <div>
                                    <span>Email Id:</span>
                                    <span>istdept@auist.net</span>
                                </div>
                            </div>
                            

                        </div>
                        
                        <div className='contact-person-div-row'>
                            <div className='contact-person-div'>
                                <div>
                                    <span>Phone No:</span>
                                    <span>044-22358812</span>
                                </div>
                            </div>
                        </div>
                        



                    </div>


                </div>

                <span className='copyright'>Copyright ©2023 ISTA</span>
            </footer>
        </>
    )
}



export default Footer;