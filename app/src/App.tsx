import { useEffect, useState } from 'react';
import ListComponent from './components/list.component/list.component';
import { ValuteEntity } from './entities/valute.entity';
import { GetValuteService } from './services/GetValuteService';
import GetParameterPopups from './components/popups/get-parameter.popups';
import './App.css';

function App() {
  const [valuteState, setValute] = useState<ValuteEntity[]>();
  useEffect(() => {
    const data = async () => { 
      const res: ValuteEntity[] = await GetValuteService.getDailyValute();
      setValute(res);
    }
    data();
  }, []);

  return (
    <>
    <div className="App">
      <ListComponent valutes={ valuteState } />
    </div>
    <GetParameterPopups />
    </>
  );
}

export default App;
