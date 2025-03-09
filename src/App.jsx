import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { SidebarProvider } from './utilis/useContext.jsx';

function App() {
  return (
    <SidebarProvider>
      <Header />
        <Outlet />
    </SidebarProvider>
  );
}

export default App;
