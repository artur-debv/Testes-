import { render } from "@testing-library/react";
import Tasks from "../../../Components/Tasks";
import { http } from 'msw'
import { setupServer } from "msw/node";

// Configura o worker com o manipulador de solicitação mockado
const server = setupServer(
    http.get("https://jsonplaceholder.typicode.com/todos", (ctx) => {
        console.log("Mock API hit");  // Log para verificar se a requisição mockada está sendo interceptada
    })
);

beforeAll(() => {
    server.listen();
    console.log("Server started");  // Log para verificar se o servidor foi iniciado
});
afterAll(() => {
    server.close();
    console.log("Server stopped");  // Log para verificar se o servidor foi parado
});
afterEach(() => server.resetHandlers());

describe('Tasks component', () => {
    it('should render Tasks component', () => {
        render(<Tasks />);
        console.log("Tasks component rendered");  // Log para verificar se o componente foi renderizado
    });
});
