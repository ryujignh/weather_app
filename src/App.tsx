import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './App.css';

import {RootState} from "./store";
import Search from "./components/Search";
import Alert from './components/Alert'
import Weather from "./components/Weather";
import Location from "./components/Location";
import {setAlert} from "./store/actions/alertActions";
import {setError} from "./store/actions/weatherActions";
import NoResult from "./components/NoResult";


const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const locationData = useSelector((state: RootState) => state.location.data);
  const loading = useSelector((state: RootState) => state.location.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  return (
    <div className="has-text-centered">
      <Search title="Enter city name and press search button"/>
      {/*{loading ? <h2 className="is-size-3 py-2">Loaing...</h2> : weatherData && <Weather data={weatherData}/>}*/}
      {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : ''}
      {locationData ? <Location data={locationData}/> : <NoResult/> }

      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))}/>}
      {error && <Alert message={error} onClose={() => dispatch(setError())}/>}
    </div>
  );
}

export default App;
