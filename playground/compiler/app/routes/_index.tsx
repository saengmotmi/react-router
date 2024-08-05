import { Link, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to React Router</h1>
      <ul>
        <li>
          <Link to="/chunkable">Go to Chunkable</Link>
        </li>
        <li>
          <Link to="/unchunkable">Go to Un-chunkable</Link>
        </li>
      </ul>
    </div>
  );
}