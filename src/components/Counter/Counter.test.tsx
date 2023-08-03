import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter', () => {
  test('should render successfully', async () => {
    const container = renderCounter()
    const btnArr = container.getByRole('button', {
      name: 'Increment',
    })

    expect(await container.findByText(/^Count : 0$/)).toBeInTheDocument()
    expect(btnArr).toBeInTheDocument()
  })

  test('should increase count by clicking a button', async () => {
    const user = userEvent.setup()
    const container = renderCounter()
    const btnArr = container.getByRole('button', {
      name: 'Increment',
    })
    expect(await container.findByText(/^Count : 0$/)).toBeInTheDocument()

    await user.click(btnArr)
    expect(await container.findByText(/^Count : 1$/)).toBeInTheDocument()
  })
})

const renderCounter = () => {
  return render(<Counter />)
}
