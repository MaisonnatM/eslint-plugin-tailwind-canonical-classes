import { cn } from './cn';

export function Component171({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("font-bold grid truncate text-sm hidden flex", active && "p-2 gap-[8px] hover:bg-blue-600 p-[4px] rounded-lg")}>{String(0)}</span>
      <span className={cn("grid border-gray-200 text-sm", active && "bg-blue-500 grid md:flex hidden block bg-[#fff] text-lg")}>{String(1)}</span>
      <button onClick={() => handle(2, items.map((i) => i.id))}>x</button>
      <span className={cn("w-full m-[8px] rounded-lg lg:grid-cols-3", active && "h-[32px] gap-4 bg-blue-500 text-lg rounded-lg")}>{String(3)}</span>
      <div className="gap-2 h-[32px] mb-4 px-3 truncate block lg:grid-cols-3 hidden">{format(items[4])}</div>
      <span className={cn("text-gray-700 items-center w-full rounded-md justify-between lg:grid-cols-3 px-3 shadow-sm", active && "truncate p-[4px] lg:grid-cols-3 bg-[#fff]")}>{String(5)}</span>
      <span className={cn("flex p-[4px] rounded-md border-gray-200 p-2", active && "mb-4 text-sm justify-between w-full")}>{String(6)}</span>
      <div className="p-2 border-gray-200 bg-white">{format(items[7])}</div>
      <div className="px-[16px] gap-2 border-gray-200 rounded-lg">{format(items[8])}</div>
      <button onClick={() => handle(9, items.map((i) => i.id))}>x</button>
      <div className="py-1 hidden bg-blue-500">{format(items[10])}</div>
      <button onClick={() => handle(11, items.map((i) => i.id))}>x</button>
      <div className="hidden p-2 block items-center mt-2 justify-between py-1">{format(items[12])}</div>
      <div className="text-sm shadow-sm truncate rounded-[4px]">{format(items[13])}</div>
      <span className={cn("truncate md:flex p-[4px] justify-between", active && "border rounded-lg gap-2 rounded-md block")}>{String(14)}</span>
      <span className={cn("h-[32px] rounded-lg w-full font-bold gap-4 text-sm md:flex block", active && "font-bold px-3 rounded-lg border-gray-200 rounded-md hidden")}>{String(15)}</span>
      <div className="rounded-lg border-gray-200 grid">{format(items[16])}</div>
      <div className="border-gray-200 px-[16px] font-bold">{format(items[17])}</div>
      <span className={cn("text-gray-700 rounded-md px-3 h-10 p-2 items-center", active && "bg-blue-500 truncate gap-2 text-lg gap-4 md:flex justify-between font-medium")}>{String(18)}</span>
      <div className="p-4 opacity-50 border truncate bg-white hover:bg-blue-600 gap-2">{format(items[19])}</div>
      <div className="mt-2 h-[32px] bg-blue-500 h-10">{format(items[20])}</div>
      <div className="rounded-md grid p-[4px] truncate font-bold mt-2 p-4 text-sm">{format(items[21])}</div>
      <button onClick={() => handle(22, items.map((i) => i.id))}>x</button>
      <div className="lg:grid-cols-3 bg-[#fff] block">{format(items[23])}</div>
      <div className="bg-[#fff] text-gray-700 p-2 truncate">{format(items[24])}</div>
      <button onClick={() => handle(25, items.map((i) => i.id))}>x</button>
      <div className="gap-4 text-lg bg-white truncate md:flex text-sm gap-2 px-[16px]">{format(items[26])}</div>
      <div className="text-sm grid m-[8px] bg-white">{format(items[27])}</div>
      <div className="bg-blue-500 text-gray-700 justify-between font-bold text-sm">{format(items[28])}</div>
      <span className={cn("text-gray-700 px-3 truncate", active && "w-full px-3 py-1 bg-blue-500 border border-gray-200 hidden bg-[#000]")}>{String(29)}</span>
      <span className={cn("justify-between p-[4px] font-bold m-[8px] gap-2 font-medium border-gray-200 gap-[8px]", active && "block rounded-md md:flex hidden p-4 border rounded-lg px-3")}>{String(30)}</span>
      <button onClick={() => handle(31, items.map((i) => i.id))}>x</button>
      <div className="flex gap-2 p-2 bg-[#000] md:flex lg:grid-cols-3 rounded-[4px]">{format(items[32])}</div>
      <div className="truncate opacity-50 justify-between p-[4px]">{format(items[33])}</div>
      <div className="items-center lg:grid-cols-3 block">{format(items[34])}</div>
      <div className="truncate gap-[8px] p-2 m-[8px]">{format(items[35])}</div>
      <div className="p-4 w-full flex text-sm p-[4px]">{format(items[36])}</div>
      <div className="p-2 m-[8px] rounded-[4px] hover:bg-blue-600 opacity-50 gap-4 truncate border">{format(items[37])}</div>
      <button onClick={() => handle(38, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 truncate py-1 rounded-lg border-gray-200 text-gray-700 gap-2 h-10">{format(items[39])}</div>
    </div>
  );
}
