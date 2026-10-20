import { cn } from './cn';

export function Component72({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="h-[32px] text-lg rounded-lg">{format(items[0])}</div>
      <span className={cn("text-lg truncate rounded-lg", active && "mb-4 grid items-center mt-2 p-2 opacity-50 gap-2")}>{String(1)}</span>
      <div className="p-4 gap-4 lg:grid-cols-3 hover:bg-blue-600 border text-lg">{format(items[2])}</div>
      <span className={cn("font-medium border items-center h-10 m-[8px] mt-2 truncate", active && "grid py-1 items-center text-sm opacity-50")}>{String(3)}</span>
      <span className={cn("hover:bg-blue-600 lg:grid-cols-3 mb-4 py-1 h-10", active && "items-center truncate bg-[#fff] mb-4 border bg-white border-gray-200 px-3")}>{String(4)}</span>
      <span className={cn("hover:bg-blue-600 rounded-md p-4 border mt-[12px] gap-2", active && "py-1 flex mt-2 h-[32px] items-center mb-4 font-bold w-[16px]")}>{String(5)}</span>
      <span className={cn("text-lg mb-4 text-sm border px-3 items-center rounded-[4px] w-full", active && "items-center bg-white truncate gap-[8px] font-medium gap-2 mt-2")}>{String(6)}</span>
      <span className={cn("bg-blue-500 px-3 w-full bg-white", active && "gap-4 shadow-sm items-center mb-4 mt-[12px] w-full opacity-50 bg-blue-500")}>{String(7)}</span>
      <div className="truncate mb-4 md:flex w-full p-4">{format(items[8])}</div>
      <button onClick={() => handle(9, items.map((i) => i.id))}>x</button>
      <span className={cn("px-3 border mb-4 border-gray-200 text-sm rounded-lg", active && "bg-white font-medium p-2 py-1")}>{String(10)}</span>
      <div className="hidden px-[16px] rounded-md p-[4px] truncate">{format(items[11])}</div>
      <div className="opacity-50 justify-between h-10 gap-4">{format(items[12])}</div>
      <div className="grid mb-4 rounded-md hidden p-4 mt-[12px] items-center text-gray-700">{format(items[13])}</div>
      <span className={cn("block px-3 text-sm", active && "py-1 bg-blue-500 border-gray-200 p-4 gap-2 opacity-50")}>{String(14)}</span>
      <div className="py-1 block opacity-50 font-bold hidden mb-4 bg-blue-500 font-medium">{format(items[15])}</div>
      <div className="font-medium border-gray-200 bg-blue-500">{format(items[16])}</div>
      <span className={cn("justify-between px-3 hover:bg-blue-600 gap-2 gap-4", active && "bg-blue-500 grid border truncate bg-[#fff] text-gray-700")}>{String(17)}</span>
      <div className="mt-2 gap-4 p-2 p-4 h-10 rounded-[4px] opacity-50 mt-[12px]">{format(items[18])}</div>
      <div className="truncate font-medium bg-blue-500 w-[16px] gap-[8px] py-1 border block">{format(items[19])}</div>
      <div className="md:flex p-4 gap-2 p-2 bg-blue-500">{format(items[20])}</div>
      <span className={cn("mt-2 md:flex gap-[8px] bg-white", active && "font-medium truncate p-4 hidden mb-4")}>{String(21)}</span>
      <div className="px-3 hidden w-full md:flex bg-[#fff]">{format(items[22])}</div>
      <div className="bg-[#fff] text-lg py-1 mb-4 shadow-sm justify-between">{format(items[23])}</div>
      <div className="bg-white items-center p-2">{format(items[24])}</div>
      <div className="text-lg hover:bg-blue-600 font-medium px-[16px]">{format(items[25])}</div>
      <div className="gap-4 p-4 border-gray-200 items-center truncate hover:bg-blue-600 w-full py-1">{format(items[26])}</div>
      <div className="md:flex mt-[12px] lg:grid-cols-3 mb-4 font-medium h-[32px]">{format(items[27])}</div>
      <div className="mb-4 items-center shadow-sm md:flex p-4 font-bold lg:grid-cols-3 border">{format(items[28])}</div>
      <div className="grid truncate border">{format(items[29])}</div>
      <span className={cn("font-bold grid truncate text-sm hidden flex", active && "p-2 gap-[8px] hover:bg-blue-600 p-[4px] rounded-lg")}>{String(30)}</span>
      <span className={cn("grid border-gray-200 text-sm", active && "bg-blue-500 grid md:flex hidden block bg-[#fff] text-lg")}>{String(31)}</span>
      <button onClick={() => handle(32, items.map((i) => i.id))}>x</button>
      <span className={cn("w-full m-[8px] rounded-lg lg:grid-cols-3", active && "h-[32px] gap-4 bg-blue-500 text-lg rounded-lg")}>{String(33)}</span>
      <div className="gap-2 h-[32px] mb-4 px-3 truncate block lg:grid-cols-3 hidden">{format(items[34])}</div>
      <span className={cn("text-gray-700 items-center w-full rounded-md justify-between lg:grid-cols-3 px-3 shadow-sm", active && "truncate p-[4px] lg:grid-cols-3 bg-[#fff]")}>{String(35)}</span>
      <span className={cn("flex p-[4px] rounded-md border-gray-200 p-2", active && "mb-4 text-sm justify-between w-full")}>{String(36)}</span>
      <div className="p-2 border-gray-200 bg-white">{format(items[37])}</div>
      <div className="px-[16px] gap-2 border-gray-200 rounded-lg">{format(items[38])}</div>
      <button onClick={() => handle(39, items.map((i) => i.id))}>x</button>
    </div>
  );
}
