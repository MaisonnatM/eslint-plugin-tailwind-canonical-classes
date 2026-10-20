import { cn } from './cn';

export function Component269({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="md:flex p-4 gap-2 p-2 bg-blue-500">{format(items[0])}</div>
      <span className={cn("mt-2 md:flex gap-[8px] bg-white", active && "font-medium truncate p-4 hidden mb-4")}>{String(1)}</span>
      <div className="px-3 hidden w-full md:flex bg-[#fff]">{format(items[2])}</div>
      <div className="bg-[#fff] text-lg py-1 mb-4 shadow-sm justify-between">{format(items[3])}</div>
      <div className="bg-white items-center p-2">{format(items[4])}</div>
      <div className="text-lg hover:bg-blue-600 font-medium px-[16px]">{format(items[5])}</div>
      <div className="gap-4 p-4 border-gray-200 items-center truncate hover:bg-blue-600 w-full py-1">{format(items[6])}</div>
      <div className="md:flex mt-[12px] lg:grid-cols-3 mb-4 font-medium h-[32px]">{format(items[7])}</div>
      <div className="mb-4 items-center shadow-sm md:flex p-4 font-bold lg:grid-cols-3 border">{format(items[8])}</div>
      <div className="grid truncate border">{format(items[9])}</div>
      <span className={cn("font-bold grid truncate text-sm hidden flex", active && "p-2 gap-[8px] hover:bg-blue-600 p-[4px] rounded-lg")}>{String(10)}</span>
      <span className={cn("grid border-gray-200 text-sm", active && "bg-blue-500 grid md:flex hidden block bg-[#fff] text-lg")}>{String(11)}</span>
      <button onClick={() => handle(12, items.map((i) => i.id))}>x</button>
      <span className={cn("w-full m-[8px] rounded-lg lg:grid-cols-3", active && "h-[32px] gap-4 bg-blue-500 text-lg rounded-lg")}>{String(13)}</span>
      <div className="gap-2 h-[32px] mb-4 px-3 truncate block lg:grid-cols-3 hidden">{format(items[14])}</div>
      <span className={cn("text-gray-700 items-center w-full rounded-md justify-between lg:grid-cols-3 px-3 shadow-sm", active && "truncate p-[4px] lg:grid-cols-3 bg-[#fff]")}>{String(15)}</span>
      <span className={cn("flex p-[4px] rounded-md border-gray-200 p-2", active && "mb-4 text-sm justify-between w-full")}>{String(16)}</span>
      <div className="p-2 border-gray-200 bg-white">{format(items[17])}</div>
      <div className="px-[16px] gap-2 border-gray-200 rounded-lg">{format(items[18])}</div>
      <button onClick={() => handle(19, items.map((i) => i.id))}>x</button>
      <div className="py-1 hidden bg-blue-500">{format(items[20])}</div>
      <button onClick={() => handle(21, items.map((i) => i.id))}>x</button>
      <div className="hidden p-2 block items-center mt-2 justify-between py-1">{format(items[22])}</div>
      <div className="text-sm shadow-sm truncate rounded-[4px]">{format(items[23])}</div>
      <span className={cn("truncate md:flex p-[4px] justify-between", active && "border rounded-lg gap-2 rounded-md block")}>{String(24)}</span>
      <span className={cn("h-[32px] rounded-lg w-full font-bold gap-4 text-sm md:flex block", active && "font-bold px-3 rounded-lg border-gray-200 rounded-md hidden")}>{String(25)}</span>
      <div className="rounded-lg border-gray-200 grid">{format(items[26])}</div>
      <div className="border-gray-200 px-[16px] font-bold">{format(items[27])}</div>
      <span className={cn("text-gray-700 rounded-md px-3 h-10 p-2 items-center", active && "bg-blue-500 truncate gap-2 text-lg gap-4 md:flex justify-between font-medium")}>{String(28)}</span>
      <div className="p-4 opacity-50 border truncate bg-white hover:bg-blue-600 gap-2">{format(items[29])}</div>
      <div className="mt-2 h-[32px] bg-blue-500 h-10">{format(items[30])}</div>
      <div className="rounded-md grid p-[4px] truncate font-bold mt-2 p-4 text-sm">{format(items[31])}</div>
      <button onClick={() => handle(32, items.map((i) => i.id))}>x</button>
      <div className="lg:grid-cols-3 bg-[#fff] block">{format(items[33])}</div>
      <div className="bg-[#fff] text-gray-700 p-2 truncate">{format(items[34])}</div>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <div className="gap-4 text-lg bg-white truncate md:flex text-sm gap-2 px-[16px]">{format(items[36])}</div>
      <div className="text-sm grid m-[8px] bg-white">{format(items[37])}</div>
      <div className="bg-blue-500 text-gray-700 justify-between font-bold text-sm">{format(items[38])}</div>
      <span className={cn("text-gray-700 px-3 truncate", active && "w-full px-3 py-1 bg-blue-500 border border-gray-200 hidden bg-[#000]")}>{String(39)}</span>
    </div>
  );
}
