import React from 'react'
import { Container, Item, Segment } from 'semantic-ui-react'

const Footer = () => (
    <Segment className="ui inverted vertical segment">
        <Container textAlign='center'>
            <p>Developpé par <Item as='a' href='mailto:maxime@famillevaillant.fr'>Maxime Vaillant</Item></p>
        </Container>
    </Segment>
)

export default Footer