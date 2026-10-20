import { cn } from './cn';

export function Component0({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="hover:bg-blue-600 bg-blue-500 justify-between p-[4px] opacity-50 p-2">{format(items[0])}</div>
      <div className="w-full p-4 grid truncate hidden bg-white p-[4px] border">{format(items[1])}</div>
      <div className="gap-[8px] bg-white h-10 gap-4 rounded-md items-center">{format(items[2])}</div>
      <span className={cn("mt-[12px] h-[32px] gap-4 text-gray-700", active && "border-gray-200 text-gray-700 p-[4px] rounded-[4px] gap-4 block h-[32px]")}>{String(3)}</span>
      <div className="mb-4 py-1 bg-[#000] w-full bg-blue-500 border">{format(items[4])}</div>
      <span className={cn("gap-4 m-[8px] p-4 w-full hidden", active && "font-bold hidden bg-blue-500 border h-10 items-center block py-1")}>{String(5)}</span>
      <span className={cn("w-[16px] rounded-md flex lg:grid-cols-3 text-gray-700 rounded-lg", active && "gap-4 m-[8px] text-gray-700 hover:bg-blue-600 p-2 gap-[8px]")}>{String(6)}</span>
      <span className={cn("border justify-between p-[4px] rounded-md grid py-1", active && "flex block gap-2")}>{String(7)}</span>
      <span className={cn("font-medium bg-blue-500 px-3 border-gray-200", active && "grid px-[16px] font-medium w-full h-10 m-[8px] bg-blue-500 bg-white")}>{String(8)}</span>
      <div className="px-3 justify-between h-[32px] block bg-blue-500 shadow-sm mt-2">{format(items[9])}</div>
      <span className={cn("w-full mb-4 w-[16px] m-[8px] justify-between", active && "mt-2 p-[4px] hover:bg-blue-600 bg-white rounded-md items-center hidden")}>{String(10)}</span>
      <button onClick={() => handle(11, items.map((i) => i.id))}>x</button>
      <div className="font-bold truncate w-[16px] p-4 gap-2 justify-between font-medium">{format(items[12])}</div>
      <div className="rounded-lg bg-white w-full px-[16px]">{format(items[13])}</div>
      <span className={cn("mt-2 rounded-[4px] opacity-50 bg-white truncate text-gray-700 bg-[#fff]", active && "h-[32px] hidden p-2 text-lg font-medium gap-2 font-bold shadow-sm")}>{String(14)}</span>
      <span className={cn("items-center justify-between mb-4 flex text-lg px-3 mt-[12px] shadow-sm", active && "gap-2 p-4 w-full p-2 h-10 mt-2 truncate")}>{String(15)}</span>
      <div className="border flex hidden w-full py-1 font-bold items-center">{format(items[16])}</div>
      <button onClick={() => handle(17, items.map((i) => i.id))}>x</button>
      <span className={cn("px-3 shadow-sm text-gray-700", active && "text-gray-700 opacity-50 md:flex grid px-3 block rounded-lg")}>{String(18)}</span>
      <span className={cn("md:flex m-[8px] border rounded-lg flex hover:bg-blue-600 bg-blue-500 h-10", active && "font-medium p-4 rounded-[4px]")}>{String(19)}</span>
      <button onClick={() => handle(20, items.map((i) => i.id))}>x</button>
      <span className={cn("m-[8px] lg:grid-cols-3 truncate py-1 font-bold opacity-50 grid", active && "px-3 h-10 mb-4 justify-between truncate rounded-md lg:grid-cols-3 bg-blue-500")}>{String(21)}</span>
      <span className={cn("h-10 gap-2 block rounded-md p-4", active && "h-[32px] flex lg:grid-cols-3 w-full")}>{String(22)}</span>
      <div className="p-2 w-full font-medium text-lg shadow-sm gap-2 justify-between">{format(items[23])}</div>
      <button onClick={() => handle(24, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(25, items.map((i) => i.id))}>x</button>
      <div className="mt-[12px] bg-blue-500 border grid block shadow-sm">{format(items[26])}</div>
      <div className="font-medium md:flex px-[16px] border text-lg font-bold bg-white truncate">{format(items[27])}</div>
      <span className={cn("w-full bg-white truncate opacity-50 m-[8px] px-3 flex", active && "mb-4 text-gray-700 rounded-md text-sm")}>{String(28)}</span>
      <span className={cn("gap-4 w-full text-gray-700", active && "md:flex items-center shadow-sm font-medium border-gray-200 text-gray-700 rounded-md p-4")}>{String(29)}</span>
      <span className={cn("gap-2 block hidden hover:bg-blue-600 rounded-lg", active && "bg-[#000] p-4 border-gray-200 text-sm mb-4 bg-blue-500 shadow-sm gap-2")}>{String(30)}</span>
      <div className="hover:bg-blue-600 border-gray-200 block items-center text-lg rounded-lg bg-[#fff] gap-4">{format(items[31])}</div>
      <span className={cn("md:flex p-2 truncate w-[16px]", active && "w-[16px] flex gap-[8px] hidden opacity-50 rounded-lg border-gray-200")}>{String(32)}</span>
      <div className="text-sm opacity-50 items-center bg-[#fff]">{format(items[33])}</div>
      <div className="px-3 md:flex opacity-50 hover:bg-blue-600">{format(items[34])}</div>
      <div className="bg-[#000] md:flex p-2 rounded-md rounded-lg">{format(items[35])}</div>
      <div className="lg:grid-cols-3 py-1 rounded-lg justify-between truncate">{format(items[36])}</div>
      <div className="border text-gray-700 items-center md:flex block">{format(items[37])}</div>
      <div className="font-medium px-3 grid block mt-2">{format(items[38])}</div>
      <span className={cn("flex mt-2 px-3", active && "shadow-sm hidden gap-2 py-1 w-[16px] opacity-50 px-[16px] bg-blue-500")}>{String(39)}</span>
    </div>
  );
}
