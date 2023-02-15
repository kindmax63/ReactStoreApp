// @ts-ignore
import React, {Component} from "react";
import { YMaps, Map, ZoomControl} from "@pbe/react-yandex-maps";


export default class YMapsComponent extends Component {
    map: any = React.createRef();
    ymaps: any = React.createRef();
    render() {
        return (
            <div className="yandexMapOrder" id="mapOrder">
                <div><h2>Укажите адрес доставки на карте</h2></div>
            <YMaps query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21"}}>
                <Map
                    state={{ center: [55.76, 37.64], zoom: 10 }}
                    instanceRef={this.map}
                    onLoad={(ymapsInstance: any) => {
                        this.ymaps.current = ymapsInstance;
                        this.addSearchControlEvents();
                    }}
                    width="100%"
                    height="400px"
                    modules={["control.SearchControl"]}
                >
                    <ZoomControl
                        options={{ float: "none", position: { top: 100, right: 10 } }}
                    />
                </Map>
            </YMaps>
              {/*  <div className="clientAddressField" >
                    <label><span className="clientAddress">Ваши координаты доставки:</span><br/>
                        <input id="inputAddressOfMap" type="search" className="guestAddress" value={"Координаты"} /></label> <p></p>
                </div>*/}
            </div>
        );
    }


    addSearchControlEvents = () => {
        const map = this.map.current;
        const ymaps = this.ymaps.current;

        const searchControl = new ymaps.control.SearchControl({
            options: {
                float: "left",
                floatIndex: 300,
                provider: "yandex#search",
                geoObjectStandardPreset: "islands#blueDotIcon",
                placeholderContent: "Найдите пункт для доставки на карте",
                maxWidth: 320,
                size: "large"
            }
        });
        map.controls.add(searchControl);

        searchControl.events.add("resultselect", function (e: any) {
            const searchCoords = searchControl.getResponseMetaData().SearchResponse
                .Point.coordinates;
            const display: string = searchControl.getResponseMetaData().SearchResponse
                .display;

            const clientAddressField = document.querySelector("#inputAddressOfMap");
            if (searchCoords) {
                clientAddressField.value  = searchControl.getResponseMetaData().SearchResponse
                    .Point.coordinates;
            }
            console.log(searchControl.getResponseMetaData());

            if (display && display === "multiple") {
                map.setCenter([searchCoords[1], searchCoords[0]], 11);
            }
        });
    };
}
