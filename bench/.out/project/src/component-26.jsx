import { cn } from './cn';

export function Component26({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("font-bold text-gray-700 shadow-sm grid", active && "md:flex border px-[16px] opacity-50 bg-white rounded-md")}>{String(0)}</span>
      <div className="rounded-md text-sm hidden lg:grid-cols-3 text-gray-700 rounded-[4px]">{format(items[1])}</div>
      <span className={cn("font-bold px-[16px] gap-4", active && "gap-4 h-10 shadow-sm mb-4 mt-2 p-2 text-gray-700 bg-[#fff]")}>{String(2)}</span>
      <div className="border-gray-200 font-medium gap-2">{format(items[3])}</div>
      <span className={cn("px-[16px] p-4 opacity-50 grid", active && "grid lg:grid-cols-3 mt-[12px] md:flex text-sm border")}>{String(4)}</span>
      <span className={cn("text-sm border bg-blue-500", active && "h-10 text-lg mt-[12px] bg-blue-500 hover:bg-blue-600")}>{String(5)}</span>
      <div className="grid font-medium py-1 truncate flex rounded-lg">{format(items[6])}</div>
      <div className="text-gray-700 hidden opacity-50">{format(items[7])}</div>
      <span className={cn("text-lg gap-2 mb-4 grid rounded-md", active && "lg:grid-cols-3 p-2 border h-10 border-gray-200 font-medium p-[4px]")}>{String(8)}</span>
      <div className="rounded-md py-1 opacity-50 hidden mt-2 p-2">{format(items[9])}</div>
      <div className="block truncate rounded-lg">{format(items[10])}</div>
      <div className="lg:grid-cols-3 items-center text-lg mb-4 text-sm px-3 hidden flex">{format(items[11])}</div>
      <span className={cn("w-[16px] opacity-50 font-medium", active && "mb-4 justify-between text-gray-700 rounded-md hover:bg-blue-600")}>{String(12)}</span>
      <div className="py-1 opacity-50 font-bold">{format(items[13])}</div>
      <div className="block items-center rounded-lg justify-between w-full truncate mb-4">{format(items[14])}</div>
      <button onClick={() => handle(15, items.map((i) => i.id))}>x</button>
      <div className="gap-4 py-1 h-[32px] w-[16px] hover:bg-blue-600 border-gray-200">{format(items[16])}</div>
      <div className="bg-blue-500 hover:bg-blue-600 bg-white flex text-sm text-lg">{format(items[17])}</div>
      <div className="lg:grid-cols-3 px-3 gap-2 border">{format(items[18])}</div>
      <div className="text-gray-700 text-lg px-[16px]">{format(items[19])}</div>
      <div className="border bg-[#000] gap-2 hover:bg-blue-600 p-4">{format(items[20])}</div>
      <button onClick={() => handle(21, items.map((i) => i.id))}>x</button>
      <span className={cn("border rounded-md flex p-4 font-medium w-full", active && "px-3 bg-white hidden rounded-lg items-center gap-2 lg:grid-cols-3 gap-4")}>{String(22)}</span>
      <div className="truncate border-gray-200 w-full rounded-md">{format(items[23])}</div>
      <div className="lg:grid-cols-3 h-10 bg-blue-500 text-sm">{format(items[24])}</div>
      <span className={cn("mb-4 py-1 border-gray-200 bg-[#000] font-medium gap-4 items-center", active && "border-gray-200 items-center block h-10 shadow-sm w-full")}>{String(25)}</span>
      <div className="py-1 bg-white mt-2 truncate">{format(items[26])}</div>
      <div className="bg-white border border-gray-200">{format(items[27])}</div>
      <div className="items-center mt-2 px-3 font-medium md:flex rounded-lg mb-4">{format(items[28])}</div>
      <div className="bg-[#fff] bg-white border-gray-200 justify-between text-sm">{format(items[29])}</div>
      <span className={cn("shadow-sm text-sm border-gray-200 rounded-lg", active && "text-lg w-full border p-[4px] bg-blue-500 font-medium")}>{String(30)}</span>
      <span className={cn("font-medium flex hover:bg-blue-600 rounded-md", active && "py-1 text-lg mb-4 rounded-md")}>{String(31)}</span>
      <span className={cn("opacity-50 text-sm truncate bg-white rounded-[4px] block font-bold shadow-sm", active && "text-gray-700 px-3 truncate")}>{String(32)}</span>
      <span className={cn("font-bold border-gray-200 opacity-50 justify-between hover:bg-blue-600", active && "items-center rounded-md w-full text-lg rounded-[4px] h-10 py-1")}>{String(33)}</span>
      <div className="px-[16px] font-medium shadow-sm">{format(items[34])}</div>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 justify-between bg-blue-500 truncate font-bold mb-4">{format(items[36])}</div>
      <span className={cn("grid font-medium lg:grid-cols-3 p-4 items-center gap-2", active && "font-bold hidden bg-blue-500 p-2 mt-[12px] border")}>{String(37)}</span>
      <div className="px-3 rounded-md text-sm bg-white opacity-50 px-[16px] text-lg">{format(items[38])}</div>
      <div className="px-[16px] px-3 bg-[#000] font-medium border-gray-200">{format(items[39])}</div>
    </div>
  );
}
