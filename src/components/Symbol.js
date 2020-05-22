import React from 'react';

export const Symbol = ({ selection }) => {

    return (
        <div>
            <li>
                <span>${selection.symbol}</span>
            </li>
        </div>
    )
}