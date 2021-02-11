import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from '..';

//afterEach is a global function that Jest offers. 
//Call the cleanup function so that after each test there is no leftover memory for false results
afterEach(cleanup);


//use describe to declare component being tested
describe('About component', () => {
    //render the about tests here

    //First Test - 'it' is declared above as the test subject (can be interchanged with test)
    it('renders', () => {
        //render about using JSX 
        render(<About/>)
    });

    //Second Test - "Test Case"
    //this test compares snapshot versions of DOM node structure
    // **snapshot: a serialized version of the DOM node structure - enabled by jest
    it('matches snapshot DOM node structure', () => {

        //use asFragment to return a snapshot of the About component
        const { asFragment } = render(<About />);
        
        //compare expected vs actual outcome 
        expect(asFragment()).toMatchSnapshot();
    })

})


