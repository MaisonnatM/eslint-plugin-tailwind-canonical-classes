import { cn } from './cn';

export function Component184({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="grid hidden hover:bg-blue-600">{format(items[0])}</div>
      <div className="hidden hover:bg-blue-600 p-4 shadow-sm rounded-lg">{format(items[1])}</div>
      <div className="p-4 gap-2 truncate md:flex bg-blue-500">{format(items[2])}</div>
      <div className="gap-4 border-gray-200 w-full border rounded-lg">{format(items[3])}</div>
      <div className="gap-4 border-gray-200 mt-2 grid">{format(items[4])}</div>
      <div className="justify-between px-[16px] lg:grid-cols-3 font-bold">{format(items[5])}</div>
      <span className={cn("block text-sm shadow-sm", active && "gap-4 p-2 border-gray-200 text-lg justify-between hidden")}>{String(6)}</span>
      <button onClick={() => handle(7, items.map((i) => i.id))}>x</button>
      <span className={cn("border h-10 mt-[12px] flex bg-blue-500", active && "justify-between py-1 grid block text-sm h-10 lg:grid-cols-3 hidden")}>{String(8)}</span>
      <span className={cn("gap-4 m-[8px] shadow-sm items-center font-bold h-[32px] text-lg", active && "px-[16px] hover:bg-blue-600 px-3 truncate p-4 text-gray-700 h-10 opacity-50")}>{String(9)}</span>
      <span className={cn("rounded-lg mt-2 lg:grid-cols-3 grid md:flex bg-white bg-[#fff] truncate", active && "bg-[#fff] opacity-50 p-4 px-3")}>{String(10)}</span>
      <button onClick={() => handle(11, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 lg:grid-cols-3 shadow-sm">{format(items[12])}</div>
      <div className="justify-between hover:bg-blue-600 bg-[#fff] rounded-md gap-4 m-[8px] rounded-lg bg-[#000]">{format(items[13])}</div>
      <span className={cn("border-gray-200 border hover:bg-blue-600 mb-4 w-full", active && "mb-4 hidden text-lg")}>{String(14)}</span>
      <span className={cn("hover:bg-blue-600 hidden border-gray-200", active && "p-4 truncate px-[16px] hidden items-center font-bold md:flex")}>{String(15)}</span>
      <span className={cn("gap-2 text-gray-700 text-sm mb-4 rounded-md gap-4", active && "opacity-50 justify-between truncate hover:bg-blue-600 shadow-sm rounded-md border flex")}>{String(16)}</span>
      <div className="hidden gap-2 bg-white justify-between items-center md:flex">{format(items[17])}</div>
      <div className="px-3 bg-blue-500 hidden py-1 text-gray-700 font-medium shadow-sm">{format(items[18])}</div>
      <div className="p-2 mt-[12px] bg-[#000] grid text-gray-700 block w-full py-1">{format(items[19])}</div>
      <div className="justify-between px-3 h-10">{format(items[20])}</div>
      <div className="w-full p-[4px] grid lg:grid-cols-3 md:flex px-3 bg-white">{format(items[21])}</div>
      <div className="h-10 block text-lg flex md:flex">{format(items[22])}</div>
      <div className="text-sm py-1 grid p-4 hidden">{format(items[23])}</div>
      <span className={cn("px-3 bg-[#fff] rounded-lg bg-[#000] block", active && "h-10 px-3 p-4 truncate mb-4 rounded-md")}>{String(24)}</span>
      <span className={cn("justify-between gap-4 mt-2 hover:bg-blue-600 rounded-md hidden w-[16px]", active && "lg:grid-cols-3 rounded-md text-gray-700 border py-1 opacity-50")}>{String(25)}</span>
      <button onClick={() => handle(26, items.map((i) => i.id))}>x</button>
      <div className="rounded-[4px] justify-between px-3 mt-[12px] text-gray-700 m-[8px] mb-4">{format(items[27])}</div>
      <div className="gap-2 truncate shadow-sm">{format(items[28])}</div>
      <span className={cn("p-4 text-sm border-gray-200 h-10 justify-between lg:grid-cols-3 mb-4", active && "h-[32px] p-4 text-lg grid w-[16px] rounded-md")}>{String(29)}</span>
      <div className="gap-2 mt-2 block hidden h-[32px] gap-4 font-medium text-sm">{format(items[30])}</div>
      <button onClick={() => handle(31, items.map((i) => i.id))}>x</button>
      <div className="px-3 gap-[8px] text-gray-700">{format(items[32])}</div>
      <span className={cn("rounded-[4px] bg-blue-500 py-1", active && "bg-white m-[8px] w-full lg:grid-cols-3 border")}>{String(33)}</span>
      <span className={cn("border w-[16px] bg-[#000]", active && "md:flex truncate hover:bg-blue-600 border-gray-200")}>{String(34)}</span>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <span className={cn("border-gray-200 text-gray-700 hidden bg-[#fff]", active && "bg-white justify-between mb-4 bg-blue-500 text-lg lg:grid-cols-3 rounded-md")}>{String(36)}</span>
      <div className="w-full rounded-[4px] gap-4">{format(items[37])}</div>
      <div className="truncate p-4 h-10">{format(items[38])}</div>
      <div className="bg-[#000] mt-[12px] w-full grid text-sm">{format(items[39])}</div>
    </div>
  );
}
