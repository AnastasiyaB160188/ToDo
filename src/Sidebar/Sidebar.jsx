import React from 'react';
import List from './List/List';
import './Sidebar.scss';
import listSvg from '../assets/img/list.svg';
import plusSvg from '../assets/img/plus.svg';

const Sidebar = () => {
  return (
    <div className='todo__sidebar'>
      <List items={[
        {
          icon: listSvg,
          name: 'Все задачи'
        }
      ]}
      />
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
      ]}
      isRemovable={true}
      />
      <List items={[
        { 
          className: "list__add-button",
          icon: plusSvg,
          name: 'Добавить папку'
        }
      ]}/>
    </div>
  )
}

export default Sidebar