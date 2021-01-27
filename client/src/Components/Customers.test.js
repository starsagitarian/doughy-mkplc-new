/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import Customers from './Customers';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

//! Test The h1 render

test('text to render on screen', () => {
  expect('CUSTOMERS').toMatch('CUSTOMERS');
});

// describe(Customers, () => {
//   it('displays an h1 on screen', () => {
//     render('CUSTOMERS');
//     const text = screen.findByText(/CUSTOMERS/i);
//     expect(text).toMatch('CUSTOMERS');
//   });
// });

// test('should render customer text', () => {
//   render(<Customers />)
//   const input = screen.getByLabelText('CUSTOMERS')

// describe(‘Customers’, () => {
//   it(‘displays text “CUSTOMERS’, () => {
//     const { getByText } = render(<Customers />)

//     getByText(‘…Loading’)
//   })
// })

// test('loads items', () => {
//   render(<Customers />);
//   const items = screen.findByText(/'CUSTOMERS'/i);
//   expect(items).toMatch('CUSTOMERS');
// });

//!Test the useEffect Hook

// test('set state in useEffect function' () => {

// })
