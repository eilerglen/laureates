import * as React from "react";

import styles from "./laureate-list.module.css";
import { Link } from "react-router-dom";
import Avatar from "../avatar";
import { Prizes } from "./prizes";
import { useRouteMatch } from "react-router-dom";

const LaureateList = ({ laureates }) => {
  const match = useRouteMatch();
  console.log(match)

  return laureates.length > 0 ? (
    <ul>
      {laureates.map(({ id, firstname, surname, prizes }) => (
        <li key={id}>
          <Link to={{pathname: `${match.url}/${id}`}} className={styles.link}>
            <Avatar
              firstname={firstname}
              surname={surname}
              className={styles.avatar}
            />
            <div>
              <h3>
                {firstname} {surname}
              </h3>
              <Prizes prizes={prizes} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p className={styles.empty}>No results were found</p>
  );
};

export default LaureateList;
