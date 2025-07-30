import APicture from "../a-picture/a-picture";
import { HoverItem } from "../dropdown-menu/hover-item";
import { HoverLayout } from "../dropdown-menu/hover-layout";

const Header = () => {
  return (
    <header className="h-24 flex items-center justify-center gap-x-10 border-b border-zinc-300">
      <HoverLayout hideDelay={150}>
        <HoverItem
          id="stone"
          trigger={
            <span className="text-sm font-semibold text-zinc-800 cursor-pointer">
              Stone!
            </span>
          }
        >
          <div className="flex items-center justify-between">
            <span>What about stones?</span>
            <span>Камень?</span>
          </div>
        </HoverItem>
        <HoverItem
          id="wood"
          trigger={
            <span className="text-sm font-semibold text-zinc-800 cursor-pointer">
              Wood!
            </span>
          }
        >
          <div className="flex items-center justify-between">
            <span>Wood?</span>
            <span>Yes.</span>
          </div>
        </HoverItem>
        <HoverItem
          id="inside"
          trigger={
            <span className="text-sm font-semibold text-zinc-800 cursor-pointer">
              What's inside?
            </span>
          }
        >
          <div className="flex flex-col text-center gap-y-3">
            <span>Inside can be any JSX or TSX component</span>
            <span>Внутри может быть любой JSX или TSX компонент</span>
          </div>
        </HoverItem>
        <HoverItem
          id="example"
          trigger={
            <span className="text-sm font-semibold text-zinc-800 cursor-pointer">
              For example?
            </span>
          }
        >
          <div className="flex flex-col items-center text-center gap-y-3">
            <span>A picture</span>
            <APicture />
          </div>
        </HoverItem>
      </HoverLayout>
    </header>
  );
};

export default Header;
