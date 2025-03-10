import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(true);

  const setSideBarFun = (value) => {
    setSideBar(value);
  };

  return (
    <SidebarContext.Provider value={{ sideBar, setSideBarFun }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);

