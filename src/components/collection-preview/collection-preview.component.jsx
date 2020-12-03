import React from 'react';

import CollectionItem from "../collection-item/collection-item.component";

import './collection-preview.styles.scss'

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {/*this may be a performance concern if the items array gets too large.
            these will get called every time the component is (re)rendered*/}
            {items
                .filter((item, index) => index < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                )
/*              The below map is the same as the above but without spreading
                .map(item => (
                       <CollectionItem key={item.id}>{item.name}</CollectionItem>
                     )
                  */
                )}
        </div>
    </div>
)

export default CollectionPreview;