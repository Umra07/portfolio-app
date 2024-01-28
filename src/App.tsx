import { Navigation } from './modules/navigation/Navigation';
import { Outlet } from './modules/outlet/Outlet';
import './scss/_global.scss';
import './scss/App.scss';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
