import "./Submit.css";

export default function Submit(){
    return(
        <div className="submit-main-container">
            <h1>Submit Form</h1>
            <form className="form">
                <div>
                <h3>Name</h3>
                <input type="text" required/><br/>

                <h3>Age</h3>
                <input type="text" required/><br/>

                <h3>Phone Number</h3>
                <input type="text" required/><br/>

                <h3>Weight</h3>
                <input type="text" required/><br/>

                <h3>Place</h3>
                <input type="text" required/><br/>  
                </div>
                <br/> 
                
                    <button className="sub-but">Submit Your Details</button> 
              

            </form>
        </div>
    )
}