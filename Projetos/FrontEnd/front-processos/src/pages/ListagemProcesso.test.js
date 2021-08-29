import { render, screen } from '@testing-library/react'
import ListagemProcesso from './ListagemProcesso'
import '@testing-library/jest-dom'

const renderComponent = () => render(<ListagemProcesso />)

describe('ListagemProcesso component', () => {
  it('Deve renderizar o card principal ListagemProcesso corretamente', () => {
    renderComponent()

    expect(screen.getByText('Processos')).toBeInTheDocument()
  })

  it()
})
