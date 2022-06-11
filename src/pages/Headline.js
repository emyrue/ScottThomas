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
            Hello! Welcome to Scott Thomas&apos;s tribute site!
            Help us celebrate his 80th birthday by sending us
            your photos and stories! To view pictures, head to the
            Gallery page. To read stories about Scott, head to the
            Stories page. To submit your own photos and stories,
            head to the Contribute page.
          </p>
        </div>
        <img className="desktop-banner" src={desktop} alt="" />
        <img className="mobile-banner" src={mobile} alt="" />
      </section>
    );
  }
}

export default Headline;
