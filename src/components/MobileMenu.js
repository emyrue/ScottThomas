import React from 'react';

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mobile-links">
        <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/stories">Stories</a>
        <a href="/contribute">Contribute</a>
      </div>
    );
  }
}

export default MobileMenu;
