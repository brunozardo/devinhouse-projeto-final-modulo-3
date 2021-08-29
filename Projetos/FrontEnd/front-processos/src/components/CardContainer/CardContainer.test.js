import { render, screen } from '@testing-library/react'
import CardContainer from './CardContainer'

const renderComponent = () =>
  render(<CardContainer>mensagem do card</CardContainer>)

describe('CardContainer component', () => {
  it.skip('Deve renderizar o CardContainer component', () => {
    renderComponent()

    expect(screen.getByText('mensagem do card')).toBeInTheDocument()
  })
})
