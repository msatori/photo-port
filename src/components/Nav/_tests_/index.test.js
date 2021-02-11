import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

//add cleanup utility 
afterEach(cleanup);

//declare component to be tested
describe('Nav component', () => {
    //baseline test
    it ('renders', () => {
        render(<Nav /> );
    });

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
    });

});

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        //arrange
        const { getByLabelText } = render(<Nav />);
        
        //assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
    it('inserts text into links', () => {
        //arrange
        const { getByTestId } = render(<Nav />);
        
        //assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
})