import './NavBar.css';
import './AdaptiveNavBar.css';
import arrow from '../../assets/arrow.png';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import Dropdown from '../../utils/dropdown/Dropdown';



const NavBar = () => {
    const [showDD, setShowDD] = useState<boolean>(false);



    return (
        <div 
        id="nav345742427" 
        className="t446 t446__positionfixed" 
        >
            <div className="t446__maincontainer " >
               
                <div className="t446__logowrapper">
                    <div className="t446__logowrapper2">
                        <div style={{display: "flex"}}>
                            <a href="/">
                            <img 
                            className="t446__imglogo t446__imglogomobile" 
                            src={logo} 
                            alt="logo"
                            style={{width: "55px", maxWidth: "55px"}}
                            />
                            <span style={{marginLeft:"-12px", color:"#51656f", fontSize:"20px", fontFamily:"Anta, sans-serif"}}>FOREST</span>
                            </a>
                        </div>
                    </div>
                </div>
            
                <div className="t446__leftwrapper" style={{paddingRight:"87.5px", textAlign: "left"}}>
                    <div className="t446__leftmenuwrapper" style={{padding:"0 0 0 15px 0 0"}}>
                        <ul className="t446__list t-menu__list">
                             <li className="t446__list_item" >
                                Contact us
                                <img 
                                src={arrow} 
                                alt="arrrow" 
                                style={{width: "15px", margin: "3px 3px -2px 2px"}}
                                onClick={() => setShowDD(!showDD)}
                                />
                                
                            </li>
                        </ul>
                    </div>
                    <div className={showDD ? "showDD" : "hideDD"}>
                        <Dropdown/>
                    </div>
                    
                </div>
                <div className="t446__rightwrapper" style={{paddingLeft:"87.5px", textAlign: "right"}}>

                <div className="t446__additionalwrapper">
                    <div className="t446__right_buttons">
                        <div className="t446__right_buttons_wrap">
                            <div className="t446__right_buttons_but">
                                <a 
                                href="#booking"
                                className="t-btn t-btn_md " 
                                >
                                    <table role="presentation" style={{width:"100%", height:"100%"}}>
                                        <tbody><tr><td>Book</td></tr>
                                        </tbody>
                                    </table>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
             
                </div>
                
            </div>
        </div>
                                    
    )
}

export default NavBar;

