import { cn } from './cn';

export function Component247({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("bg-[#fff] shadow-sm rounded-lg bg-white font-medium h-10 items-center h-[32px]", active && "block px-3 bg-[#fff] rounded-[4px] opacity-50 grid")}>{String(0)}</span>
      <div className="gap-2 grid hover:bg-blue-600 mb-4 flex m-[8px]">{format(items[1])}</div>
      <span className={cn("text-sm w-[16px] w-full text-lg lg:grid-cols-3 p-4 hidden gap-2", active && "text-sm items-center bg-[#fff]")}>{String(2)}</span>
      <span className={cn("gap-[8px] rounded-lg hidden lg:grid-cols-3 opacity-50 hover:bg-blue-600", active && "w-[16px] bg-[#fff] flex bg-[#000] p-2 gap-2 lg:grid-cols-3 p-4")}>{String(3)}</span>
      <button onClick={() => handle(4, items.map((i) => i.id))}>x</button>
      <span className={cn("py-1 px-3 grid flex gap-4", active && "border-gray-200 opacity-50 lg:grid-cols-3 flex h-[32px]")}>{String(5)}</span>
      <div className="opacity-50 justify-between mb-4 font-medium font-bold hover:bg-blue-600">{format(items[6])}</div>
      <button onClick={() => handle(7, items.map((i) => i.id))}>x</button>
      <span className={cn("border-gray-200 opacity-50 items-center text-lg rounded-[4px] gap-[8px] lg:grid-cols-3", active && "p-2 text-gray-700 font-bold lg:grid-cols-3 h-[32px]")}>{String(8)}</span>
      <div className="lg:grid-cols-3 bg-blue-500 bg-white">{format(items[9])}</div>
      <div className="p-4 bg-[#000] hover:bg-blue-600 mt-[12px] bg-white">{format(items[10])}</div>
      <button onClick={() => handle(11, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(12, items.map((i) => i.id))}>x</button>
      <span className={cn("flex rounded-lg font-bold p-2 items-center h-[32px]", active && "px-3 flex truncate mt-2")}>{String(13)}</span>
      <button onClick={() => handle(14, items.map((i) => i.id))}>x</button>
      <span className={cn("p-4 font-medium gap-4 p-[4px] items-center opacity-50 grid truncate", active && "lg:grid-cols-3 shadow-sm text-gray-700 w-full gap-4 font-medium")}>{String(15)}</span>
      <div className="border opacity-50 rounded-lg">{format(items[16])}</div>
      <div className="block text-sm truncate w-full bg-[#000] py-1 font-bold">{format(items[17])}</div>
      <div className="border opacity-50 text-sm">{format(items[18])}</div>
      <div className="border-gray-200 text-sm mb-4 text-lg border">{format(items[19])}</div>
      <span className={cn("grid hidden gap-2 px-3 mt-2 block bg-[#000]", active && "gap-4 opacity-50 h-[32px] p-4 grid hover:bg-blue-600")}>{String(20)}</span>
      <div className="h-10 lg:grid-cols-3 shadow-sm">{format(items[21])}</div>
      <span className={cn("rounded-md text-lg opacity-50 rounded-lg font-bold items-center md:flex", active && "p-2 mt-2 gap-4 m-[8px]")}>{String(22)}</span>
      <div className="hidden py-1 bg-blue-500 mb-4 p-4">{format(items[23])}</div>
      <div className="gap-2 justify-between bg-blue-500 m-[8px] py-1 w-full px-3">{format(items[24])}</div>
      <div className="justify-between px-3 p-4 gap-2 hover:bg-blue-600 hidden">{format(items[25])}</div>
      <div className="opacity-50 hover:bg-blue-600 p-2 grid mt-2 rounded-md items-center rounded-[4px]">{format(items[26])}</div>
      <span className={cn("w-full flex items-center shadow-sm gap-2 bg-white", active && "rounded-lg mb-4 items-center text-sm w-full md:flex rounded-md mt-[12px]")}>{String(27)}</span>
      <span className={cn("hidden gap-4 hover:bg-blue-600 mt-2 w-full lg:grid-cols-3 mt-[12px] rounded-md", active && "rounded-[4px] text-lg p-2 border-gray-200 lg:grid-cols-3 md:flex h-10")}>{String(28)}</span>
      <div className="opacity-50 mb-4 block h-10 hover:bg-blue-600">{format(items[29])}</div>
      <span className={cn("mt-[12px] flex grid font-medium truncate gap-4", active && "items-center flex lg:grid-cols-3 mt-2")}>{String(30)}</span>
      <div className="px-[16px] mt-2 rounded-lg block border-gray-200 px-3 font-bold">{format(items[31])}</div>
      <span className={cn("w-[16px] grid text-sm", active && "px-3 w-[16px] text-gray-700 gap-4 px-[16px] h-10 p-4")}>{String(32)}</span>
      <button onClick={() => handle(33, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(34, items.map((i) => i.id))}>x</button>
      <span className={cn("h-10 font-medium hover:bg-blue-600 justify-between mb-4 text-lg", active && "p-4 mt-2 bg-white rounded-md p-[4px] grid w-full")}>{String(35)}</span>
      <span className={cn("p-4 border-gray-200 h-10 gap-2 block px-3 rounded-lg mt-[12px]", active && "font-bold truncate font-medium bg-blue-500 bg-[#000] gap-2 rounded-lg")}>{String(36)}</span>
      <div className="mb-4 border-gray-200 items-center font-bold rounded-md">{format(items[37])}</div>
      <div className="p-2 rounded-md hover:bg-blue-600 border text-sm gap-[8px] gap-2 px-3">{format(items[38])}</div>
      <div className="text-sm text-lg opacity-50 border text-gray-700 gap-4 hover:bg-blue-600">{format(items[39])}</div>
    </div>
  );
}
