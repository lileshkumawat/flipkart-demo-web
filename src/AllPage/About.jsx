import aboutusheader from './img/about1header.png'
import aboutheader from './img/about2header.png'
import handbag1 from './img/handbag.png'
import startedheader1 from './img/startedheader.png'
import infographic1 from './img/infographic.png'
import thejourney1 from './img/thejourney.png'
import fkglobe1 from './img/fkglobe.png'
import "./All.css"
function About(){
    return(
        <div className="about-container">
            <div className="aboutusheader">
                <img src={aboutusheader} alt="aboutusheader" />
            </div>
            
            <div className='infographic'>
                <img src={aboutheader} alt="aboutheader" />
                <img src={handbag1} alt="handbag" />
                <img src={startedheader1} alt="startedheader1" />
                <img src={infographic1} alt="infographic" />
                <img src={thejourney1} alt="thejourney1" />
                <img src={fkglobe1} alt="fkglobe1" />
            </div>
        
        </div>
    );
}

export default About;