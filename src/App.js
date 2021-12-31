import { useState, useEffect } from 'react';
import './App.css';
import { getCountries } from './services/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [continent, setContinent] = useState('all');
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  function filter() {
    return countries.filter((country) => {
      return (
        country.name.includes(search) && (country.continent === continent || continent === 'all')
      );
    });
  }
  return (
    <div className="App">
      <h1>flags of the world</h1>
      <input
        placeholder="country"
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      <select value={continent} onChange={(e) => setContinent(e.target.value)}>
        <option value="all">all</option>
        <option value="Asia">asia</option>
        <option value="Africa">africa</option>
        <option value="North America">north america</option>
        <option value="South America">south america</option>
        <option value="Europe">europe</option>
        <option value="Oceania">oceania</option>
        <option value="Antarctica">antarctica</option>
      </select>
      {filter().map((country) => (
        <div key={country.id}>
          <img
            src={`https://flagcdn.com/16x12/${country.iso2.toLowerCase()}.png`}
            alt={'Flag of ' + country.name}
          />
          <span>{' ' + country.name}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
