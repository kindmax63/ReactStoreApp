import Menu from '../../containers/Menu';
import {CreditCardForm} from "../../components/CreditCardForm";
import {ClientInfo} from "../../components/ClientInfo";
import {ClientAddress} from "../../components/ClientAddress";
import {StatusOrderStep} from "../../components/StatusOrderStep";
import React from "react";

import {Container,Button} from "semantic-ui-react";

export const OrderPage = () => {
    return (
        <Container>
            <Menu />
            <div className="title"><span><h1>Форма оформления заказа</h1></span></div>
            <StatusOrderStep/>
            <ClientInfo/>
            <CreditCardForm/>
            <ClientAddress/>
            <Button id="confirmToPay" color="green">Подтвердить и оплатить заказ</Button>
        </Container>
    )
}

