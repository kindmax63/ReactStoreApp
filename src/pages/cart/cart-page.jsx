import React, {useCallback} from "react"
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Menu from '../../containers/Menu';

import { CartItem } from '../../components/CartItem';

import {Button, Card, Container, Icon, Image, List} from "semantic-ui-react";


export const CartPage = () => {
    let navigate = useNavigate();
    const handleClick = useCallback(() => {
        navigate('/order');
    },[navigate]);
    const items = useSelector((state) => state.shoppingCart.items);
    return (
      <Container>
          <Menu />
          <div className="cartItemsInside" >
          <div className="cartPage"  >
              <h3>{items != 0 ? 'Товары в корзине:' :'Ваша корзина пуста '}</h3>

                      <div className="orderPageItems">
                          {items.map(phone => <CartItem phone={phone}/>)}
                      </div>

          </div>
          </div>
          <Button id="buttonToOrder" color="green" onClick={handleClick} >
              Перейти к оформлению
          </Button>
      </Container>
  )
}