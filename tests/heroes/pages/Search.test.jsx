import { fireEvent, render,screen } from "@testing-library/react"
import {SearchPage} from '../../../src/heroes/pages/Search'
import { MemoryRouter } from "react-router-dom"

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate
}))



describe('pruebas en el Search', () => {

  beforeEach(() => jest.clearAllMocks())
 
  test('debe mostrarse con valor por defecto', () => {
    
    const {container} = render(
      <MemoryRouter>
       <SearchPage/>
      </MemoryRouter>
      )

      expect(container).toMatchSnapshot()


  })

  test('debe mostrarse batman y su queryString', () => {
    
    const {container} = render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
       <SearchPage/>
      </MemoryRouter>
      )

      const input = screen.getByRole('textbox')
      expect(input.value).toBe('batman')
      const img = screen.getByRole('img')
      expect(img.src).toContain('/assets/heroes/dc-batman.jpg')
      const div = screen.getByLabelText('div-none')
      expect(div.style.display).toBe('none')

  })

  test('debe mostrar un error si no se encuentra el heroe', () => {
    
    const {container} = render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
       <SearchPage/>
      </MemoryRouter>
      )

      const div = screen.getByLabelText('div-none')
      expect(div.style.display).toBe('')

  })

  test('debe llamar el navigate a la pantalla nueva', () => {
    
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
       <SearchPage/>
      </MemoryRouter>
      )

    const input = screen.getByRole('textbox')
    fireEvent.change(input,{target: {name: 'searchText', value: 'superman'}})

    const form = screen.getByRole('form')
    fireEvent.submit(form)

      expect(mockUseNavigate).toHaveBeenCalledWith('?q=superman')

  })
  
  

})
