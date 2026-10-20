import { cn } from './cn';

export function Component256({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("shadow-sm text-sm border-gray-200 rounded-lg", active && "text-lg w-full border p-[4px] bg-blue-500 font-medium")}>{String(0)}</span>
      <span className={cn("font-medium flex hover:bg-blue-600 rounded-md", active && "py-1 text-lg mb-4 rounded-md")}>{String(1)}</span>
      <span className={cn("opacity-50 text-sm truncate bg-white rounded-[4px] block font-bold shadow-sm", active && "text-gray-700 px-3 truncate")}>{String(2)}</span>
      <span className={cn("font-bold border-gray-200 opacity-50 justify-between hover:bg-blue-600", active && "items-center rounded-md w-full text-lg rounded-[4px] h-10 py-1")}>{String(3)}</span>
      <div className="px-[16px] font-medium shadow-sm">{format(items[4])}</div>
      <button onClick={() => handle(5, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 justify-between bg-blue-500 truncate font-bold mb-4">{format(items[6])}</div>
      <span className={cn("grid font-medium lg:grid-cols-3 p-4 items-center gap-2", active && "font-bold hidden bg-blue-500 p-2 mt-[12px] border")}>{String(7)}</span>
      <div className="px-3 rounded-md text-sm bg-white opacity-50 px-[16px] text-lg">{format(items[8])}</div>
      <div className="px-[16px] px-3 bg-[#000] font-medium border-gray-200">{format(items[9])}</div>
      <span className={cn("flex hidden bg-blue-500 border text-sm truncate opacity-50", active && "rounded-lg justify-between shadow-sm w-full")}>{String(10)}</span>
      <button onClick={() => handle(11, items.map((i) => i.id))}>x</button>
      <div className="text-lg px-3 h-10 bg-white justify-between hidden border rounded-lg">{format(items[12])}</div>
      <div className="w-full border-gray-200 p-4 justify-between p-2 block rounded-lg">{format(items[13])}</div>
      <div className="rounded-lg border truncate">{format(items[14])}</div>
      <div className="opacity-50 h-10 m-[8px] truncate">{format(items[15])}</div>
      <span className={cn("text-lg w-full gap-2 hover:bg-blue-600 lg:grid-cols-3 mb-4 flex px-3", active && "gap-2 mt-2 gap-4 px-3 font-medium opacity-50")}>{String(16)}</span>
      <div className="text-gray-700 bg-[#fff] rounded-lg hover:bg-blue-600 shadow-sm w-full p-4">{format(items[17])}</div>
      <div className="text-gray-700 rounded-lg p-2 lg:grid-cols-3 px-[16px] font-bold p-4 h-10">{format(items[18])}</div>
      <span className={cn("opacity-50 mb-4 m-[8px] font-medium grid lg:grid-cols-3 border-gray-200 rounded-lg", active && "gap-2 px-3 justify-between shadow-sm hover:bg-blue-600 md:flex gap-4 font-medium")}>{String(19)}</span>
      <button onClick={() => handle(20, items.map((i) => i.id))}>x</button>
      <div className="text-sm hidden block rounded-[4px]">{format(items[21])}</div>
      <span className={cn("py-1 bg-white rounded-md px-3 grid h-10 text-sm", active && "truncate grid md:flex flex font-medium items-center h-[32px] border")}>{String(22)}</span>
      <span className={cn("bg-[#000] block font-bold rounded-lg text-lg", active && "mt-2 gap-2 opacity-50 grid rounded-[4px] font-bold mb-4 text-sm")}>{String(23)}</span>
      <div className="grid mt-2 gap-2">{format(items[24])}</div>
      <div className="p-[4px] font-medium hidden border gap-4 mb-4 p-4">{format(items[25])}</div>
      <div className="w-full grid hover:bg-blue-600 h-10 md:flex m-[8px]">{format(items[26])}</div>
      <div className="m-[8px] gap-4 lg:grid-cols-3 block border font-medium rounded-lg">{format(items[27])}</div>
      <span className={cn("mb-4 md:flex opacity-50", active && "font-bold hidden text-lg rounded-lg gap-2 text-gray-700 px-[16px] bg-white")}>{String(28)}</span>
      <div className="block hover:bg-blue-600 shadow-sm lg:grid-cols-3 border-gray-200">{format(items[29])}</div>
      <div className="w-full md:flex gap-2 mt-[12px] justify-between opacity-50">{format(items[30])}</div>
      <div className="font-medium py-1 grid mt-[12px] opacity-50 bg-blue-500 bg-white items-center">{format(items[31])}</div>
      <div className="py-1 w-full border-gray-200 bg-blue-500 px-[16px]">{format(items[32])}</div>
      <span className={cn("m-[8px] bg-blue-500 truncate md:flex rounded-md", active && "gap-2 shadow-sm text-lg h-10 rounded-lg bg-white px-3")}>{String(33)}</span>
      <div className="mt-2 h-10 lg:grid-cols-3 opacity-50 items-center block py-1 border">{format(items[34])}</div>
      <div className="rounded-md gap-2 opacity-50">{format(items[35])}</div>
      <div className="text-sm px-3 md:flex text-lg font-medium gap-4">{format(items[36])}</div>
      <div className="flex p-4 rounded-lg text-sm">{format(items[37])}</div>
      <div className="bg-blue-500 mt-2 h-10 p-2 flex rounded-lg">{format(items[38])}</div>
      <div className="text-lg font-bold md:flex lg:grid-cols-3">{format(items[39])}</div>
    </div>
  );
}
