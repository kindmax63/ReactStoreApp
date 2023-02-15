import React from 'react';
import {Card, Image, Icon, Button} from 'semantic-ui-react';

const PhoneCard = phone => {
   const {title, author, price, image, memory, addToCart, addedCount} = phone;
    const cartMenuButton = document.querySelector("#buttonToCart");
    if (addedCount > 0) {
        cartMenuButton.style.background = "green";
    } else{
        cartMenuButton.style.background = "grey";
    }
   return (
    <Card >
        <Image src={image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
                <span className='date'>{author}</span>
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <a>
               <Icon name='cog' />
              {memory}
            </a>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='rub' />
                {price}
            </a>
        </Card.Content>
        <Button  id="card" onClick={addToCart.bind(this, phone)}  >
            В корзину {addedCount > 0 && `(${addedCount})`}
        </Button>
    </Card>
);
};


export default PhoneCard;