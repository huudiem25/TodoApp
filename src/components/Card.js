import React, { useEffect } from 'react';

export const MyCard = React.memo(({ name, ID }) => {
    useEffect(() => {
        console.log('Render MyCard')
    });
    return (
        <div>
            <h3>My ID: {ID}</h3>
            <h3>My name: {name}</h3>
        </div>
    )
});

// Arrow Function components
export const Card = () => {

    return (
        <div>
            <h2>MyCard</h2>
            {/* <button onClick={() => setCount(count + 1)}>Tăng đếm</button>
            <h3>COUNT: {count}</h3> */}
            <MyCard name="Đinh Hữu Điểm" ID="4501104051" />
        </div>
    )
};