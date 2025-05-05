import NewProject from "./assets/components/NewProject";
import Sidebar from "./assets/components/SideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NewProject />
    </main>
  );
}

export default App;
