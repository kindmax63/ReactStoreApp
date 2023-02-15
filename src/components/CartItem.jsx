import React from 'react';

import {Card, Image, Icon} from "semantic-ui-react";

export const CartItem = ({ phone }) => {
    return (

        <Card id="cartItem" >
            <Image id="cartImageItem" src={phone.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{phone.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{phone.author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='cog' />
                    {phone.memory}
                </a>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='rub' />
                    {phone.price}
                </a>
            </Card.Content>
        </Card>

    )
}