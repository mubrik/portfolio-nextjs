import React from "react";
/**
* A helper to create a Context and Provider with no upfront default value, and
* without having to check for undefined all the time.
*/
const createTypeContextUtil =  <ContextType extends unknown | null>(contextName?: string)
    : readonly [() => ContextType, React.Provider<ContextType|undefined>] =>
  {
  // create a context using undefined, since no upfront value
  const Context = React.createContext<ContextType | undefined >(undefined);
  // name for context
  Context.displayName = contextName || "";

  // hook that returns the value of the context
  // type checking for undefined is done here so TS can infer the type without checking in components!
  
  const useContext = (): ContextType => {
    const contextValue = React.useContext(Context);

    if (contextValue === undefined) {
      // throw
      throw new Error(`useContext for ${Context.displayName} must be used in a provider wth a value`);
    }

    return contextValue;
  };

  return [useContext, Context.Provider];
};

export default createTypeContextUtil;