import React ,{useState}from 'react'

export default function Textform(props) {
  const replacecasefunc = () => {
    let existing_text = prompt("Enter which word to replace : ");
    let replaced_text = prompt("Enter New Text");
    setText(text.replaceAll(existing_text, replaced_text))
  }







  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  } 
    const copy =() => {
      let copytext = document.getElementById("exampleFormControlTextarea1")
      copytext.select()
      navigator.clipboard.writeText(copytext.value);


    }
    
    const change = (event) => {
        setText(event.target.value)
    }
    const toupper =() => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const tolower =() => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const click = () => {
        setText('')
    }
    const [text , setText] = useState('')
  return (
    <>
      <div>
  
  <div class="container form-group">
    <label for={`exampleFormControlTextarea1 `} ><h2 className={`text-${props.mode == 'light' ? 'black':'white' } mt-5`}>{props.heading}</h2> </label>
    <textarea value={text} class="form-control mb-4 float-left" id="exampleFormControlTextarea1" rows="8" onChange={change}></textarea>
  </div>

  <button className="btn btn-primary mx-2 " onClick={toupper}>UpperClass</button>
<button className="btn btn-primary mx-2" onClick={tolower}>LowerClass</button>
<button className="btn btn-primary mx-2" onClick={click}>Clear</button>
<button className="btn btn-primary mx-2" onClick={copy}>Copy</button>
<button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
<button className="btn btn-primary mx-2" onClick={replacecasefunc}>Find and Replace</button>


<div className={`conatiner my-3 text-${props.mode == 'light' ? 'black':'white'}`}> 
<span className='mx-2'>Characters : {text.length}</span>  
<span className='mx-2'>Words:{text.split(" ").length}</span> <span className='mx-2'>Read Time:{0.08*text.split(" ").length}  </span> 
<h3 className='my-3'>Preview: </h3>
{text.length>0?text:"Enter some text to preview it :)"}

    
  </div>
 
</div>
    </>
  )
}

