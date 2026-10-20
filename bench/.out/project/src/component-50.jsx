import { cn } from './cn';

export function Component50({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("p-4 py-1 items-center text-lg gap-4 p-2 text-sm", active && "font-medium hover:bg-blue-600 bg-[#000] opacity-50 text-gray-700 gap-2 flex justify-between")}>{String(0)}</span>
      <button onClick={() => handle(1, items.map((i) => i.id))}>x</button>
      <div className="gap-2 bg-blue-500 py-1 px-3 text-gray-700 font-bold text-lg lg:grid-cols-3">{format(items[2])}</div>
      <div className="py-1 hover:bg-blue-600 border h-10 p-4 px-3 font-bold text-sm">{format(items[3])}</div>
      <button onClick={() => handle(4, items.map((i) => i.id))}>x</button>
      <span className={cn("h-[32px] block truncate", active && "rounded-lg border text-gray-700 font-medium mt-2")}>{String(5)}</span>
      <div className="gap-[8px] bg-white p-2 rounded-md gap-2 bg-blue-500 px-3 mt-[12px]">{format(items[6])}</div>
      <div className="rounded-md border-gray-200 text-sm">{format(items[7])}</div>
      <button onClick={() => handle(8, items.map((i) => i.id))}>x</button>
      <div className="h-10 flex gap-4 p-4">{format(items[9])}</div>
      <div className="grid opacity-50 mt-2 block">{format(items[10])}</div>
      <div className="text-lg grid font-bold truncate gap-2 justify-between">{format(items[11])}</div>
      <div className="rounded-lg bg-white border p-2 items-center">{format(items[12])}</div>
      <div className="h-10 text-gray-700 rounded-md block mt-2 shadow-sm p-2">{format(items[13])}</div>
      <div className="px-[16px] p-4 mt-[12px]">{format(items[14])}</div>
      <div className="h-10 mt-2 flex hidden gap-2">{format(items[15])}</div>
      <span className={cn("rounded-md mb-4 md:flex bg-[#fff]", active && "bg-white md:flex bg-blue-500 px-3 mb-4 justify-between rounded-md truncate")}>{String(16)}</span>
      <div className="p-2 rounded-md truncate p-4 h-10 px-3">{format(items[17])}</div>
      <span className={cn("p-4 font-bold border px-3 truncate mt-2 mb-4 text-sm", active && "text-lg lg:grid-cols-3 h-[32px] py-1 p-4")}>{String(18)}</span>
      <span className={cn("hover:bg-blue-600 opacity-50 bg-[#fff]", active && "p-4 bg-white md:flex font-medium")}>{String(19)}</span>
      <span className={cn("bg-[#fff] shadow-sm rounded-lg bg-white font-medium h-10 items-center h-[32px]", active && "block px-3 bg-[#fff] rounded-[4px] opacity-50 grid")}>{String(20)}</span>
      <div className="gap-2 grid hover:bg-blue-600 mb-4 flex m-[8px]">{format(items[21])}</div>
      <span className={cn("text-sm w-[16px] w-full text-lg lg:grid-cols-3 p-4 hidden gap-2", active && "text-sm items-center bg-[#fff]")}>{String(22)}</span>
      <span className={cn("gap-[8px] rounded-lg hidden lg:grid-cols-3 opacity-50 hover:bg-blue-600", active && "w-[16px] bg-[#fff] flex bg-[#000] p-2 gap-2 lg:grid-cols-3 p-4")}>{String(23)}</span>
      <button onClick={() => handle(24, items.map((i) => i.id))}>x</button>
      <span className={cn("py-1 px-3 grid flex gap-4", active && "border-gray-200 opacity-50 lg:grid-cols-3 flex h-[32px]")}>{String(25)}</span>
      <div className="opacity-50 justify-between mb-4 font-medium font-bold hover:bg-blue-600">{format(items[26])}</div>
      <button onClick={() => handle(27, items.map((i) => i.id))}>x</button>
      <span className={cn("border-gray-200 opacity-50 items-center text-lg rounded-[4px] gap-[8px] lg:grid-cols-3", active && "p-2 text-gray-700 font-bold lg:grid-cols-3 h-[32px]")}>{String(28)}</span>
      <div className="lg:grid-cols-3 bg-blue-500 bg-white">{format(items[29])}</div>
      <div className="p-4 bg-[#000] hover:bg-blue-600 mt-[12px] bg-white">{format(items[30])}</div>
      <button onClick={() => handle(31, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(32, items.map((i) => i.id))}>x</button>
      <span className={cn("flex rounded-lg font-bold p-2 items-center h-[32px]", active && "px-3 flex truncate mt-2")}>{String(33)}</span>
      <button onClick={() => handle(34, items.map((i) => i.id))}>x</button>
      <span className={cn("p-4 font-medium gap-4 p-[4px] items-center opacity-50 grid truncate", active && "lg:grid-cols-3 shadow-sm text-gray-700 w-full gap-4 font-medium")}>{String(35)}</span>
      <div className="border opacity-50 rounded-lg">{format(items[36])}</div>
      <div className="block text-sm truncate w-full bg-[#000] py-1 font-bold">{format(items[37])}</div>
      <div className="border opacity-50 text-sm">{format(items[38])}</div>
      <div className="border-gray-200 text-sm mb-4 text-lg border">{format(items[39])}</div>
    </div>
  );
}
