import React from 'react';
import { AdviceContext } from './Context';

export const AppWrapper = ({children}) => {
  return (
    <AdviceContext.Provider value={""}>
        {children}
    </AdviceContext.Provider>
  )
}
