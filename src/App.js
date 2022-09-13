import './App.css';
import { Tasks } from './Tasks';

function App() {
  return (
    <div>
      <div className='all-items'>
        <div className='container'>
          <h1>My tasks</h1>
        </div>
          <Tasks />
      </div>
    </div>
  );
}

export default App;
