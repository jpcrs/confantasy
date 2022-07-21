import { SelectMenu } from "./SelectMenu";

type EditorFooterProps = {
  items: { [key: string]: string };
  setItems: (items: { [key: string]: string }) => void;
};

export function EditorFooter({ items, setItems }: EditorFooterProps) {
  return (
    <>
      <div className="flex justify-around pt-2 gap-12 px-4 h-1/4">
        <input className="pl-1 h-6 text-sm bg-transparent rounded-md border border-brand-100 focus:border-brand-100 focus:ring-brand-100 focus:ring-1 focus:outline-none placeholder:text-zinc-600 w-3/4" placeholder="Settings name..."></input>
        <button className="h-6 bg-brand-100 text-white text-sm font-bold rounded-md focus:outline-none w-1/4 -ml-10">
          Save
        </button>
      </div>
      <div className="flex justify-around pt-4 gap-12 px-4 h-1/4">
        <SelectMenu />
      </div>
      <div className="fixed align-center w-full bottom-0 h-10">
        <button
          className="bg-brand-100 text-white text-sm font-bold h-10 focus:outline-none w-full"
          onClick={() => {
            let itemsToUpdate = JSON.parse(items["constellation"]);
            itemsToUpdate.directory += "\\";
            console.log(itemsToUpdate.directory);
            setItems(items);
          }}
        >
          Apply
        </button>
      </div>
    </>
  );
}
