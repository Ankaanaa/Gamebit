import React, { ReactNode, createContext, useState } from 'react'
import data from "./BLL/store"

export const DataContext = createContext<DataContextType>({} as DataContextType);

type ComponentType = {
    children: ReactNode
}


interface DataContextType {
    data: typeof data;
    consumerValue: string;
    setConsumerValue: React.Dispatch<React.SetStateAction<string>>;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const DataProvider: React.FC<ComponentType> = ({ children }) => {

    // Состояния
    const [consumerValue, setConsumerValue] = useState("");
    const [inputValue, setInputValue] = useState("");

    // Объект с данными и состояниями
    const contextValue: DataContextType = {
        data,
        consumerValue,
        setConsumerValue,
        inputValue,
        setInputValue,
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};