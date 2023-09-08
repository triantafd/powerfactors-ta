import React from 'react';
import 'App.css';
import Layout from 'components/Layout';
import { DataTable } from 'components';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <DataTable />
      </Layout>
    </div>
  );
}

export default App;
