import { cn } from './cn';

export function Component148({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="grid bg-white lg:grid-cols-3 h-[32px] font-bold">{format(items[0])}</div>
      <div className="hidden border text-gray-700 m-[8px] rounded-lg mb-4 text-lg">{format(items[1])}</div>
      <span className={cn("hover:bg-blue-600 hidden md:flex opacity-50 rounded-lg", active && "border-gray-200 w-full block px-3 grid justify-between")}>{String(2)}</span>
      <div className="shadow-sm p-4 mt-2 gap-4 text-gray-700">{format(items[3])}</div>
      <span className={cn("grid shadow-sm bg-white flex border p-4", active && "bg-[#fff] grid lg:grid-cols-3")}>{String(4)}</span>
      <button onClick={() => handle(5, items.map((i) => i.id))}>x</button>
      <div className="hidden text-sm flex p-[4px]">{format(items[6])}</div>
      <div className="gap-2 w-full text-gray-700 mt-2">{format(items[7])}</div>
      <div className="hover:bg-blue-600 grid bg-white text-sm justify-between items-center h-[32px] rounded-lg">{format(items[8])}</div>
      <span className={cn("border-gray-200 justify-between w-full gap-2 text-sm", active && "py-1 border-gray-200 rounded-lg md:flex")}>{String(9)}</span>
      <span className={cn("p-4 py-1 items-center text-lg gap-4 p-2 text-sm", active && "font-medium hover:bg-blue-600 bg-[#000] opacity-50 text-gray-700 gap-2 flex justify-between")}>{String(10)}</span>
      <button onClick={() => handle(11, items.map((i) => i.id))}>x</button>
      <div className="gap-2 bg-blue-500 py-1 px-3 text-gray-700 font-bold text-lg lg:grid-cols-3">{format(items[12])}</div>
      <div className="py-1 hover:bg-blue-600 border h-10 p-4 px-3 font-bold text-sm">{format(items[13])}</div>
      <button onClick={() => handle(14, items.map((i) => i.id))}>x</button>
      <span className={cn("h-[32px] block truncate", active && "rounded-lg border text-gray-700 font-medium mt-2")}>{String(15)}</span>
      <div className="gap-[8px] bg-white p-2 rounded-md gap-2 bg-blue-500 px-3 mt-[12px]">{format(items[16])}</div>
      <div className="rounded-md border-gray-200 text-sm">{format(items[17])}</div>
      <button onClick={() => handle(18, items.map((i) => i.id))}>x</button>
      <div className="h-10 flex gap-4 p-4">{format(items[19])}</div>
      <div className="grid opacity-50 mt-2 block">{format(items[20])}</div>
      <div className="text-lg grid font-bold truncate gap-2 justify-between">{format(items[21])}</div>
      <div className="rounded-lg bg-white border p-2 items-center">{format(items[22])}</div>
      <div className="h-10 text-gray-700 rounded-md block mt-2 shadow-sm p-2">{format(items[23])}</div>
      <div className="px-[16px] p-4 mt-[12px]">{format(items[24])}</div>
      <div className="h-10 mt-2 flex hidden gap-2">{format(items[25])}</div>
      <span className={cn("rounded-md mb-4 md:flex bg-[#fff]", active && "bg-white md:flex bg-blue-500 px-3 mb-4 justify-between rounded-md truncate")}>{String(26)}</span>
      <div className="p-2 rounded-md truncate p-4 h-10 px-3">{format(items[27])}</div>
      <span className={cn("p-4 font-bold border px-3 truncate mt-2 mb-4 text-sm", active && "text-lg lg:grid-cols-3 h-[32px] py-1 p-4")}>{String(28)}</span>
      <span className={cn("hover:bg-blue-600 opacity-50 bg-[#fff]", active && "p-4 bg-white md:flex font-medium")}>{String(29)}</span>
      <span className={cn("bg-[#fff] shadow-sm rounded-lg bg-white font-medium h-10 items-center h-[32px]", active && "block px-3 bg-[#fff] rounded-[4px] opacity-50 grid")}>{String(30)}</span>
      <div className="gap-2 grid hover:bg-blue-600 mb-4 flex m-[8px]">{format(items[31])}</div>
      <span className={cn("text-sm w-[16px] w-full text-lg lg:grid-cols-3 p-4 hidden gap-2", active && "text-sm items-center bg-[#fff]")}>{String(32)}</span>
      <span className={cn("gap-[8px] rounded-lg hidden lg:grid-cols-3 opacity-50 hover:bg-blue-600", active && "w-[16px] bg-[#fff] flex bg-[#000] p-2 gap-2 lg:grid-cols-3 p-4")}>{String(33)}</span>
      <button onClick={() => handle(34, items.map((i) => i.id))}>x</button>
      <span className={cn("py-1 px-3 grid flex gap-4", active && "border-gray-200 opacity-50 lg:grid-cols-3 flex h-[32px]")}>{String(35)}</span>
      <div className="opacity-50 justify-between mb-4 font-medium font-bold hover:bg-blue-600">{format(items[36])}</div>
      <button onClick={() => handle(37, items.map((i) => i.id))}>x</button>
      <span className={cn("border-gray-200 opacity-50 items-center text-lg rounded-[4px] gap-[8px] lg:grid-cols-3", active && "p-2 text-gray-700 font-bold lg:grid-cols-3 h-[32px]")}>{String(38)}</span>
      <div className="lg:grid-cols-3 bg-blue-500 bg-white">{format(items[39])}</div>
    </div>
  );
}
