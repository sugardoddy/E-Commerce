
import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {
  constructor()
  {
    super();

    this.state = {
      sections: [
        {
          title: 'topi',
          imageUrl: 'https://i.ebayimg.com/images/g/wMoAAOSw-RhacJBY/s-l300.jpg',
          id: 1,
          linkUrl: 'topi'
        },
        {
          title: 'jaket',
          imageUrl: 'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/bd751cd6c6ec4db1b759ac4101879926_9366/ctn-event-hood-pulovr.jpg',
          id: 2,
          linkUrl: 'jaket'
        },
        {
          title: 'sepatu',
          imageUrl: 'https://wallpaperaccess.com/full/830639.jpg',
          id: 3,
          linkUrl: 'sepatu'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'mens'
        }
      ]
    }
  }

  render() {
    return(
      <div className='directory-menu'>
      {
        this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={ id } {...otherSectionProps} />
        ))
      } 
      </div>
    )
  }
}

export default Directory;
