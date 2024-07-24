/** @format */

import React, { useState, useCallback, memo } from 'react';
import { TABS_NUMBER } from '../constant';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_TAB } from './../store/actions';

const TABS_NAME = {
  [TABS_NUMBER.POSTS]: 'Posts',
  [TABS_NUMBER.SETTIMNG]: 'Setting',
  [TABS_NUMBER.USERS]: 'Users',
};

const Tabs = () => {
  // const [active, setActive] = useState(TABS_NUMBER.POSTS);
  const dispatch = useDispatch();
  const { active } = useSelector((state: any) => state?.tab);

  const handleClick = useCallback(
    (index: number) => {
      // setActive(index);
      dispatch({
        type: CHANGE_TAB,
        tabActive: index,
      });
    },
    [dispatch]
  );

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
            {TABS_NAME[num]}
          </button>
        )
      )}
    </div>
  );
};
export default memo(Tabs);
