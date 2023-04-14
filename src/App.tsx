import { Translation } from "./components/HOC/Translation";
import { LanguageProvider } from "./context/language";

function App() {
  return (
    <LanguageProvider>
      <Translation />
    </LanguageProvider>
  );
}

export default App;
