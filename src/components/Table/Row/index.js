import React from 'react'

export default function Row(props) {
    return (
        <tr rowSpan='2'>
            <td>{props.rowTiltle}</td>
        </tr>
    )
}
