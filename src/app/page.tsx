import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-5 mt-35">
      <h1 className="text-4xl font-semibold text-blue-500">
        React Dropdown Menu 👀
      </h1>
      <Link
        className="text-purple-800 hover:text-black"
        href={"https://github.com/deepweed/dropdown-menu-react"}
        target="_blank"
      >
        GitHub ⟶
      </Link>
      <span className="text-xl">
        This is just an example. You might like it and want to use this menu in
        your personal project. Thank you!
      </span>
      <span className="text-xl">
        Это просто пример. Возможно, вам понравится и вы захотите использовать
        это меню в своем личном проекте. Спасибо!
      </span>
    </div>
  );
}
