import './Components/style/main.scss'
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";
import Future from "./Components/Future/Future";
import Header from "./Components/Header/Header";
import Howwork from "./Components/Howwork/Howwork";
import Mentor from "./Components/Mentor/Mentor";
import Navbar from "./Components/Navbar/Navbar";
import Students from "./Components/Students/Students";
import Studentssay from "./Components/Studentssay/Studentssay";
import Upcoming from "./Components/Upcoming/Upcoming";
import Works from "./Components/Works/Works";
import Blog from './Components/Blog/Blog';
import Status from './Components/Status/Status';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Works />
      <Future />
      <Howwork />
      <Courses />
      <Mentor />
      <Upcoming />
      <Status />
      <Blog />
      <Students />
      <Studentssay />
      <Footer />
    </div>
  );
}

export default App;
