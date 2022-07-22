// var cfg: { [key: string]: string; } = {
//   ["constellation"]:"",
//   ["astrogalaxy"]: "",
//   ["parallatic"]: "",
//   ["void"]: "",
// };

import { Config } from "../helpers/Types";

type EditorHeaderProps = {
  currentSelection: string;
  setCurrentSelection: (selection: string) => void;
  config: Config
}

export function EditorHeader({currentSelection, setCurrentSelection, config}: EditorHeaderProps) {
  return (
    <div className="flex flex-grow gap-2 justify-evenly h-1/5 pb-1 transition">
      {Object.entries(config).map(([key, value]) => {
        if (key != "code")
          return (
            <button
              key={key}
              className={`${currentSelection === key ? 'border-b-2 border-brand-100 text-brand-100' : ''} h-8 text-sm w-full focus:outline-none`}
              onClick={() => {
                setCurrentSelection(key);
              }}
            >
              {key}
            </button>
          );
      })}
    </div>
  )
}