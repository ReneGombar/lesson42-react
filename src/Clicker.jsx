import React, { useState, useEffect,  useRef } from "react";

function Clicker({identifier, sumFunction, color}){

    //check local storage and if not NaN assign caount value
    const [value,setValue] = 
        useState(
            isNaN(parseInt(localStorage.getItem('count'+identifier))) ? 
                0 :
            parseInt(localStorage.getItem('count'+identifier)))

    //check localstorage countDown anf if not 'true' assign false
    const [countDown, setCountDown] = 
        useState(
            localStorage.getItem('countDown'+identifier) === 'true' ? true : false )

    //create a reference to a DOM element, It is accesible after the first render in a useEffect function
    const buttonRef = useRef()
    
    //update the local storage values when data changes
    useEffect(()=>{
        localStorage.setItem('count'+identifier,value)
        // console.log('count'+identifier+' value: '+ value)

        //execute sumFunction from parent component, send it id and value
        sumFunction(identifier,value)

    },[value])

    useEffect(()=>{
        localStorage.setItem('countDown'+identifier,countDown)
    },[countDown])
    

    useEffect(()=>{
        //this use effect runs at first mount
        //it has acces to all useRef reerences
        buttonRef.current.style.borderRadius = '1em'
        buttonRef.current.style.width = "10em"
        buttonRef.current.style.padding = '0.2em'
        console.log(color)
        buttonRef.current.style.backgroundColor =color

        //when clicker is hiden it is unmounted and the return function is executed
        return ()=>{
            localStorage.removeItem('count'+identifier)
            localStorage.removeItem('countDown'+identifier)
            sumFunction(identifier,0)
        }

    },[])

    function buttonClick(){
        countDown ? setValue(value-1) : setValue(value+1)
        
    }

    return(
        <>
            
            <button ref={buttonRef} onClick={buttonClick}>{`Clicks ${value}`}</button>
            <br />

            <input type="checkbox" id={"checkbox"+identifier} checked={countDown} onChange={e=>setCountDown(e.target.checked)}/>
            <label htmlFor={"checkbox"+identifier}>Count down</label>
            <hr />
        
        </>
    )
}

export default Clicker