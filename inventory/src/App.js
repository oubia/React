import React from "react";
import AddItemsfunc from "./additems.js";
import SearchBar from "./searchbar.js";
import ItemsDisplay from "./Itemsdisplay.js";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Test from "./class.js";

const Title = styled.h1`
  color: ${(props) => (props.color ? props.color : "black")};
`;

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });
  const [test, settest] = useState(true);
  // the hucks is a function that will run
  // when ever you made a chamge to componenet updating or deleting or suff

  useEffect(() => {
    console.log("use effect");
    //when you unmout somthing this well run
    return () => {
      console.log("cleanup!!! ");
    };
    // to make it run in surten ways if we make it [] it gonna run one time.
    //[data] use effect will run just if we did something with data nothing will happend to filters
  }, [data]);

  useEffect(() => {
    console.log(" second use effect");
  }, [filters]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setData({ items: data }));
  }, []);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const DeleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then(
      (response) => {
        // check if the data had been deleted in the data base
        if (response.ok) {
          // if yes we will delete item from the frontend
          const idx = items.indexOf(item);
          items.splice(idx, 1);
          setData({ items: items });
        }
      }
    );
  };
  const additemtodata = (item) => {
    let items = data["items"];
    // sending data to json file
    /*
    get,post,put(updating emails or things),delete
     */
    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      // that line will take our object 'item' and convert it to json notation
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        items.push(data);
        setData({ items: items });
      });
  };

  const filterData = (data) => {
    const filteredData = [];
    if (!filters.name) {
      return data;
    }
    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (filters.price !== 0 && item.price > filters.price) {
        continue;
      }
      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }
      filteredData.push(item);
    }
    return filteredData;
  };

  return (
    <div className="container">
      <Title color="red">Testy</Title>
      <div className="row mt-3  ">
        <ItemsDisplay
          DeleteItem={DeleteItem}
          items={filterData(data["items"])}
        />
      </div>
      <div className="row mt-3">
        <SearchBar searchparams={updateFilters} />
      </div>
      {/* <div className="row mt-3" style={{ color: "red" }}> */}
      <div className="row mt-3">
        <AddItemsfunc addItemsprops={additemtodata} />
      </div>
      <div className="row mt-3">{test ? <Test destroy={settest} /> : null}</div>
      {/* <p>Name: {"name" in data ? data["name"] : "No data to display"}</p> */}
    </div>
  );
}

export default App;
