import { cn } from './cn';

export function Component338({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <button onClick={() => handle(0, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 justify-between bg-blue-500 truncate font-bold mb-4">{format(items[1])}</div>
      <span className={cn("grid font-medium lg:grid-cols-3 p-4 items-center gap-2", active && "font-bold hidden bg-blue-500 p-2 mt-[12px] border")}>{String(2)}</span>
      <div className="px-3 rounded-md text-sm bg-white opacity-50 px-[16px] text-lg">{format(items[3])}</div>
      <div className="px-[16px] px-3 bg-[#000] font-medium border-gray-200">{format(items[4])}</div>
      <span className={cn("flex hidden bg-blue-500 border text-sm truncate opacity-50", active && "rounded-lg justify-between shadow-sm w-full")}>{String(5)}</span>
      <button onClick={() => handle(6, items.map((i) => i.id))}>x</button>
      <div className="text-lg px-3 h-10 bg-white justify-between hidden border rounded-lg">{format(items[7])}</div>
      <div className="w-full border-gray-200 p-4 justify-between p-2 block rounded-lg">{format(items[8])}</div>
      <div className="rounded-lg border truncate">{format(items[9])}</div>
      <div className="opacity-50 h-10 m-[8px] truncate">{format(items[10])}</div>
      <span className={cn("text-lg w-full gap-2 hover:bg-blue-600 lg:grid-cols-3 mb-4 flex px-3", active && "gap-2 mt-2 gap-4 px-3 font-medium opacity-50")}>{String(11)}</span>
      <div className="text-gray-700 bg-[#fff] rounded-lg hover:bg-blue-600 shadow-sm w-full p-4">{format(items[12])}</div>
      <div className="text-gray-700 rounded-lg p-2 lg:grid-cols-3 px-[16px] font-bold p-4 h-10">{format(items[13])}</div>
      <span className={cn("opacity-50 mb-4 m-[8px] font-medium grid lg:grid-cols-3 border-gray-200 rounded-lg", active && "gap-2 px-3 justify-between shadow-sm hover:bg-blue-600 md:flex gap-4 font-medium")}>{String(14)}</span>
      <button onClick={() => handle(15, items.map((i) => i.id))}>x</button>
      <div className="text-sm hidden block rounded-[4px]">{format(items[16])}</div>
      <span className={cn("py-1 bg-white rounded-md px-3 grid h-10 text-sm", active && "truncate grid md:flex flex font-medium items-center h-[32px] border")}>{String(17)}</span>
      <span className={cn("bg-[#000] block font-bold rounded-lg text-lg", active && "mt-2 gap-2 opacity-50 grid rounded-[4px] font-bold mb-4 text-sm")}>{String(18)}</span>
      <div className="grid mt-2 gap-2">{format(items[19])}</div>
      <div className="p-[4px] font-medium hidden border gap-4 mb-4 p-4">{format(items[20])}</div>
      <div className="w-full grid hover:bg-blue-600 h-10 md:flex m-[8px]">{format(items[21])}</div>
      <div className="m-[8px] gap-4 lg:grid-cols-3 block border font-medium rounded-lg">{format(items[22])}</div>
      <span className={cn("mb-4 md:flex opacity-50", active && "font-bold hidden text-lg rounded-lg gap-2 text-gray-700 px-[16px] bg-white")}>{String(23)}</span>
      <div className="block hover:bg-blue-600 shadow-sm lg:grid-cols-3 border-gray-200">{format(items[24])}</div>
      <div className="w-full md:flex gap-2 mt-[12px] justify-between opacity-50">{format(items[25])}</div>
      <div className="font-medium py-1 grid mt-[12px] opacity-50 bg-blue-500 bg-white items-center">{format(items[26])}</div>
      <div className="py-1 w-full border-gray-200 bg-blue-500 px-[16px]">{format(items[27])}</div>
      <span className={cn("m-[8px] bg-blue-500 truncate md:flex rounded-md", active && "gap-2 shadow-sm text-lg h-10 rounded-lg bg-white px-3")}>{String(28)}</span>
      <div className="mt-2 h-10 lg:grid-cols-3 opacity-50 items-center block py-1 border">{format(items[29])}</div>
      <div className="rounded-md gap-2 opacity-50">{format(items[30])}</div>
      <div className="text-sm px-3 md:flex text-lg font-medium gap-4">{format(items[31])}</div>
      <div className="flex p-4 rounded-lg text-sm">{format(items[32])}</div>
      <div className="bg-blue-500 mt-2 h-10 p-2 flex rounded-lg">{format(items[33])}</div>
      <div className="text-lg font-bold md:flex lg:grid-cols-3">{format(items[34])}</div>
      <div className="font-medium hover:bg-blue-600 h-[32px] items-center justify-between px-[16px] font-bold">{format(items[35])}</div>
      <button onClick={() => handle(36, items.map((i) => i.id))}>x</button>
      <div className="hover:bg-blue-600 text-sm px-3 justify-between hidden shadow-sm">{format(items[37])}</div>
      <div className="px-3 opacity-50 font-medium">{format(items[38])}</div>
      <div className="block opacity-50 gap-2 w-full bg-blue-500">{format(items[39])}</div>
    </div>
  );
}
