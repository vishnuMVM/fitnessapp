import "./About.css"


export default function About(){
return(
    <div>
        <div className="about-cmp-container">    
            <h1>Fitness Center Srikalahasthi</h1>
            <p>Have you found clothes fitting snugger and snugger each passing year, all in the “wrong” areas?
                Were you shocked the last time you stepped onto the scales (or actively avoid doing so)?
                Ever found yourself wheezing like you’ve just run an Ironman after climbing a flight of stairs, or attempted an impromptu kickabout in the garden?
                Have you found yourself internally cbout being vain, rather being around to be active and present for your family (be it partner, kids, or (future or current) grandkids)?
                Have you been discouraged by a boring training plan or bland diet in the past, and though that “dieting” & “training” just aren’t for you’?</p>
        </div>
        

        <div className="owner-details-container">
            <div className="owner-img-container">
                <img src="https://cvbay.com/wp-content/uploads/2017/03/dummy-image.jpg" alt="owner_img" className="own-img"/>
            </div>
            
            <div className="owner-details">
                <h2>OWNER NAME</h2>
                <h5>FOUNDER & CEO</h5>
                
                <p> he is the founder and CEO of skht fitness center
                    some info about the owner,some info about the owner,
                    some info about the owner,some info about the owner,
                </p>
                

                <div className="numbers">
                    <a href="tel:+918341058143">
                        <i class="fa fa-phone" ></i>
                        8341058143
                    </a>
                    <a href="whatsapp://send?&phone=+919885115422">
                        
                    <i class="fa-brands fa-whatsapp"></i>
                        9885115422
                        
                    </a>
                </div>
            </div>

        </div>
    </div>
)
}