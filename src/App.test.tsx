import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from './utils/test-utils';
import App from './App';

describe('App', () => {
  it('should be render', () => {
    render(<App />)

    expect(screen.getByRole('heading', {
      level: 1
    })).toHaveTextContent('Hello')
  })
})
