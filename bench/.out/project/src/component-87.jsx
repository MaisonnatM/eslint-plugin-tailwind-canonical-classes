import { cn } from './cn';

export function Component87({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="font-medium bg-white gap-2 mt-2 grid hidden p-2">{format(items[0])}</div>
      <div className="font-bold w-[16px] text-gray-700">{format(items[1])}</div>
      <div className="px-3 grid mb-4">{format(items[2])}</div>
      <div className="font-bold font-medium bg-white gap-[8px] text-gray-700">{format(items[3])}</div>
      <div className="hidden p-2 items-center text-sm bg-white flex">{format(items[4])}</div>
      <button onClick={() => handle(5, items.map((i) => i.id))}>x</button>
      <div className="font-medium py-1 h-10">{format(items[6])}</div>
      <span className={cn("mt-2 mb-4 opacity-50 md:flex px-3 px-[16px] gap-4 text-sm", active && "shadow-sm font-medium block")}>{String(7)}</span>
      <div className="rounded-md justify-between grid truncate gap-2 h-10 p-4">{format(items[8])}</div>
      <div className="hover:bg-blue-600 p-4 px-[16px] w-[16px]">{format(items[9])}</div>
      <div className="md:flex text-gray-700 font-bold p-2 lg:grid-cols-3 shadow-sm p-4">{format(items[10])}</div>
      <button onClick={() => handle(11, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(12, items.map((i) => i.id))}>x</button>
      <div className="shadow-sm bg-white mb-4 lg:grid-cols-3 md:flex text-gray-700">{format(items[13])}</div>
      <div className="px-3 hover:bg-blue-600 items-center shadow-sm gap-[8px] opacity-50 p-[4px] block">{format(items[14])}</div>
      <span className={cn("block items-center w-full opacity-50", active && "md:flex hidden block h-10")}>{String(15)}</span>
      <div className="p-2 mt-2 hidden">{format(items[16])}</div>
      <span className={cn("flex bg-white mt-2 rounded-lg text-lg opacity-50", active && "text-gray-700 gap-[8px] bg-white")}>{String(17)}</span>
      <div className="h-[32px] items-center bg-[#000]">{format(items[18])}</div>
      <span className={cn("border p-4 bg-blue-500 mb-4", active && "p-4 gap-2 mt-2 px-3")}>{String(19)}</span>
      <button onClick={() => handle(20, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(21, items.map((i) => i.id))}>x</button>
      <div className="w-full shadow-sm gap-4 px-3 rounded-md h-10 m-[8px]">{format(items[22])}</div>
      <div className="bg-blue-500 mb-4 border mt-2 hidden grid">{format(items[23])}</div>
      <div className="opacity-50 bg-blue-500 lg:grid-cols-3 text-gray-700 bg-white">{format(items[24])}</div>
      <span className={cn("opacity-50 items-center bg-blue-500 block font-medium text-sm p-2", active && "lg:grid-cols-3 block w-full text-sm")}>{String(25)}</span>
      <div className="rounded-md rounded-lg px-3 opacity-50 bg-white justify-between">{format(items[26])}</div>
      <div className="mb-4 hidden gap-4">{format(items[27])}</div>
      <div className="rounded-md p-4 py-1 grid opacity-50 p-2">{format(items[28])}</div>
      <button onClick={() => handle(29, items.map((i) => i.id))}>x</button>
      <div className="w-full py-1 font-medium md:flex">{format(items[30])}</div>
      <div className="block border truncate rounded-md">{format(items[31])}</div>
      <div className="items-center text-gray-700 p-2 py-1 flex border-gray-200 w-full">{format(items[32])}</div>
      <div className="bg-white md:flex text-gray-700 p-[4px] w-full bg-[#fff]">{format(items[33])}</div>
      <span className={cn("p-[4px] border font-medium rounded-[4px]", active && "w-[16px] px-[16px] grid h-10 opacity-50 text-sm bg-[#fff]")}>{String(34)}</span>
      <div className="font-medium text-lg items-center mt-2 p-4 text-gray-700 px-3">{format(items[35])}</div>
      <span className={cn("hover:bg-blue-600 items-center gap-4 p-4 rounded-md", active && "bg-[#fff] p-4 w-[16px]")}>{String(36)}</span>
      <span className={cn("border w-[16px] mb-4 mt-2 m-[8px] gap-2 items-center", active && "flex bg-white gap-2 shadow-sm")}>{String(37)}</span>
      <div className="bg-blue-500 text-lg p-4 truncate gap-2">{format(items[38])}</div>
      <div className="grid mb-4 text-gray-700 lg:grid-cols-3 font-bold">{format(items[39])}</div>
    </div>
  );
}
