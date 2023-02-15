import React from "react";
import {Container, Card} from 'semantic-ui-react';
import axios from 'axios';

import Menu from '../containers/Menu';
import PhoneCard from '../containers/PhoneCard';
import Filter from '../containers/Filter';


class App extends React.Component{
    componentWillMount() {
        const {setPhones} = this.props;
        axios.get('/phones.json').then(response => {
            setPhones(response.data);
        });
    }

    render() {
        const {phones, isReady} = this.props;
        return (
            <Container>
                <Menu />
                <Filter/>
                <Card.Group itemsPerRow={4}>
                    {!isReady ? 'Ожидание получения товаров...' :
                        phones.map((phone, i) =>
                            <PhoneCard key={i} {...phone}/>
                        )}
                </Card.Group>
            </Container>
        );
    }
}

export default App;