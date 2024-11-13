import { SunIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>devfinder</h1>
      <div className="theme__toggle">
        <p>Light</p>
        <SunIcon className="sun__icon"></SunIcon>
      </div>
    </div>
  );
}
