import React from 'react';
import { Input, Menu } from 'semantic-ui-react'
import {setFilter} from '../actions/filter';
import {setSearchQuery} from '../actions/filter';

const Filter = ({setFilter, filter, searchQuery, setSearchQuery}) => (

            <Menu secondary>
                <Menu.Item
                    active={filter === 'all'}
                    onClick={setFilter.bind(this, 'all')}>
                    Все
                </Menu.Item>
                <Menu.Item
                    name='price_higher'
                    active={filter === 'price_higher'}
                    onClick={setFilter.bind(this, 'price_higher')}>
                    Цена (выше)
                </Menu.Item>
                <Menu.Item
                    name='price_lower'
                    active={filter === 'price_lower'}
                    onClick={setFilter.bind(this, 'price_lower')}>
                    Цена (ниже)
                </Menu.Item>
                <Menu.Item
                    name='company'
                    active={filter === 'company'}
                    onClick={setFilter.bind(this, 'company')}>
                    Производитель
                </Menu.Item>
                <Menu.Item>
                 <Input icon="search" onChange = {e=>setSearchQuery(e.target.value)} value={searchQuery} placeholder="Поиск..."></Input>
                </Menu.Item>
            </Menu>
);

export default Filter;