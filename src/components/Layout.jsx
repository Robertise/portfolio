import { Outlet } from 'react-router-dom' 
import Background from "../components/Background";
import Header from './Header';


const Layout = () => {
  return (
    <div className="relative min-h-screen bg-[#111422]">   
      {/* Background */}
      <Background />

      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <Outlet/>  
    </div>
  );
};

export default Layout;