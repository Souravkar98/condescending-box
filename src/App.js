import "./styles.css";
import { Box } from "./component/Box";

export default function App() {
  const BOX_DATA = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];
  return (
    <div className="App">
      <Box BOX_DATA={BOX_DATA} />
    </div>
  );
}
