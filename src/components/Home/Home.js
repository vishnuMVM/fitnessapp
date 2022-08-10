import "./Home.css"
import banner from "./banner.jpg"

export default function Home(){
    return(
        <div className="banner-container">
            <img src={banner}  className="bannerimg" alt="homebanner"/>
            <div className="special-container">
                <div className="special-element-container">
                    <h1>WHAT WE DO</h1>
                    <p>Our coaching options have been designed from the ground up to put you and your goals first.
                        From one-on-one training in your private studio,
                        to our renowned small group personal training and bespoke nutrition 
                        packages- everything we offer has been battle-tested over a decade in the field, 
                        to ensure the results you achieve are not only
                        impressive in the short term- but also sustainable for life</p>
                </div>

                <div className="special-mini-container">
                    <div className="shadow-container">
                        <img src="https://www.armourycoachingstudio.co.uk/uploads/1/2/9/5/129586512/3_orig.jpg" alt="small_grop_img"/>
                        <h2>SMALL GROUP PERSONAL TRAINING</h2>
                        <p>Our Small Group Personal Training is unlike anything you'll have experienced before. 
                            In micro training groups of just 6:1, all your workouts are customised, 
                            recorded and coached by an experienced personal trainer. 
                            The balance of the motivational group environment and 1-2-1 attention makes it the perfect mix to produce fast results, 
                            without the bounce back </p>

                    </div>
                    <div className="shadow-container">
                        <img src="https://www.armourycoachingstudio.co.uk/uploads/1/2/9/5/129586512/2_orig.jpg" alt="one-to-one-img"/>
                        <h2>1-2-1 PERSONAL TRAINING</h2>
                        <p>1-2-1 personal training is the ultimate investment in your health. 
                            You'll be working directly with your coach in our private studio, 
                            following a bespoke plan to ensure you hit your goals in record time. 
                            Whether you want to slim down, add muscle or anything in between, 
                            our personal training packages will get you there in a fun and sustainable way</p>

                    </div>
                </div>



                <div className="special-mini-container">
                    <div className="shadow-container">
                        <img src="https://www.armourycoachingstudio.co.uk/uploads/1/2/9/5/129586512/1_1.jpg" alt="small_grop_img"/>
                        <h2>NUTRITION COACHING</h2>
                        <p>Our Small Group Personal Training is unlike anything you'll have experienced before. 
                            In micro training groups of just 6:1, all your workouts are customised, 
                            recorded and coached by an experienced personal trainer. 
                            The balance of the motivational group environment and 1-2-1 attention makes it the perfect mix to produce fast results, 
                            without the bounce back </p>
                    </div>

                    <div className="shadow-container">
                        <img src="https://www.armourycoachingstudio.co.uk/uploads/1/2/9/5/129586512/smartmockups-k4dkpuo6-orig-orig_orig.jpg" alt="one-to-one-img"/>
                        <h2>ONLINE TRAINING</h2>
                        <p>The Armoury's Online Coaching Packages have been created to take 
                            the guesswork out of getting in the best shape of your life. 
                            You'll be working 1-2-1 with your Personal Trainer through our Armoury Coaching app- where you'll get workouts designed specifically for you, progress monitored, 
                            regular check-ins and nutrition support for unrivalled results, anywhere in the world</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}