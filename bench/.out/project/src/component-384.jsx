import { cn } from './cn';

export function Component384({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("text-gray-700 items-center w-full rounded-md justify-between lg:grid-cols-3 px-3 shadow-sm", active && "truncate p-[4px] lg:grid-cols-3 bg-[#fff]")}>{String(0)}</span>
      <span className={cn("flex p-[4px] rounded-md border-gray-200 p-2", active && "mb-4 text-sm justify-between w-full")}>{String(1)}</span>
      <div className="p-2 border-gray-200 bg-white">{format(items[2])}</div>
      <div className="px-[16px] gap-2 border-gray-200 rounded-lg">{format(items[3])}</div>
      <button onClick={() => handle(4, items.map((i) => i.id))}>x</button>
      <div className="py-1 hidden bg-blue-500">{format(items[5])}</div>
      <button onClick={() => handle(6, items.map((i) => i.id))}>x</button>
      <div className="hidden p-2 block items-center mt-2 justify-between py-1">{format(items[7])}</div>
      <div className="text-sm shadow-sm truncate rounded-[4px]">{format(items[8])}</div>
      <span className={cn("truncate md:flex p-[4px] justify-between", active && "border rounded-lg gap-2 rounded-md block")}>{String(9)}</span>
      <span className={cn("h-[32px] rounded-lg w-full font-bold gap-4 text-sm md:flex block", active && "font-bold px-3 rounded-lg border-gray-200 rounded-md hidden")}>{String(10)}</span>
      <div className="rounded-lg border-gray-200 grid">{format(items[11])}</div>
      <div className="border-gray-200 px-[16px] font-bold">{format(items[12])}</div>
      <span className={cn("text-gray-700 rounded-md px-3 h-10 p-2 items-center", active && "bg-blue-500 truncate gap-2 text-lg gap-4 md:flex justify-between font-medium")}>{String(13)}</span>
      <div className="p-4 opacity-50 border truncate bg-white hover:bg-blue-600 gap-2">{format(items[14])}</div>
      <div className="mt-2 h-[32px] bg-blue-500 h-10">{format(items[15])}</div>
      <div className="rounded-md grid p-[4px] truncate font-bold mt-2 p-4 text-sm">{format(items[16])}</div>
      <button onClick={() => handle(17, items.map((i) => i.id))}>x</button>
      <div className="lg:grid-cols-3 bg-[#fff] block">{format(items[18])}</div>
      <div className="bg-[#fff] text-gray-700 p-2 truncate">{format(items[19])}</div>
      <button onClick={() => handle(20, items.map((i) => i.id))}>x</button>
      <div className="gap-4 text-lg bg-white truncate md:flex text-sm gap-2 px-[16px]">{format(items[21])}</div>
      <div className="text-sm grid m-[8px] bg-white">{format(items[22])}</div>
      <div className="bg-blue-500 text-gray-700 justify-between font-bold text-sm">{format(items[23])}</div>
      <span className={cn("text-gray-700 px-3 truncate", active && "w-full px-3 py-1 bg-blue-500 border border-gray-200 hidden bg-[#000]")}>{String(24)}</span>
      <span className={cn("justify-between p-[4px] font-bold m-[8px] gap-2 font-medium border-gray-200 gap-[8px]", active && "block rounded-md md:flex hidden p-4 border rounded-lg px-3")}>{String(25)}</span>
      <button onClick={() => handle(26, items.map((i) => i.id))}>x</button>
      <div className="flex gap-2 p-2 bg-[#000] md:flex lg:grid-cols-3 rounded-[4px]">{format(items[27])}</div>
      <div className="truncate opacity-50 justify-between p-[4px]">{format(items[28])}</div>
      <div className="items-center lg:grid-cols-3 block">{format(items[29])}</div>
      <div className="truncate gap-[8px] p-2 m-[8px]">{format(items[30])}</div>
      <div className="p-4 w-full flex text-sm p-[4px]">{format(items[31])}</div>
      <div className="p-2 m-[8px] rounded-[4px] hover:bg-blue-600 opacity-50 gap-4 truncate border">{format(items[32])}</div>
      <button onClick={() => handle(33, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 truncate py-1 rounded-lg border-gray-200 text-gray-700 gap-2 h-10">{format(items[34])}</div>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <div className="border-gray-200 text-lg px-[16px] flex px-3">{format(items[36])}</div>
      <span className={cn("items-center p-2 grid text-sm h-10 flex bg-blue-500", active && "text-sm bg-blue-500 flex")}>{String(37)}</span>
      <button onClick={() => handle(38, items.map((i) => i.id))}>x</button>
      <div className="text-sm p-2 justify-between flex font-bold">{format(items[39])}</div>
    </div>
  );
}
