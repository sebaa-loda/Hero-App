import { render,screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth/context/AuthContext";
import { AppRouter } from '../../src/router/AppRouter'

describe('pruebas en AppRouter', () => {
  
  test('debe mostrar el login si no esta autenticado', () => {
    
    const contextValue = {
      logged: false
    }

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue} >
          <AppRouter/>
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getAllByText('Login').length).toBeTruthy()
  })

  test('debe mostrar el componente de marvel si esta autenticado', () => {
    
    const contextValue = {
      logged: true,
      user:{ 
        name: 'seba',
        id: '123'
      }
    }

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue} >
          <AppRouter/>
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
  })
  
  
})
