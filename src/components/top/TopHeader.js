import React from 'react';
import { Container, Logo, Copy, MenuButton } from './TopHeaderStyles';

class TopHeader extends React.Component {
  render() {
    return (
      <Container>
        <Logo />
        <Copy>my Application</Copy>
        <MenuButton />
      </Container>
    );
  }
}


export default TopHeader;
