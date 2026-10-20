import { cn } from './cn';

export function Component41({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <button onClick={() => handle(0, items.map((i) => i.id))}>x</button>
      <div className="border-gray-200 text-lg px-[16px] flex px-3">{format(items[1])}</div>
      <span className={cn("items-center p-2 grid text-sm h-10 flex bg-blue-500", active && "text-sm bg-blue-500 flex")}>{String(2)}</span>
      <button onClick={() => handle(3, items.map((i) => i.id))}>x</button>
      <div className="text-sm p-2 justify-between flex font-bold">{format(items[4])}</div>
      <div className="mt-2 bg-blue-500 h-10 rounded-md md:flex h-[32px]">{format(items[5])}</div>
      <div className="h-10 items-center truncate md:flex p-2 shadow-sm">{format(items[6])}</div>
      <div className="lg:grid-cols-3 rounded-md opacity-50 truncate block px-3 border">{format(items[7])}</div>
      <div className="w-full gap-4 md:flex bg-blue-500 block hover:bg-blue-600 opacity-50 rounded-lg">{format(items[8])}</div>
      <span className={cn("bg-blue-500 flex hover:bg-blue-600 items-center truncate grid", active && "hover:bg-blue-600 items-center font-bold flex w-full border")}>{String(9)}</span>
      <div className="mt-[12px] border py-1 text-gray-700">{format(items[10])}</div>
      <div className="rounded-lg py-1 font-bold">{format(items[11])}</div>
      <div className="py-1 font-bold rounded-lg">{format(items[12])}</div>
      <button onClick={() => handle(13, items.map((i) => i.id))}>x</button>
      <span className={cn("py-1 font-medium text-lg mt-[12px] p-4 truncate", active && "text-lg gap-2 items-center")}>{String(14)}</span>
      <div className="bg-blue-500 grid text-sm bg-[#fff] opacity-50 text-lg h-[32px]">{format(items[15])}</div>
      <button onClick={() => handle(16, items.map((i) => i.id))}>x</button>
      <span className={cn("opacity-50 items-center text-lg px-3", active && "px-3 w-full truncate gap-2 p-2 md:flex")}>{String(17)}</span>
      <div className="items-center h-[32px] mb-4 bg-blue-500">{format(items[18])}</div>
      <div className="md:flex font-medium w-[16px] gap-4 mt-2 mt-[12px] p-2">{format(items[19])}</div>
      <div className="text-sm mt-2 w-full h-[32px] py-1 font-medium mb-4">{format(items[20])}</div>
      <div className="mb-4 w-full border rounded-md py-1 p-2 p-4 rounded-lg">{format(items[21])}</div>
      <span className={cn("md:flex rounded-[4px] flex text-lg border-gray-200 px-[16px] bg-[#000] p-4", active && "w-full py-1 truncate p-4 items-center grid px-[16px]")}>{String(22)}</span>
      <div className="truncate bg-white shadow-sm px-3 mt-2 text-lg rounded-lg border-gray-200">{format(items[23])}</div>
      <div className="h-10 mb-4 rounded-lg gap-4 block font-medium">{format(items[24])}</div>
      <span className={cn("px-[16px] bg-white px-3 rounded-lg w-full shadow-sm hover:bg-blue-600", active && "block h-10 opacity-50 items-center flex p-2")}>{String(25)}</span>
      <div className="flex font-medium py-1">{format(items[26])}</div>
      <div className="shadow-sm w-full bg-blue-500 text-sm font-bold py-1 opacity-50 grid">{format(items[27])}</div>
      <div className="shadow-sm bg-[#000] px-3">{format(items[28])}</div>
      <div className="block text-lg shadow-sm lg:grid-cols-3 justify-between p-2 m-[8px] h-[32px]">{format(items[29])}</div>
      <div className="py-1 justify-between bg-white md:flex">{format(items[30])}</div>
      <div className="gap-2 mb-4 m-[8px] p-4 bg-white">{format(items[31])}</div>
      <span className={cn("hidden px-3 rounded-md", active && "flex w-[16px] mt-[12px] m-[8px]")}>{String(32)}</span>
      <span className={cn("px-3 p-[4px] flex", active && "text-sm py-1 rounded-lg")}>{String(33)}</span>
      <div className="bg-[#fff] p-2 text-gray-700 lg:grid-cols-3 p-[4px]">{format(items[34])}</div>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <div className="gap-4 hidden rounded-md py-1 bg-white w-full border">{format(items[36])}</div>
      <div className="hidden p-4 font-medium rounded-lg p-[4px] grid justify-between">{format(items[37])}</div>
      <span className={cn("bg-white mt-[12px] w-full m-[8px] text-gray-700 shadow-sm", active && "font-bold p-4 flex md:flex shadow-sm py-1 text-lg")}>{String(38)}</span>
      <div className="md:flex grid gap-4 mb-4">{format(items[39])}</div>
    </div>
  );
}
