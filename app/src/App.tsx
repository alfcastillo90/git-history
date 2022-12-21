import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav';
import { UserInfo } from './components/UserInfo';
import { CommitList } from './components/CommitList';

export default function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/commit-history" element={<CommitList />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  )
};
