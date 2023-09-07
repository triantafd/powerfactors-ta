import React, { useEffect } from 'react';
import './App.css';
import Layout from './components/Layout';
import { fetchCharacters } from './store/actions/characterActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Dispatch } from 'redux';
import DataTable from './components/DataTable/DataTable';

const App = () => {
  /*  const dispatch: Dispatch<any> = useDispatch();
   const characters = useSelector((state: RootState) => state.characters.characters);
   const loading = useSelector((state: RootState) => state.characters.loading);
   const error = useSelector((state: RootState) => state.characters.error);
 
   useEffect(() => {
     dispatch(fetchCharacters());
   }, [dispatch]); */

  return (
    <div className="App">
      <Layout>
        {/*  <DataTable /> */}
        <DataTable />
      </Layout>
    </div>
  );
}

export default App;
