import { JSX } from "react";
import "./main.css";

const MainLayout = ({ children }: { children: JSX.Element[] }) => (
  <div className="container">{children}</div>
);

export default MainLayout;
