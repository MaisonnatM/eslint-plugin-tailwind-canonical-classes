import { cn } from './cn';

export function Component204({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="py-1 hidden bg-blue-500">{format(items[0])}</div>
      <button onClick={() => handle(1, items.map((i) => i.id))}>x</button>
      <div className="hidden p-2 block items-center mt-2 justify-between py-1">{format(items[2])}</div>
      <div className="text-sm shadow-sm truncate rounded-[4px]">{format(items[3])}</div>
      <span className={cn("truncate md:flex p-[4px] justify-between", active && "border rounded-lg gap-2 rounded-md block")}>{String(4)}</span>
      <span className={cn("h-[32px] rounded-lg w-full font-bold gap-4 text-sm md:flex block", active && "font-bold px-3 rounded-lg border-gray-200 rounded-md hidden")}>{String(5)}</span>
      <div className="rounded-lg border-gray-200 grid">{format(items[6])}</div>
      <div className="border-gray-200 px-[16px] font-bold">{format(items[7])}</div>
      <span className={cn("text-gray-700 rounded-md px-3 h-10 p-2 items-center", active && "bg-blue-500 truncate gap-2 text-lg gap-4 md:flex justify-between font-medium")}>{String(8)}</span>
      <div className="p-4 opacity-50 border truncate bg-white hover:bg-blue-600 gap-2">{format(items[9])}</div>
      <div className="mt-2 h-[32px] bg-blue-500 h-10">{format(items[10])}</div>
      <div className="rounded-md grid p-[4px] truncate font-bold mt-2 p-4 text-sm">{format(items[11])}</div>
      <button onClick={() => handle(12, items.map((i) => i.id))}>x</button>
      <div className="lg:grid-cols-3 bg-[#fff] block">{format(items[13])}</div>
      <div className="bg-[#fff] text-gray-700 p-2 truncate">{format(items[14])}</div>
      <button onClick={() => handle(15, items.map((i) => i.id))}>x</button>
      <div className="gap-4 text-lg bg-white truncate md:flex text-sm gap-2 px-[16px]">{format(items[16])}</div>
      <div className="text-sm grid m-[8px] bg-white">{format(items[17])}</div>
      <div className="bg-blue-500 text-gray-700 justify-between font-bold text-sm">{format(items[18])}</div>
      <span className={cn("text-gray-700 px-3 truncate", active && "w-full px-3 py-1 bg-blue-500 border border-gray-200 hidden bg-[#000]")}>{String(19)}</span>
      <span className={cn("justify-between p-[4px] font-bold m-[8px] gap-2 font-medium border-gray-200 gap-[8px]", active && "block rounded-md md:flex hidden p-4 border rounded-lg px-3")}>{String(20)}</span>
      <button onClick={() => handle(21, items.map((i) => i.id))}>x</button>
      <div className="flex gap-2 p-2 bg-[#000] md:flex lg:grid-cols-3 rounded-[4px]">{format(items[22])}</div>
      <div className="truncate opacity-50 justify-between p-[4px]">{format(items[23])}</div>
      <div className="items-center lg:grid-cols-3 block">{format(items[24])}</div>
      <div className="truncate gap-[8px] p-2 m-[8px]">{format(items[25])}</div>
      <div className="p-4 w-full flex text-sm p-[4px]">{format(items[26])}</div>
      <div className="p-2 m-[8px] rounded-[4px] hover:bg-blue-600 opacity-50 gap-4 truncate border">{format(items[27])}</div>
      <button onClick={() => handle(28, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 truncate py-1 rounded-lg border-gray-200 text-gray-700 gap-2 h-10">{format(items[29])}</div>
      <button onClick={() => handle(30, items.map((i) => i.id))}>x</button>
      <div className="border-gray-200 text-lg px-[16px] flex px-3">{format(items[31])}</div>
      <span className={cn("items-center p-2 grid text-sm h-10 flex bg-blue-500", active && "text-sm bg-blue-500 flex")}>{String(32)}</span>
      <button onClick={() => handle(33, items.map((i) => i.id))}>x</button>
      <div className="text-sm p-2 justify-between flex font-bold">{format(items[34])}</div>
      <div className="mt-2 bg-blue-500 h-10 rounded-md md:flex h-[32px]">{format(items[35])}</div>
      <div className="h-10 items-center truncate md:flex p-2 shadow-sm">{format(items[36])}</div>
      <div className="lg:grid-cols-3 rounded-md opacity-50 truncate block px-3 border">{format(items[37])}</div>
      <div className="w-full gap-4 md:flex bg-blue-500 block hover:bg-blue-600 opacity-50 rounded-lg">{format(items[38])}</div>
      <span className={cn("bg-blue-500 flex hover:bg-blue-600 items-center truncate grid", active && "hover:bg-blue-600 items-center font-bold flex w-full border")}>{String(39)}</span>
    </div>
  );
}
