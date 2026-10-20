import { cn } from './cn';

export function Component220({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="text-lg hover:bg-blue-600 font-medium px-[16px]">{format(items[0])}</div>
      <div className="gap-4 p-4 border-gray-200 items-center truncate hover:bg-blue-600 w-full py-1">{format(items[1])}</div>
      <div className="md:flex mt-[12px] lg:grid-cols-3 mb-4 font-medium h-[32px]">{format(items[2])}</div>
      <div className="mb-4 items-center shadow-sm md:flex p-4 font-bold lg:grid-cols-3 border">{format(items[3])}</div>
      <div className="grid truncate border">{format(items[4])}</div>
      <span className={cn("font-bold grid truncate text-sm hidden flex", active && "p-2 gap-[8px] hover:bg-blue-600 p-[4px] rounded-lg")}>{String(5)}</span>
      <span className={cn("grid border-gray-200 text-sm", active && "bg-blue-500 grid md:flex hidden block bg-[#fff] text-lg")}>{String(6)}</span>
      <button onClick={() => handle(7, items.map((i) => i.id))}>x</button>
      <span className={cn("w-full m-[8px] rounded-lg lg:grid-cols-3", active && "h-[32px] gap-4 bg-blue-500 text-lg rounded-lg")}>{String(8)}</span>
      <div className="gap-2 h-[32px] mb-4 px-3 truncate block lg:grid-cols-3 hidden">{format(items[9])}</div>
      <span className={cn("text-gray-700 items-center w-full rounded-md justify-between lg:grid-cols-3 px-3 shadow-sm", active && "truncate p-[4px] lg:grid-cols-3 bg-[#fff]")}>{String(10)}</span>
      <span className={cn("flex p-[4px] rounded-md border-gray-200 p-2", active && "mb-4 text-sm justify-between w-full")}>{String(11)}</span>
      <div className="p-2 border-gray-200 bg-white">{format(items[12])}</div>
      <div className="px-[16px] gap-2 border-gray-200 rounded-lg">{format(items[13])}</div>
      <button onClick={() => handle(14, items.map((i) => i.id))}>x</button>
      <div className="py-1 hidden bg-blue-500">{format(items[15])}</div>
      <button onClick={() => handle(16, items.map((i) => i.id))}>x</button>
      <div className="hidden p-2 block items-center mt-2 justify-between py-1">{format(items[17])}</div>
      <div className="text-sm shadow-sm truncate rounded-[4px]">{format(items[18])}</div>
      <span className={cn("truncate md:flex p-[4px] justify-between", active && "border rounded-lg gap-2 rounded-md block")}>{String(19)}</span>
      <span className={cn("h-[32px] rounded-lg w-full font-bold gap-4 text-sm md:flex block", active && "font-bold px-3 rounded-lg border-gray-200 rounded-md hidden")}>{String(20)}</span>
      <div className="rounded-lg border-gray-200 grid">{format(items[21])}</div>
      <div className="border-gray-200 px-[16px] font-bold">{format(items[22])}</div>
      <span className={cn("text-gray-700 rounded-md px-3 h-10 p-2 items-center", active && "bg-blue-500 truncate gap-2 text-lg gap-4 md:flex justify-between font-medium")}>{String(23)}</span>
      <div className="p-4 opacity-50 border truncate bg-white hover:bg-blue-600 gap-2">{format(items[24])}</div>
      <div className="mt-2 h-[32px] bg-blue-500 h-10">{format(items[25])}</div>
      <div className="rounded-md grid p-[4px] truncate font-bold mt-2 p-4 text-sm">{format(items[26])}</div>
      <button onClick={() => handle(27, items.map((i) => i.id))}>x</button>
      <div className="lg:grid-cols-3 bg-[#fff] block">{format(items[28])}</div>
      <div className="bg-[#fff] text-gray-700 p-2 truncate">{format(items[29])}</div>
      <button onClick={() => handle(30, items.map((i) => i.id))}>x</button>
      <div className="gap-4 text-lg bg-white truncate md:flex text-sm gap-2 px-[16px]">{format(items[31])}</div>
      <div className="text-sm grid m-[8px] bg-white">{format(items[32])}</div>
      <div className="bg-blue-500 text-gray-700 justify-between font-bold text-sm">{format(items[33])}</div>
      <span className={cn("text-gray-700 px-3 truncate", active && "w-full px-3 py-1 bg-blue-500 border border-gray-200 hidden bg-[#000]")}>{String(34)}</span>
      <span className={cn("justify-between p-[4px] font-bold m-[8px] gap-2 font-medium border-gray-200 gap-[8px]", active && "block rounded-md md:flex hidden p-4 border rounded-lg px-3")}>{String(35)}</span>
      <button onClick={() => handle(36, items.map((i) => i.id))}>x</button>
      <div className="flex gap-2 p-2 bg-[#000] md:flex lg:grid-cols-3 rounded-[4px]">{format(items[37])}</div>
      <div className="truncate opacity-50 justify-between p-[4px]">{format(items[38])}</div>
      <div className="items-center lg:grid-cols-3 block">{format(items[39])}</div>
    </div>
  );
}
