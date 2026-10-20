import { cn } from './cn';

export function Component5({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("p-2 text-lg opacity-50", active && "shadow-sm bg-white mt-2")}>{String(0)}</span>
      <span className={cn("rounded-lg font-bold h-10", active && "justify-between border-gray-200 gap-4 font-bold")}>{String(1)}</span>
      <div className="md:flex text-gray-700 py-1 font-bold mb-4">{format(items[2])}</div>
      <div className="text-lg py-1 bg-white border-gray-200 px-3 md:flex block">{format(items[3])}</div>
      <span className={cn("block mt-2 lg:grid-cols-3 hover:bg-blue-600 items-center h-10", active && "gap-4 shadow-sm rounded-lg text-gray-700")}>{String(4)}</span>
      <div className="p-4 font-medium grid shadow-sm text-sm lg:grid-cols-3">{format(items[5])}</div>
      <div className="rounded-md hidden w-full border-gray-200">{format(items[6])}</div>
      <span className={cn("border truncate grid md:flex font-bold", active && "hidden h-10 gap-4 hover:bg-blue-600")}>{String(7)}</span>
      <div className="font-medium border gap-[8px] p-2 py-1 h-10">{format(items[8])}</div>
      <span className={cn("hidden gap-2 border-gray-200 border shadow-sm", active && "md:flex truncate text-lg")}>{String(9)}</span>
      <span className={cn("rounded-md mb-4 gap-[8px] p-2 hidden", active && "justify-between border opacity-50 md:flex font-medium w-full")}>{String(10)}</span>
      <span className={cn("mt-2 border truncate text-gray-700 w-full", active && "rounded-md p-[4px] text-lg")}>{String(11)}</span>
      <span className={cn("h-10 rounded-lg font-medium text-sm p-4", active && "bg-white opacity-50 truncate text-gray-700")}>{String(12)}</span>
      <span className={cn("border-gray-200 opacity-50 bg-white truncate hover:bg-blue-600", active && "items-center justify-between h-10 opacity-50 font-bold font-medium md:flex text-lg")}>{String(13)}</span>
      <span className={cn("grid bg-blue-500 font-medium lg:grid-cols-3 flex bg-[#fff]", active && "items-center gap-4 opacity-50 mb-4 rounded-lg border-gray-200")}>{String(14)}</span>
      <div className="gap-4 mt-2 w-full flex block rounded-lg text-sm">{format(items[15])}</div>
      <button onClick={() => handle(16, items.map((i) => i.id))}>x</button>
      <div className="shadow-sm border py-1 w-full grid m-[8px] text-sm p-4">{format(items[17])}</div>
      <button onClick={() => handle(18, items.map((i) => i.id))}>x</button>
      <div className="w-full rounded-md rounded-lg h-10 border-gray-200 md:flex bg-[#000] grid">{format(items[19])}</div>
      <div className="p-4 bg-blue-500 truncate opacity-50 rounded-md mt-2 border-gray-200">{format(items[20])}</div>
      <div className="m-[8px] py-1 px-3 text-sm gap-[8px] lg:grid-cols-3 h-10">{format(items[21])}</div>
      <div className="rounded-md justify-between bg-white w-full rounded-lg md:flex">{format(items[22])}</div>
      <button onClick={() => handle(23, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(24, items.map((i) => i.id))}>x</button>
      <div className="hidden justify-between p-4">{format(items[25])}</div>
      <div className="mt-2 bg-white py-1 truncate px-3 border-gray-200">{format(items[26])}</div>
      <div className="lg:grid-cols-3 bg-white border-gray-200 text-gray-700 rounded-[4px] opacity-50 p-4 p-2">{format(items[27])}</div>
      <div className="gap-4 m-[8px] items-center bg-blue-500 text-lg flex hidden p-2">{format(items[28])}</div>
      <span className={cn("p-4 p-2 border", active && "bg-[#000] rounded-lg h-10 font-medium bg-blue-500 grid h-[32px] py-1")}>{String(29)}</span>
      <span className={cn("rounded-[4px] text-gray-700 h-10 gap-4 bg-white justify-between grid", active && "text-sm rounded-[4px] gap-2 grid shadow-sm px-[16px] items-center")}>{String(30)}</span>
      <div className="gap-4 py-1 border-gray-200 opacity-50 rounded-lg gap-2">{format(items[31])}</div>
      <div className="p-4 p-2 items-center text-sm hidden text-lg rounded-[4px]">{format(items[32])}</div>
      <div className="gap-4 text-sm py-1 mb-4 md:flex border grid h-[32px]">{format(items[33])}</div>
      <span className={cn("grid px-3 px-[16px] flex md:flex bg-[#000]", active && "py-1 bg-blue-500 shadow-sm text-sm bg-white md:flex")}>{String(34)}</span>
      <span className={cn("p-[4px] mt-2 font-bold lg:grid-cols-3", active && "p-4 rounded-md h-[32px] shadow-sm")}>{String(35)}</span>
      <div className="lg:grid-cols-3 gap-4 font-medium h-10 truncate px-3">{format(items[36])}</div>
      <button onClick={() => handle(37, items.map((i) => i.id))}>x</button>
      <span className={cn("truncate grid justify-between w-full", active && "p-4 rounded-lg px-3 lg:grid-cols-3 hidden bg-white")}>{String(38)}</span>
      <div className="truncate bg-white mb-4">{format(items[39])}</div>
    </div>
  );
}
