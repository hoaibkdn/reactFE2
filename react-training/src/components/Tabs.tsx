/** @format */

import React, { useState, useCallback, memo } from 'react';
import { TABS_NUMBER } from './../constant';

const Tabs = () => {
  const [active, setActive] = useState(TABS_NUMBER.POSTS);

  const handleClick = useCallback((index: number) => {
    setActive(index);
  }, []);

  return (
    <div>
      {[TABS_NUMBER.POSTS, TABS_NUMBER.USERS, TABS_NUMBER.SETTIMNG].map(
        (num, index) => (
          <button
            key={index}
            style={{
              backgroundColor: active === index ? 'lightblue' : 'white',
              fontSize: '50px',
            }}
            onClick={() => handleClick(index)}>
            {num}
          </button>
        )
      )}
    </div>
  );
};
export default memo(Tabs);
