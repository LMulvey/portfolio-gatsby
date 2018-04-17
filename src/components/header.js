import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import HeaderButton from './headerButton';

const Header = ({ siteTitle }) => (
  <div>
    <Link to="/" style={{ textDecoration: 'none', }}>
      <Wordmark>≋w≋a≋v≋e≋s≋</Wordmark>
      <Submark>Maker of thngs and I like waves</Submark>
    </Link>
    
    <ButtonsContainer>
      <HeaderButton title="Blog" link="http://www.leemulvey.com/blog" icon="fal fa-newspaper" />
      <HeaderButton title="Twitter" theme={{ main: '#1dcaff', contrast: 'white' }} link="http://www.twitter.com/LeeMulvey" icon="fab fa-twitter" />
      <HeaderButton title="GitHub" link="http://www.github.com/LMulvey" icon="fab fa-github" />
      <HeaderButton title="StackOverflow" theme={{ main: '#FF9900', contrast: 'white', color: '#FF6922' }} link="https://stackoverflow.com/users/8246359" icon="fab fa-stack-overflow" />
    </ButtonsContainer>
  </div>
)

export default Header;

const Wordmark = styled.h1`
  display: block;
  font-family: 'flood-std', sans-serif;
  font-size: 5rem;
  text-align: center;
  text-shadow: -5px -5px 0px white;
  background: #1a2a6c;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Submark = styled.p`
  display: block;
  margin-top: -10px;
  transform: skew(-15deg, 0deg);
  padding: 10px;
  background-color: #F1EAEA;
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;


