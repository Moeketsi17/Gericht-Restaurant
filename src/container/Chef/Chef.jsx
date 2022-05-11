import React from 'react';

import { images } from '../../constants';
import{SubHeading} from '../../components'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className="app__chef-content">
        {/* qoute */}
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit ame Eum, quisquam. Laboriosam?
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas illo adipisci placeat quo aliquam? Autem magni libero cum. Minima velit adipisci ullam id sed beatae quas quia, doloremque eius, modi placeat repellendus.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="signed" />
      </div>

    </div>
  </div>
);

export default Chef;
