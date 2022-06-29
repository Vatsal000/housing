import React, { useState } from 'react'



export default function TextForm(props) {
    
    const onChangehandler =(event)=>{
        setText(event.target.value);
    }

    const onClickUpper =()=>{
        setText(text.toUpperCase());
        props.showAlert('converted to uppercase!','success')
    }
    const onClickLower =()=>{
        setText(text.toLowerCase());
        props.showAlert('converted to lowercase!','success')
    }
    const clearText =()=>{
        setText('');

    }
    ///
    const position =()=>{
        setx(text.indexOf(x));
    }
    const posiword =(e)=>{
        setx(e.target.value);
    } 
    const[x,setx]=useState('');
    ///
    const handlespace=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(' '))
    }

    const [text,setText] =useState('');
    
    if (text.length>=50){
        props.showAlert('chracters should be less than 200','success')
        
    }
    const regenerate=()=>{
        if (text.split(String+' ')){
            return text.length
        }
    }

    return (
        <>
        <div className='container'style={{color: props.mode==='dark'?'white':'#09094e'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'#09094e'}} onChange={onChangehandler} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={onClickUpper}>convert them to uppercase</button>    
            <button className="btn btn-primary mx-2" onClick={onClickLower}>convert them to lowercase</button>    
            <button className="btn btn-primary mx-2" onClick={clearText}>clear</button>    
            <input className="btn btn-primary mx-2" onChange={posiword} placeholder="Search"/>
            <button className="btn btn-success mx-2"onClick={position}>Search the position</button>
            <button className="btn btn-success mx-2"onClick={handlespace}>handle space</button>

        </div>
        <div className='container mp-3'style={{color: props.mode==='dark'?'white':'#09094e'}}>
            <h1>your text summery</h1>
            <p> {regenerate} words and {text.length} characters</p>
            <p> {0.008*text.split(' ').length+text.length+1}minute to read</p>
            <h2>Preview</h2>
            <p> {text.length>0 ?text:'enter something'}</p>
            <p> the position of your word is :{x}</p>
        </div>        
        </>

        )
}
