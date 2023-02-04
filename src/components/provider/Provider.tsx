import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/libs/reactQuery/createClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Provider;
