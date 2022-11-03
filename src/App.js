import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import Detail from "./components/Details";
import "./App.css";
  
function App() {
  const [state, setState] = useState({
    s: "sherlock",
    results: [],
    selected: {},
  });
  
  const apiurl = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query";
  
  const searchInput = (e) => {
    let s = e.target.value;
  
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };
  
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
  
        console.log(results);
  
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };
  
  const openDetail = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
  
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };
  
  const closeDetail = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search searchInput={searchInput} search={search} />
  
        <Results results={state.results} openDetail={openDetail} />
  
        {typeof state.selected.Title != "undefined" ? (
          <Detail selected={state.selected} closeDetail={closeDetail} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}
  
export default App;