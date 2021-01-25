import React from 'react';
import about from './About';
import renderer from 'react-test-renderer';

const aboutTest = describe('about component', () => {
        it('matches the snapshot for about', () => {
            const tree = renderer.create(<about />).toJSON() ;
            expect(tree).toMatchSnapshot()
        })
    })

export default aboutTest;
