import { cn } from './cn';

export function Component141({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <button onClick={() => handle(0, items.map((i) => i.id))}>x</button>
      <div className="gap-4 py-1 h-[32px] w-[16px] hover:bg-blue-600 border-gray-200">{format(items[1])}</div>
      <div className="bg-blue-500 hover:bg-blue-600 bg-white flex text-sm text-lg">{format(items[2])}</div>
      <div className="lg:grid-cols-3 px-3 gap-2 border">{format(items[3])}</div>
      <div className="text-gray-700 text-lg px-[16px]">{format(items[4])}</div>
      <div className="border bg-[#000] gap-2 hover:bg-blue-600 p-4">{format(items[5])}</div>
      <button onClick={() => handle(6, items.map((i) => i.id))}>x</button>
      <span className={cn("border rounded-md flex p-4 font-medium w-full", active && "px-3 bg-white hidden rounded-lg items-center gap-2 lg:grid-cols-3 gap-4")}>{String(7)}</span>
      <div className="truncate border-gray-200 w-full rounded-md">{format(items[8])}</div>
      <div className="lg:grid-cols-3 h-10 bg-blue-500 text-sm">{format(items[9])}</div>
      <span className={cn("mb-4 py-1 border-gray-200 bg-[#000] font-medium gap-4 items-center", active && "border-gray-200 items-center block h-10 shadow-sm w-full")}>{String(10)}</span>
      <div className="py-1 bg-white mt-2 truncate">{format(items[11])}</div>
      <div className="bg-white border border-gray-200">{format(items[12])}</div>
      <div className="items-center mt-2 px-3 font-medium md:flex rounded-lg mb-4">{format(items[13])}</div>
      <div className="bg-[#fff] bg-white border-gray-200 justify-between text-sm">{format(items[14])}</div>
      <span className={cn("shadow-sm text-sm border-gray-200 rounded-lg", active && "text-lg w-full border p-[4px] bg-blue-500 font-medium")}>{String(15)}</span>
      <span className={cn("font-medium flex hover:bg-blue-600 rounded-md", active && "py-1 text-lg mb-4 rounded-md")}>{String(16)}</span>
      <span className={cn("opacity-50 text-sm truncate bg-white rounded-[4px] block font-bold shadow-sm", active && "text-gray-700 px-3 truncate")}>{String(17)}</span>
      <span className={cn("font-bold border-gray-200 opacity-50 justify-between hover:bg-blue-600", active && "items-center rounded-md w-full text-lg rounded-[4px] h-10 py-1")}>{String(18)}</span>
      <div className="px-[16px] font-medium shadow-sm">{format(items[19])}</div>
      <button onClick={() => handle(20, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 justify-between bg-blue-500 truncate font-bold mb-4">{format(items[21])}</div>
      <span className={cn("grid font-medium lg:grid-cols-3 p-4 items-center gap-2", active && "font-bold hidden bg-blue-500 p-2 mt-[12px] border")}>{String(22)}</span>
      <div className="px-3 rounded-md text-sm bg-white opacity-50 px-[16px] text-lg">{format(items[23])}</div>
      <div className="px-[16px] px-3 bg-[#000] font-medium border-gray-200">{format(items[24])}</div>
      <span className={cn("flex hidden bg-blue-500 border text-sm truncate opacity-50", active && "rounded-lg justify-between shadow-sm w-full")}>{String(25)}</span>
      <button onClick={() => handle(26, items.map((i) => i.id))}>x</button>
      <div className="text-lg px-3 h-10 bg-white justify-between hidden border rounded-lg">{format(items[27])}</div>
      <div className="w-full border-gray-200 p-4 justify-between p-2 block rounded-lg">{format(items[28])}</div>
      <div className="rounded-lg border truncate">{format(items[29])}</div>
      <div className="opacity-50 h-10 m-[8px] truncate">{format(items[30])}</div>
      <span className={cn("text-lg w-full gap-2 hover:bg-blue-600 lg:grid-cols-3 mb-4 flex px-3", active && "gap-2 mt-2 gap-4 px-3 font-medium opacity-50")}>{String(31)}</span>
      <div className="text-gray-700 bg-[#fff] rounded-lg hover:bg-blue-600 shadow-sm w-full p-4">{format(items[32])}</div>
      <div className="text-gray-700 rounded-lg p-2 lg:grid-cols-3 px-[16px] font-bold p-4 h-10">{format(items[33])}</div>
      <span className={cn("opacity-50 mb-4 m-[8px] font-medium grid lg:grid-cols-3 border-gray-200 rounded-lg", active && "gap-2 px-3 justify-between shadow-sm hover:bg-blue-600 md:flex gap-4 font-medium")}>{String(34)}</span>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <div className="text-sm hidden block rounded-[4px]">{format(items[36])}</div>
      <span className={cn("py-1 bg-white rounded-md px-3 grid h-10 text-sm", active && "truncate grid md:flex flex font-medium items-center h-[32px] border")}>{String(37)}</span>
      <span className={cn("bg-[#000] block font-bold rounded-lg text-lg", active && "mt-2 gap-2 opacity-50 grid rounded-[4px] font-bold mb-4 text-sm")}>{String(38)}</span>
      <div className="grid mt-2 gap-2">{format(items[39])}</div>
    </div>
  );
}
