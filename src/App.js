import React,{useState} from "react";
import "./App.css"
function App(){
  const[emoji, setEmoji]=useState("ðª")
 const[emojiColor,setEmojiColor]=useState("white")
 const[emojiSize,setEmojiSize]=useState(100);
 const[emojideg,setEmojideg]=useState(0);

  return(
    <div className="container">
      <div  className="title-container">
        <h1 className="title">ðemoji kit</h1>
        </div>

        <div className="emoji-editor-container">
          <div>
            
          <div className="main-emoji-container" style={{backgroundColor:emojiColor, transform:`rotate(${emojideg*3.6}deg)`}}>
          <div className="main-emoji"style={{fontSize:`${emojiSize *2}px`}}>
            {emoji}
            </div>
        </div>
        <div className="emoji-container">
          
          <div className="emoji-item" onClick={()=>{setEmoji('ðª')}}>ðª</div>
          <div className="emoji-item" onClick={()=>{setEmoji('ð')}}>ð</div>
          <div className="emoji-item" onClick={()=>{setEmoji('ð¼')}}>ð¼</div>
          <div className="emoji-item" onClick={()=>{setEmoji('ð')}}>ð</div>
          <div className="emoji-item" onClick={()=>{setEmoji('ð')}}>ð</div>
                 
            </div>

 
          </div>
          <div>
             
             <div className="colors-container">
              <div className='color-item bg-red' onClick={()=>{setEmojiColor("red")}}></div>
              <div className='color-item bg-blue' onClick={()=>{setEmojiColor("blue")}} ></div>
              <div className='color-item bg-pink' onClick={()=>{setEmojiColor("pink")}}></div>
              <div className='color-item bg-purple' onClick={()=>{setEmojiColor("purple")}}></div>
              <div className='color-item bg-black' onClick={()=>{setEmojiColor("black")}} ></div>
             </div>
               <div className="size-container">
               <input type="range" className="size-slider" onChange={(e)=>{setEmojiSize(e.target.value)}}/>
             </div>             
             <div className="size-container">
               <input type="range" className="size-slider" onChange={(e)=>{setEmojideg(e.target.value)}}/>
             </div>             
          </div>
        </div>
    </div>
  )
}

export default App