import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate
}))

describe("pruebas en el Navbar", () => {
  const contextValue = {
    logged: true,
    user: {
      name: "seba",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("debe mostrar el nombre del usuario", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

      expect(screen.getByText('seba')).toBeTruthy()
  });

  test("deba llamar al logout y navigate cuando se hace click en el boton", () => {

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(contextValue.logout).toHaveBeenCalled()
    expect(mockUseNavigate).toHaveBeenCalledWith("/login", {"replace": true})
  });
});
