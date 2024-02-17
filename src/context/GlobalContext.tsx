import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Item {
  prop1: string;
}

interface GlobalContextType {
  item: Item | null;
  setCurrent: (itemData: Item) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [item, setCurrentItem] = useState<Item | null>(null);

  const setCurrent = (userData: Item) => {
    setCurrentItem(userData);
  };


  return (
    <GlobalContext.Provider value={{ item, setCurrent }}>
      {children}
    </GlobalContext.Provider>
  );
};
