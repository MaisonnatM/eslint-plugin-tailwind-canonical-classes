import { cn } from './cn';

export function Component350({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="truncate opacity-50 items-center mt-[12px] text-lg p-4 gap-2">{format(items[0])}</div>
      <span className={cn("rounded-[4px] rounded-md block text-sm", active && "text-lg border-gray-200 border h-10 md:flex items-center font-bold")}>{String(1)}</span>
      <div className="shadow-sm block lg:grid-cols-3 flex mt-2 text-sm items-center px-3">{format(items[2])}</div>
      <div className="mb-4 border-gray-200 shadow-sm">{format(items[3])}</div>
      <div className="font-bold border-gray-200 bg-[#000] shadow-sm px-3 gap-4 bg-[#fff] justify-between">{format(items[4])}</div>
      <div className="grid p-[4px] text-gray-700 font-medium bg-white">{format(items[5])}</div>
      <div className="py-1 h-10 bg-white opacity-50 text-lg">{format(items[6])}</div>
      <div className="mt-2 p-2 text-lg items-center bg-blue-500 mb-4 border-gray-200 justify-between">{format(items[7])}</div>
      <div className="bg-blue-500 shadow-sm rounded-lg border">{format(items[8])}</div>
      <div className="truncate mt-2 font-bold block bg-[#fff]">{format(items[9])}</div>
      <div className="text-gray-700 justify-between mb-4 truncate py-1 p-2">{format(items[10])}</div>
      <div className="mt-2 justify-between mb-4">{format(items[11])}</div>
      <div className="bg-blue-500 truncate bg-white">{format(items[12])}</div>
      <div className="gap-4 py-1 hidden border">{format(items[13])}</div>
      <div className="hidden p-2 px-3 md:flex font-medium rounded-md">{format(items[14])}</div>
      <div className="h-[32px] text-lg rounded-lg">{format(items[15])}</div>
      <span className={cn("text-lg truncate rounded-lg", active && "mb-4 grid items-center mt-2 p-2 opacity-50 gap-2")}>{String(16)}</span>
      <div className="p-4 gap-4 lg:grid-cols-3 hover:bg-blue-600 border text-lg">{format(items[17])}</div>
      <span className={cn("font-medium border items-center h-10 m-[8px] mt-2 truncate", active && "grid py-1 items-center text-sm opacity-50")}>{String(18)}</span>
      <span className={cn("hover:bg-blue-600 lg:grid-cols-3 mb-4 py-1 h-10", active && "items-center truncate bg-[#fff] mb-4 border bg-white border-gray-200 px-3")}>{String(19)}</span>
      <span className={cn("hover:bg-blue-600 rounded-md p-4 border mt-[12px] gap-2", active && "py-1 flex mt-2 h-[32px] items-center mb-4 font-bold w-[16px]")}>{String(20)}</span>
      <span className={cn("text-lg mb-4 text-sm border px-3 items-center rounded-[4px] w-full", active && "items-center bg-white truncate gap-[8px] font-medium gap-2 mt-2")}>{String(21)}</span>
      <span className={cn("bg-blue-500 px-3 w-full bg-white", active && "gap-4 shadow-sm items-center mb-4 mt-[12px] w-full opacity-50 bg-blue-500")}>{String(22)}</span>
      <div className="truncate mb-4 md:flex w-full p-4">{format(items[23])}</div>
      <button onClick={() => handle(24, items.map((i) => i.id))}>x</button>
      <span className={cn("px-3 border mb-4 border-gray-200 text-sm rounded-lg", active && "bg-white font-medium p-2 py-1")}>{String(25)}</span>
      <div className="hidden px-[16px] rounded-md p-[4px] truncate">{format(items[26])}</div>
      <div className="opacity-50 justify-between h-10 gap-4">{format(items[27])}</div>
      <div className="grid mb-4 rounded-md hidden p-4 mt-[12px] items-center text-gray-700">{format(items[28])}</div>
      <span className={cn("block px-3 text-sm", active && "py-1 bg-blue-500 border-gray-200 p-4 gap-2 opacity-50")}>{String(29)}</span>
      <div className="py-1 block opacity-50 font-bold hidden mb-4 bg-blue-500 font-medium">{format(items[30])}</div>
      <div className="font-medium border-gray-200 bg-blue-500">{format(items[31])}</div>
      <span className={cn("justify-between px-3 hover:bg-blue-600 gap-2 gap-4", active && "bg-blue-500 grid border truncate bg-[#fff] text-gray-700")}>{String(32)}</span>
      <div className="mt-2 gap-4 p-2 p-4 h-10 rounded-[4px] opacity-50 mt-[12px]">{format(items[33])}</div>
      <div className="truncate font-medium bg-blue-500 w-[16px] gap-[8px] py-1 border block">{format(items[34])}</div>
      <div className="md:flex p-4 gap-2 p-2 bg-blue-500">{format(items[35])}</div>
      <span className={cn("mt-2 md:flex gap-[8px] bg-white", active && "font-medium truncate p-4 hidden mb-4")}>{String(36)}</span>
      <div className="px-3 hidden w-full md:flex bg-[#fff]">{format(items[37])}</div>
      <div className="bg-[#fff] text-lg py-1 mb-4 shadow-sm justify-between">{format(items[38])}</div>
      <div className="bg-white items-center p-2">{format(items[39])}</div>
    </div>
  );
}
