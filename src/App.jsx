import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import Chat from './Pages/Chat';
import Login from './Pages/Login';
import Nav from './Components/Nav';
import Page404 from './Pages/Page404';
import Body from './Components/Body';
import { DataProvider } from './Contexts/Data';

function App() {
    console.log('--------APP---------');
  return (
    <DataProvider>
      <Body>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Body>
    </DataProvider>
  )
}

export default App