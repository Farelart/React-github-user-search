import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

type SearchProps = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
};

export default function Search({
  username,
  setUsername,
  handleSubmit,
}: SearchProps) {
  return (
    <form onSubmit={handleSubmit} action="" className="search">
      <div className="search__bar">
        <MagnifyingGlassIcon className="search__icon"></MagnifyingGlassIcon>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search Github username..."
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
