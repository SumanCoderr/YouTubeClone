// import React, { createContext, useContext, useState } from 'react'

// const SidebarContext = createContext()

// // Custom hook to access Sidebar context
// export const useSidebar = () => useContext(SidebarContext)

// // Sidebar provider component to wrap your app
// export const SidebarProvider = ({ children }) => {
//   const [sideBar, setSideBar] = useState(true)

//   const setSideBarFun = (value) => {
//     setSideBar(value)
//   }

//   return (
//     <SidebarContext.Provider value={{ sideBar, setSideBarFun }}>
//       {children}
//     </SidebarContext.Provider>
//   )
// }



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

