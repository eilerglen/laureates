import React  from 'react';
import { useHistory } from 'react-router-dom';

import styles from './home.module.css';

import { Button } from '../components/button';
import { HOME_CRUMB } from '../services/breadcrumbs';

export function HomePage() {
  const history = useHistory();

  const onClick = () => {
    const initialBreadcrumb = [HOME_CRUMB]; //Помещаем объект в массив
   
    history.replace({ pathname: '/list', state: initialBreadcrumb });
    console.log(history)
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form className={styles.form}>
          <h1 className={styles.heading}>Nobel Prize Library</h1>
          <Button primary={true} onClick={onClick}>
            View catalog
          </Button>
        </form>
        <p>1901-2020</p>
      </div>
    </div>
  );
}