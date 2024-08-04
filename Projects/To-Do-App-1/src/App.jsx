
import Appelement1 from "./assets/components/Appelement1";
import Apptitle from "./assets/components/Apptitle";
import Apptodo from "./assets/components/AppTodo";
import "./App.css"  ;


function App() {
  return (
    <center>
      <Apptitle />
      <div className="container_text-center">
        <Apptodo />
        <Appelement1 />
        <Appelement1 />
        <Appelement1 />
      </div>
    </center>
  );
}

export default App;
 