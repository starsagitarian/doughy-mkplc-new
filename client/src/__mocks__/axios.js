/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

export default {
  get: jest.fn(() => {
    Promise.resolve({ data: [] });
  }),
};
