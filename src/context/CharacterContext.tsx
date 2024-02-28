import {StarWarsCharacter} from '@/modules/Wiki/interfaces';
import React, {ReactNode, createContext, useContext, useState} from 'react';

interface CharacterContextType {
  character: StarWarsCharacter | null;
  setCurrent: (itemData: StarWarsCharacter) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined,
);

interface GlobalProviderProps {
  children: ReactNode;
}

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('context must be used within a CharacterProvider');
  }
  return context;
};

export const CharacterProvider: React.FC<GlobalProviderProps> = ({
  children,
}) => {
  const [character, setCurrentCharacter] = useState<StarWarsCharacter | null>(
    null,
  );

  const setCurrent = (characterData: StarWarsCharacter) => {
    setCurrentCharacter(characterData);
  };

  return (
    <CharacterContext.Provider value={{character, setCurrent}}>
      {children}
    </CharacterContext.Provider>
  );
};
