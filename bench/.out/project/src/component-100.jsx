import { cn } from './cn';

export function Component100({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("p-4 font-medium gap-4 p-[4px] items-center opacity-50 grid truncate", active && "lg:grid-cols-3 shadow-sm text-gray-700 w-full gap-4 font-medium")}>{String(0)}</span>
      <div className="border opacity-50 rounded-lg">{format(items[1])}</div>
      <div className="block text-sm truncate w-full bg-[#000] py-1 font-bold">{format(items[2])}</div>
      <div className="border opacity-50 text-sm">{format(items[3])}</div>
      <div className="border-gray-200 text-sm mb-4 text-lg border">{format(items[4])}</div>
      <span className={cn("grid hidden gap-2 px-3 mt-2 block bg-[#000]", active && "gap-4 opacity-50 h-[32px] p-4 grid hover:bg-blue-600")}>{String(5)}</span>
      <div className="h-10 lg:grid-cols-3 shadow-sm">{format(items[6])}</div>
      <span className={cn("rounded-md text-lg opacity-50 rounded-lg font-bold items-center md:flex", active && "p-2 mt-2 gap-4 m-[8px]")}>{String(7)}</span>
      <div className="hidden py-1 bg-blue-500 mb-4 p-4">{format(items[8])}</div>
      <div className="gap-2 justify-between bg-blue-500 m-[8px] py-1 w-full px-3">{format(items[9])}</div>
      <div className="justify-between px-3 p-4 gap-2 hover:bg-blue-600 hidden">{format(items[10])}</div>
      <div className="opacity-50 hover:bg-blue-600 p-2 grid mt-2 rounded-md items-center rounded-[4px]">{format(items[11])}</div>
      <span className={cn("w-full flex items-center shadow-sm gap-2 bg-white", active && "rounded-lg mb-4 items-center text-sm w-full md:flex rounded-md mt-[12px]")}>{String(12)}</span>
      <span className={cn("hidden gap-4 hover:bg-blue-600 mt-2 w-full lg:grid-cols-3 mt-[12px] rounded-md", active && "rounded-[4px] text-lg p-2 border-gray-200 lg:grid-cols-3 md:flex h-10")}>{String(13)}</span>
      <div className="opacity-50 mb-4 block h-10 hover:bg-blue-600">{format(items[14])}</div>
      <span className={cn("mt-[12px] flex grid font-medium truncate gap-4", active && "items-center flex lg:grid-cols-3 mt-2")}>{String(15)}</span>
      <div className="px-[16px] mt-2 rounded-lg block border-gray-200 px-3 font-bold">{format(items[16])}</div>
      <span className={cn("w-[16px] grid text-sm", active && "px-3 w-[16px] text-gray-700 gap-4 px-[16px] h-10 p-4")}>{String(17)}</span>
      <button onClick={() => handle(18, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(19, items.map((i) => i.id))}>x</button>
      <span className={cn("h-10 font-medium hover:bg-blue-600 justify-between mb-4 text-lg", active && "p-4 mt-2 bg-white rounded-md p-[4px] grid w-full")}>{String(20)}</span>
      <span className={cn("p-4 border-gray-200 h-10 gap-2 block px-3 rounded-lg mt-[12px]", active && "font-bold truncate font-medium bg-blue-500 bg-[#000] gap-2 rounded-lg")}>{String(21)}</span>
      <div className="mb-4 border-gray-200 items-center font-bold rounded-md">{format(items[22])}</div>
      <div className="p-2 rounded-md hover:bg-blue-600 border text-sm gap-[8px] gap-2 px-3">{format(items[23])}</div>
      <div className="text-sm text-lg opacity-50 border text-gray-700 gap-4 hover:bg-blue-600">{format(items[24])}</div>
      <div className="gap-2 grid font-bold text-lg font-medium md:flex hover:bg-blue-600 mt-[12px]">{format(items[25])}</div>
      <div className="text-sm px-3 mt-[12px] md:flex hover:bg-blue-600 block h-[32px] flex">{format(items[26])}</div>
      <div className="text-sm text-gray-700 w-[16px] p-4 shadow-sm grid rounded-lg block">{format(items[27])}</div>
      <div className="hover:bg-blue-600 h-10 w-full mb-4">{format(items[28])}</div>
      <span className={cn("shadow-sm rounded-md h-10 hidden bg-[#fff] w-[16px] rounded-lg", active && "hidden lg:grid-cols-3 rounded-lg gap-2 gap-4 py-1 border-gray-200")}>{String(29)}</span>
      <div className="items-center px-3 bg-white px-[16px] lg:grid-cols-3 text-lg shadow-sm bg-[#000]">{format(items[30])}</div>
      <div className="rounded-lg px-3 items-center p-2 gap-2 text-gray-700 mb-4">{format(items[31])}</div>
      <div className="bg-blue-500 shadow-sm py-1 opacity-50 flex px-[16px]">{format(items[32])}</div>
      <span className={cn("p-[4px] p-4 rounded-md", active && "opacity-50 shadow-sm border-gray-200 items-center")}>{String(33)}</span>
      <div className="bg-white flex w-[16px]">{format(items[34])}</div>
      <span className={cn("h-10 w-full rounded-[4px]", active && "font-bold p-4 items-center rounded-md block text-sm")}>{String(35)}</span>
      <span className={cn("opacity-50 md:flex flex lg:grid-cols-3 shadow-sm m-[8px] mt-2", active && "rounded-lg hover:bg-blue-600 opacity-50 mt-[12px] p-4 gap-4")}>{String(36)}</span>
      <div className="py-1 lg:grid-cols-3 items-center border border-gray-200 px-3 justify-between gap-[8px]">{format(items[37])}</div>
      <div className="px-[16px] gap-[8px] md:flex">{format(items[38])}</div>
      <div className="border-gray-200 p-[4px] hidden text-sm gap-2 bg-blue-500 text-gray-700 font-medium">{format(items[39])}</div>
    </div>
  );
}
