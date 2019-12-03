import React from "react";
import PropTypes from "prop-types";
import EditBio from './EditBio';
import { setBio } from "../api";
import profHPhoto from '../profh.jpg';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBio: true,
      showEdit: false,
    }
  }

  toggleBio = () => {
    const newShowBio = !this.state.showBio;
    // only need to include keys of state we're changing
    this.setState({ showBio: newShowBio });
  }

  toggleEditBio = () => {
    const newShowEditBio = !this.state.showEdit;
    this.setState({ showEdit: newShowEditBio });
  }

  saveBio = (newBio) => {
    this.setState({ showEdit: false });
    setBio(newBio);
  }

  render() {
    console.log(this.props.person);
    return <div>
      {/* All profiles will have prof h's photo...for now */}
      <img src={profHPhoto} />
      <h3>{this.props.person.name}</h3>

      {/* Only show the bio if showBio is set to true! */}
      { this.state.showBio ? <p>{ this.props.person.bio }</p> : null }
      <button onClick={this.toggleBio}>{ this.state.showBio ? "Hide" : "Show" } Bio</button>
      <button onClick={this.toggleEditBio}>{ this.state.showEdit ? "Cancel" : "Edit Bio" }</button>

      {/* We pass in a function to call when we change the bio */}
      { this.state.showEdit ? <EditBio person={this.props.person} onSubmit={this.saveBio} /> : null }
    </div>
  }
}

Profile.propTypes = {
  person: PropTypes.objectOf({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
    }).isRequired
}

export default Profile;