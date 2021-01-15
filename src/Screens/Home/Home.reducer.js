// @flow

import type {ActionDefaultProp} from '../../Types/DefaultTypes';

type State = {
  count: number,
};

const initialState: State = {
  count: 0,
};

export const home_store = (state = initialState, action: ActionDefaultProp) => {
  switch (action.type) {
    default:
      return {...state};
  }
};
