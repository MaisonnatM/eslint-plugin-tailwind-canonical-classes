import { cn } from './cn';

export function Component333({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("block items-center w-full opacity-50", active && "md:flex hidden block h-10")}>{String(0)}</span>
      <div className="p-2 mt-2 hidden">{format(items[1])}</div>
      <span className={cn("flex bg-white mt-2 rounded-lg text-lg opacity-50", active && "text-gray-700 gap-[8px] bg-white")}>{String(2)}</span>
      <div className="h-[32px] items-center bg-[#000]">{format(items[3])}</div>
      <span className={cn("border p-4 bg-blue-500 mb-4", active && "p-4 gap-2 mt-2 px-3")}>{String(4)}</span>
      <button onClick={() => handle(5, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(6, items.map((i) => i.id))}>x</button>
      <div className="w-full shadow-sm gap-4 px-3 rounded-md h-10 m-[8px]">{format(items[7])}</div>
      <div className="bg-blue-500 mb-4 border mt-2 hidden grid">{format(items[8])}</div>
      <div className="opacity-50 bg-blue-500 lg:grid-cols-3 text-gray-700 bg-white">{format(items[9])}</div>
      <span className={cn("opacity-50 items-center bg-blue-500 block font-medium text-sm p-2", active && "lg:grid-cols-3 block w-full text-sm")}>{String(10)}</span>
      <div className="rounded-md rounded-lg px-3 opacity-50 bg-white justify-between">{format(items[11])}</div>
      <div className="mb-4 hidden gap-4">{format(items[12])}</div>
      <div className="rounded-md p-4 py-1 grid opacity-50 p-2">{format(items[13])}</div>
      <button onClick={() => handle(14, items.map((i) => i.id))}>x</button>
      <div className="w-full py-1 font-medium md:flex">{format(items[15])}</div>
      <div className="block border truncate rounded-md">{format(items[16])}</div>
      <div className="items-center text-gray-700 p-2 py-1 flex border-gray-200 w-full">{format(items[17])}</div>
      <div className="bg-white md:flex text-gray-700 p-[4px] w-full bg-[#fff]">{format(items[18])}</div>
      <span className={cn("p-[4px] border font-medium rounded-[4px]", active && "w-[16px] px-[16px] grid h-10 opacity-50 text-sm bg-[#fff]")}>{String(19)}</span>
      <div className="font-medium text-lg items-center mt-2 p-4 text-gray-700 px-3">{format(items[20])}</div>
      <span className={cn("hover:bg-blue-600 items-center gap-4 p-4 rounded-md", active && "bg-[#fff] p-4 w-[16px]")}>{String(21)}</span>
      <span className={cn("border w-[16px] mb-4 mt-2 m-[8px] gap-2 items-center", active && "flex bg-white gap-2 shadow-sm")}>{String(22)}</span>
      <div className="bg-blue-500 text-lg p-4 truncate gap-2">{format(items[23])}</div>
      <div className="grid mb-4 text-gray-700 lg:grid-cols-3 font-bold">{format(items[24])}</div>
      <div className="truncate opacity-50 items-center mt-[12px] text-lg p-4 gap-2">{format(items[25])}</div>
      <span className={cn("rounded-[4px] rounded-md block text-sm", active && "text-lg border-gray-200 border h-10 md:flex items-center font-bold")}>{String(26)}</span>
      <div className="shadow-sm block lg:grid-cols-3 flex mt-2 text-sm items-center px-3">{format(items[27])}</div>
      <div className="mb-4 border-gray-200 shadow-sm">{format(items[28])}</div>
      <div className="font-bold border-gray-200 bg-[#000] shadow-sm px-3 gap-4 bg-[#fff] justify-between">{format(items[29])}</div>
      <div className="grid p-[4px] text-gray-700 font-medium bg-white">{format(items[30])}</div>
      <div className="py-1 h-10 bg-white opacity-50 text-lg">{format(items[31])}</div>
      <div className="mt-2 p-2 text-lg items-center bg-blue-500 mb-4 border-gray-200 justify-between">{format(items[32])}</div>
      <div className="bg-blue-500 shadow-sm rounded-lg border">{format(items[33])}</div>
      <div className="truncate mt-2 font-bold block bg-[#fff]">{format(items[34])}</div>
      <div className="text-gray-700 justify-between mb-4 truncate py-1 p-2">{format(items[35])}</div>
      <div className="mt-2 justify-between mb-4">{format(items[36])}</div>
      <div className="bg-blue-500 truncate bg-white">{format(items[37])}</div>
      <div className="gap-4 py-1 hidden border">{format(items[38])}</div>
      <div className="hidden p-2 px-3 md:flex font-medium rounded-md">{format(items[39])}</div>
    </div>
  );
}
