import { cn } from './cn';

export function Component90({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="truncate gap-[8px] p-2 m-[8px]">{format(items[0])}</div>
      <div className="p-4 w-full flex text-sm p-[4px]">{format(items[1])}</div>
      <div className="p-2 m-[8px] rounded-[4px] hover:bg-blue-600 opacity-50 gap-4 truncate border">{format(items[2])}</div>
      <button onClick={() => handle(3, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 truncate py-1 rounded-lg border-gray-200 text-gray-700 gap-2 h-10">{format(items[4])}</div>
      <button onClick={() => handle(5, items.map((i) => i.id))}>x</button>
      <div className="border-gray-200 text-lg px-[16px] flex px-3">{format(items[6])}</div>
      <span className={cn("items-center p-2 grid text-sm h-10 flex bg-blue-500", active && "text-sm bg-blue-500 flex")}>{String(7)}</span>
      <button onClick={() => handle(8, items.map((i) => i.id))}>x</button>
      <div className="text-sm p-2 justify-between flex font-bold">{format(items[9])}</div>
      <div className="mt-2 bg-blue-500 h-10 rounded-md md:flex h-[32px]">{format(items[10])}</div>
      <div className="h-10 items-center truncate md:flex p-2 shadow-sm">{format(items[11])}</div>
      <div className="lg:grid-cols-3 rounded-md opacity-50 truncate block px-3 border">{format(items[12])}</div>
      <div className="w-full gap-4 md:flex bg-blue-500 block hover:bg-blue-600 opacity-50 rounded-lg">{format(items[13])}</div>
      <span className={cn("bg-blue-500 flex hover:bg-blue-600 items-center truncate grid", active && "hover:bg-blue-600 items-center font-bold flex w-full border")}>{String(14)}</span>
      <div className="mt-[12px] border py-1 text-gray-700">{format(items[15])}</div>
      <div className="rounded-lg py-1 font-bold">{format(items[16])}</div>
      <div className="py-1 font-bold rounded-lg">{format(items[17])}</div>
      <button onClick={() => handle(18, items.map((i) => i.id))}>x</button>
      <span className={cn("py-1 font-medium text-lg mt-[12px] p-4 truncate", active && "text-lg gap-2 items-center")}>{String(19)}</span>
      <div className="bg-blue-500 grid text-sm bg-[#fff] opacity-50 text-lg h-[32px]">{format(items[20])}</div>
      <button onClick={() => handle(21, items.map((i) => i.id))}>x</button>
      <span className={cn("opacity-50 items-center text-lg px-3", active && "px-3 w-full truncate gap-2 p-2 md:flex")}>{String(22)}</span>
      <div className="items-center h-[32px] mb-4 bg-blue-500">{format(items[23])}</div>
      <div className="md:flex font-medium w-[16px] gap-4 mt-2 mt-[12px] p-2">{format(items[24])}</div>
      <div className="text-sm mt-2 w-full h-[32px] py-1 font-medium mb-4">{format(items[25])}</div>
      <div className="mb-4 w-full border rounded-md py-1 p-2 p-4 rounded-lg">{format(items[26])}</div>
      <span className={cn("md:flex rounded-[4px] flex text-lg border-gray-200 px-[16px] bg-[#000] p-4", active && "w-full py-1 truncate p-4 items-center grid px-[16px]")}>{String(27)}</span>
      <div className="truncate bg-white shadow-sm px-3 mt-2 text-lg rounded-lg border-gray-200">{format(items[28])}</div>
      <div className="h-10 mb-4 rounded-lg gap-4 block font-medium">{format(items[29])}</div>
      <span className={cn("px-[16px] bg-white px-3 rounded-lg w-full shadow-sm hover:bg-blue-600", active && "block h-10 opacity-50 items-center flex p-2")}>{String(30)}</span>
      <div className="flex font-medium py-1">{format(items[31])}</div>
      <div className="shadow-sm w-full bg-blue-500 text-sm font-bold py-1 opacity-50 grid">{format(items[32])}</div>
      <div className="shadow-sm bg-[#000] px-3">{format(items[33])}</div>
      <div className="block text-lg shadow-sm lg:grid-cols-3 justify-between p-2 m-[8px] h-[32px]">{format(items[34])}</div>
      <div className="py-1 justify-between bg-white md:flex">{format(items[35])}</div>
      <div className="gap-2 mb-4 m-[8px] p-4 bg-white">{format(items[36])}</div>
      <span className={cn("hidden px-3 rounded-md", active && "flex w-[16px] mt-[12px] m-[8px]")}>{String(37)}</span>
      <span className={cn("px-3 p-[4px] flex", active && "text-sm py-1 rounded-lg")}>{String(38)}</span>
      <div className="bg-[#fff] p-2 text-gray-700 lg:grid-cols-3 p-[4px]">{format(items[39])}</div>
    </div>
  );
}
