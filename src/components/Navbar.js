import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const Navbar = ({ onClick }) => {
  return (
    <AppBar title="Minesweeper"
      iconElementRight={<FlatButton label="Reset" onClick={onClick} />}
    />
  );
};

Navbar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Navbar;
