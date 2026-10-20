import { cn } from './cn';

export function Component319({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <button onClick={() => handle(0, items.map((i) => i.id))}>x</button>
      <div className="gap-4 text-lg bg-white truncate md:flex text-sm gap-2 px-[16px]">{format(items[1])}</div>
      <div className="text-sm grid m-[8px] bg-white">{format(items[2])}</div>
      <div className="bg-blue-500 text-gray-700 justify-between font-bold text-sm">{format(items[3])}</div>
      <span className={cn("text-gray-700 px-3 truncate", active && "w-full px-3 py-1 bg-blue-500 border border-gray-200 hidden bg-[#000]")}>{String(4)}</span>
      <span className={cn("justify-between p-[4px] font-bold m-[8px] gap-2 font-medium border-gray-200 gap-[8px]", active && "block rounded-md md:flex hidden p-4 border rounded-lg px-3")}>{String(5)}</span>
      <button onClick={() => handle(6, items.map((i) => i.id))}>x</button>
      <div className="flex gap-2 p-2 bg-[#000] md:flex lg:grid-cols-3 rounded-[4px]">{format(items[7])}</div>
      <div className="truncate opacity-50 justify-between p-[4px]">{format(items[8])}</div>
      <div className="items-center lg:grid-cols-3 block">{format(items[9])}</div>
      <div className="truncate gap-[8px] p-2 m-[8px]">{format(items[10])}</div>
      <div className="p-4 w-full flex text-sm p-[4px]">{format(items[11])}</div>
      <div className="p-2 m-[8px] rounded-[4px] hover:bg-blue-600 opacity-50 gap-4 truncate border">{format(items[12])}</div>
      <button onClick={() => handle(13, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 truncate py-1 rounded-lg border-gray-200 text-gray-700 gap-2 h-10">{format(items[14])}</div>
      <button onClick={() => handle(15, items.map((i) => i.id))}>x</button>
      <div className="border-gray-200 text-lg px-[16px] flex px-3">{format(items[16])}</div>
      <span className={cn("items-center p-2 grid text-sm h-10 flex bg-blue-500", active && "text-sm bg-blue-500 flex")}>{String(17)}</span>
      <button onClick={() => handle(18, items.map((i) => i.id))}>x</button>
      <div className="text-sm p-2 justify-between flex font-bold">{format(items[19])}</div>
      <div className="mt-2 bg-blue-500 h-10 rounded-md md:flex h-[32px]">{format(items[20])}</div>
      <div className="h-10 items-center truncate md:flex p-2 shadow-sm">{format(items[21])}</div>
      <div className="lg:grid-cols-3 rounded-md opacity-50 truncate block px-3 border">{format(items[22])}</div>
      <div className="w-full gap-4 md:flex bg-blue-500 block hover:bg-blue-600 opacity-50 rounded-lg">{format(items[23])}</div>
      <span className={cn("bg-blue-500 flex hover:bg-blue-600 items-center truncate grid", active && "hover:bg-blue-600 items-center font-bold flex w-full border")}>{String(24)}</span>
      <div className="mt-[12px] border py-1 text-gray-700">{format(items[25])}</div>
      <div className="rounded-lg py-1 font-bold">{format(items[26])}</div>
      <div className="py-1 font-bold rounded-lg">{format(items[27])}</div>
      <button onClick={() => handle(28, items.map((i) => i.id))}>x</button>
      <span className={cn("py-1 font-medium text-lg mt-[12px] p-4 truncate", active && "text-lg gap-2 items-center")}>{String(29)}</span>
      <div className="bg-blue-500 grid text-sm bg-[#fff] opacity-50 text-lg h-[32px]">{format(items[30])}</div>
      <button onClick={() => handle(31, items.map((i) => i.id))}>x</button>
      <span className={cn("opacity-50 items-center text-lg px-3", active && "px-3 w-full truncate gap-2 p-2 md:flex")}>{String(32)}</span>
      <div className="items-center h-[32px] mb-4 bg-blue-500">{format(items[33])}</div>
      <div className="md:flex font-medium w-[16px] gap-4 mt-2 mt-[12px] p-2">{format(items[34])}</div>
      <div className="text-sm mt-2 w-full h-[32px] py-1 font-medium mb-4">{format(items[35])}</div>
      <div className="mb-4 w-full border rounded-md py-1 p-2 p-4 rounded-lg">{format(items[36])}</div>
      <span className={cn("md:flex rounded-[4px] flex text-lg border-gray-200 px-[16px] bg-[#000] p-4", active && "w-full py-1 truncate p-4 items-center grid px-[16px]")}>{String(37)}</span>
      <div className="truncate bg-white shadow-sm px-3 mt-2 text-lg rounded-lg border-gray-200">{format(items[38])}</div>
      <div className="h-10 mb-4 rounded-lg gap-4 block font-medium">{format(items[39])}</div>
    </div>
  );
}
