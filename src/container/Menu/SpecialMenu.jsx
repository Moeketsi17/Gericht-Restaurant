import React from 'react';

import {subHeading, Menuitem} from '../../components'
import { images, data } from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app_specialMenu-Title">
      <subHeading title='Menu that fits your palatte' />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">

      {/* left side */}
      <div className="app_specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <menuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu-img" />
      </div>
      
      <div className="app_specialMenu-menu_cocktails flex__center">
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <menuItem key={cocktail.title + index} price={cocktail.price} title={cocktail.title} tags={cocktail.tags} />
          ))}
        </div>
      </div>

    </div>

    <div style={{ marginTop: '15px' }}>
      <button className='custom__button'>Veiw More</button>
    </div>
  </div>
);

export default SpecialMenu;
