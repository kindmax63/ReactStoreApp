import React from 'react';
import Styles from '../containers/Styles'
import { Form, Field } from 'react-final-form'
import Card from './CreditCard'

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
} from '../containers/CardUtils'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

export const CreditCardForm = () => {
    const handleClick = () => {
        const cardFormBlock = document.querySelector(".card-form");
        cardFormBlock.style.display = "none";
        const mapFormBlock = document.querySelector(".yandexMapOrder");
        mapFormBlock.style.display = "block";
        const confirmToPayButton = document.querySelector("#confirmToPay");
        confirmToPayButton.style.display = "block";
        const progress_lineBlock = document.querySelector(".progress_line");
        progress_lineBlock.style.width = "70%";
    };
    return (
        <div class="wrapper" id="app">
            <div class="card-form">
                <Styles>
                    <h2>Реквизиты карты</h2>
                    <Form
                        onSubmit={onSubmit}
                        render={({
                                     handleSubmit,
                                     form,
                                     submitting,
                                     pristine,
                                     values,
                                     active
                                 }) => {
                            return (
                                <form onSubmit={handleSubmit}>
                                    <Card
                                        number={values.number || ''}
                                        name={values.name || ''}
                                        expiry={values.expiry || ''}
                                        cvc={values.cvc || ''}
                                        focused={active}
                                    />
                                    <div>
                                        <Field
                                            name="number"
                                            component="input"
                                            type="text"
                                            pattern="[\d| ]{16,22}"
                                            placeholder="Номер карты"
                                            format={formatCreditCardNumber}
                                        />
                                    </div>
                                    <div>
                                        <Field
                                            name="name"
                                            component="input"
                                            type="text"
                                            placeholder="Имя владельца"
                                        />
                                    </div>
                                    <div>
                                        <Field
                                            name="expiry"
                                            component="input"
                                            type="text"
                                            pattern="\d\d/\d\d"
                                            placeholder="Месяц/Год"
                                            format={formatExpirationDate}
                                        />
                                        <Field
                                            name="cvc"
                                            component="input"
                                            type="text"
                                            pattern="\d{3,4}"
                                            placeholder="CVC"
                                            format={formatCVC}
                                        />
                                    </div>
                                    <div className="buttons">
                                        <button id="creditCardAgree" type="submit" disabled={submitting} onClick={handleClick}>
                                            Подтвердить
                                        </button>
                                        <button
                                            type="button"
                                            onClick={form.reset}
                                            disabled={submitting || pristine}
                                        >
                                            Сброс
                                        </button>
                                    </div>
                                   {/* <pre>{JSON.stringify(values, 0, 2)}</pre>*/}
                                </form>
                            )
                        }}
                    />
                </Styles>

</div>
</div>

    )
}