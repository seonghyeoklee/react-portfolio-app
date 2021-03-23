import React, { Component } from "react";
import { saveAs } from "file-saver";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload =
        "/react-portfolio-app" + this.props.data.resumeDownload;
    }

    const onDownload = async () => {
      const downloadResult = await fetch(resumeDownload);
      const blob = await downloadResult.blob();
      saveAs(blob, "이력서_이성혁(Java_Backend).pdf");
    };

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="seonghyeoklee" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
                <p>
                  <button type="button" onClick={onDownload}>
                    <i className="fa fa-download"></i> Download Resume
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
