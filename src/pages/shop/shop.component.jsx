import React, { useState } from 'react';

import Data from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.components';

export default function Shop() {
  const { shopData } = Data;
  const [collections, setCollections] = useState(shopData);
  console.log(shopData.shopData);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id.toString()} {...otherCollectionProps} />
      ))}
    </div>
  );
}
