import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { SidebarProvider } from './utilis/useContext.jsx';

function App() {
  return (
    <SidebarProvider>
      <Header />
      <div>
        {/* The Outlet renders the child route components */}
        <Outlet />
      </div>
    </SidebarProvider>
  );
}

export default App;
