import { queryClient } from "./src/api/queryClient";
import { QueryClientProvider } from "react-query";
import { Ant } from "./src/screens/AntScreen/Ant";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Ant />
    </QueryClientProvider>
  )
}

export default App;