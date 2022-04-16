import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container-fluid w-100 d-flex flex-column justify-content-center align-items-center">
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
