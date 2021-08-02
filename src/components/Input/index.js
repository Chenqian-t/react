import React from 'react'

export default function Input(props) {
    return (
        <div>
            <input
                value={props.name}
                onChange={e => props.handleName(e)}
                placeHolder='Search...'
            />
            <br />
            <input
                defaultChecked={props.onlyProducts}
                onChange={e => props.handleOnly(e)}
                type='checkbox'
                id='checkbox'
            />
            <label htmlFor='checkbox'>Only show pruducts in stock</label>
        </div>
    )
}
