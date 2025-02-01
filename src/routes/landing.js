import React from "react";
import { InlineWidget } from "react-calendly";
import Websites from "./websites";



const Landing = () => (
  <div className="App">
    
    <p>Responsive Web-Desigin, custom tailored to your needs!</p>
 <Websites/>
    <div className="Calendly" >
      <InlineWidget styles={{
                    height: '800px'}}
                    url="https://calendly.com/hatchetpressmail/web-services-consultation" />
    </div>
    <h1>Your custom website is waiting for you!</h1>
    </div>
);
    export default Landing;