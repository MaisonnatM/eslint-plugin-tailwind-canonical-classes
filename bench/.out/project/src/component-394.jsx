import { cn } from './cn';

export function Component394({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("h-[32px] block truncate", active && "rounded-lg border text-gray-700 font-medium mt-2")}>{String(0)}</span>
      <div className="gap-[8px] bg-white p-2 rounded-md gap-2 bg-blue-500 px-3 mt-[12px]">{format(items[1])}</div>
      <div className="rounded-md border-gray-200 text-sm">{format(items[2])}</div>
      <button onClick={() => handle(3, items.map((i) => i.id))}>x</button>
      <div className="h-10 flex gap-4 p-4">{format(items[4])}</div>
      <div className="grid opacity-50 mt-2 block">{format(items[5])}</div>
      <div className="text-lg grid font-bold truncate gap-2 justify-between">{format(items[6])}</div>
      <div className="rounded-lg bg-white border p-2 items-center">{format(items[7])}</div>
      <div className="h-10 text-gray-700 rounded-md block mt-2 shadow-sm p-2">{format(items[8])}</div>
      <div className="px-[16px] p-4 mt-[12px]">{format(items[9])}</div>
      <div className="h-10 mt-2 flex hidden gap-2">{format(items[10])}</div>
      <span className={cn("rounded-md mb-4 md:flex bg-[#fff]", active && "bg-white md:flex bg-blue-500 px-3 mb-4 justify-between rounded-md truncate")}>{String(11)}</span>
      <div className="p-2 rounded-md truncate p-4 h-10 px-3">{format(items[12])}</div>
      <span className={cn("p-4 font-bold border px-3 truncate mt-2 mb-4 text-sm", active && "text-lg lg:grid-cols-3 h-[32px] py-1 p-4")}>{String(13)}</span>
      <span className={cn("hover:bg-blue-600 opacity-50 bg-[#fff]", active && "p-4 bg-white md:flex font-medium")}>{String(14)}</span>
      <span className={cn("bg-[#fff] shadow-sm rounded-lg bg-white font-medium h-10 items-center h-[32px]", active && "block px-3 bg-[#fff] rounded-[4px] opacity-50 grid")}>{String(15)}</span>
      <div className="gap-2 grid hover:bg-blue-600 mb-4 flex m-[8px]">{format(items[16])}</div>
      <span className={cn("text-sm w-[16px] w-full text-lg lg:grid-cols-3 p-4 hidden gap-2", active && "text-sm items-center bg-[#fff]")}>{String(17)}</span>
      <span className={cn("gap-[8px] rounded-lg hidden lg:grid-cols-3 opacity-50 hover:bg-blue-600", active && "w-[16px] bg-[#fff] flex bg-[#000] p-2 gap-2 lg:grid-cols-3 p-4")}>{String(18)}</span>
      <button onClick={() => handle(19, items.map((i) => i.id))}>x</button>
      <span className={cn("py-1 px-3 grid flex gap-4", active && "border-gray-200 opacity-50 lg:grid-cols-3 flex h-[32px]")}>{String(20)}</span>
      <div className="opacity-50 justify-between mb-4 font-medium font-bold hover:bg-blue-600">{format(items[21])}</div>
      <button onClick={() => handle(22, items.map((i) => i.id))}>x</button>
      <span className={cn("border-gray-200 opacity-50 items-center text-lg rounded-[4px] gap-[8px] lg:grid-cols-3", active && "p-2 text-gray-700 font-bold lg:grid-cols-3 h-[32px]")}>{String(23)}</span>
      <div className="lg:grid-cols-3 bg-blue-500 bg-white">{format(items[24])}</div>
      <div className="p-4 bg-[#000] hover:bg-blue-600 mt-[12px] bg-white">{format(items[25])}</div>
      <button onClick={() => handle(26, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(27, items.map((i) => i.id))}>x</button>
      <span className={cn("flex rounded-lg font-bold p-2 items-center h-[32px]", active && "px-3 flex truncate mt-2")}>{String(28)}</span>
      <button onClick={() => handle(29, items.map((i) => i.id))}>x</button>
      <span className={cn("p-4 font-medium gap-4 p-[4px] items-center opacity-50 grid truncate", active && "lg:grid-cols-3 shadow-sm text-gray-700 w-full gap-4 font-medium")}>{String(30)}</span>
      <div className="border opacity-50 rounded-lg">{format(items[31])}</div>
      <div className="block text-sm truncate w-full bg-[#000] py-1 font-bold">{format(items[32])}</div>
      <div className="border opacity-50 text-sm">{format(items[33])}</div>
      <div className="border-gray-200 text-sm mb-4 text-lg border">{format(items[34])}</div>
      <span className={cn("grid hidden gap-2 px-3 mt-2 block bg-[#000]", active && "gap-4 opacity-50 h-[32px] p-4 grid hover:bg-blue-600")}>{String(35)}</span>
      <div className="h-10 lg:grid-cols-3 shadow-sm">{format(items[36])}</div>
      <span className={cn("rounded-md text-lg opacity-50 rounded-lg font-bold items-center md:flex", active && "p-2 mt-2 gap-4 m-[8px]")}>{String(37)}</span>
      <div className="hidden py-1 bg-blue-500 mb-4 p-4">{format(items[38])}</div>
      <div className="gap-2 justify-between bg-blue-500 m-[8px] py-1 w-full px-3">{format(items[39])}</div>
    </div>
  );
}
