import React, {useState} from 'react';
import './App.css';
import Data from './utils/store';
import List from "./components/List/List";

function App() {
  const [data, setData] = useState<any>(Data);

  return (
    <div>
      {
        data && data.listIds && data.listIds.map((listId: string) => {
            const list = data.lists[listId];
            return <List list={list} key={listId} />
        })
      }
    </div>
  );
}

export default App;
