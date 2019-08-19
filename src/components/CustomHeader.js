import React, {Component} from 'react';
import imagen from '../images/marfeel_logo_rgb.svg';

class  CustomHeader extends Component {


    render() { 

        const { headerBackground, logo, sectionMenu, burgerMenuColour} = this.props.customdesign;
  
        const stylecolorItems = sectionMenu && {color: sectionMenu.colorItems}
        const styleBurgerMenuColour = {background: burgerMenuColour}
        const styleSizelogo = logo && logo.sizelogo;
        const styleHeaderBackground = {background: headerBackground};
        
        return (

            <div className="row section-nav">
           
            <div className="col-12 text-center CustomBg " style={styleHeaderBackground}>
            
                <nav role="navigation">
                    <div id="menuToggle">
    
                        <input type="checkbox" />
                        
                        <span style={styleBurgerMenuColour}></span>
                        <span style={styleBurgerMenuColour}></span>
                        <span style={styleBurgerMenuColour}></span>
                        
                        <ul id="menu">
                            <li><a href="#!">Main Section 1</a></li>
                            <li><a href="#!">Main Section 2</a></li>
                            <li><a href="#!">Main Section 3</a></li>
                            <li><a href="#!">Main Section 4</a></li>
                            <li><a href="#!">Main Section 5</a></li>
        
                        </ul>
                    </div>
                    <div className="roundBackground"></div>
                </nav>
    
    
                <div className="navbar-brand mx-auto mt-4 mb-2"><a href="#!"><img src={imagen} className="imglogo" width={styleSizelogo} alt="logo Marfeel" /></a></div>
    
                <div className="nav-section justify-content-center mt-2">
                    <ul>
                        <li><a href="#!" style={stylecolorItems}>Section 1</a></li>
                        <li><a href="#!" style={stylecolorItems}>Section 2</a></li>
                        <li><a href="#!" style={stylecolorItems}>Section 3</a></li>
                        <li><a href="#!" style={stylecolorItems}>Section 4</a></li> 
                    </ul>
                </div>
    
                </div> 
    
    
            </div>

        )

    }

}



export default CustomHeader;

