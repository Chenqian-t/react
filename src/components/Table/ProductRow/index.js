import React from 'react';
import './index.css';

export default function ProductRow(props) {
    return (
        <>
            {props.data.map((item, index) => {
                return item.category === props.rowTiltle ? (
                    <tr key={index}>
                        <td className={(!item.stocked && 'stock').toString()}>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ) : null;
            })}
        </>
    )
}
