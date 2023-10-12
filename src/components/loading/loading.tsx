import { ImageLoading } from "./loading-style";
import splash from "../../assets/splash.gif"
import { Image } from "react-native";
import React from "react";

const Loading= () => {
 
  return (
    
   <ImageLoading source = {splash}/>
      
  );
};

export default Loading;