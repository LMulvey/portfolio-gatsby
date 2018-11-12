import React from 'react';
import styled from 'styled-components';

const MetaButton = ({ link, icon, title, theme }) => (
    <a href={link}>
      <Button theme={theme}>
        <i className={`${icon} fa-fw`} /> {title}
      </Button>
    </a>
);


const Button = styled.button`
  margin: 5px;
  border: 2px solid ${props => props.theme.main};
  border-radius: 6px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
  padding: 10px 25px;
  background-color: rgba(0, 0, 0, 0.6);
  color: ${props => props.theme.color || props.theme.main};
  transition: all 75ms ease-in;
  transition-property: border, background-color, color, transform;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.contrast};
    transform: scale(1.04);
  }
`;

Button.defaultProps = {
  theme: {
    main: 'white',
    contrast: '#333333'
  }
}

export default MetaButton;