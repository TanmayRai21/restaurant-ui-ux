import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, price, tags }) => (
  <div className="menuitem">
    <div className="menuitem__head">
      <div className="menuitem__head--name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="menuitem__dash" />
      <div className="menuitem__dash--price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="menuitem__sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;