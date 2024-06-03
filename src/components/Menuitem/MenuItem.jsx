import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags, buff }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCC69E' }}>{title}</p> 
      </div>

      <div className="app__menuitem-dash"></div>

      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>

    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAa', marginTop: 10 }}><strong>Ingredients:</strong> {tags}</p>
    </div>
    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAA', marginTop: 10 }}><strong>Effects:</strong> {buff}</p>
    </div>

    
  </div>
);

export default MenuItem;
