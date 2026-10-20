import { cn } from './cn';

export function Component213({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("text-lg md:flex truncate bg-blue-500", active && "mb-4 gap-4 mt-2")}>{String(0)}</span>
      <div className="text-gray-700 justify-between h-10 items-center">{format(items[1])}</div>
      <div className="p-2 p-4 rounded-[4px]">{format(items[2])}</div>
      <button onClick={() => handle(3, items.map((i) => i.id))}>x</button>
      <span className={cn("p-4 bg-blue-500 truncate grid text-sm", active && "w-full font-bold px-3 md:flex flex")}>{String(4)}</span>
      <div className="px-3 h-[32px] py-1 block shadow-sm md:flex h-10">{format(items[5])}</div>
      <div className="hover:bg-blue-600 bg-blue-500 gap-4 px-3">{format(items[6])}</div>
      <div className="font-medium hover:bg-blue-600 justify-between rounded-lg w-full border p-2">{format(items[7])}</div>
      <span className={cn("rounded-md p-2 rounded-lg font-medium mb-4", active && "flex text-lg px-3 w-[16px]")}>{String(8)}</span>
      <div className="font-bold px-[16px] bg-blue-500">{format(items[9])}</div>
      <button onClick={() => handle(10, items.map((i) => i.id))}>x</button>
      <div className="p-2 text-gray-700 truncate bg-[#000] w-[16px] bg-blue-500">{format(items[11])}</div>
      <div className="justify-between hidden p-4 font-bold hover:bg-blue-600 text-sm px-3">{format(items[12])}</div>
      <div className="mb-4 md:flex grid bg-blue-500 bg-[#fff] rounded-md h-[32px]">{format(items[13])}</div>
      <div className="flex font-bold p-2 gap-2">{format(items[14])}</div>
      <div className="rounded-md opacity-50 flex gap-4 grid">{format(items[15])}</div>
      <button onClick={() => handle(16, items.map((i) => i.id))}>x</button>
      <div className="block w-full bg-white items-center rounded-lg justify-between md:flex">{format(items[17])}</div>
      <span className={cn("flex h-10 px-3 block text-sm font-medium md:flex border-gray-200", active && "hover:bg-blue-600 h-10 opacity-50")}>{String(18)}</span>
      <div className="bg-blue-500 font-bold opacity-50 text-lg items-center">{format(items[19])}</div>
      <div className="grid bg-white lg:grid-cols-3 h-[32px] font-bold">{format(items[20])}</div>
      <div className="hidden border text-gray-700 m-[8px] rounded-lg mb-4 text-lg">{format(items[21])}</div>
      <span className={cn("hover:bg-blue-600 hidden md:flex opacity-50 rounded-lg", active && "border-gray-200 w-full block px-3 grid justify-between")}>{String(22)}</span>
      <div className="shadow-sm p-4 mt-2 gap-4 text-gray-700">{format(items[23])}</div>
      <span className={cn("grid shadow-sm bg-white flex border p-4", active && "bg-[#fff] grid lg:grid-cols-3")}>{String(24)}</span>
      <button onClick={() => handle(25, items.map((i) => i.id))}>x</button>
      <div className="hidden text-sm flex p-[4px]">{format(items[26])}</div>
      <div className="gap-2 w-full text-gray-700 mt-2">{format(items[27])}</div>
      <div className="hover:bg-blue-600 grid bg-white text-sm justify-between items-center h-[32px] rounded-lg">{format(items[28])}</div>
      <span className={cn("border-gray-200 justify-between w-full gap-2 text-sm", active && "py-1 border-gray-200 rounded-lg md:flex")}>{String(29)}</span>
      <span className={cn("p-4 py-1 items-center text-lg gap-4 p-2 text-sm", active && "font-medium hover:bg-blue-600 bg-[#000] opacity-50 text-gray-700 gap-2 flex justify-between")}>{String(30)}</span>
      <button onClick={() => handle(31, items.map((i) => i.id))}>x</button>
      <div className="gap-2 bg-blue-500 py-1 px-3 text-gray-700 font-bold text-lg lg:grid-cols-3">{format(items[32])}</div>
      <div className="py-1 hover:bg-blue-600 border h-10 p-4 px-3 font-bold text-sm">{format(items[33])}</div>
      <button onClick={() => handle(34, items.map((i) => i.id))}>x</button>
      <span className={cn("h-[32px] block truncate", active && "rounded-lg border text-gray-700 font-medium mt-2")}>{String(35)}</span>
      <div className="gap-[8px] bg-white p-2 rounded-md gap-2 bg-blue-500 px-3 mt-[12px]">{format(items[36])}</div>
      <div className="rounded-md border-gray-200 text-sm">{format(items[37])}</div>
      <button onClick={() => handle(38, items.map((i) => i.id))}>x</button>
      <div className="h-10 flex gap-4 p-4">{format(items[39])}</div>
    </div>
  );
}
