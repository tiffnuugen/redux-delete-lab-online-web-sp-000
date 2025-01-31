import React, { Component } from 'react';
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput />
        <ul>
          {this.props.bands.map((band) => (
            <Band
              deleteBand={this.props.deleteBand}
              key={band.id}
              band={band}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = (dispatch) => ({
  deleteBand: (id) => dispatch({ type: 'DELETE_BAND', id })
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
