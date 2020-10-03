import { api } from './api.service';

const service = '/tasks';

export default {
  /**
   * Get tasks
   * @returns {Array.<{title: string}>}
   */

  getTasks: async () => {
    try {
      const { data: tasks } = await api.get(service);
      return tasks;
    }
    catch (error) {
      return error
    }
  },

  /**
   * Delete task
   * @param {String} id
   * @returns {Array.<{title: string}>}
   */
  deleteTask: async id => {
    try {
      return api.delete(`${service}/delete/${id}`);
    }
    catch (error) {
      return error
    }
  },

  /**
      * Update task
      * @param {Object} task
      * @returns {Array.<{title: string}>}
      */
  updateTask: async task => {
    try {
      return api.post(`${service}/update/${task._id}`,
        { done: task.done });
    }
    catch (error) {
      return error
    }
  }
}