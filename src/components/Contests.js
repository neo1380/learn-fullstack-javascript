import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <div className="category-name"> {this.props.description} </div>
      </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Contest;
