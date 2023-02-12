import AppRouter from "./components/AppRouter";
import {HashRouter} from "react-router-dom";
import "./App.css"
import {observer} from "mobx-react-lite";
function App() {
  return (
      <HashRouter>
          <div className="wrapper">
        <AppRouter/>
          </div>
      </HashRouter>
  )
}

export default observer(App)
