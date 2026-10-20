import { cn } from './cn';

export function Component6({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <button onClick={() => handle(0, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(1, items.map((i) => i.id))}>x</button>
      <div className="bg-blue-500 p-4 bg-[#fff] border gap-2 hidden bg-white font-medium">{format(items[2])}</div>
      <div className="mb-4 md:flex block">{format(items[3])}</div>
      <div className="text-gray-700 p-[4px] w-[16px] px-3 md:flex rounded-md">{format(items[4])}</div>
      <span className={cn("justify-between items-center text-gray-700 flex block shadow-sm py-1 h-10", active && "gap-2 w-[16px] lg:grid-cols-3 text-sm mb-4 flex truncate md:flex")}>{String(5)}</span>
      <div className="opacity-50 mb-4 text-sm bg-blue-500">{format(items[6])}</div>
      <span className={cn("w-[16px] hidden grid gap-2 text-lg font-bold items-center", active && "lg:grid-cols-3 p-2 bg-white rounded-md block text-gray-700")}>{String(7)}</span>
      <span className={cn("text-sm font-bold grid md:flex p-4", active && "flex lg:grid-cols-3 font-bold mt-2 hover:bg-blue-600 shadow-sm")}>{String(8)}</span>
      <div className="items-center border-gray-200 opacity-50 m-[8px] rounded-md text-gray-700 bg-white p-[4px]">{format(items[9])}</div>
      <div className="border py-1 p-2 hover:bg-blue-600 font-bold md:flex w-full flex">{format(items[10])}</div>
      <div className="truncate bg-blue-500 rounded-lg">{format(items[11])}</div>
      <button onClick={() => handle(12, items.map((i) => i.id))}>x</button>
      <span className={cn("border-gray-200 flex h-10 gap-4 block font-bold p-4 h-[32px]", active && "p-4 flex truncate mt-2 hidden text-lg")}>{String(13)}</span>
      <span className={cn("font-medium p-2 grid rounded-lg py-1", active && "opacity-50 shadow-sm gap-[8px] p-4 flex")}>{String(14)}</span>
      <div className="mb-4 border-gray-200 p-4 py-1 w-full mt-2 h-10">{format(items[15])}</div>
      <div className="rounded-lg text-lg hover:bg-blue-600 gap-[8px]">{format(items[16])}</div>
      <div className="font-medium lg:grid-cols-3 text-gray-700 grid w-full truncate hidden">{format(items[17])}</div>
      <span className={cn("text-lg md:flex flex mb-4 grid rounded-[4px] px-3 p-2", active && "justify-between shadow-sm bg-[#000] w-full text-sm gap-[8px]")}>{String(18)}</span>
      <div className="grid bg-blue-500 border">{format(items[19])}</div>
      <div className="items-center mb-4 font-bold shadow-sm">{format(items[20])}</div>
      <span className={cn("block truncate shadow-sm items-center rounded-lg flex", active && "mb-4 shadow-sm w-full bg-white p-[4px]")}>{String(21)}</span>
      <div className="m-[8px] rounded-lg flex font-medium">{format(items[22])}</div>
      <div className="border-gray-200 opacity-50 hidden font-bold rounded-md hover:bg-blue-600">{format(items[23])}</div>
      <div className="mb-4 text-gray-700 font-medium text-sm font-bold">{format(items[24])}</div>
      <div className="border-gray-200 grid truncate text-sm">{format(items[25])}</div>
      <span className={cn("bg-white text-lg h-10 border-gray-200 justify-between", active && "border grid mb-4 opacity-50 text-sm")}>{String(26)}</span>
      <div className="bg-[#fff] p-4 font-bold">{format(items[27])}</div>
      <div className="bg-[#fff] rounded-[4px] hover:bg-blue-600 lg:grid-cols-3 w-full flex block hidden">{format(items[28])}</div>
      <div className="px-3 gap-2 shadow-sm border p-4 lg:grid-cols-3 gap-[8px]">{format(items[29])}</div>
      <div className="px-3 text-sm p-2 bg-white mt-2 hidden">{format(items[30])}</div>
      <div className="gap-2 p-2 mt-[12px]">{format(items[31])}</div>
      <button onClick={() => handle(32, items.map((i) => i.id))}>x</button>
      <span className={cn("rounded-md flex px-3 border", active && "w-full border-gray-200 hover:bg-blue-600 rounded-md items-center text-sm")}>{String(33)}</span>
      <span className={cn("rounded-md p-[4px] h-[32px] rounded-[4px] truncate gap-4 mt-[12px] shadow-sm", active && "flex py-1 w-full justify-between text-gray-700 h-10 lg:grid-cols-3")}>{String(34)}</span>
      <div className="shadow-sm px-3 text-sm border-gray-200 m-[8px] mt-2">{format(items[35])}</div>
      <div className="border gap-[8px] flex font-medium">{format(items[36])}</div>
      <div className="gap-2 rounded-lg w-full">{format(items[37])}</div>
      <div className="h-[32px] mt-2 rounded-md bg-blue-500 text-gray-700 px-3 font-medium font-bold">{format(items[38])}</div>
      <div className="gap-2 text-gray-700 md:flex font-bold bg-white gap-[8px] text-sm">{format(items[39])}</div>
    </div>
  );
}
