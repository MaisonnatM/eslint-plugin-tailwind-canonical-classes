import { cn } from './cn';

export function Component229({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("py-1 p-2 w-full hover:bg-blue-600", active && "items-center py-1 flex p-2 text-lg block")}>{String(0)}</span>
      <span className={cn("truncate border-gray-200 items-center flex h-10", active && "py-1 md:flex gap-2 mt-2 h-10 grid lg:grid-cols-3 text-gray-700")}>{String(1)}</span>
      <div className="text-lg m-[8px] items-center bg-white font-medium">{format(items[2])}</div>
      <div className="p-4 px-[16px] gap-[8px] bg-blue-500 gap-2 bg-[#fff]">{format(items[3])}</div>
      <div className="font-medium text-lg gap-4 text-sm items-center w-[16px]">{format(items[4])}</div>
      <div className="truncate rounded-lg gap-2 mb-4 p-2 bg-blue-500">{format(items[5])}</div>
      <button onClick={() => handle(6, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(7, items.map((i) => i.id))}>x</button>
      <span className={cn("px-[16px] m-[8px] py-1", active && "px-3 flex bg-blue-500 text-lg py-1 h-10 p-2")}>{String(8)}</span>
      <div className="rounded-[4px] text-lg items-center border-gray-200 grid font-bold">{format(items[9])}</div>
      <span className={cn("hover:bg-blue-600 items-center rounded-lg shadow-sm truncate hidden bg-[#fff] p-2", active && "flex justify-between bg-[#000] w-[16px] shadow-sm border-gray-200")}>{String(10)}</span>
      <div className="truncate justify-between lg:grid-cols-3 gap-2 w-full md:flex font-bold">{format(items[11])}</div>
      <div className="m-[8px] hidden px-3 font-bold">{format(items[12])}</div>
      <div className="px-3 opacity-50 hidden p-[4px] rounded-md">{format(items[13])}</div>
      <div className="mt-2 border-gray-200 p-4">{format(items[14])}</div>
      <span className={cn("text-lg md:flex truncate bg-blue-500", active && "mb-4 gap-4 mt-2")}>{String(15)}</span>
      <div className="text-gray-700 justify-between h-10 items-center">{format(items[16])}</div>
      <div className="p-2 p-4 rounded-[4px]">{format(items[17])}</div>
      <button onClick={() => handle(18, items.map((i) => i.id))}>x</button>
      <span className={cn("p-4 bg-blue-500 truncate grid text-sm", active && "w-full font-bold px-3 md:flex flex")}>{String(19)}</span>
      <div className="px-3 h-[32px] py-1 block shadow-sm md:flex h-10">{format(items[20])}</div>
      <div className="hover:bg-blue-600 bg-blue-500 gap-4 px-3">{format(items[21])}</div>
      <div className="font-medium hover:bg-blue-600 justify-between rounded-lg w-full border p-2">{format(items[22])}</div>
      <span className={cn("rounded-md p-2 rounded-lg font-medium mb-4", active && "flex text-lg px-3 w-[16px]")}>{String(23)}</span>
      <div className="font-bold px-[16px] bg-blue-500">{format(items[24])}</div>
      <button onClick={() => handle(25, items.map((i) => i.id))}>x</button>
      <div className="p-2 text-gray-700 truncate bg-[#000] w-[16px] bg-blue-500">{format(items[26])}</div>
      <div className="justify-between hidden p-4 font-bold hover:bg-blue-600 text-sm px-3">{format(items[27])}</div>
      <div className="mb-4 md:flex grid bg-blue-500 bg-[#fff] rounded-md h-[32px]">{format(items[28])}</div>
      <div className="flex font-bold p-2 gap-2">{format(items[29])}</div>
      <div className="rounded-md opacity-50 flex gap-4 grid">{format(items[30])}</div>
      <button onClick={() => handle(31, items.map((i) => i.id))}>x</button>
      <div className="block w-full bg-white items-center rounded-lg justify-between md:flex">{format(items[32])}</div>
      <span className={cn("flex h-10 px-3 block text-sm font-medium md:flex border-gray-200", active && "hover:bg-blue-600 h-10 opacity-50")}>{String(33)}</span>
      <div className="bg-blue-500 font-bold opacity-50 text-lg items-center">{format(items[34])}</div>
      <div className="grid bg-white lg:grid-cols-3 h-[32px] font-bold">{format(items[35])}</div>
      <div className="hidden border text-gray-700 m-[8px] rounded-lg mb-4 text-lg">{format(items[36])}</div>
      <span className={cn("hover:bg-blue-600 hidden md:flex opacity-50 rounded-lg", active && "border-gray-200 w-full block px-3 grid justify-between")}>{String(37)}</span>
      <div className="shadow-sm p-4 mt-2 gap-4 text-gray-700">{format(items[38])}</div>
      <span className={cn("grid shadow-sm bg-white flex border p-4", active && "bg-[#fff] grid lg:grid-cols-3")}>{String(39)}</span>
    </div>
  );
}
