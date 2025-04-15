import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  to?: string;
  onClick?: () => void;
  icon?: IconProp;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  to,
  onClick,
  icon,
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary';

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        {text}
        {icon && <FontAwesomeIcon icon={icon} className="ml-2" />}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      type="button"
    >
      {text}
      {icon && <FontAwesomeIcon icon={icon} className="ml-2" />}
    </button>
  );
};

export default Button;