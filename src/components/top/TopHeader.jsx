import React from 'react'
import { Container, Logo, Copy, MenuButton } from './TopHeaderStyles'

class TopHeader extends React.Component {
  render() {
    return (
      <Container>
        <Copy>my Application</Copy>
      </Container>
    )
  }
}
export default TopHeader;
