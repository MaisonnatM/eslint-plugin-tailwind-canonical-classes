import { cn } from './cn';

export function Component211({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="h-[32px] text-sm py-1 hidden">{format(items[0])}</div>
      <span className={cn("font-medium p-4 mb-4 opacity-50 py-1 w-full truncate", active && "w-full p-2 bg-blue-500 text-sm block gap-4")}>{String(1)}</span>
      <div className="grid rounded-[4px] text-gray-700 items-center bg-white">{format(items[2])}</div>
      <div className="text-sm bg-blue-500 justify-between shadow-sm mb-4 truncate text-gray-700 py-1">{format(items[3])}</div>
      <div className="p-[4px] py-1 mt-2 block">{format(items[4])}</div>
      <div className="m-[8px] flex gap-2 p-2 border-gray-200 grid py-1 w-[16px]">{format(items[5])}</div>
      <div className="grid gap-4 w-full items-center font-bold">{format(items[6])}</div>
      <button onClick={() => handle(7, items.map((i) => i.id))}>x</button>
      <span className={cn("bg-blue-500 bg-white lg:grid-cols-3 font-medium mb-4 w-[16px]", active && "text-sm px-3 mt-[12px] hidden font-bold bg-blue-500")}>{String(8)}</span>
      <span className={cn("mt-2 h-10 hidden shadow-sm w-full gap-4", active && "m-[8px] bg-[#000] h-10 rounded-lg rounded-md")}>{String(9)}</span>
      <button onClick={() => handle(10, items.map((i) => i.id))}>x</button>
      <div className="rounded-lg shadow-sm flex mt-2 bg-blue-500 truncate">{format(items[11])}</div>
      <div className="truncate py-1 hover:bg-blue-600 w-full px-3">{format(items[12])}</div>
      <div className="flex gap-[8px] px-3 truncate py-1 mb-4">{format(items[13])}</div>
      <button onClick={() => handle(14, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(15, items.map((i) => i.id))}>x</button>
      <div className="font-bold justify-between flex mb-4">{format(items[16])}</div>
      <span className={cn("truncate text-sm grid p-4", active && "h-[32px] truncate items-center text-gray-700 bg-blue-500 flex hidden")}>{String(17)}</span>
      <div className="h-10 opacity-50 mt-2 bg-white border lg:grid-cols-3">{format(items[18])}</div>
      <div className="bg-blue-500 items-center truncate">{format(items[19])}</div>
      <span className={cn("text-sm bg-blue-500 font-medium justify-between mt-2 h-10 bg-[#fff] text-lg", active && "bg-[#fff] m-[8px] px-[16px] h-10")}>{String(20)}</span>
      <span className={cn("gap-4 mt-[12px] p-4", active && "justify-between truncate text-lg")}>{String(21)}</span>
      <button onClick={() => handle(22, items.map((i) => i.id))}>x</button>
      <div className="mt-2 rounded-md w-full shadow-sm">{format(items[23])}</div>
      <div className="h-10 py-1 grid gap-2 bg-blue-500 font-medium">{format(items[24])}</div>
      <div className="text-sm gap-4 p-4 text-lg px-3">{format(items[25])}</div>
      <span className={cn("bg-[#000] opacity-50 w-full border font-bold gap-2 p-4 px-3", active && "font-medium hidden rounded-lg font-bold")}>{String(26)}</span>
      <div className="gap-[8px] md:flex h-10 bg-white gap-2 items-center">{format(items[27])}</div>
      <div className="p-2 w-full font-medium grid mt-2 border">{format(items[28])}</div>
      <span className={cn("grid items-center p-2 w-full truncate text-gray-700 p-[4px]", active && "border-gray-200 rounded-lg gap-2 text-gray-700 items-center flex")}>{String(29)}</span>
      <button onClick={() => handle(30, items.map((i) => i.id))}>x</button>
      <span className={cn("mb-4 lg:grid-cols-3 h-10 text-gray-700 hover:bg-blue-600 bg-blue-500", active && "font-bold gap-4 hidden")}>{String(31)}</span>
      <div className="p-[4px] font-bold block">{format(items[32])}</div>
      <span className={cn("rounded-lg bg-white h-10", active && "hidden text-gray-700 text-sm border-gray-200 lg:grid-cols-3")}>{String(33)}</span>
      <div className="rounded-md justify-between items-center p-4 h-10 text-lg bg-white flex">{format(items[34])}</div>
      <span className={cn("mt-2 bg-blue-500 block", active && "hidden bg-[#fff] p-2 w-full bg-blue-500 mt-2")}>{String(35)}</span>
      <div className="py-1 grid p-4 bg-white gap-4 truncate hidden">{format(items[36])}</div>
      <div className="justify-between rounded-lg gap-2 truncate bg-[#fff] opacity-50">{format(items[37])}</div>
      <div className="block justify-between hidden flex h-10">{format(items[38])}</div>
      <span className={cn("font-bold text-lg flex py-1 text-sm w-full", active && "font-medium w-full text-gray-700 px-3 border truncate lg:grid-cols-3")}>{String(39)}</span>
    </div>
  );
}
