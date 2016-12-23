import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import AutoRenew from 'material-ui/svg-icons/action/autorenew';
import { DefeatIcon, VictoryIcon } from './Icon';

const Navbar = ({ onClick, bombsLeft, hasWon, hasLost }) => {
  const badge = (
    <Badge
      badgeContent={bombsLeft}
      secondary
    >
      <NotificationsIcon />
    </Badge>
  );

  const resetIcon = (
    <IconButton
      tooltip="reset"
      onClick={onClick}
    >
      <AutoRenew />
    </IconButton >
  );

  return (
    <AppBar title="Minesweeper"
      iconElementRight={
        hasWon ? (<VictoryIcon />) : (hasLost ? (<DefeatIcon />) : badge)
      }
      iconElementLeft={resetIcon}
    />
  );
};

Navbar.propTypes = {
  onClick: PropTypes.func.isRequired,
  bombsLeft: PropTypes.number.isRequired,
  hasWon: PropTypes.bool.isRequired,
  hasLost: PropTypes.bool.isRequired,
};

export default Navbar;
