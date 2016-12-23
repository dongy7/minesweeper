import React, { PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';

export const BombIcon = () => {
  return (
    <i className="fa fa-bomb fa-lg"/>
  );
};

export const NumberIcon = ({ number }) => {
  return (
    <span className="fa-stack">
      <i className="fa fa-circle fa-stack-2x"></i>
      <i className="fa fa-inverse fa-stack-1x">
        {number}
      </i>
    </span>
  );
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
