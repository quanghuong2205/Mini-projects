import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import './styles.css';

function MainLayout() {
  return (
    <div className='main-layout'>
      <Navigation />
      <main className='main'>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
