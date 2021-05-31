import Navbar from './Components/Navbar'
import Todos from './Components/Todos'
import ThemeToggle from './Components/ThemeToggle'
import ThemeContextProvider from './Context/ThemeContext';
import TodoContextProvider from './Context/TodoContext';
import AuthContextProvider from './Context/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        </AuthContextProvider>
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
