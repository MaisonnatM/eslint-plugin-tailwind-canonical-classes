import { cn } from './cn';

export function Component1({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("w-full h-10 bg-[#fff]", active && "p-4 border truncate bg-white font-medium border-gray-200 hidden")}>{String(0)}</span>
      <span className={cn("gap-4 h-10 text-sm flex", active && "hidden bg-white flex opacity-50 bg-[#000]")}>{String(1)}</span>
      <div className="border lg:grid-cols-3 grid truncate hidden">{format(items[2])}</div>
      <span className={cn("truncate p-4 bg-[#000] lg:grid-cols-3", active && "justify-between md:flex border-gray-200")}>{String(3)}</span>
      <span className={cn("justify-between truncate font-medium w-full opacity-50 block", active && "hidden md:flex hover:bg-blue-600 gap-4 lg:grid-cols-3 gap-2 p-[4px]")}>{String(4)}</span>
      <div className="items-center p-[4px] h-10 h-[32px]">{format(items[5])}</div>
      <div className="p-2 gap-2 truncate">{format(items[6])}</div>
      <div className="block justify-between mt-[12px] truncate text-gray-700">{format(items[7])}</div>
      <div className="px-3 grid bg-white font-medium">{format(items[8])}</div>
      <div className="bg-[#fff] px-[16px] px-3 block h-10">{format(items[9])}</div>
      <div className="mt-[12px] gap-2 bg-[#000] lg:grid-cols-3 justify-between hidden">{format(items[10])}</div>
      <span className={cn("hover:bg-blue-600 truncate md:flex py-1 gap-2", active && "p-4 shadow-sm block border h-[32px] grid mt-[12px] p-[4px]")}>{String(11)}</span>
      <div className="font-bold rounded-md text-lg gap-4 opacity-50 p-4 grid">{format(items[12])}</div>
      <span className={cn("font-medium rounded-[4px] mt-2 opacity-50", active && "h-10 h-[32px] bg-[#fff] m-[8px] opacity-50 bg-[#000] font-bold")}>{String(13)}</span>
      <span className={cn("px-3 hidden grid gap-2 font-bold w-full rounded-lg", active && "rounded-md opacity-50 w-full py-1 block justify-between text-gray-700 items-center")}>{String(14)}</span>
      <span className={cn("px-3 shadow-sm mb-4 border rounded-[4px]", active && "gap-4 items-center w-full rounded-lg bg-blue-500 p-[4px]")}>{String(15)}</span>
      <div className="border-gray-200 text-sm rounded-lg rounded-md p-[4px] px-3 block">{format(items[16])}</div>
      <div className="gap-2 flex text-gray-700 hover:bg-blue-600 gap-4 font-medium">{format(items[17])}</div>
      <div className="hover:bg-blue-600 border-gray-200 px-3 lg:grid-cols-3 gap-2 block shadow-sm w-full">{format(items[18])}</div>
      <button onClick={() => handle(19, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 h-10 gap-2 mt-[12px] flex">{format(items[20])}</div>
      <div className="grid px-3 truncate justify-between hover:bg-blue-600 p-4">{format(items[21])}</div>
      <button onClick={() => handle(22, items.map((i) => i.id))}>x</button>
      <span className={cn("justify-between grid w-full bg-blue-500 rounded-md text-gray-700 truncate h-10", active && "w-full px-[16px] gap-2 truncate w-[16px] text-sm mb-4 rounded-md")}>{String(23)}</span>
      <span className={cn("bg-[#000] h-10 bg-white", active && "h-[32px] text-sm items-center rounded-md")}>{String(24)}</span>
      <button onClick={() => handle(25, items.map((i) => i.id))}>x</button>
      <span className={cn("font-bold font-medium text-gray-700 gap-2 p-2", active && "bg-[#fff] rounded-[4px] p-2 mt-2")}>{String(26)}</span>
      <div className="bg-blue-500 border-gray-200 gap-2">{format(items[27])}</div>
      <div className="lg:grid-cols-3 mb-4 rounded-md">{format(items[28])}</div>
      <div className="bg-[#fff] gap-4 opacity-50 w-full gap-2 font-medium">{format(items[29])}</div>
      <div className="py-1 rounded-lg w-full hidden px-3 p-[4px]">{format(items[30])}</div>
      <span className={cn("gap-4 hidden rounded-md bg-white px-3 justify-between gap-2 block", active && "rounded-lg h-10 h-[32px] truncate justify-between rounded-md hover:bg-blue-600")}>{String(31)}</span>
      <div className="mb-4 rounded-md py-1">{format(items[32])}</div>
      <div className="py-1 truncate gap-4 border md:flex font-bold justify-between rounded-[4px]">{format(items[33])}</div>
      <div className="mt-2 mt-[12px] w-[16px] mb-4 block border">{format(items[34])}</div>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <div className="flex text-sm text-lg p-[4px] py-1 grid h-10">{format(items[36])}</div>
      <div className="shadow-sm mb-4 hover:bg-blue-600 text-sm truncate bg-blue-500 py-1 border">{format(items[37])}</div>
      <div className="block hidden rounded-[4px] gap-2 font-bold p-2">{format(items[38])}</div>
      <button onClick={() => handle(39, items.map((i) => i.id))}>x</button>
    </div>
  );
}
