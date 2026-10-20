import { cn } from './cn';

export function Component155({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("h-[32px] rounded-lg w-full font-bold gap-4 text-sm md:flex block", active && "font-bold px-3 rounded-lg border-gray-200 rounded-md hidden")}>{String(0)}</span>
      <div className="rounded-lg border-gray-200 grid">{format(items[1])}</div>
      <div className="border-gray-200 px-[16px] font-bold">{format(items[2])}</div>
      <span className={cn("text-gray-700 rounded-md px-3 h-10 p-2 items-center", active && "bg-blue-500 truncate gap-2 text-lg gap-4 md:flex justify-between font-medium")}>{String(3)}</span>
      <div className="p-4 opacity-50 border truncate bg-white hover:bg-blue-600 gap-2">{format(items[4])}</div>
      <div className="mt-2 h-[32px] bg-blue-500 h-10">{format(items[5])}</div>
      <div className="rounded-md grid p-[4px] truncate font-bold mt-2 p-4 text-sm">{format(items[6])}</div>
      <button onClick={() => handle(7, items.map((i) => i.id))}>x</button>
      <div className="lg:grid-cols-3 bg-[#fff] block">{format(items[8])}</div>
      <div className="bg-[#fff] text-gray-700 p-2 truncate">{format(items[9])}</div>
      <button onClick={() => handle(10, items.map((i) => i.id))}>x</button>
      <div className="gap-4 text-lg bg-white truncate md:flex text-sm gap-2 px-[16px]">{format(items[11])}</div>
      <div className="text-sm grid m-[8px] bg-white">{format(items[12])}</div>
      <div className="bg-blue-500 text-gray-700 justify-between font-bold text-sm">{format(items[13])}</div>
      <span className={cn("text-gray-700 px-3 truncate", active && "w-full px-3 py-1 bg-blue-500 border border-gray-200 hidden bg-[#000]")}>{String(14)}</span>
      <span className={cn("justify-between p-[4px] font-bold m-[8px] gap-2 font-medium border-gray-200 gap-[8px]", active && "block rounded-md md:flex hidden p-4 border rounded-lg px-3")}>{String(15)}</span>
      <button onClick={() => handle(16, items.map((i) => i.id))}>x</button>
      <div className="flex gap-2 p-2 bg-[#000] md:flex lg:grid-cols-3 rounded-[4px]">{format(items[17])}</div>
      <div className="truncate opacity-50 justify-between p-[4px]">{format(items[18])}</div>
      <div className="items-center lg:grid-cols-3 block">{format(items[19])}</div>
      <div className="truncate gap-[8px] p-2 m-[8px]">{format(items[20])}</div>
      <div className="p-4 w-full flex text-sm p-[4px]">{format(items[21])}</div>
      <div className="p-2 m-[8px] rounded-[4px] hover:bg-blue-600 opacity-50 gap-4 truncate border">{format(items[22])}</div>
      <button onClick={() => handle(23, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 truncate py-1 rounded-lg border-gray-200 text-gray-700 gap-2 h-10">{format(items[24])}</div>
      <button onClick={() => handle(25, items.map((i) => i.id))}>x</button>
      <div className="border-gray-200 text-lg px-[16px] flex px-3">{format(items[26])}</div>
      <span className={cn("items-center p-2 grid text-sm h-10 flex bg-blue-500", active && "text-sm bg-blue-500 flex")}>{String(27)}</span>
      <button onClick={() => handle(28, items.map((i) => i.id))}>x</button>
      <div className="text-sm p-2 justify-between flex font-bold">{format(items[29])}</div>
      <div className="mt-2 bg-blue-500 h-10 rounded-md md:flex h-[32px]">{format(items[30])}</div>
      <div className="h-10 items-center truncate md:flex p-2 shadow-sm">{format(items[31])}</div>
      <div className="lg:grid-cols-3 rounded-md opacity-50 truncate block px-3 border">{format(items[32])}</div>
      <div className="w-full gap-4 md:flex bg-blue-500 block hover:bg-blue-600 opacity-50 rounded-lg">{format(items[33])}</div>
      <span className={cn("bg-blue-500 flex hover:bg-blue-600 items-center truncate grid", active && "hover:bg-blue-600 items-center font-bold flex w-full border")}>{String(34)}</span>
      <div className="mt-[12px] border py-1 text-gray-700">{format(items[35])}</div>
      <div className="rounded-lg py-1 font-bold">{format(items[36])}</div>
      <div className="py-1 font-bold rounded-lg">{format(items[37])}</div>
      <button onClick={() => handle(38, items.map((i) => i.id))}>x</button>
      <span className={cn("py-1 font-medium text-lg mt-[12px] p-4 truncate", active && "text-lg gap-2 items-center")}>{String(39)}</span>
    </div>
  );
}
