import './Footer.css';
import './AdaptiveFooter.css';
import logo from '../../assets/logo.png';
import whatsApp from '../../assets/whatsapp.png';
import telegram from '../../assets/telegram.png';
import phone from '../../assets/phone.png';
const Footer = () => {
    return (
        <div className='wrapper5'>
              <hr style={{width:"100%", alignSelf:"center"}}/>
            <div className="wrapper4" >

                <div className='logoBox'>
                    <img 
                    className="t446__imglogo t446__imglogomobile" 
                    src={logo} 
                    alt="logo"
                    style={{width: "55px", maxWidth: "55px"}}
                    />
                    <span style={{marginLeft:"-12px", color:"#51656f", fontSize:"20px", fontFamily:"Anta, sans-serif"}}>FOREST</span>
                </div>
           
                <div>
                    <div>
                        <ul className="list">
                        <a href="https://wa.clck.bar/79615143725" className='ddItem'>
                            <img src={whatsApp} alt='whatsApp' width="35px" height="35px"/>
                            <span className='contacts'>WhatsApp</span>
                        </a>
           
                        <a href="https://t.me/+79274238608" className='ddItem'>
                            <img src={telegram} alt='telegram' width="35px" height="35px"/>
                            <span className='contacts'>Telegram</span>
                        </a>

                        <a href="tel:89615143725" className='ddItem'>
                            <img src={phone} alt='phone' width="35px" height="35px"/>
                            <span  className='contacts'>+7 (961) 514-37-25</span>    
                        </a>
                        </ul>
                    </div>
                </div>
            
                    <div>
                    <div className="t446__right_buttons2">
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
            
    )
}

export default Footer;