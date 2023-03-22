import './logo.scss'









function Logo() {

    function importAll(r) {
        return r.keys().map(r);
    }
  
    var filenames = importAll(require.context(process.env.PUBLIC_URL+'/public/logo/', false, /\.(png|jpe?g|svg)$/));




    return (
        <div className='Logo'>

            <h2>Our Previous Partners</h2>

            <div className="logo-container">
                
                
                {
                    filenames.map((itm, ind) => (

                        <img src={itm} alt="" className='img-logo' />

                    ))
                }



            </div>
                        
            



        </div>
    )
}



export default Logo;