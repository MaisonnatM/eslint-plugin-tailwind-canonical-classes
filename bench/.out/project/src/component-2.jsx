import { cn } from './cn';

export function Component2({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="gap-4 mb-4 bg-[#fff]">{format(items[0])}</div>
      <span className={cn("md:flex hidden border py-1 text-lg shadow-sm justify-between", active && "mb-4 w-full m-[8px] h-10 bg-white p-4 gap-2 gap-4")}>{String(1)}</span>
      <span className={cn("opacity-50 w-full items-center p-2 border text-sm", active && "mb-4 p-4 hover:bg-blue-600 border gap-2")}>{String(2)}</span>
      <div className="py-1 text-gray-700 flex opacity-50">{format(items[3])}</div>
      <div className="grid px-3 border">{format(items[4])}</div>
      <span className={cn("block py-1 border flex p-4 lg:grid-cols-3 text-sm text-lg", active && "px-3 bg-blue-500 px-[16px] h-10 rounded-md")}>{String(5)}</span>
      <div className="opacity-50 gap-4 block p-2">{format(items[6])}</div>
      <div className="hover:bg-blue-600 w-full font-medium text-lg p-2">{format(items[7])}</div>
      <button onClick={() => handle(8, items.map((i) => i.id))}>x</button>
      <span className={cn("p-4 rounded-[4px] items-center px-3", active && "font-bold h-10 m-[8px] text-lg justify-between px-[16px]")}>{String(9)}</span>
      <div className="block hidden flex">{format(items[10])}</div>
      <div className="bg-white rounded-md md:flex gap-2 truncate py-1 bg-blue-500 w-full">{format(items[11])}</div>
      <div className="m-[8px] border-gray-200 hover:bg-blue-600 p-4 lg:grid-cols-3 md:flex mt-2">{format(items[12])}</div>
      <button onClick={() => handle(13, items.map((i) => i.id))}>x</button>
      <div className="rounded-md h-10 grid text-gray-700 font-medium px-3 shadow-sm">{format(items[14])}</div>
      <span className={cn("shadow-sm justify-between p-[4px]", active && "gap-4 flex gap-[8px]")}>{String(15)}</span>
      <span className={cn("truncate mt-[12px] border-gray-200 mb-4 rounded-lg gap-4", active && "gap-2 text-lg mt-2 rounded-md items-center gap-4 grid lg:grid-cols-3")}>{String(16)}</span>
      <div className="shadow-sm h-10 bg-white lg:grid-cols-3 font-bold gap-2 justify-between py-1">{format(items[17])}</div>
      <div className="border rounded-lg bg-[#000] gap-4 py-1 border-gray-200 text-lg items-center">{format(items[18])}</div>
      <div className="text-sm grid p-2 opacity-50 hidden rounded-lg">{format(items[19])}</div>
      <button onClick={() => handle(20, items.map((i) => i.id))}>x</button>
      <div className="w-full lg:grid-cols-3 font-bold p-[4px] hover:bg-blue-600 justify-between rounded-md font-medium">{format(items[21])}</div>
      <div className="w-[16px] block lg:grid-cols-3">{format(items[22])}</div>
      <span className={cn("p-2 text-sm border rounded-[4px]", active && "flex rounded-[4px] items-center bg-blue-500 lg:grid-cols-3 border")}>{String(23)}</span>
      <span className={cn("rounded-md border p-2 mb-4 font-medium", active && "md:flex block shadow-sm border-gray-200")}>{String(24)}</span>
      <div className="rounded-md mt-[12px] hidden gap-4 h-10 bg-[#000]">{format(items[25])}</div>
      <span className={cn("block gap-[8px] hidden", active && "gap-4 truncate hover:bg-blue-600 block bg-white rounded-[4px] flex py-1")}>{String(26)}</span>
      <div className="bg-white justify-between p-2">{format(items[27])}</div>
      <span className={cn("py-1 gap-2 items-center", active && "opacity-50 px-3 gap-2 text-sm truncate flex p-4 w-full")}>{String(28)}</span>
      <div className="mb-4 text-sm items-center rounded-lg mt-2 md:flex font-bold h-10">{format(items[29])}</div>
      <button onClick={() => handle(30, items.map((i) => i.id))}>x</button>
      <div className="items-center p-[4px] hover:bg-blue-600 p-4 mt-2 mt-[12px]">{format(items[31])}</div>
      <div className="py-1 text-sm rounded-[4px] px-3 px-[16px] mt-2">{format(items[32])}</div>
      <span className={cn("font-bold border-gray-200 mb-4 text-lg gap-[8px]", active && "truncate hover:bg-blue-600 items-center lg:grid-cols-3 p-4 opacity-50 hidden")}>{String(33)}</span>
      <span className={cn("p-4 rounded-md hover:bg-blue-600 text-sm md:flex border-gray-200 p-[4px]", active && "hover:bg-blue-600 bg-blue-500 text-gray-700 opacity-50 font-bold px-[16px]")}>{String(34)}</span>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <span className={cn("font-medium gap-2 border p-4 bg-white bg-[#fff] grid", active && "m-[8px] rounded-[4px] text-lg h-[32px] truncate flex bg-white rounded-md")}>{String(36)}</span>
      <div className="font-medium md:flex gap-2 items-center px-3 gap-4 h-[32px]">{format(items[37])}</div>
      <span className={cn("font-bold p-2 border items-center gap-2 opacity-50 text-sm", active && "font-bold truncate grid")}>{String(38)}</span>
      <div className="px-3 text-gray-700 border-gray-200">{format(items[39])}</div>
    </div>
  );
}
