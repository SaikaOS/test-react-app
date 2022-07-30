import Header from "./components/Header/Header";
import AuthPage from "./pages/AuthPage";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Header isLoggedIn={false}/>
      <AuthPage />
    </div>
  );
}

export default App;
