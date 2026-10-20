import { cn } from './cn';

export function Component33({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="px-3 h-[32px] py-1 block shadow-sm md:flex h-10">{format(items[0])}</div>
      <div className="hover:bg-blue-600 bg-blue-500 gap-4 px-3">{format(items[1])}</div>
      <div className="font-medium hover:bg-blue-600 justify-between rounded-lg w-full border p-2">{format(items[2])}</div>
      <span className={cn("rounded-md p-2 rounded-lg font-medium mb-4", active && "flex text-lg px-3 w-[16px]")}>{String(3)}</span>
      <div className="font-bold px-[16px] bg-blue-500">{format(items[4])}</div>
      <button onClick={() => handle(5, items.map((i) => i.id))}>x</button>
      <div className="p-2 text-gray-700 truncate bg-[#000] w-[16px] bg-blue-500">{format(items[6])}</div>
      <div className="justify-between hidden p-4 font-bold hover:bg-blue-600 text-sm px-3">{format(items[7])}</div>
      <div className="mb-4 md:flex grid bg-blue-500 bg-[#fff] rounded-md h-[32px]">{format(items[8])}</div>
      <div className="flex font-bold p-2 gap-2">{format(items[9])}</div>
      <div className="rounded-md opacity-50 flex gap-4 grid">{format(items[10])}</div>
      <button onClick={() => handle(11, items.map((i) => i.id))}>x</button>
      <div className="block w-full bg-white items-center rounded-lg justify-between md:flex">{format(items[12])}</div>
      <span className={cn("flex h-10 px-3 block text-sm font-medium md:flex border-gray-200", active && "hover:bg-blue-600 h-10 opacity-50")}>{String(13)}</span>
      <div className="bg-blue-500 font-bold opacity-50 text-lg items-center">{format(items[14])}</div>
      <div className="grid bg-white lg:grid-cols-3 h-[32px] font-bold">{format(items[15])}</div>
      <div className="hidden border text-gray-700 m-[8px] rounded-lg mb-4 text-lg">{format(items[16])}</div>
      <span className={cn("hover:bg-blue-600 hidden md:flex opacity-50 rounded-lg", active && "border-gray-200 w-full block px-3 grid justify-between")}>{String(17)}</span>
      <div className="shadow-sm p-4 mt-2 gap-4 text-gray-700">{format(items[18])}</div>
      <span className={cn("grid shadow-sm bg-white flex border p-4", active && "bg-[#fff] grid lg:grid-cols-3")}>{String(19)}</span>
      <button onClick={() => handle(20, items.map((i) => i.id))}>x</button>
      <div className="hidden text-sm flex p-[4px]">{format(items[21])}</div>
      <div className="gap-2 w-full text-gray-700 mt-2">{format(items[22])}</div>
      <div className="hover:bg-blue-600 grid bg-white text-sm justify-between items-center h-[32px] rounded-lg">{format(items[23])}</div>
      <span className={cn("border-gray-200 justify-between w-full gap-2 text-sm", active && "py-1 border-gray-200 rounded-lg md:flex")}>{String(24)}</span>
      <span className={cn("p-4 py-1 items-center text-lg gap-4 p-2 text-sm", active && "font-medium hover:bg-blue-600 bg-[#000] opacity-50 text-gray-700 gap-2 flex justify-between")}>{String(25)}</span>
      <button onClick={() => handle(26, items.map((i) => i.id))}>x</button>
      <div className="gap-2 bg-blue-500 py-1 px-3 text-gray-700 font-bold text-lg lg:grid-cols-3">{format(items[27])}</div>
      <div className="py-1 hover:bg-blue-600 border h-10 p-4 px-3 font-bold text-sm">{format(items[28])}</div>
      <button onClick={() => handle(29, items.map((i) => i.id))}>x</button>
      <span className={cn("h-[32px] block truncate", active && "rounded-lg border text-gray-700 font-medium mt-2")}>{String(30)}</span>
      <div className="gap-[8px] bg-white p-2 rounded-md gap-2 bg-blue-500 px-3 mt-[12px]">{format(items[31])}</div>
      <div className="rounded-md border-gray-200 text-sm">{format(items[32])}</div>
      <button onClick={() => handle(33, items.map((i) => i.id))}>x</button>
      <div className="h-10 flex gap-4 p-4">{format(items[34])}</div>
      <div className="grid opacity-50 mt-2 block">{format(items[35])}</div>
      <div className="text-lg grid font-bold truncate gap-2 justify-between">{format(items[36])}</div>
      <div className="rounded-lg bg-white border p-2 items-center">{format(items[37])}</div>
      <div className="h-10 text-gray-700 rounded-md block mt-2 shadow-sm p-2">{format(items[38])}</div>
      <div className="px-[16px] p-4 mt-[12px]">{format(items[39])}</div>
    </div>
  );
}
