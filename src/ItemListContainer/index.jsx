import React, {useState, useEffect} from "react";
import Title from "../Title";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";

const games = [
    { id: 1, image: "https://m.media-amazon.com/images/I/51FJZMEGENL.jpg", title: "Tony Hawk Pro Skater"},
    { id: 2, image: "https://m.media-amazon.com/images/I/61Gz1FccqGL._SL1000_.jpg", title: "Tekken 3"},
    { id: 3, image: "https://m.media-amazon.com/images/I/61TEAiMMxsL._SL1000_.jpg", title: "Gran Turismo"},

];

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve(games);
            }, 3000);
        });
        getData.then(res => setData(res));

    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        <>
        <Title greeting="Usuario" />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer; 