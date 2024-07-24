/** @format */

import React, { useState, useCallback, memo } from 'react';
import { TABS_NUMBER, TABS_NAME } from './../constant';
import { Link } from 'react-router-dom';

const Tabs = () => {
  const [active, setActive] = useState(TABS_NUMBER.POSTS);

  const handleClick = useCallback((index: number) => {
    setActive(index);
  }, []);

  return (
    <div>
      {[TABS_NUMBER.POSTS, TABS_NUMBER.USERS, TABS_NUMBER.SETTIMNG].map(
        (num, index) => (
          <Link
            key={index}
            to={`/${num === TABS_NUMBER.POSTS ? '' : TABS_NAME[num]}`}
            style={{
              backgroundColor: active === index ? 'lightblue' : 'white',
              fontSize: '50px',
            }}
            onClick={() => handleClick(index)}>
            {TABS_NAME[num]}
          </Link>
        )
      )}
    </div>
  );
};
export default memo(Tabs);
