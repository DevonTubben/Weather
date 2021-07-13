import React, { Component } from 'react' 

class Home extends Component { 

//  const (form, setForm) = useState({
//      city: " ",
//      country: " "
//  })

const handleChange = (e) => { 
    let name = e.target.name 
    let value = e.target.value

    if(name == "city"){ 
        setForm({...form, city:value})
    }
    if(name == "country"){ 
        setForm({...form, country:value})
    }
    console.log(city, country)
}



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
                    <input type="text" name="city" placeholder="city" onChange={e => handleChange(e)}  />
                    <input type="text" name="country" placeholder="country"/>
                    <button className="getweather">Submit</button>
                </form>
            </div>
        )
    }
}

export default Home;