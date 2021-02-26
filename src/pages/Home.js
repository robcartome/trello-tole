import "./Home.css";
import Button from "../components/UI/buttons/Button";

function Home({ goto }) {
  return (
    <main className="home">
      <div className="home-container">
       {/*  <img src={logo} alt="logo" /> */}
        <h1>
          Welcome to
          <br />
          Trello Innova
        </h1>
        <Button title="Start Here" onPress={ () => goto("main") } />
        
      </div>
    </main>
  );
}

export default Home;