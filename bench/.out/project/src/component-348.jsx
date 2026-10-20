import { cn } from './cn';

export function Component348({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("rounded-lg mt-2 lg:grid-cols-3 grid md:flex bg-white bg-[#fff] truncate", active && "bg-[#fff] opacity-50 p-4 px-3")}>{String(0)}</span>
      <button onClick={() => handle(1, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 lg:grid-cols-3 shadow-sm">{format(items[2])}</div>
      <div className="justify-between hover:bg-blue-600 bg-[#fff] rounded-md gap-4 m-[8px] rounded-lg bg-[#000]">{format(items[3])}</div>
      <span className={cn("border-gray-200 border hover:bg-blue-600 mb-4 w-full", active && "mb-4 hidden text-lg")}>{String(4)}</span>
      <span className={cn("hover:bg-blue-600 hidden border-gray-200", active && "p-4 truncate px-[16px] hidden items-center font-bold md:flex")}>{String(5)}</span>
      <span className={cn("gap-2 text-gray-700 text-sm mb-4 rounded-md gap-4", active && "opacity-50 justify-between truncate hover:bg-blue-600 shadow-sm rounded-md border flex")}>{String(6)}</span>
      <div className="hidden gap-2 bg-white justify-between items-center md:flex">{format(items[7])}</div>
      <div className="px-3 bg-blue-500 hidden py-1 text-gray-700 font-medium shadow-sm">{format(items[8])}</div>
      <div className="p-2 mt-[12px] bg-[#000] grid text-gray-700 block w-full py-1">{format(items[9])}</div>
      <div className="justify-between px-3 h-10">{format(items[10])}</div>
      <div className="w-full p-[4px] grid lg:grid-cols-3 md:flex px-3 bg-white">{format(items[11])}</div>
      <div className="h-10 block text-lg flex md:flex">{format(items[12])}</div>
      <div className="text-sm py-1 grid p-4 hidden">{format(items[13])}</div>
      <span className={cn("px-3 bg-[#fff] rounded-lg bg-[#000] block", active && "h-10 px-3 p-4 truncate mb-4 rounded-md")}>{String(14)}</span>
      <span className={cn("justify-between gap-4 mt-2 hover:bg-blue-600 rounded-md hidden w-[16px]", active && "lg:grid-cols-3 rounded-md text-gray-700 border py-1 opacity-50")}>{String(15)}</span>
      <button onClick={() => handle(16, items.map((i) => i.id))}>x</button>
      <div className="rounded-[4px] justify-between px-3 mt-[12px] text-gray-700 m-[8px] mb-4">{format(items[17])}</div>
      <div className="gap-2 truncate shadow-sm">{format(items[18])}</div>
      <span className={cn("p-4 text-sm border-gray-200 h-10 justify-between lg:grid-cols-3 mb-4", active && "h-[32px] p-4 text-lg grid w-[16px] rounded-md")}>{String(19)}</span>
      <div className="gap-2 mt-2 block hidden h-[32px] gap-4 font-medium text-sm">{format(items[20])}</div>
      <button onClick={() => handle(21, items.map((i) => i.id))}>x</button>
      <div className="px-3 gap-[8px] text-gray-700">{format(items[22])}</div>
      <span className={cn("rounded-[4px] bg-blue-500 py-1", active && "bg-white m-[8px] w-full lg:grid-cols-3 border")}>{String(23)}</span>
      <span className={cn("border w-[16px] bg-[#000]", active && "md:flex truncate hover:bg-blue-600 border-gray-200")}>{String(24)}</span>
      <button onClick={() => handle(25, items.map((i) => i.id))}>x</button>
      <span className={cn("border-gray-200 text-gray-700 hidden bg-[#fff]", active && "bg-white justify-between mb-4 bg-blue-500 text-lg lg:grid-cols-3 rounded-md")}>{String(26)}</span>
      <div className="w-full rounded-[4px] gap-4">{format(items[27])}</div>
      <div className="truncate p-4 h-10">{format(items[28])}</div>
      <div className="bg-[#000] mt-[12px] w-full grid text-sm">{format(items[29])}</div>
      <span className={cn("text-gray-700 bg-blue-500 gap-4 font-bold rounded-md md:flex shadow-sm p-4", active && "mt-[12px] mt-2 p-4 shadow-sm truncate")}>{String(30)}</span>
      <span className={cn("rounded-md text-lg gap-[8px] shadow-sm hover:bg-blue-600 gap-4", active && "w-full rounded-md text-lg border-gray-200 px-[16px] truncate")}>{String(31)}</span>
      <div className="lg:grid-cols-3 rounded-lg w-full">{format(items[32])}</div>
      <span className={cn("block px-3 md:flex items-center p-4 text-gray-700", active && "gap-4 rounded-md lg:grid-cols-3 mb-4 text-gray-700")}>{String(33)}</span>
      <span className={cn("h-[32px] py-1 truncate gap-4 grid rounded-lg", active && "mb-4 rounded-md font-medium p-4")}>{String(34)}</span>
      <div className="py-1 gap-4 bg-blue-500 p-4 w-full rounded-lg border">{format(items[35])}</div>
      <span className={cn("gap-[8px] shadow-sm gap-4", active && "rounded-[4px] gap-2 text-lg shadow-sm m-[8px] h-10 hidden")}>{String(36)}</span>
      <div className="rounded-md mt-2 lg:grid-cols-3 bg-blue-500 w-full px-3 border-gray-200">{format(items[37])}</div>
      <div className="font-bold rounded-md items-center border">{format(items[38])}</div>
      <span className={cn("rounded-[4px] mb-4 w-full", active && "mb-4 truncate p-2 py-1")}>{String(39)}</span>
    </div>
  );
}
