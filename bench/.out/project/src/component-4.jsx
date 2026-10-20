import { cn } from './cn';

export function Component4({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <button onClick={() => handle(0, items.map((i) => i.id))}>x</button>
      <span className={cn("p-4 text-lg md:flex block hidden gap-[8px] shadow-sm h-[32px]", active && "px-3 items-center rounded-lg w-full")}>{String(1)}</span>
      <button onClick={() => handle(2, items.map((i) => i.id))}>x</button>
      <div className="border-gray-200 justify-between text-sm truncate hover:bg-blue-600 m-[8px] flex">{format(items[3])}</div>
      <div className="rounded-md text-gray-700 mt-2 grid truncate">{format(items[4])}</div>
      <button onClick={() => handle(5, items.map((i) => i.id))}>x</button>
      <div className="gap-[8px] border text-sm rounded-md rounded-lg">{format(items[6])}</div>
      <div className="justify-between mb-4 gap-4 text-lg">{format(items[7])}</div>
      <button onClick={() => handle(8, items.map((i) => i.id))}>x</button>
      <div className="hidden mb-4 items-center">{format(items[9])}</div>
      <div className="block opacity-50 font-medium rounded-lg grid bg-white rounded-[4px] border">{format(items[10])}</div>
      <div className="justify-between border m-[8px] border-gray-200 flex h-10 p-[4px]">{format(items[11])}</div>
      <span className={cn("font-medium hover:bg-blue-600 p-[4px] gap-[8px]", active && "font-bold shadow-sm text-gray-700 flex rounded-lg p-2 bg-blue-500")}>{String(12)}</span>
      <button onClick={() => handle(13, items.map((i) => i.id))}>x</button>
      <span className={cn("p-4 text-lg font-bold", active && "mb-4 border w-full block")}>{String(14)}</span>
      <span className={cn("w-full gap-4 gap-2", active && "justify-between hidden md:flex text-gray-700 mt-[12px]")}>{String(15)}</span>
      <span className={cn("font-medium p-2 block hover:bg-blue-600 gap-[8px] py-1 font-bold border-gray-200", active && "py-1 text-sm border h-[32px]")}>{String(16)}</span>
      <div className="grid bg-white p-2 mt-2">{format(items[17])}</div>
      <div className="w-full px-3 md:flex truncate">{format(items[18])}</div>
      <span className={cn("lg:grid-cols-3 flex mb-4 grid h-10 hover:bg-blue-600 rounded-lg gap-[8px]", active && "bg-blue-500 text-sm border p-4 text-gray-700 h-10 md:flex")}>{String(19)}</span>
      <div className="p-4 mt-2 gap-4 py-1 md:flex hidden">{format(items[20])}</div>
      <span className={cn("hover:bg-blue-600 block mb-4 w-full", active && "px-3 text-sm truncate w-[16px] shadow-sm mb-4 rounded-lg")}>{String(21)}</span>
      <div className="truncate rounded-[4px] gap-4 bg-[#000] gap-[8px] p-[4px] font-medium bg-blue-500">{format(items[22])}</div>
      <div className="shadow-sm gap-4 bg-[#000]">{format(items[23])}</div>
      <span className={cn("opacity-50 gap-2 text-gray-700 flex", active && "font-medium gap-2 h-10 hidden")}>{String(24)}</span>
      <div className="bg-white rounded-[4px] items-center flex shadow-sm bg-[#000]">{format(items[25])}</div>
      <div className="m-[8px] hover:bg-blue-600 p-4 hidden h-10">{format(items[26])}</div>
      <div className="bg-blue-500 py-1 shadow-sm p-2 w-full text-gray-700 font-bold font-medium">{format(items[27])}</div>
      <div className="p-2 hidden text-gray-700 text-lg">{format(items[28])}</div>
      <div className="p-4 shadow-sm truncate">{format(items[29])}</div>
      <div className="h-10 text-gray-700 p-[4px] flex truncate">{format(items[30])}</div>
      <span className={cn("w-full rounded-[4px] py-1 rounded-md", active && "py-1 md:flex h-[32px] truncate font-bold p-2 bg-white")}>{String(31)}</span>
      <div className="text-gray-700 flex p-2 bg-white hover:bg-blue-600">{format(items[32])}</div>
      <div className="border-gray-200 justify-between h-10 p-2 py-1 shadow-sm hover:bg-blue-600">{format(items[33])}</div>
      <div className="rounded-lg border hidden">{format(items[34])}</div>
      <div className="block p-4 lg:grid-cols-3 justify-between grid truncate opacity-50 gap-2">{format(items[35])}</div>
      <div className="py-1 items-center rounded-lg w-full lg:grid-cols-3 font-medium p-2 text-lg">{format(items[36])}</div>
      <div className="px-3 gap-2 font-medium gap-[8px] p-4 mb-4">{format(items[37])}</div>
      <span className={cn("items-center p-4 gap-[8px]", active && "mt-2 p-2 hidden hover:bg-blue-600")}>{String(38)}</span>
      <div className="block border text-lg text-gray-700 text-sm gap-2 grid">{format(items[39])}</div>
    </div>
  );
}
