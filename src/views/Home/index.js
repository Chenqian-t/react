import React, { useState } from 'react';
import Input from '../../components/Input';
import Table from '../../components/Table';

export default function Home(props) {
    const oData = [
        { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ];
    const [name, setName] = useState('');
    const [onlyProducts, setOnlyProducts] = useState(false);
    const [data, setData] = useState(oData);

    const switchHandle = (e) => {
        setOnlyProducts(e);
        if (e) {
            let newData = data.filter(i => i.stocked);
            setData(newData);
        } else {
            setData(oData);
        }
    }

    const serchHandle = (e) => {
        setName(e);
        if (e) {
            let newData = data.filter(i => i.name.indexOf(e) > -1);
            setData(newData);
        } else {
            setData(oData);
        }
    }

    return (
        <div>
            <Input
                value={name}
                onlyProducts={onlyProducts}
                handleName={e => serchHandle(e.target.value)}
                handleOnly={e => switchHandle(e.target.checked)}
            />
            <Table data={data}/>
        </div>
    )
}
