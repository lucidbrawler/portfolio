
import "../App.css"
import recipelab from '../images/recipelab.png';
import Warthog from '../images/warthognetwork.png';
import jodygrenier from '../images/jodygrenierart.png';
import hatchetpress from '../images/HatchetPress.png';
const Websites = () => {


   
    return(
<div className="">
    These are two of my current running websites, excluding this one.<br/><br/>
    Portfolio Links:<br/><br/>
    <section className="wrapper">
            
           <a target="blank" className="box" href='https://www.recipelab.fun/login'>RECIPE LAB</a><br/>

            <a target="blank" className="box2" href=  'https://hatchetpress.net/#/'>HATCHET PRESS</a><br/>
           <a target="blank" className="box3" href=  'https://Warthog.Network'>Warthog Network</a><br/>
            <a target="blank" className="box4" href=  'https://jodygrenier.art/#/'>Jody Grenier Photography</a><br/>
            <img className='effect' alt="" src={recipelab}/>
            <img className='effect2' alt="" src={hatchetpress}/>
            <img className='effect3' alt="" src={Warthog}/>
            
            <img className='effect4' alt="" src={jodygrenier}/>
           
        </section>
</div>)

};

export default Websites;