import axios from "axios";
import Theme from "./constants/Theme";
import GlobalStyles from "./constants/GlobalStyles";
import HomePage from "./pages/HomePage";

axios.defaults.withCredentials = true;
function App() {
  return (
    <Theme>
      <GlobalStyles />
      <HomePage />
    </Theme>
  );
}

export default App;
