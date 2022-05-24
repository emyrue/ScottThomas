import React from 'react';
import '../style/contribute.css';

class Contribute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      story: '',
      filePicked: false,
      submitAttempt: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleStoryChange = this.handleStoryChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleStoryChange(e) {
    this.setState({ story: e.target.value });
  }

  handleFileChange(e) {
    if (e.target.files[0]) {
      this.setState({
        filePicked: true,
      });
    } else {
      this.setState({
        filePicked: false,
      });
    }
  }

  handleSubmit(e) {
    const { story, filePicked } = this.state;
    if (story === '' && !filePicked) {
      e.preventDefault();
      this.setState({ submitAttempt: true });
    }
  }

  render() {
    const {
      name,
      email,
      story,
      submitAttempt,
    } = this.state;
    return (
      <section className="contribute-container">
        <section className="contribute-section">
          <h2 className="contribute-heading">Contribute</h2>
          <form
            action="https://formspree.io/f/xeqnvzby"
            method="POST"
            encType="multipart/form-data"
            onSubmit={this.handleSubmit}
          >
            {submitAttempt && (<small className="error">Please submit a story or photo.</small>)}
            <div className="form-name form">
              <label htmlFor="name">
                <span className="label">Name</span>
                <input id="name" name="name" type="text" placeholder="Your Name" value={name} onChange={this.handleNameChange} required />
              </label>
            </div>
            <div className="form-email form">
              <label htmlFor="email">
                <span className="label">Email</span>
                <input id="email" name="email" type="email" placeholder="Your Email" value={email} onChange={this.handleEmailChange} required />
              </label>
            </div>
            <div className="form-story form">
              <label htmlFor="story">
                <span className="label">Story</span>
                <textarea id="story" name="story" placeholder="Enter your story here" value={story} onChange={this.handleStoryChange} />
              </label>
            </div>
            <div className="form-photo form">
              <label htmlFor="upload" onChange={this.handleFileChange}>
                <span className="label">Upload Photo</span>
                <input id="upload" name="upload" type="file" accept="image/*" />
              </label>
            </div>
            <div className="form-caption form">
              <label htmlFor="caption">
                <span className="label">Caption</span>
                <input id="caption" name="caption" type="text" placeholder="Caption for photo" />
              </label>
            </div>
            <button className="submit" type="submit">Submit</button>
          </form>
        </section>
      </section>
    );
  }
}

export default Contribute;
