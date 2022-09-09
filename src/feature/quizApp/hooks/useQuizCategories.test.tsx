import { renderHook } from "@testing-library/react-hooks";
import { ENDPOINTS, URL, useQuizCategories } from "./useQuizCategories";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClientConfig } from "../../../main";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider
    client={
      new QueryClient({
        defaultOptions: {
          queries: {
            // ✅ turns retries off
            retry: false,
          },
        },
      })
    }
  >
    {children}
  </QueryClientProvider>
);

const mockApiResponse = [{ id: 1, name: "test" }];

export const restHandlers = [
  rest.get("https://rest-endpoint.example/path/to/posts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts));
  }),
];

test("should increment counter", async () => {
  it("test 1", async () => {
    const { result, waitFor } = renderHook(() => useQuizCategories(), {
      wrapper,
    });

    console.log(result.current.categories);
    await waitFor(() => {
      return result.current.isLoading;
    });
  });

  it("test", async () => {
    const { result, waitFor } = renderHook(() => useQuizCategories(), {
      wrapper,
    });

    await waitFor(() => {
      console.log(result.all);
      expect(result.current.isSuccess).toBe(true);
    });
  });

  //   expect(result.current.count).toBe(1)
});
