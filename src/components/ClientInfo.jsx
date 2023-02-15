import React, {useCallback} from 'react';

export const ClientInfo = () => {
    const handleClick = () => {
        const clientInfoBlock = document.querySelector(".contentClientInfo");
        clientInfoBlock.style.display = "none";
        const cardFormBlock = document.querySelector(".card-form");
        cardFormBlock.style.display = "block";
        const progress_lineBlock = document.querySelector(".progress_line");
        progress_lineBlock.style.width = "50%";
    };
    return (
        <div className="contentClientInfo">
            <p></p>
            <div className="form">
                <form  name="my_form">
                    <label><span className="fio"> ФИО:</span> <br/>
                        <input type="search" className="guest"/></label> <p></p>
                    <label><span className="email"> E-mail:</span><br/>
                        <input type="email" className="guest"/></label><p></p>
                    <label><span className="phone">Номер телефона:</span><br/>
                        <input type="search" className="guest"/></label><p></p>
                  {/*  <span className="goods"> Наименование товара:</span><br/>*/}
                  {/*  <select name="goods" className="guest">
                        <option value="Товар 1">Товар 1</option>
                        <option value="Товар 2">Товар 2</option>
                    </select><p></p>*/}
                {/*    <label><span className="number"> Количество:</span><br/>*/}
                        {/*<input type="search" className="guest"/></label>*/}<p></p>
                    <label><span className="date"> Дата доставки:</span><br/>
                        <input type="date" className="guest"/></label><p></p>
                    <div className="bottom">
                        <input id="stepOne" onClick={handleClick} type="button" className="bottom1" value="Перейти к реквизитам оплаты"/></div>
                </form>
            </div>
        </div>
    )
}


