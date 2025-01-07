"use client";
import { createContext, useContext } from "react";

const IgcContext = createContext();

export function useIgcData() {
  return useContext(IgcContext);
}

export default function IgcProvider({ data, story, children }) {
  // 'data' is the data you fetched in your layout or page
  return (
    <IgcContext.Provider value={{ data, story }}>
      {children}
    </IgcContext.Provider>
  );
}
