import { useState, useEffect } from 'react';
import './App.css';
import { getCountries } from './services/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [continents, setContinents] = useState('all');
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <h1>flags of the world</h1>
      <input placeholder="country"></input>
    </div>
  );
}

export default App;
