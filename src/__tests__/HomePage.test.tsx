import HomePage from "../app/home";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

const mockProducts = [
  {
    id: 1,
    brand: "Nike",
    description: "Nike Air Max",
    price: 599.99,
    image: "https://example.com/image1.png",
  },
  {
    id: 2,
    brand: "Adidas",
    description: "Adidas Superstar",
    price: 299.99,
    image: "https://example.com/image2.png",
  },
];

beforeEach(() => {
  (global as any).fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockProducts),
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Home Component", () => {
  test("renders correctly and fetches products", async () => {
    render(<HomePage />);
    
    expect(screen.getByText("Tênis")).toBeInTheDocument();
    expect(await screen.findByText("2 produtos encontrados")).toBeInTheDocument();
  });

  test("filters products by brand", async () => {
    render(<HomePage />);
    
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    const brandButton = screen.getByText("Adidas");
    fireEvent.click(brandButton);

    expect(await screen.findByText("1 produto encontrado")).toBeInTheDocument();
    expect(screen.getByText("Adidas Superstar")).toBeInTheDocument();
  });

  test("filters products by search term", async () => {
    render(<HomePage />);
    
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    const searchInput = screen.getByPlaceholderText("Buscar Produto");
    fireEvent.change(searchInput, { target: { value: "Nike" } });

    expect(await screen.findByText("1 produto encontrado")).toBeInTheDocument();
    expect(screen.getByText("Nike Air Max")).toBeInTheDocument();
  });

  test("renders spinner when products are loading", async () => {
    (global as any).fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([]),
    });

    render(<HomePage />);

    expect(await screen.findByText(/Carregando/i)).toBeInTheDocument();
  });
});
