import ToDoList from "../components/ToDoList"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home(){
   return(<div>
        <Navbar/>
        <div>
            <ToDoList/>
        </div>
        <Footer/>
   </div>
)}
export default Home;
