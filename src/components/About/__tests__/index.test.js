import React from 'react'
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../../About';

afterEach(cleanup);

describe('About component', () =>{
    //first
    it('renders', () => {
        render(<About />);
    });

    //second
    it('mateches snapshot DOM node structure', () => {
        //render about
        const {asFragment} = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })

})
