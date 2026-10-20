import { cn } from './cn';

export function Component74({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="mt-[12px] border py-1 text-gray-700">{format(items[0])}</div>
      <div className="rounded-lg py-1 font-bold">{format(items[1])}</div>
      <div className="py-1 font-bold rounded-lg">{format(items[2])}</div>
      <button onClick={() => handle(3, items.map((i) => i.id))}>x</button>
      <span className={cn("py-1 font-medium text-lg mt-[12px] p-4 truncate", active && "text-lg gap-2 items-center")}>{String(4)}</span>
      <div className="bg-blue-500 grid text-sm bg-[#fff] opacity-50 text-lg h-[32px]">{format(items[5])}</div>
      <button onClick={() => handle(6, items.map((i) => i.id))}>x</button>
      <span className={cn("opacity-50 items-center text-lg px-3", active && "px-3 w-full truncate gap-2 p-2 md:flex")}>{String(7)}</span>
      <div className="items-center h-[32px] mb-4 bg-blue-500">{format(items[8])}</div>
      <div className="md:flex font-medium w-[16px] gap-4 mt-2 mt-[12px] p-2">{format(items[9])}</div>
      <div className="text-sm mt-2 w-full h-[32px] py-1 font-medium mb-4">{format(items[10])}</div>
      <div className="mb-4 w-full border rounded-md py-1 p-2 p-4 rounded-lg">{format(items[11])}</div>
      <span className={cn("md:flex rounded-[4px] flex text-lg border-gray-200 px-[16px] bg-[#000] p-4", active && "w-full py-1 truncate p-4 items-center grid px-[16px]")}>{String(12)}</span>
      <div className="truncate bg-white shadow-sm px-3 mt-2 text-lg rounded-lg border-gray-200">{format(items[13])}</div>
      <div className="h-10 mb-4 rounded-lg gap-4 block font-medium">{format(items[14])}</div>
      <span className={cn("px-[16px] bg-white px-3 rounded-lg w-full shadow-sm hover:bg-blue-600", active && "block h-10 opacity-50 items-center flex p-2")}>{String(15)}</span>
      <div className="flex font-medium py-1">{format(items[16])}</div>
      <div className="shadow-sm w-full bg-blue-500 text-sm font-bold py-1 opacity-50 grid">{format(items[17])}</div>
      <div className="shadow-sm bg-[#000] px-3">{format(items[18])}</div>
      <div className="block text-lg shadow-sm lg:grid-cols-3 justify-between p-2 m-[8px] h-[32px]">{format(items[19])}</div>
      <div className="py-1 justify-between bg-white md:flex">{format(items[20])}</div>
      <div className="gap-2 mb-4 m-[8px] p-4 bg-white">{format(items[21])}</div>
      <span className={cn("hidden px-3 rounded-md", active && "flex w-[16px] mt-[12px] m-[8px]")}>{String(22)}</span>
      <span className={cn("px-3 p-[4px] flex", active && "text-sm py-1 rounded-lg")}>{String(23)}</span>
      <div className="bg-[#fff] p-2 text-gray-700 lg:grid-cols-3 p-[4px]">{format(items[24])}</div>
      <button onClick={() => handle(25, items.map((i) => i.id))}>x</button>
      <div className="gap-4 hidden rounded-md py-1 bg-white w-full border">{format(items[26])}</div>
      <div className="hidden p-4 font-medium rounded-lg p-[4px] grid justify-between">{format(items[27])}</div>
      <span className={cn("bg-white mt-[12px] w-full m-[8px] text-gray-700 shadow-sm", active && "font-bold p-4 flex md:flex shadow-sm py-1 text-lg")}>{String(28)}</span>
      <div className="md:flex grid gap-4 mb-4">{format(items[29])}</div>
      <span className={cn("border-gray-200 text-lg flex lg:grid-cols-3 bg-white items-center rounded-lg grid", active && "truncate block flex p-4 py-1 hover:bg-blue-600 h-10 lg:grid-cols-3")}>{String(30)}</span>
      <div className="bg-white gap-2 bg-[#fff] flex shadow-sm lg:grid-cols-3 hidden text-sm">{format(items[31])}</div>
      <div className="gap-4 border opacity-50 text-sm shadow-sm px-3 justify-between">{format(items[32])}</div>
      <div className="block p-4 gap-[8px] text-sm gap-2">{format(items[33])}</div>
      <div className="hover:bg-blue-600 p-2 grid font-medium mb-4">{format(items[34])}</div>
      <div className="md:flex font-medium grid hidden gap-4 mt-2">{format(items[35])}</div>
      <div className="rounded-lg justify-between px-3 bg-white gap-4">{format(items[36])}</div>
      <span className={cn("justify-between gap-4 opacity-50 bg-[#fff] px-3", active && "font-bold m-[8px] hover:bg-blue-600 p-2 text-sm")}>{String(37)}</span>
      <span className={cn("px-3 w-[16px] text-lg border-gray-200 mb-4", active && "flex bg-[#000] border-gray-200 text-lg h-[32px]")}>{String(38)}</span>
      <button onClick={() => handle(39, items.map((i) => i.id))}>x</button>
    </div>
  );
}
