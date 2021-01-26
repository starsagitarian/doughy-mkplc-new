import React from 'react';
import footer from './Footer'
import renderer from 'react-test-renderer';

const footerTest = describe('footer component', () => {
        it('matches the snapshot for footer', () => {
            const tree = renderer.create(<footer />).toJSON() ;
            expect(tree).toMatchSnapshot()
        })
    })

export default footerTest;
