"use client";
import { createContext, useContext } from "react";

const IgcContext = createContext();

export function useIgcData() {
  return useContext(IgcContext);
}

export default function IgcProvider({ data, story, children }) {
  return (
    <IgcContext.Provider value={{ data, story }}>
      {children}
    </IgcContext.Provider>
  );
}
