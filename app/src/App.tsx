import { useEffect, useState } from 'react';
import ListComponent from './components/list.component/list.component';
import GetParameterPopups from './components/popups/get-parameter.popups';

import { ValuteEntity } from './entities/valute.entity';
import { GetValuteService } from './services/GetValuteService';

import './App.css';

function App() {
  const [valuteState, setValute] = useState<ValuteEntity[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  useEffect(() => {
    const data = async () => { 
      setIsLoading(true);
      const res: ValuteEntity[] = await GetValuteService.getDailyValute();
      setValute(res);
      setIsLoading(false);
    }
    data();
  }, []);

  return (
    <>
    <div className="App">
      <h1>Курс валют</h1>
      <ListComponent valutes={ valuteState } />
      {isLoading ? <div className='loading' /> : null}
    </div>
    <GetParameterPopups />
    </>
  );
}

export default App;
