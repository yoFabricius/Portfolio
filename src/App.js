import AboutMe from "./components/AboutMe.js";
import Introduction from "./components/Introduction";
import ProjectList from "./components/ProjectList.js";

function App() {
  return (
   <div className="snap-y snap-mandatory overflow-scroll h-screen">
    <Introduction />
    <AboutMe />
    <ProjectList />
   </div>
  );
}

export default App;
