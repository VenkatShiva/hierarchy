// import './App.css';
// import './app.scss'
import { AppComp } from './app-styles';
import Tree from './TreeComp';
import defaultData from './tree';
import { useState } from 'react';
import { removeAndReplace } from './tree';

function App() {
  const [data, setData] = useState(defaultData);
  const onDropChange = (source, target) => {
    setData((newData) => {
      const dup = JSON.parse(JSON.stringify(newData));
      return removeAndReplace(dup, source, target);
    });

    // setData(newData);
  };
  console.log(data);
  return (
    <AppComp>
      <Tree data={data} root={true} onDropChange={onDropChange} />
    </AppComp>
  );
}

export default App;
