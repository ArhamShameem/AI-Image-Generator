import React, { useState } from "react";
import default_image from "../assets/default_image.svg";
import "./imagegenrator.css";
import { useRef } from "react";
import OpenAI from "openai";
const ImageGenerator = () => {
    const [image_url,setImage_Url]=useState("/");
    let inputRef=useRef(null);

    // const OpenAI=require("openai")
   
    const imageGenerator=async()=>{
        if(inputRef.current.value===""){
            return 0;
        }
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: "a white siamese cat",
            n: 1,
            size: "1024x1024",
          });
          image_url = response.data[0].url;
          let data=await response.json();
          console.log(data);
    }
  return (  
    <div>
      <div className="ai-image-generator">
      <a href=""><div className="github">Github</div></a>
        <div className="header">
          Ai image <span>Generator</span>
        </div>

        <div className="image-loading">
          <div>
            <img src={image_url==="/"?default_image:image_url} alt="" />
          </div>
        </div>
        <div className="search-box">
          <input ref={inputRef}
            className="button"
            type="text"
            placeholder="Enter prompt here!"
          ></input >
          <div className="generate-button" onClick={()=>imageGenerator()}>Generate</div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
