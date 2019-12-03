import React from 'react';
import PropTypes from "prop-types";


class EditBio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: props.person.bio
    };
  }

  changeBio = (event) => {
    this.setState({ bio: event.target.value });
  }

  // why do we need this method?
  onSubmit = () => {
    this.props.onSubmit(this.state.bio);
  }

  render() {
    return <div>
      <h4>Edit Bio</h4>
      <input value={ this.state.bio } onChange={this.changeBio} />
      <button onClick={this.onSubmit}>Save</button>
      {/* Alternatively: */}
      {/* <button onClick={() => this.props.onSubmit(this.state.bio)}>Save</button> */}
    </div>
  }

}

EditBio.propTypes = {
  person: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default EditBio;