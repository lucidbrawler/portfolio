import React from "react";
import { InlineWidget } from "react-calendly";



const Landing = () => (
  <div className="App">
    <h1>Hatchet Tech</h1>
 
    <div className="Calendly" >
      <InlineWidget styles={{
                    height: '800px'}}
                    url="https://calendly.com/hatchetpressmail/web-services-consultation" />
    </div>
    <h1>Hatchet Tech</h1>
    </div>
);
    export default Landing;