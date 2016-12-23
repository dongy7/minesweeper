import React, { PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import Filter1 from 'material-ui/svg-icons/image/filter-1';
import Filter2 from 'material-ui/svg-icons/image/filter-2';
import Filter3 from 'material-ui/svg-icons/image/filter-3';
import Filter4 from 'material-ui/svg-icons/image/filter-4';
import Filter5 from 'material-ui/svg-icons/image/filter-5';
import Filter6 from 'material-ui/svg-icons/image/filter-6';
import Filter7 from 'material-ui/svg-icons/image/filter-7';
import Filter8 from 'material-ui/svg-icons/image/filter-8';
import { blue700, green500, red400, indigo900, purple800 } from 'material-ui/styles/colors';

export const BombIcon = () => {
  return (
    <i className="fa fa-bomb fa-lg"/>
  );
};

export const NumberIcon = ({ number }) => {
  let icon;
  switch (number) {
    case 1:
      icon = (<Filter1 color={blue700} />);
      break;
    case 2:
      icon = (<Filter2 color={green500} />);
      break;
    case 3:
      icon = (<Filter3 color={red400} />);
      break;
    case 4:
      icon = (<Filter4 color={indigo900} />);
      break;
    case 5:
      icon = (<Filter5 color={purple800} />);
      break;
    case 6:
      icon = (<Filter6 color={purple800} />);
      break;
    case 7:
      icon = (<Filter7 color={purple800} />);
      break;
    case 8:
      icon = (<Filter8 color={purple800} />);
      break;
    default:
      throw new Error(`Uh oh, something went wrong`);
  }

  return icon;
};

NumberIcon.propTypes = {
  number: PropTypes.number.isRequired,
};

export const FlagIcon = () => {
  return (
    <i className="fa fa-flag fa-lg"/>
  );
};

export const MehIcon = () => {
  return (
    <FontIcon className="fa-meh-o" />
  );
};

export const DefeatIcon = () => {
  return (
    <i className="fa fa-frown-o fa-4x"/>
  );
}

export const VictoryIcon = () => {
  return (
    <i className="fa fa-smile-o fa-4x"/>
  );
};

export const LargeBombIcon = () => {
  return (
    <i className="fa fa-bomb fa-2x"/>
  );
};
