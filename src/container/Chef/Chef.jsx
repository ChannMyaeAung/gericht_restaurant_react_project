import React from 'react';
import {SubHeading} from '../../components'

import {images} from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">

        <img 
            src={images.chef} 
            alt="chef" 
        /> 
    </div>

    <div className="app__wrapper_info">
        <SubHeading
            title="Chef's Word"
        />

        <h1 className='headtext__cormorant'>What we believe in</h1>

        <div className="app__chef-content">
            <div className="app__chef-content_quote">
                <img src={images.quote} alt="quote" />

                <p className="p__opensans">
                    The chef can be very innovative, but the decision is made by the customer.
                </p>
            </div>

            <p className="p__opensans">
                I think the most wonderful thing in the world is another chef. 
                I'm always excited about learning new things about food.
            </p>
        </div>

        <div className="app__chef-sign">
            <p className='headtext__cormorant'>
                Kevin Luo
            </p>

            <p className='p__opensans'>
                Chef & Founder
            </p>

            <img src={images.sign} alt="sign" />
        </div>
    </div>
  </div>
);

export default Chef;
