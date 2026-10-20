import { cn } from './cn';

export function Component174({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("mb-4 py-1 border-gray-200 bg-[#000] font-medium gap-4 items-center", active && "border-gray-200 items-center block h-10 shadow-sm w-full")}>{String(0)}</span>
      <div className="py-1 bg-white mt-2 truncate">{format(items[1])}</div>
      <div className="bg-white border border-gray-200">{format(items[2])}</div>
      <div className="items-center mt-2 px-3 font-medium md:flex rounded-lg mb-4">{format(items[3])}</div>
      <div className="bg-[#fff] bg-white border-gray-200 justify-between text-sm">{format(items[4])}</div>
      <span className={cn("shadow-sm text-sm border-gray-200 rounded-lg", active && "text-lg w-full border p-[4px] bg-blue-500 font-medium")}>{String(5)}</span>
      <span className={cn("font-medium flex hover:bg-blue-600 rounded-md", active && "py-1 text-lg mb-4 rounded-md")}>{String(6)}</span>
      <span className={cn("opacity-50 text-sm truncate bg-white rounded-[4px] block font-bold shadow-sm", active && "text-gray-700 px-3 truncate")}>{String(7)}</span>
      <span className={cn("font-bold border-gray-200 opacity-50 justify-between hover:bg-blue-600", active && "items-center rounded-md w-full text-lg rounded-[4px] h-10 py-1")}>{String(8)}</span>
      <div className="px-[16px] font-medium shadow-sm">{format(items[9])}</div>
      <button onClick={() => handle(10, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 justify-between bg-blue-500 truncate font-bold mb-4">{format(items[11])}</div>
      <span className={cn("grid font-medium lg:grid-cols-3 p-4 items-center gap-2", active && "font-bold hidden bg-blue-500 p-2 mt-[12px] border")}>{String(12)}</span>
      <div className="px-3 rounded-md text-sm bg-white opacity-50 px-[16px] text-lg">{format(items[13])}</div>
      <div className="px-[16px] px-3 bg-[#000] font-medium border-gray-200">{format(items[14])}</div>
      <span className={cn("flex hidden bg-blue-500 border text-sm truncate opacity-50", active && "rounded-lg justify-between shadow-sm w-full")}>{String(15)}</span>
      <button onClick={() => handle(16, items.map((i) => i.id))}>x</button>
      <div className="text-lg px-3 h-10 bg-white justify-between hidden border rounded-lg">{format(items[17])}</div>
      <div className="w-full border-gray-200 p-4 justify-between p-2 block rounded-lg">{format(items[18])}</div>
      <div className="rounded-lg border truncate">{format(items[19])}</div>
      <div className="opacity-50 h-10 m-[8px] truncate">{format(items[20])}</div>
      <span className={cn("text-lg w-full gap-2 hover:bg-blue-600 lg:grid-cols-3 mb-4 flex px-3", active && "gap-2 mt-2 gap-4 px-3 font-medium opacity-50")}>{String(21)}</span>
      <div className="text-gray-700 bg-[#fff] rounded-lg hover:bg-blue-600 shadow-sm w-full p-4">{format(items[22])}</div>
      <div className="text-gray-700 rounded-lg p-2 lg:grid-cols-3 px-[16px] font-bold p-4 h-10">{format(items[23])}</div>
      <span className={cn("opacity-50 mb-4 m-[8px] font-medium grid lg:grid-cols-3 border-gray-200 rounded-lg", active && "gap-2 px-3 justify-between shadow-sm hover:bg-blue-600 md:flex gap-4 font-medium")}>{String(24)}</span>
      <button onClick={() => handle(25, items.map((i) => i.id))}>x</button>
      <div className="text-sm hidden block rounded-[4px]">{format(items[26])}</div>
      <span className={cn("py-1 bg-white rounded-md px-3 grid h-10 text-sm", active && "truncate grid md:flex flex font-medium items-center h-[32px] border")}>{String(27)}</span>
      <span className={cn("bg-[#000] block font-bold rounded-lg text-lg", active && "mt-2 gap-2 opacity-50 grid rounded-[4px] font-bold mb-4 text-sm")}>{String(28)}</span>
      <div className="grid mt-2 gap-2">{format(items[29])}</div>
      <div className="p-[4px] font-medium hidden border gap-4 mb-4 p-4">{format(items[30])}</div>
      <div className="w-full grid hover:bg-blue-600 h-10 md:flex m-[8px]">{format(items[31])}</div>
      <div className="m-[8px] gap-4 lg:grid-cols-3 block border font-medium rounded-lg">{format(items[32])}</div>
      <span className={cn("mb-4 md:flex opacity-50", active && "font-bold hidden text-lg rounded-lg gap-2 text-gray-700 px-[16px] bg-white")}>{String(33)}</span>
      <div className="block hover:bg-blue-600 shadow-sm lg:grid-cols-3 border-gray-200">{format(items[34])}</div>
      <div className="w-full md:flex gap-2 mt-[12px] justify-between opacity-50">{format(items[35])}</div>
      <div className="font-medium py-1 grid mt-[12px] opacity-50 bg-blue-500 bg-white items-center">{format(items[36])}</div>
      <div className="py-1 w-full border-gray-200 bg-blue-500 px-[16px]">{format(items[37])}</div>
      <span className={cn("m-[8px] bg-blue-500 truncate md:flex rounded-md", active && "gap-2 shadow-sm text-lg h-10 rounded-lg bg-white px-3")}>{String(38)}</span>
      <div className="mt-2 h-10 lg:grid-cols-3 opacity-50 items-center block py-1 border">{format(items[39])}</div>
    </div>
  );
}
