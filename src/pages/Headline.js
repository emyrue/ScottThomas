import React from 'react';
import desktop from '../shapes/desktopbanner.svg';
import mobile from '../shapes/mobilebanner.png';

class Headline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="headline">
        <div>
          <h1 className="name">William Scott Thomas</h1>
          <p className="headline-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Vitae aliquet nec ullamcorper
            sit amet risus nullam eget felis. At quis risus sed
            vulputate odio ut enim. Mollis aliquam ut porttitor
            leo a diam sollicitudin tempor id. Arcu felis bibendum
            ut tristique et egestas quis ipsum suspendisse.
          </p>
        </div>
        <img className="desktop-banner" src={desktop} alt="" />
        <img className="mobile-banner" src={mobile} alt="" />
      </section>
    );
  }
}

export default Headline;
