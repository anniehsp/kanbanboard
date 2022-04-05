import React, {useState} from 'react';
import './App.css';
import List from "./components/List/List";
import Data from './utils/store';
import StoreApi from './utils/storeApi';
import { v4 as uuid } from 'uuid';

function App() {
  const [data, setData] = useState<any>(Data);

  const addMoreCard = (title: string, listId: string) => {
      const newCardId = uuid();
      const newCard = {
        id: newCardId,
        title,
      };

      const newList = data.lists[listId];
      newList.cards = [...newList.cards, newCard];

      const newData = {
        ...data,
        lists: {
            ...data.lists,
            [listId]: newList,
        }
      };

      setData(newData);
  }
  return(
      // @ts-ignore
      <StoreApi.Provider value={{ addMoreCard }}>
        <div>
          {
              data && data.listIds && data.listIds.map((listId: string) => {
                const list = data.lists[listId];
                return <List list={list} key={listId} />
              })
          }
        </div>
      </StoreApi.Provider>
  );
}

export default App;
