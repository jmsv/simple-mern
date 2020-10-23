import { combineReducers } from 'redux';

const tasks = (state = [], action) => {
  if (action.type === 'ALL_TASKS') {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  allTasks: tasks,
});
