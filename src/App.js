import "./App.css";
import Header from "./components/Header";
import Poste from "./components/Poste";
import Sidemenu from "./components/Sidemenu";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <div style={{ width: "70%" }}>
          <Poste title="محمد أحمد" comment="مهندس مدني يعمل بمجال البرمجة" />
          <Poste title="tarmez acadmay" comment="comouter since company" />
          <Poste title="محمد أحمد" comment="مهندس مدني يعمل بمجال البرمجة"/>
          <Poste />
          <Poste />
          <Poste />
          <Poste />
          <Poste />
          <Poste />
          <Poste />
        </div>
        <div style={{ width: "30%" }}>
          <Sidemenu></Sidemenu>
        </div>
      </div>
    </div>
  );
}

export default App;
