import { cn } from './cn';

export function Component329({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("py-1 px-3 grid flex gap-4", active && "border-gray-200 opacity-50 lg:grid-cols-3 flex h-[32px]")}>{String(0)}</span>
      <div className="opacity-50 justify-between mb-4 font-medium font-bold hover:bg-blue-600">{format(items[1])}</div>
      <button onClick={() => handle(2, items.map((i) => i.id))}>x</button>
      <span className={cn("border-gray-200 opacity-50 items-center text-lg rounded-[4px] gap-[8px] lg:grid-cols-3", active && "p-2 text-gray-700 font-bold lg:grid-cols-3 h-[32px]")}>{String(3)}</span>
      <div className="lg:grid-cols-3 bg-blue-500 bg-white">{format(items[4])}</div>
      <div className="p-4 bg-[#000] hover:bg-blue-600 mt-[12px] bg-white">{format(items[5])}</div>
      <button onClick={() => handle(6, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(7, items.map((i) => i.id))}>x</button>
      <span className={cn("flex rounded-lg font-bold p-2 items-center h-[32px]", active && "px-3 flex truncate mt-2")}>{String(8)}</span>
      <button onClick={() => handle(9, items.map((i) => i.id))}>x</button>
      <span className={cn("p-4 font-medium gap-4 p-[4px] items-center opacity-50 grid truncate", active && "lg:grid-cols-3 shadow-sm text-gray-700 w-full gap-4 font-medium")}>{String(10)}</span>
      <div className="border opacity-50 rounded-lg">{format(items[11])}</div>
      <div className="block text-sm truncate w-full bg-[#000] py-1 font-bold">{format(items[12])}</div>
      <div className="border opacity-50 text-sm">{format(items[13])}</div>
      <div className="border-gray-200 text-sm mb-4 text-lg border">{format(items[14])}</div>
      <span className={cn("grid hidden gap-2 px-3 mt-2 block bg-[#000]", active && "gap-4 opacity-50 h-[32px] p-4 grid hover:bg-blue-600")}>{String(15)}</span>
      <div className="h-10 lg:grid-cols-3 shadow-sm">{format(items[16])}</div>
      <span className={cn("rounded-md text-lg opacity-50 rounded-lg font-bold items-center md:flex", active && "p-2 mt-2 gap-4 m-[8px]")}>{String(17)}</span>
      <div className="hidden py-1 bg-blue-500 mb-4 p-4">{format(items[18])}</div>
      <div className="gap-2 justify-between bg-blue-500 m-[8px] py-1 w-full px-3">{format(items[19])}</div>
      <div className="justify-between px-3 p-4 gap-2 hover:bg-blue-600 hidden">{format(items[20])}</div>
      <div className="opacity-50 hover:bg-blue-600 p-2 grid mt-2 rounded-md items-center rounded-[4px]">{format(items[21])}</div>
      <span className={cn("w-full flex items-center shadow-sm gap-2 bg-white", active && "rounded-lg mb-4 items-center text-sm w-full md:flex rounded-md mt-[12px]")}>{String(22)}</span>
      <span className={cn("hidden gap-4 hover:bg-blue-600 mt-2 w-full lg:grid-cols-3 mt-[12px] rounded-md", active && "rounded-[4px] text-lg p-2 border-gray-200 lg:grid-cols-3 md:flex h-10")}>{String(23)}</span>
      <div className="opacity-50 mb-4 block h-10 hover:bg-blue-600">{format(items[24])}</div>
      <span className={cn("mt-[12px] flex grid font-medium truncate gap-4", active && "items-center flex lg:grid-cols-3 mt-2")}>{String(25)}</span>
      <div className="px-[16px] mt-2 rounded-lg block border-gray-200 px-3 font-bold">{format(items[26])}</div>
      <span className={cn("w-[16px] grid text-sm", active && "px-3 w-[16px] text-gray-700 gap-4 px-[16px] h-10 p-4")}>{String(27)}</span>
      <button onClick={() => handle(28, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(29, items.map((i) => i.id))}>x</button>
      <span className={cn("h-10 font-medium hover:bg-blue-600 justify-between mb-4 text-lg", active && "p-4 mt-2 bg-white rounded-md p-[4px] grid w-full")}>{String(30)}</span>
      <span className={cn("p-4 border-gray-200 h-10 gap-2 block px-3 rounded-lg mt-[12px]", active && "font-bold truncate font-medium bg-blue-500 bg-[#000] gap-2 rounded-lg")}>{String(31)}</span>
      <div className="mb-4 border-gray-200 items-center font-bold rounded-md">{format(items[32])}</div>
      <div className="p-2 rounded-md hover:bg-blue-600 border text-sm gap-[8px] gap-2 px-3">{format(items[33])}</div>
      <div className="text-sm text-lg opacity-50 border text-gray-700 gap-4 hover:bg-blue-600">{format(items[34])}</div>
      <div className="gap-2 grid font-bold text-lg font-medium md:flex hover:bg-blue-600 mt-[12px]">{format(items[35])}</div>
      <div className="text-sm px-3 mt-[12px] md:flex hover:bg-blue-600 block h-[32px] flex">{format(items[36])}</div>
      <div className="text-sm text-gray-700 w-[16px] p-4 shadow-sm grid rounded-lg block">{format(items[37])}</div>
      <div className="hover:bg-blue-600 h-10 w-full mb-4">{format(items[38])}</div>
      <span className={cn("shadow-sm rounded-md h-10 hidden bg-[#fff] w-[16px] rounded-lg", active && "hidden lg:grid-cols-3 rounded-lg gap-2 gap-4 py-1 border-gray-200")}>{String(39)}</span>
    </div>
  );
}
