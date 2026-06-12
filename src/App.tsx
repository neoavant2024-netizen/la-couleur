import { Route, Switch, Router } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import NailistPage from "./pages/NailistPage";
import MenuList from "./pages/MenuList";
import MenuNailGrowth from "./pages/MenuNailGrowth";
import MenuDeepNail from "./pages/MenuDeepNail";
import MenuIngrown from "./pages/MenuIngrown";
import MenuGelNail from "./pages/MenuGelNail";
import GalleryPage from "./pages/GalleryPage";
import AccessPage from "./pages/AccessPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/nailist" component={NailistPage} />
      <Route path="/menu" component={MenuList} />
      <Route path="/menu/nail-growth" component={MenuNailGrowth} />
      <Route path="/menu/deep-nail" component={MenuDeepNail} />
      <Route path="/menu/ingrown" component={MenuIngrown} />
      <Route path="/menu/gel-nail" component={MenuGelNail} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/access" component={AccessPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
    </Router>
  );
}
