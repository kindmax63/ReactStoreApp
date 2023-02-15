import React, {useCallback} from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';
import {useNavigate} from "react-router-dom";


const CartComponent = ({ title, id, image, removeFromCart }) => (
    <List selection divided verticalAlign="middle">
        <List.Item>
            <List.Content floated="right">
                <Button onClick={removeFromCart.bind(this, id)} color="red">
                    Удалить
                </Button>
            </List.Content>
            <Image avatar src={image} />
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
);

const MenuComponent = ({totalPrice, count, items}) => {
    let navigate = useNavigate();
    const handleClick = useCallback(() => {
        navigate('/cart');
    },[navigate]);
    const handleClickHome = useCallback(() => {
        navigate('/');
    },[navigate]);
    return (
        <Menu>
            <Menu.Item
                name='storeName' onClick={handleClickHome}>
                KindMAXStore
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item
                    name='totalPrice'>
                    Итого: &nbsp;<b>{totalPrice}</b>&nbsp;руб.
                </Menu.Item>
                <Popup
                    trigger={
                        <Menu.Item name="amountInCart">
                            Корзина (<b>{count}</b>)
                        </Menu.Item>
                    }
                    content={items.map(phone => (
                        <CartComponent {...phone}/>
                    ))}
                    on="click"
                    hideOnScroll
                />
                <Menu.Item
                    name='cart'>
                    <Button id="buttonToCart" color="grey" onClick={handleClick}>
                        Перейти в корзину
                    </Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}



export default MenuComponent;