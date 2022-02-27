import React from 'react';
import { Days } from './components/Days/Days';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';

import s from './Home.module.scss';

interface Props {
  
}

fetch('http://api.openweathermap.org/data/2.5/weather?q=Yaroslavl&appid=68362b9dea430ef8ab0ea9a7c043a743').then((resp) => {
  return resp.json();
}).then((data) => {
  console.log(data)
}).catch(() => {
  console.log('Error')
})

export const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}
