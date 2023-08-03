import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should be render', () => {
    render(<App />)

    expect(screen.getByRole('heading', {
      level: 1
    })).toHaveTextContent('Hello')
  })
})
