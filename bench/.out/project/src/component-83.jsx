import { cn } from './cn';

export function Component83({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="grid opacity-50 mt-2 block">{format(items[0])}</div>
      <div className="text-lg grid font-bold truncate gap-2 justify-between">{format(items[1])}</div>
      <div className="rounded-lg bg-white border p-2 items-center">{format(items[2])}</div>
      <div className="h-10 text-gray-700 rounded-md block mt-2 shadow-sm p-2">{format(items[3])}</div>
      <div className="px-[16px] p-4 mt-[12px]">{format(items[4])}</div>
      <div className="h-10 mt-2 flex hidden gap-2">{format(items[5])}</div>
      <span className={cn("rounded-md mb-4 md:flex bg-[#fff]", active && "bg-white md:flex bg-blue-500 px-3 mb-4 justify-between rounded-md truncate")}>{String(6)}</span>
      <div className="p-2 rounded-md truncate p-4 h-10 px-3">{format(items[7])}</div>
      <span className={cn("p-4 font-bold border px-3 truncate mt-2 mb-4 text-sm", active && "text-lg lg:grid-cols-3 h-[32px] py-1 p-4")}>{String(8)}</span>
      <span className={cn("hover:bg-blue-600 opacity-50 bg-[#fff]", active && "p-4 bg-white md:flex font-medium")}>{String(9)}</span>
      <span className={cn("bg-[#fff] shadow-sm rounded-lg bg-white font-medium h-10 items-center h-[32px]", active && "block px-3 bg-[#fff] rounded-[4px] opacity-50 grid")}>{String(10)}</span>
      <div className="gap-2 grid hover:bg-blue-600 mb-4 flex m-[8px]">{format(items[11])}</div>
      <span className={cn("text-sm w-[16px] w-full text-lg lg:grid-cols-3 p-4 hidden gap-2", active && "text-sm items-center bg-[#fff]")}>{String(12)}</span>
      <span className={cn("gap-[8px] rounded-lg hidden lg:grid-cols-3 opacity-50 hover:bg-blue-600", active && "w-[16px] bg-[#fff] flex bg-[#000] p-2 gap-2 lg:grid-cols-3 p-4")}>{String(13)}</span>
      <button onClick={() => handle(14, items.map((i) => i.id))}>x</button>
      <span className={cn("py-1 px-3 grid flex gap-4", active && "border-gray-200 opacity-50 lg:grid-cols-3 flex h-[32px]")}>{String(15)}</span>
      <div className="opacity-50 justify-between mb-4 font-medium font-bold hover:bg-blue-600">{format(items[16])}</div>
      <button onClick={() => handle(17, items.map((i) => i.id))}>x</button>
      <span className={cn("border-gray-200 opacity-50 items-center text-lg rounded-[4px] gap-[8px] lg:grid-cols-3", active && "p-2 text-gray-700 font-bold lg:grid-cols-3 h-[32px]")}>{String(18)}</span>
      <div className="lg:grid-cols-3 bg-blue-500 bg-white">{format(items[19])}</div>
      <div className="p-4 bg-[#000] hover:bg-blue-600 mt-[12px] bg-white">{format(items[20])}</div>
      <button onClick={() => handle(21, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(22, items.map((i) => i.id))}>x</button>
      <span className={cn("flex rounded-lg font-bold p-2 items-center h-[32px]", active && "px-3 flex truncate mt-2")}>{String(23)}</span>
      <button onClick={() => handle(24, items.map((i) => i.id))}>x</button>
      <span className={cn("p-4 font-medium gap-4 p-[4px] items-center opacity-50 grid truncate", active && "lg:grid-cols-3 shadow-sm text-gray-700 w-full gap-4 font-medium")}>{String(25)}</span>
      <div className="border opacity-50 rounded-lg">{format(items[26])}</div>
      <div className="block text-sm truncate w-full bg-[#000] py-1 font-bold">{format(items[27])}</div>
      <div className="border opacity-50 text-sm">{format(items[28])}</div>
      <div className="border-gray-200 text-sm mb-4 text-lg border">{format(items[29])}</div>
      <span className={cn("grid hidden gap-2 px-3 mt-2 block bg-[#000]", active && "gap-4 opacity-50 h-[32px] p-4 grid hover:bg-blue-600")}>{String(30)}</span>
      <div className="h-10 lg:grid-cols-3 shadow-sm">{format(items[31])}</div>
      <span className={cn("rounded-md text-lg opacity-50 rounded-lg font-bold items-center md:flex", active && "p-2 mt-2 gap-4 m-[8px]")}>{String(32)}</span>
      <div className="hidden py-1 bg-blue-500 mb-4 p-4">{format(items[33])}</div>
      <div className="gap-2 justify-between bg-blue-500 m-[8px] py-1 w-full px-3">{format(items[34])}</div>
      <div className="justify-between px-3 p-4 gap-2 hover:bg-blue-600 hidden">{format(items[35])}</div>
      <div className="opacity-50 hover:bg-blue-600 p-2 grid mt-2 rounded-md items-center rounded-[4px]">{format(items[36])}</div>
      <span className={cn("w-full flex items-center shadow-sm gap-2 bg-white", active && "rounded-lg mb-4 items-center text-sm w-full md:flex rounded-md mt-[12px]")}>{String(37)}</span>
      <span className={cn("hidden gap-4 hover:bg-blue-600 mt-2 w-full lg:grid-cols-3 mt-[12px] rounded-md", active && "rounded-[4px] text-lg p-2 border-gray-200 lg:grid-cols-3 md:flex h-10")}>{String(38)}</span>
      <div className="opacity-50 mb-4 block h-10 hover:bg-blue-600">{format(items[39])}</div>
    </div>
  );
}
