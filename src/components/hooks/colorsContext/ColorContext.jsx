import { useContext, createContext, useState } from "react";

// create
export const RedColorContext = createContext();
export const BlueColorContext = createContext();
export const WhiteColorContext = createContext();
export const BlackColorContext = createContext();

// use
export function UseRedColorContext() {
  return useContext(RedColorContext);
}
export function UseBlueColorContext() {
  return useContext(BlueColorContext);
}
export function UseWhiteColorContext() {
  return useContext(WhiteColorContext);
}
export function UseBlackColorContext() {
  return useContext(BlackColorContext);
}

const ColorProvider = ({ children }) => {
  // logic
  const [redColor, setRedColor] = useState("red");
  const [blueColor, setBlueColor] = useState("blue");
  const [whiteColor, setWhiteColor] = useState("white");
  const [blackColor, setBlackColor] = useState("black");

  // provider
  return (
    <RedColorContext.Provider value={redColor}>
      <BlueColorContext.Provider value={blueColor}>
        <WhiteColorContext.Provider value={whiteColor}>
          <BlackColorContext.Provider value={blackColor}>
            {children}
          </BlackColorContext.Provider>
        </WhiteColorContext.Provider>
      </BlueColorContext.Provider>
    </RedColorContext.Provider>
  );
};

export default ColorProvider;
