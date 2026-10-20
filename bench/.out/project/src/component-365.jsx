import { cn } from './cn';

export function Component365({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <button onClick={() => handle(0, items.map((i) => i.id))}>x</button>
      <span className={cn("border-gray-200 text-gray-700 hidden bg-[#fff]", active && "bg-white justify-between mb-4 bg-blue-500 text-lg lg:grid-cols-3 rounded-md")}>{String(1)}</span>
      <div className="w-full rounded-[4px] gap-4">{format(items[2])}</div>
      <div className="truncate p-4 h-10">{format(items[3])}</div>
      <div className="bg-[#000] mt-[12px] w-full grid text-sm">{format(items[4])}</div>
      <span className={cn("text-gray-700 bg-blue-500 gap-4 font-bold rounded-md md:flex shadow-sm p-4", active && "mt-[12px] mt-2 p-4 shadow-sm truncate")}>{String(5)}</span>
      <span className={cn("rounded-md text-lg gap-[8px] shadow-sm hover:bg-blue-600 gap-4", active && "w-full rounded-md text-lg border-gray-200 px-[16px] truncate")}>{String(6)}</span>
      <div className="lg:grid-cols-3 rounded-lg w-full">{format(items[7])}</div>
      <span className={cn("block px-3 md:flex items-center p-4 text-gray-700", active && "gap-4 rounded-md lg:grid-cols-3 mb-4 text-gray-700")}>{String(8)}</span>
      <span className={cn("h-[32px] py-1 truncate gap-4 grid rounded-lg", active && "mb-4 rounded-md font-medium p-4")}>{String(9)}</span>
      <div className="py-1 gap-4 bg-blue-500 p-4 w-full rounded-lg border">{format(items[10])}</div>
      <span className={cn("gap-[8px] shadow-sm gap-4", active && "rounded-[4px] gap-2 text-lg shadow-sm m-[8px] h-10 hidden")}>{String(11)}</span>
      <div className="rounded-md mt-2 lg:grid-cols-3 bg-blue-500 w-full px-3 border-gray-200">{format(items[12])}</div>
      <div className="font-bold rounded-md items-center border">{format(items[13])}</div>
      <span className={cn("rounded-[4px] mb-4 w-full", active && "mb-4 truncate p-2 py-1")}>{String(14)}</span>
      <div className="font-medium bg-white gap-2 mt-2 grid hidden p-2">{format(items[15])}</div>
      <div className="font-bold w-[16px] text-gray-700">{format(items[16])}</div>
      <div className="px-3 grid mb-4">{format(items[17])}</div>
      <div className="font-bold font-medium bg-white gap-[8px] text-gray-700">{format(items[18])}</div>
      <div className="hidden p-2 items-center text-sm bg-white flex">{format(items[19])}</div>
      <button onClick={() => handle(20, items.map((i) => i.id))}>x</button>
      <div className="font-medium py-1 h-10">{format(items[21])}</div>
      <span className={cn("mt-2 mb-4 opacity-50 md:flex px-3 px-[16px] gap-4 text-sm", active && "shadow-sm font-medium block")}>{String(22)}</span>
      <div className="rounded-md justify-between grid truncate gap-2 h-10 p-4">{format(items[23])}</div>
      <div className="hover:bg-blue-600 p-4 px-[16px] w-[16px]">{format(items[24])}</div>
      <div className="md:flex text-gray-700 font-bold p-2 lg:grid-cols-3 shadow-sm p-4">{format(items[25])}</div>
      <button onClick={() => handle(26, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(27, items.map((i) => i.id))}>x</button>
      <div className="shadow-sm bg-white mb-4 lg:grid-cols-3 md:flex text-gray-700">{format(items[28])}</div>
      <div className="px-3 hover:bg-blue-600 items-center shadow-sm gap-[8px] opacity-50 p-[4px] block">{format(items[29])}</div>
      <span className={cn("block items-center w-full opacity-50", active && "md:flex hidden block h-10")}>{String(30)}</span>
      <div className="p-2 mt-2 hidden">{format(items[31])}</div>
      <span className={cn("flex bg-white mt-2 rounded-lg text-lg opacity-50", active && "text-gray-700 gap-[8px] bg-white")}>{String(32)}</span>
      <div className="h-[32px] items-center bg-[#000]">{format(items[33])}</div>
      <span className={cn("border p-4 bg-blue-500 mb-4", active && "p-4 gap-2 mt-2 px-3")}>{String(34)}</span>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(36, items.map((i) => i.id))}>x</button>
      <div className="w-full shadow-sm gap-4 px-3 rounded-md h-10 m-[8px]">{format(items[37])}</div>
      <div className="bg-blue-500 mb-4 border mt-2 hidden grid">{format(items[38])}</div>
      <div className="opacity-50 bg-blue-500 lg:grid-cols-3 text-gray-700 bg-white">{format(items[39])}</div>
    </div>
  );
}
