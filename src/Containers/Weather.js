import React, { Component } from 'react' 

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
        return( 
            <div> 

            </div>
        )
    }
}

export default Weather; 