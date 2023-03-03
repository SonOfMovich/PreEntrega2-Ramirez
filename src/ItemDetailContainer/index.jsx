import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";

const game = { id: 1, image: "https://m.media-amazon.com/images/I/51FJZMEGENL.jpg", title: "Tony Hawk Pro Skater"}

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve(game);
            }, 3000);
        });
        getData.then(res => setData(res));

    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;