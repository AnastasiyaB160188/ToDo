import React from 'react';
import List from './List/List';
import './Sidebar.scss';
import listSvg from '../assets/img/list.svg';

const Sidebar = () => {
  return (
    <div className='todo__sidebar'>
      <List items={[
        {
          icon: listSvg,
          name: 'Все задачи'
        }
      ]}/>
      <List items={[
        {
          color: "red",
          name: 'Покупки'
        },
        {
          color: "green",
          name: 'Фронтенд',
          active: true
        },
        {
          color: "yellow",
          name: 'Фильмы и сериалы'
        }
      ]}/>
    </div>
  )
}

export default Sidebar