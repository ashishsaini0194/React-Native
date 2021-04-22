import React from 'react';
import {LogBox} from 'react-native'
import Home from './components/home';
import Navs from './routes/routerNav';

export default function App() {
  LogBox.ignoreAllLogs()
  return (
    <Navs />
  )
}
