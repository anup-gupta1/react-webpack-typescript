import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '.';


describe('Button', () => {
    it('should render button text', () => {
        render(<Button label="Save" /> );
        expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    });
})