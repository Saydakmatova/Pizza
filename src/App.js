import Routes from "./Routes";
import "./styles/Styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import 'moment/locale/ru';
import moment from "moment";

moment.locale('ru');

function App() {
  return <Routes />;
}

export default App;
