import Navigation from "@components/Navigation";
import AnimatedRoute from "@components/TransitionsAnim/AnimatedRoute";
import "@styles/styles.css";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router basename="/VBlog">
      <Navigation />
      <AnimatedRoute />
    </Router>
  );
}

export default App;
