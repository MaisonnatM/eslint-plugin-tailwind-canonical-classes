import { cn } from './cn';

export function Component186({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="w-full py-1 font-medium md:flex">{format(items[0])}</div>
      <div className="block border truncate rounded-md">{format(items[1])}</div>
      <div className="items-center text-gray-700 p-2 py-1 flex border-gray-200 w-full">{format(items[2])}</div>
      <div className="bg-white md:flex text-gray-700 p-[4px] w-full bg-[#fff]">{format(items[3])}</div>
      <span className={cn("p-[4px] border font-medium rounded-[4px]", active && "w-[16px] px-[16px] grid h-10 opacity-50 text-sm bg-[#fff]")}>{String(4)}</span>
      <div className="font-medium text-lg items-center mt-2 p-4 text-gray-700 px-3">{format(items[5])}</div>
      <span className={cn("hover:bg-blue-600 items-center gap-4 p-4 rounded-md", active && "bg-[#fff] p-4 w-[16px]")}>{String(6)}</span>
      <span className={cn("border w-[16px] mb-4 mt-2 m-[8px] gap-2 items-center", active && "flex bg-white gap-2 shadow-sm")}>{String(7)}</span>
      <div className="bg-blue-500 text-lg p-4 truncate gap-2">{format(items[8])}</div>
      <div className="grid mb-4 text-gray-700 lg:grid-cols-3 font-bold">{format(items[9])}</div>
      <div className="truncate opacity-50 items-center mt-[12px] text-lg p-4 gap-2">{format(items[10])}</div>
      <span className={cn("rounded-[4px] rounded-md block text-sm", active && "text-lg border-gray-200 border h-10 md:flex items-center font-bold")}>{String(11)}</span>
      <div className="shadow-sm block lg:grid-cols-3 flex mt-2 text-sm items-center px-3">{format(items[12])}</div>
      <div className="mb-4 border-gray-200 shadow-sm">{format(items[13])}</div>
      <div className="font-bold border-gray-200 bg-[#000] shadow-sm px-3 gap-4 bg-[#fff] justify-between">{format(items[14])}</div>
      <div className="grid p-[4px] text-gray-700 font-medium bg-white">{format(items[15])}</div>
      <div className="py-1 h-10 bg-white opacity-50 text-lg">{format(items[16])}</div>
      <div className="mt-2 p-2 text-lg items-center bg-blue-500 mb-4 border-gray-200 justify-between">{format(items[17])}</div>
      <div className="bg-blue-500 shadow-sm rounded-lg border">{format(items[18])}</div>
      <div className="truncate mt-2 font-bold block bg-[#fff]">{format(items[19])}</div>
      <div className="text-gray-700 justify-between mb-4 truncate py-1 p-2">{format(items[20])}</div>
      <div className="mt-2 justify-between mb-4">{format(items[21])}</div>
      <div className="bg-blue-500 truncate bg-white">{format(items[22])}</div>
      <div className="gap-4 py-1 hidden border">{format(items[23])}</div>
      <div className="hidden p-2 px-3 md:flex font-medium rounded-md">{format(items[24])}</div>
      <div className="h-[32px] text-lg rounded-lg">{format(items[25])}</div>
      <span className={cn("text-lg truncate rounded-lg", active && "mb-4 grid items-center mt-2 p-2 opacity-50 gap-2")}>{String(26)}</span>
      <div className="p-4 gap-4 lg:grid-cols-3 hover:bg-blue-600 border text-lg">{format(items[27])}</div>
      <span className={cn("font-medium border items-center h-10 m-[8px] mt-2 truncate", active && "grid py-1 items-center text-sm opacity-50")}>{String(28)}</span>
      <span className={cn("hover:bg-blue-600 lg:grid-cols-3 mb-4 py-1 h-10", active && "items-center truncate bg-[#fff] mb-4 border bg-white border-gray-200 px-3")}>{String(29)}</span>
      <span className={cn("hover:bg-blue-600 rounded-md p-4 border mt-[12px] gap-2", active && "py-1 flex mt-2 h-[32px] items-center mb-4 font-bold w-[16px]")}>{String(30)}</span>
      <span className={cn("text-lg mb-4 text-sm border px-3 items-center rounded-[4px] w-full", active && "items-center bg-white truncate gap-[8px] font-medium gap-2 mt-2")}>{String(31)}</span>
      <span className={cn("bg-blue-500 px-3 w-full bg-white", active && "gap-4 shadow-sm items-center mb-4 mt-[12px] w-full opacity-50 bg-blue-500")}>{String(32)}</span>
      <div className="truncate mb-4 md:flex w-full p-4">{format(items[33])}</div>
      <button onClick={() => handle(34, items.map((i) => i.id))}>x</button>
      <span className={cn("px-3 border mb-4 border-gray-200 text-sm rounded-lg", active && "bg-white font-medium p-2 py-1")}>{String(35)}</span>
      <div className="hidden px-[16px] rounded-md p-[4px] truncate">{format(items[36])}</div>
      <div className="opacity-50 justify-between h-10 gap-4">{format(items[37])}</div>
      <div className="grid mb-4 rounded-md hidden p-4 mt-[12px] items-center text-gray-700">{format(items[38])}</div>
      <span className={cn("block px-3 text-sm", active && "py-1 bg-blue-500 border-gray-200 p-4 gap-2 opacity-50")}>{String(39)}</span>
    </div>
  );
}
