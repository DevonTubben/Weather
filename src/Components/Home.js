import React, { Component } from 'react' 

class Home extends Component { 
    render(){ 
        return( 
            <div> 
                <h1> 
                    Weather App
                </h1>
                <p> 
                    Check the Weather in your area:
                </p>
                <form> 
                    <input type="text" name="city" placeholder="city"/>
                    <input type="text" name="country" placeholder="country"/>
                    <button className="getweather">Submit</button>
                </form>
            </div>
        )
    }
}

export default Home;