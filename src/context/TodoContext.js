import { createContext, useState } from "react";

export const TodoContext = createContext({
    data: [],
    setData: () => { },
});

const initData = [
    {
        "id": 1,
        "name": "Do HomeWork",
        "isCompleted": false,
        "deadline": '2021-10-23 7:00 am'
    },
    {
        "id": 2,
        "name": "Clean House",
        "isCompleted": false,
        "deadline": '2021-10-23 9:00 am'
    },
    {
        "id": 3,
        "name": "Go to market",
        "isCompleted": true,
        "deadline": '2021-10-23 9:30 am'
    },
    {
        "id": 4,
        "name": "Cooking",
        "isCompleted": false,
        "deadline": '2021-10-23 10:30 am'
    },
    {
        "id": 5,
        "name": "Go to bed",
        "isCompleted": true,
        "deadline": '2021-10-23 1:00 pm'
    }
];

export const TodoContextProvider = ({ children }) => {
    const [myData, setMyData] = useState(initData);
    return (
        <TodoContext.Provider value={{
            data: myData,
            setData: setMyData,
        }}>
            {children}
        </TodoContext.Provider>
    )
};