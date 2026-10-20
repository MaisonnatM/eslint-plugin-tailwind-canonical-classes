import { cn } from './cn';

export function Component3({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("gap-2 truncate hover:bg-blue-600 hidden h-[32px]", active && "rounded-md gap-2 lg:grid-cols-3 shadow-sm text-sm")}>{String(0)}</span>
      <button onClick={() => handle(1, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(2, items.map((i) => i.id))}>x</button>
      <span className={cn("p-4 p-[4px] grid px-3 lg:grid-cols-3 p-2", active && "justify-between p-4 w-full text-gray-700 opacity-50")}>{String(3)}</span>
      <div className="p-2 flex rounded-lg px-3 bg-blue-500 p-4 p-[4px]">{format(items[4])}</div>
      <div className="h-[32px] mt-2 border-gray-200 flex lg:grid-cols-3">{format(items[5])}</div>
      <div className="hover:bg-blue-600 justify-between bg-white md:flex font-medium items-center opacity-50 border">{format(items[6])}</div>
      <div className="text-gray-700 hidden bg-[#000]">{format(items[7])}</div>
      <span className={cn("text-gray-700 lg:grid-cols-3 h-[32px] shadow-sm w-full p-2", active && "mt-2 mt-[12px] md:flex block px-3 bg-white rounded-lg font-medium")}>{String(8)}</span>
      <div className="text-sm text-gray-700 flex gap-[8px]">{format(items[9])}</div>
      <button onClick={() => handle(10, items.map((i) => i.id))}>x</button>
      <span className={cn("px-3 h-[32px] rounded-lg items-center flex gap-4 text-gray-700 px-[16px]", active && "mb-4 bg-white m-[8px] flex bg-blue-500")}>{String(11)}</span>
      <div className="p-4 opacity-50 gap-[8px] m-[8px] lg:grid-cols-3 py-1">{format(items[12])}</div>
      <div className="text-gray-700 border p-4 text-sm font-bold gap-2 md:flex">{format(items[13])}</div>
      <div className="mt-2 block p-4">{format(items[14])}</div>
      <div className="rounded-[4px] font-bold text-lg flex border-gray-200 gap-4 rounded-md">{format(items[15])}</div>
      <div className="truncate bg-[#fff] w-full gap-2">{format(items[16])}</div>
      <div className="grid w-full p-2 font-bold rounded-md flex items-center bg-blue-500">{format(items[17])}</div>
      <div className="text-sm bg-[#000] hidden lg:grid-cols-3 rounded-md p-[4px] mb-4 mt-2">{format(items[18])}</div>
      <div className="p-4 items-center hidden opacity-50 border-gray-200 bg-white gap-4 md:flex">{format(items[19])}</div>
      <div className="font-bold text-lg font-medium mb-4 text-sm shadow-sm mt-2">{format(items[20])}</div>
      <div className="block rounded-lg text-gray-700 md:flex">{format(items[21])}</div>
      <div className="gap-2 p-4 m-[8px] grid bg-[#000]">{format(items[22])}</div>
      <div className="bg-white hidden px-3">{format(items[23])}</div>
      <div className="bg-blue-500 w-full shadow-sm">{format(items[24])}</div>
      <span className={cn("border p-4 hover:bg-blue-600", active && "border-gray-200 text-gray-700 rounded-md shadow-sm gap-[8px]")}>{String(25)}</span>
      <button onClick={() => handle(26, items.map((i) => i.id))}>x</button>
      <span className={cn("rounded-lg py-1 gap-2 bg-white", active && "font-bold w-[16px] flex rounded-md gap-2 truncate rounded-lg text-lg")}>{String(27)}</span>
      <div className="grid text-sm border-gray-200 rounded-md mt-2">{format(items[28])}</div>
      <div className="block shadow-sm px-3 gap-4 w-[16px]">{format(items[29])}</div>
      <div className="h-[32px] p-2 justify-between m-[8px] items-center mt-[12px]">{format(items[30])}</div>
      <div className="text-lg items-center rounded-lg font-bold truncate">{format(items[31])}</div>
      <span className={cn("bg-[#000] py-1 truncate text-gray-700 bg-blue-500 shadow-sm", active && "mb-4 py-1 grid truncate hover:bg-blue-600 justify-between block")}>{String(32)}</span>
      <span className={cn("md:flex gap-2 mt-[12px] p-4 bg-white", active && "m-[8px] bg-white mt-2 text-gray-700")}>{String(33)}</span>
      <span className={cn("gap-2 flex py-1 opacity-50 justify-between", active && "justify-between hover:bg-blue-600 p-4 font-medium py-1 lg:grid-cols-3 border")}>{String(34)}</span>
      <div className="w-full hidden bg-[#fff] h-[32px] gap-4 grid">{format(items[35])}</div>
      <span className={cn("truncate mt-[12px] py-1 font-medium text-gray-700 flex bg-blue-500", active && "flex m-[8px] px-3")}>{String(36)}</span>
      <div className="px-3 text-sm gap-2 p-2">{format(items[37])}</div>
      <div className="font-bold bg-white gap-2 truncate border-gray-200 mt-2">{format(items[38])}</div>
      <span className={cn("gap-2 lg:grid-cols-3 border-gray-200", active && "flex shadow-sm hidden px-[16px] m-[8px] lg:grid-cols-3 bg-[#000]")}>{String(39)}</span>
    </div>
  );
}
