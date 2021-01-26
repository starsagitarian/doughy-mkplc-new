import React from 'react';
import bakery from './Bakery';
import renderer from 'react-test-renderer';
import Bakery from './Bakery';

const bakeryTest = describe('Bakery component', () => {
        it('matches the snapshot for Bakery', () => {
            const tree = renderer.create(<Bakery />).toJSON() ;
            expect(tree).toMatchSnapshot()
        })
    })
export default bakeryTest
