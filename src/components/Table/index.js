import React, { Fragment } from 'react';
import Row from './Row';
import ProductRow from './ProductRow';

export default function Table(props) {
    let rows = [];
    for (let i = 0; i < props.data.length; i++) {
        if (rows.indexOf(props.data[i].category) === -1) rows.push(props.data[i].category);
    }

    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {rows.map((i, index) => {
                    return (
                        <Fragment key={index}>
                            <Row rowTiltle={i} />
                            <ProductRow data={props.data} rowTiltle={i}/>
                        </Fragment>
                    )
                })}
            </tbody>
        </table>
    )
}
