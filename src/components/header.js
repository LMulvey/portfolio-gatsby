import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import HeaderButton from './headerButton';

const Header = ({ siteTitle }) => (
  <div>
    <Link to="/" style={{ textDecoration: 'none', }}>
      <Wordmark>Lee Mulvey</Wordmark>
      <Submark>Web Developer, Weird Dad, Mentor, Creator, Do-er</Submark>
    </Link>

    <ButtonsContainer>
      <HeaderButton title="GitHub" link="http://www.github.com/LMulvey" icon="fab fa-github" />
      <HeaderButton title="Twitter" theme={{ main: '#1dcaff', contrast: 'white' }} link="http://www.twitter.com/LeeMulvey" icon="fab fa-twitter" />
    </ButtonsContainer>
  </div>
)

export default Header;

const Wordmark = styled.h1`
  display: inline-block;
  font-size: 5rem;
  text-align: center;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
`;

const Submark = styled.p`
  display: block;
  margin-top: -10px;
  transform: skew(-15deg, 0deg);
  padding: 10px;
  background-color: white;
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;


