import { describe, expect, it } from 'vitest'
import App from './App'
import { fireEvent, render, screen } from '@testing-library/react'
import { userEvent } from './utils/test-utils'
import { RouterProvider } from './RouterProvider';
import { Routes } from './Routes';

const AppNode = () => (
  <RouterProvider>
    <Routes />
  </RouterProvider>
)
describe('Simple working test', () => {

  beforeAll(() => {
    
  })

  it('the title is visible', () => {
    render(<AppNode />)
    const title = screen.getByText(/Vite \+ React/i)
    expect(title).toBeInTheDocument()
  })

  it('should increment count on click', async () => {
    render(<AppNode />)
    const buttonText = await screen.findByTestId('counter-button');

    fireEvent.click(buttonText)

    expect(buttonText).toBeInTheDocument()
    expect(buttonText.textContent).toBe("count is 1")
  })

  it('should had a link to quiz app', async () => {
    render(<AppNode/>)
    const quizLinkLabel = 'QuizApp'
    const quizLink = screen.getByText(quizLinkLabel);
    expect(quizLink).toBeInTheDocument()
  });
})