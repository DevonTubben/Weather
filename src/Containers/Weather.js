import React, { Component } from 'react' 
//import Weather1 from '../component/weather1'

class Weather extends Component{ 
    constructor(){ 
        super()
        this.state = { 
            weather: []
        }
    }

    componentDidMount(){ 
        fetch(`http://localhost:3001/Weather`)
        .then(res => res.json()) 
        .then(weather => this.setState({ weather }))
    }

    render(){ 
        // const weather1 = this.state.weather1.map(weather)
        return( 
            <div> 

            </div>
        )
    }
}

export default Weather; 