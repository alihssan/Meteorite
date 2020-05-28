import React, { Component } from 'react';
import Headview from "./head.js";
import "../overall.css"
import Cont from "./contains.js";


class Main extends Component {
    constructor()
    {
        
        super()
        this.state = { 
            time:"",
            data:[]
        }
       


    }
   /* componentDidMount(){
        fetch('https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY')
        .then(response=>response.json())
        .then(response=>this.setState(prev=>{
            prev.data.push(response)
        }
        ))
        console.log(this.state.data)
}*/
    
    timeshow = () => {

        var x= new Date();
        this.setState(this.state.time=x.getTime());
        console.log(x.getTime());
        // missing kaam he abhi filhal ye feature use nhi horha timeshow

    }
    render() { 
        /*const {data}=this.state */      
        return (  
            <div className="background">
                <Headview />

            </div>
        );
    }
    
}
 
export default Main;