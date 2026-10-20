import { cn } from './cn';

export function Component8({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="py-1 shadow-sm p-4 items-center block bg-blue-500 text-gray-700 bg-[#fff]">{format(items[0])}</div>
      <span className={cn("border-gray-200 grid gap-[8px] justify-between block font-bold text-lg", active && "w-full lg:grid-cols-3 flex")}>{String(1)}</span>
      <div className="p-4 p-2 w-[16px]">{format(items[2])}</div>
      <div className="h-10 hidden font-bold p-4 flex">{format(items[3])}</div>
      <div className="border rounded-lg px-3 mt-2 text-lg rounded-[4px]">{format(items[4])}</div>
      <div className="hidden border text-gray-700 px-[16px] block grid font-bold flex">{format(items[5])}</div>
      <div className="p-[4px] gap-2 hover:bg-blue-600">{format(items[6])}</div>
      <div className="p-2 h-[32px] hover:bg-blue-600 block w-full grid justify-between">{format(items[7])}</div>
      <div className="items-center md:flex px-[16px] flex p-4 text-gray-700 gap-2">{format(items[8])}</div>
      <span className={cn("bg-white shadow-sm truncate lg:grid-cols-3", active && "items-center text-lg gap-4")}>{String(9)}</span>
      <div className="gap-4 justify-between py-1 p-4 truncate">{format(items[10])}</div>
      <div className="border-gray-200 text-lg px-[16px] flex px-3">{format(items[11])}</div>
      <span className={cn("items-center p-2 grid text-sm h-10 flex bg-blue-500", active && "text-sm bg-blue-500 flex")}>{String(12)}</span>
      <button onClick={() => handle(13, items.map((i) => i.id))}>x</button>
      <div className="text-sm p-2 justify-between flex font-bold">{format(items[14])}</div>
      <div className="mt-2 bg-blue-500 h-10 rounded-md md:flex h-[32px]">{format(items[15])}</div>
      <div className="h-10 items-center truncate md:flex p-2 shadow-sm">{format(items[16])}</div>
      <div className="lg:grid-cols-3 rounded-md opacity-50 truncate block px-3 border">{format(items[17])}</div>
      <div className="w-full gap-4 md:flex bg-blue-500 block hover:bg-blue-600 opacity-50 rounded-lg">{format(items[18])}</div>
      <span className={cn("bg-blue-500 flex hover:bg-blue-600 items-center truncate grid", active && "hover:bg-blue-600 items-center font-bold flex w-full border")}>{String(19)}</span>
      <div className="mt-[12px] border py-1 text-gray-700">{format(items[20])}</div>
      <div className="rounded-lg py-1 font-bold">{format(items[21])}</div>
      <div className="py-1 font-bold rounded-lg">{format(items[22])}</div>
      <button onClick={() => handle(23, items.map((i) => i.id))}>x</button>
      <span className={cn("py-1 font-medium text-lg mt-[12px] p-4 truncate", active && "text-lg gap-2 items-center")}>{String(24)}</span>
      <div className="bg-blue-500 grid text-sm bg-[#fff] opacity-50 text-lg h-[32px]">{format(items[25])}</div>
      <button onClick={() => handle(26, items.map((i) => i.id))}>x</button>
      <span className={cn("opacity-50 items-center text-lg px-3", active && "px-3 w-full truncate gap-2 p-2 md:flex")}>{String(27)}</span>
      <div className="items-center h-[32px] mb-4 bg-blue-500">{format(items[28])}</div>
      <div className="md:flex font-medium w-[16px] gap-4 mt-2 mt-[12px] p-2">{format(items[29])}</div>
      <div className="text-sm mt-2 w-full h-[32px] py-1 font-medium mb-4">{format(items[30])}</div>
      <div className="mb-4 w-full border rounded-md py-1 p-2 p-4 rounded-lg">{format(items[31])}</div>
      <span className={cn("md:flex rounded-[4px] flex text-lg border-gray-200 px-[16px] bg-[#000] p-4", active && "w-full py-1 truncate p-4 items-center grid px-[16px]")}>{String(32)}</span>
      <div className="truncate bg-white shadow-sm px-3 mt-2 text-lg rounded-lg border-gray-200">{format(items[33])}</div>
      <div className="h-10 mb-4 rounded-lg gap-4 block font-medium">{format(items[34])}</div>
      <span className={cn("px-[16px] bg-white px-3 rounded-lg w-full shadow-sm hover:bg-blue-600", active && "block h-10 opacity-50 items-center flex p-2")}>{String(35)}</span>
      <div className="flex font-medium py-1">{format(items[36])}</div>
      <div className="shadow-sm w-full bg-blue-500 text-sm font-bold py-1 opacity-50 grid">{format(items[37])}</div>
      <div className="shadow-sm bg-[#000] px-3">{format(items[38])}</div>
      <div className="block text-lg shadow-sm lg:grid-cols-3 justify-between p-2 m-[8px] h-[32px]">{format(items[39])}</div>
    </div>
  );
}
