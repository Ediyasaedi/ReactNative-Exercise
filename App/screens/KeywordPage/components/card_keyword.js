import React from 'react';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';

export default Cardkeyword = ({ keyword }) => {
    return (
        <Card style={{ marginTop: 10 }}>
            <Card.Content>
                <Title>{ keyword.name }</Title>
                <Subheading>ID: { keyword.id }</Subheading>
                <Paragraph>Description: { keyword.description }</Paragraph>
            </Card.Content>
        </Card>
    )
}