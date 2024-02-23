import React from "react";

import { ImageLoading } from "./loading-style";
import splash from "../../../assets/splash.gif";

const Loading = () => {
  return (
    <ImageLoading source={splash} />
  );
};

export default Loading;