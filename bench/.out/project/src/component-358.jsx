import { cn } from './cn';

export function Component358({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="gap-4 p-2 py-1">{format(items[0])}</div>
      <div className="mb-4 w-full rounded-lg">{format(items[1])}</div>
      <span className={cn("hidden px-3 text-gray-700 opacity-50", active && "text-sm rounded-[4px] hover:bg-blue-600 px-3")}>{String(2)}</span>
      <button onClick={() => handle(3, items.map((i) => i.id))}>x</button>
      <div className="rounded-lg grid mb-4 mt-2">{format(items[4])}</div>
      <div className="lg:grid-cols-3 shadow-sm bg-white p-4 items-center gap-2">{format(items[5])}</div>
      <div className="items-center gap-2 grid">{format(items[6])}</div>
      <div className="md:flex rounded-lg w-full m-[8px] p-2 text-sm rounded-md flex">{format(items[7])}</div>
      <div className="border h-[32px] md:flex">{format(items[8])}</div>
      <div className="text-lg gap-4 border-gray-200 gap-2 bg-[#000]">{format(items[9])}</div>
      <div className="font-medium shadow-sm hidden gap-4 text-lg">{format(items[10])}</div>
      <div className="rounded-md h-[32px] mt-[12px]">{format(items[11])}</div>
      <span className={cn("font-medium md:flex hidden", active && "font-bold rounded-lg block p-2 border-gray-200")}>{String(12)}</span>
      <span className={cn("mt-2 flex grid font-bold", active && "mb-4 hover:bg-blue-600 bg-[#fff] text-sm md:flex px-[16px] gap-[8px] shadow-sm")}>{String(13)}</span>
      <span className={cn("truncate gap-2 mb-4 bg-[#000]", active && "bg-blue-500 truncate grid font-bold")}>{String(14)}</span>
      <div className="h-[32px] text-sm py-1 hidden">{format(items[15])}</div>
      <span className={cn("font-medium p-4 mb-4 opacity-50 py-1 w-full truncate", active && "w-full p-2 bg-blue-500 text-sm block gap-4")}>{String(16)}</span>
      <div className="grid rounded-[4px] text-gray-700 items-center bg-white">{format(items[17])}</div>
      <div className="text-sm bg-blue-500 justify-between shadow-sm mb-4 truncate text-gray-700 py-1">{format(items[18])}</div>
      <div className="p-[4px] py-1 mt-2 block">{format(items[19])}</div>
      <div className="m-[8px] flex gap-2 p-2 border-gray-200 grid py-1 w-[16px]">{format(items[20])}</div>
      <div className="grid gap-4 w-full items-center font-bold">{format(items[21])}</div>
      <button onClick={() => handle(22, items.map((i) => i.id))}>x</button>
      <span className={cn("bg-blue-500 bg-white lg:grid-cols-3 font-medium mb-4 w-[16px]", active && "text-sm px-3 mt-[12px] hidden font-bold bg-blue-500")}>{String(23)}</span>
      <span className={cn("mt-2 h-10 hidden shadow-sm w-full gap-4", active && "m-[8px] bg-[#000] h-10 rounded-lg rounded-md")}>{String(24)}</span>
      <button onClick={() => handle(25, items.map((i) => i.id))}>x</button>
      <div className="rounded-lg shadow-sm flex mt-2 bg-blue-500 truncate">{format(items[26])}</div>
      <div className="truncate py-1 hover:bg-blue-600 w-full px-3">{format(items[27])}</div>
      <div className="flex gap-[8px] px-3 truncate py-1 mb-4">{format(items[28])}</div>
      <button onClick={() => handle(29, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(30, items.map((i) => i.id))}>x</button>
      <div className="font-bold justify-between flex mb-4">{format(items[31])}</div>
      <span className={cn("truncate text-sm grid p-4", active && "h-[32px] truncate items-center text-gray-700 bg-blue-500 flex hidden")}>{String(32)}</span>
      <div className="h-10 opacity-50 mt-2 bg-white border lg:grid-cols-3">{format(items[33])}</div>
      <div className="bg-blue-500 items-center truncate">{format(items[34])}</div>
      <span className={cn("text-sm bg-blue-500 font-medium justify-between mt-2 h-10 bg-[#fff] text-lg", active && "bg-[#fff] m-[8px] px-[16px] h-10")}>{String(35)}</span>
      <span className={cn("gap-4 mt-[12px] p-4", active && "justify-between truncate text-lg")}>{String(36)}</span>
      <button onClick={() => handle(37, items.map((i) => i.id))}>x</button>
      <div className="mt-2 rounded-md w-full shadow-sm">{format(items[38])}</div>
      <div className="h-10 py-1 grid gap-2 bg-blue-500 font-medium">{format(items[39])}</div>
    </div>
  );
}
