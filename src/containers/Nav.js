import React ,{Component} from 'react'


export default function MainAnimated(){
    const style={
        width:'100%',
        height:'400px',
        margin:'0px',
        scrollBehavior:'smooth',
    }
    const h1={
        fontSize:'80px',
        color:'white',
        textAlign:'center',
        marginTop:'10%',
        opacity:'0.8',
        marginBottom:'30px',
        
    }
    const p={
        fontSize:'40px',
        color:'orange',
        textAlign:'center',
        opacity:'0.8',
    }
    

    return(
        <div className="pic-container" style={style}>
            <h1 style={h1}>Come Closer To Nature</h1>
            <p style={p}>Small Body Browser Database API by NASA</p>
            
        </div>


    )



}