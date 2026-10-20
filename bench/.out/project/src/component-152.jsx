import { cn } from './cn';

export function Component152({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="gap-2 mt-2 block hidden h-[32px] gap-4 font-medium text-sm">{format(items[0])}</div>
      <button onClick={() => handle(1, items.map((i) => i.id))}>x</button>
      <div className="px-3 gap-[8px] text-gray-700">{format(items[2])}</div>
      <span className={cn("rounded-[4px] bg-blue-500 py-1", active && "bg-white m-[8px] w-full lg:grid-cols-3 border")}>{String(3)}</span>
      <span className={cn("border w-[16px] bg-[#000]", active && "md:flex truncate hover:bg-blue-600 border-gray-200")}>{String(4)}</span>
      <button onClick={() => handle(5, items.map((i) => i.id))}>x</button>
      <span className={cn("border-gray-200 text-gray-700 hidden bg-[#fff]", active && "bg-white justify-between mb-4 bg-blue-500 text-lg lg:grid-cols-3 rounded-md")}>{String(6)}</span>
      <div className="w-full rounded-[4px] gap-4">{format(items[7])}</div>
      <div className="truncate p-4 h-10">{format(items[8])}</div>
      <div className="bg-[#000] mt-[12px] w-full grid text-sm">{format(items[9])}</div>
      <span className={cn("text-gray-700 bg-blue-500 gap-4 font-bold rounded-md md:flex shadow-sm p-4", active && "mt-[12px] mt-2 p-4 shadow-sm truncate")}>{String(10)}</span>
      <span className={cn("rounded-md text-lg gap-[8px] shadow-sm hover:bg-blue-600 gap-4", active && "w-full rounded-md text-lg border-gray-200 px-[16px] truncate")}>{String(11)}</span>
      <div className="lg:grid-cols-3 rounded-lg w-full">{format(items[12])}</div>
      <span className={cn("block px-3 md:flex items-center p-4 text-gray-700", active && "gap-4 rounded-md lg:grid-cols-3 mb-4 text-gray-700")}>{String(13)}</span>
      <span className={cn("h-[32px] py-1 truncate gap-4 grid rounded-lg", active && "mb-4 rounded-md font-medium p-4")}>{String(14)}</span>
      <div className="py-1 gap-4 bg-blue-500 p-4 w-full rounded-lg border">{format(items[15])}</div>
      <span className={cn("gap-[8px] shadow-sm gap-4", active && "rounded-[4px] gap-2 text-lg shadow-sm m-[8px] h-10 hidden")}>{String(16)}</span>
      <div className="rounded-md mt-2 lg:grid-cols-3 bg-blue-500 w-full px-3 border-gray-200">{format(items[17])}</div>
      <div className="font-bold rounded-md items-center border">{format(items[18])}</div>
      <span className={cn("rounded-[4px] mb-4 w-full", active && "mb-4 truncate p-2 py-1")}>{String(19)}</span>
      <div className="font-medium bg-white gap-2 mt-2 grid hidden p-2">{format(items[20])}</div>
      <div className="font-bold w-[16px] text-gray-700">{format(items[21])}</div>
      <div className="px-3 grid mb-4">{format(items[22])}</div>
      <div className="font-bold font-medium bg-white gap-[8px] text-gray-700">{format(items[23])}</div>
      <div className="hidden p-2 items-center text-sm bg-white flex">{format(items[24])}</div>
      <button onClick={() => handle(25, items.map((i) => i.id))}>x</button>
      <div className="font-medium py-1 h-10">{format(items[26])}</div>
      <span className={cn("mt-2 mb-4 opacity-50 md:flex px-3 px-[16px] gap-4 text-sm", active && "shadow-sm font-medium block")}>{String(27)}</span>
      <div className="rounded-md justify-between grid truncate gap-2 h-10 p-4">{format(items[28])}</div>
      <div className="hover:bg-blue-600 p-4 px-[16px] w-[16px]">{format(items[29])}</div>
      <div className="md:flex text-gray-700 font-bold p-2 lg:grid-cols-3 shadow-sm p-4">{format(items[30])}</div>
      <button onClick={() => handle(31, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(32, items.map((i) => i.id))}>x</button>
      <div className="shadow-sm bg-white mb-4 lg:grid-cols-3 md:flex text-gray-700">{format(items[33])}</div>
      <div className="px-3 hover:bg-blue-600 items-center shadow-sm gap-[8px] opacity-50 p-[4px] block">{format(items[34])}</div>
      <span className={cn("block items-center w-full opacity-50", active && "md:flex hidden block h-10")}>{String(35)}</span>
      <div className="p-2 mt-2 hidden">{format(items[36])}</div>
      <span className={cn("flex bg-white mt-2 rounded-lg text-lg opacity-50", active && "text-gray-700 gap-[8px] bg-white")}>{String(37)}</span>
      <div className="h-[32px] items-center bg-[#000]">{format(items[38])}</div>
      <span className={cn("border p-4 bg-blue-500 mb-4", active && "p-4 gap-2 mt-2 px-3")}>{String(39)}</span>
    </div>
  );
}
