import { cn } from './cn';

export function Component311({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="truncate rounded-lg gap-2 mb-4 p-2 bg-blue-500">{format(items[0])}</div>
      <button onClick={() => handle(1, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(2, items.map((i) => i.id))}>x</button>
      <span className={cn("px-[16px] m-[8px] py-1", active && "px-3 flex bg-blue-500 text-lg py-1 h-10 p-2")}>{String(3)}</span>
      <div className="rounded-[4px] text-lg items-center border-gray-200 grid font-bold">{format(items[4])}</div>
      <span className={cn("hover:bg-blue-600 items-center rounded-lg shadow-sm truncate hidden bg-[#fff] p-2", active && "flex justify-between bg-[#000] w-[16px] shadow-sm border-gray-200")}>{String(5)}</span>
      <div className="truncate justify-between lg:grid-cols-3 gap-2 w-full md:flex font-bold">{format(items[6])}</div>
      <div className="m-[8px] hidden px-3 font-bold">{format(items[7])}</div>
      <div className="px-3 opacity-50 hidden p-[4px] rounded-md">{format(items[8])}</div>
      <div className="mt-2 border-gray-200 p-4">{format(items[9])}</div>
      <span className={cn("text-lg md:flex truncate bg-blue-500", active && "mb-4 gap-4 mt-2")}>{String(10)}</span>
      <div className="text-gray-700 justify-between h-10 items-center">{format(items[11])}</div>
      <div className="p-2 p-4 rounded-[4px]">{format(items[12])}</div>
      <button onClick={() => handle(13, items.map((i) => i.id))}>x</button>
      <span className={cn("p-4 bg-blue-500 truncate grid text-sm", active && "w-full font-bold px-3 md:flex flex")}>{String(14)}</span>
      <div className="px-3 h-[32px] py-1 block shadow-sm md:flex h-10">{format(items[15])}</div>
      <div className="hover:bg-blue-600 bg-blue-500 gap-4 px-3">{format(items[16])}</div>
      <div className="font-medium hover:bg-blue-600 justify-between rounded-lg w-full border p-2">{format(items[17])}</div>
      <span className={cn("rounded-md p-2 rounded-lg font-medium mb-4", active && "flex text-lg px-3 w-[16px]")}>{String(18)}</span>
      <div className="font-bold px-[16px] bg-blue-500">{format(items[19])}</div>
      <button onClick={() => handle(20, items.map((i) => i.id))}>x</button>
      <div className="p-2 text-gray-700 truncate bg-[#000] w-[16px] bg-blue-500">{format(items[21])}</div>
      <div className="justify-between hidden p-4 font-bold hover:bg-blue-600 text-sm px-3">{format(items[22])}</div>
      <div className="mb-4 md:flex grid bg-blue-500 bg-[#fff] rounded-md h-[32px]">{format(items[23])}</div>
      <div className="flex font-bold p-2 gap-2">{format(items[24])}</div>
      <div className="rounded-md opacity-50 flex gap-4 grid">{format(items[25])}</div>
      <button onClick={() => handle(26, items.map((i) => i.id))}>x</button>
      <div className="block w-full bg-white items-center rounded-lg justify-between md:flex">{format(items[27])}</div>
      <span className={cn("flex h-10 px-3 block text-sm font-medium md:flex border-gray-200", active && "hover:bg-blue-600 h-10 opacity-50")}>{String(28)}</span>
      <div className="bg-blue-500 font-bold opacity-50 text-lg items-center">{format(items[29])}</div>
      <div className="grid bg-white lg:grid-cols-3 h-[32px] font-bold">{format(items[30])}</div>
      <div className="hidden border text-gray-700 m-[8px] rounded-lg mb-4 text-lg">{format(items[31])}</div>
      <span className={cn("hover:bg-blue-600 hidden md:flex opacity-50 rounded-lg", active && "border-gray-200 w-full block px-3 grid justify-between")}>{String(32)}</span>
      <div className="shadow-sm p-4 mt-2 gap-4 text-gray-700">{format(items[33])}</div>
      <span className={cn("grid shadow-sm bg-white flex border p-4", active && "bg-[#fff] grid lg:grid-cols-3")}>{String(34)}</span>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <div className="hidden text-sm flex p-[4px]">{format(items[36])}</div>
      <div className="gap-2 w-full text-gray-700 mt-2">{format(items[37])}</div>
      <div className="hover:bg-blue-600 grid bg-white text-sm justify-between items-center h-[32px] rounded-lg">{format(items[38])}</div>
      <span className={cn("border-gray-200 justify-between w-full gap-2 text-sm", active && "py-1 border-gray-200 rounded-lg md:flex")}>{String(39)}</span>
    </div>
  );
}
