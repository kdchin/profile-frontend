import React from "react";
import PropTypes from "prop-types";
import EditBio from './EditBio';
import { setBio } from "../api";

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
      <h3>{this.props.person.name}</h3>
      { this.state.showBio ? <p>{ this.props.person.bio }</p> : null }
      <button onClick={this.toggleBio}>{ this.state.showBio ? "Hide" : "Show" } Bio</button>
      <button onClick={this.toggleEditBio}>{ this.state.showEdit ? "Cancel" : "Edit Bio" }</button>
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