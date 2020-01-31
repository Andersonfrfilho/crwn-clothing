import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item.components';
import './directory.styles.scss';

export default function Directory() {
  const [sections, setSections] = useState([
    {
      title: 'hats',
      imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
      linkUrl: 'hats',
      id: 1,
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      linkUrl: 'jackets',
      id: 2,
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      linkUrl: 'sneakers',
      id: 3,
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      linkUrl: 'womens',
      id: 4,
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      linkUrl: 'mens',
      id: 5,
    },
  ]);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} subtitle="SHOP NOW" />
      ))}
    </div>
  );
}
