import AboutMe from "./components/AboutMe.js";
import Contact from "./components/Contact.js";
import Introduction from "./components/Introduction";
import ProjectList from "./components/ProjectList.js";

function App() {
  return (
   <div className="snap-y snap-mandatory overflow-scroll h-screen bg-[#264653]">
    <Introduction />
    <AboutMe />
    <ProjectList />
    <Contact />
   </div>
  );
}

export default App;
