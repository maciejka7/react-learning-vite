import { renderHook } from "@testing-library/react-hooks";
import { ENDPOINTS, quizUrl, URL, useQuizCategories } from "./useQuizCategories";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { queryClientConfig } from "../../../main";
import { logRoles } from "@testing-library/react";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: 3,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      // ✅ no more errors on the console for tests
      error: () => {}
    },
  })}>
    {children}
  </QueryClientProvider>
);

const mockApiResponse = [{id: 1, name: 'test'}]

export const restHandlers = [
  rest.get(quizUrl, (req, res, ctx) => {
    console.log("API CALL")
    return res(ctx.status(200), ctx.json(mockApiResponse))
  }),
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())

describe('useQuizCategories tests', async() => {

  test("hook return proper data", async () => {
    
  });
   
})