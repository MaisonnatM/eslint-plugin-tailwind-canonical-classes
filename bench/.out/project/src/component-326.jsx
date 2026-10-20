import { cn } from './cn';

export function Component326({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <button onClick={() => handle(0, items.map((i) => i.id))}>x</button>
      <div className="font-bold justify-between flex mb-4">{format(items[1])}</div>
      <span className={cn("truncate text-sm grid p-4", active && "h-[32px] truncate items-center text-gray-700 bg-blue-500 flex hidden")}>{String(2)}</span>
      <div className="h-10 opacity-50 mt-2 bg-white border lg:grid-cols-3">{format(items[3])}</div>
      <div className="bg-blue-500 items-center truncate">{format(items[4])}</div>
      <span className={cn("text-sm bg-blue-500 font-medium justify-between mt-2 h-10 bg-[#fff] text-lg", active && "bg-[#fff] m-[8px] px-[16px] h-10")}>{String(5)}</span>
      <span className={cn("gap-4 mt-[12px] p-4", active && "justify-between truncate text-lg")}>{String(6)}</span>
      <button onClick={() => handle(7, items.map((i) => i.id))}>x</button>
      <div className="mt-2 rounded-md w-full shadow-sm">{format(items[8])}</div>
      <div className="h-10 py-1 grid gap-2 bg-blue-500 font-medium">{format(items[9])}</div>
      <div className="text-sm gap-4 p-4 text-lg px-3">{format(items[10])}</div>
      <span className={cn("bg-[#000] opacity-50 w-full border font-bold gap-2 p-4 px-3", active && "font-medium hidden rounded-lg font-bold")}>{String(11)}</span>
      <div className="gap-[8px] md:flex h-10 bg-white gap-2 items-center">{format(items[12])}</div>
      <div className="p-2 w-full font-medium grid mt-2 border">{format(items[13])}</div>
      <span className={cn("grid items-center p-2 w-full truncate text-gray-700 p-[4px]", active && "border-gray-200 rounded-lg gap-2 text-gray-700 items-center flex")}>{String(14)}</span>
      <button onClick={() => handle(15, items.map((i) => i.id))}>x</button>
      <span className={cn("mb-4 lg:grid-cols-3 h-10 text-gray-700 hover:bg-blue-600 bg-blue-500", active && "font-bold gap-4 hidden")}>{String(16)}</span>
      <div className="p-[4px] font-bold block">{format(items[17])}</div>
      <span className={cn("rounded-lg bg-white h-10", active && "hidden text-gray-700 text-sm border-gray-200 lg:grid-cols-3")}>{String(18)}</span>
      <div className="rounded-md justify-between items-center p-4 h-10 text-lg bg-white flex">{format(items[19])}</div>
      <span className={cn("mt-2 bg-blue-500 block", active && "hidden bg-[#fff] p-2 w-full bg-blue-500 mt-2")}>{String(20)}</span>
      <div className="py-1 grid p-4 bg-white gap-4 truncate hidden">{format(items[21])}</div>
      <div className="justify-between rounded-lg gap-2 truncate bg-[#fff] opacity-50">{format(items[22])}</div>
      <div className="block justify-between hidden flex h-10">{format(items[23])}</div>
      <span className={cn("font-bold text-lg flex py-1 text-sm w-full", active && "font-medium w-full text-gray-700 px-3 border truncate lg:grid-cols-3")}>{String(24)}</span>
      <div className="justify-between gap-[8px] py-1 rounded-lg grid h-10">{format(items[25])}</div>
      <div className="rounded-[4px] shadow-sm gap-4 px-3 mb-4 m-[8px]">{format(items[26])}</div>
      <div className="text-lg p-[4px] mb-4">{format(items[27])}</div>
      <span className={cn("truncate justify-between p-2 shadow-sm mb-4 rounded-lg w-full opacity-50", active && "m-[8px] text-lg h-10 hidden shadow-sm p-4 p-2")}>{String(28)}</span>
      <div className="rounded-lg text-gray-700 gap-4 opacity-50 font-bold items-center py-1 gap-2">{format(items[29])}</div>
      <button onClick={() => handle(30, items.map((i) => i.id))}>x</button>
      <div className="block h-10 hidden opacity-50 flex w-full bg-white">{format(items[31])}</div>
      <div className="text-sm opacity-50 gap-4 font-medium">{format(items[32])}</div>
      <button onClick={() => handle(33, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(34, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <div className="gap-2 gap-4 px-3 m-[8px] mb-4">{format(items[36])}</div>
      <button onClick={() => handle(37, items.map((i) => i.id))}>x</button>
      <div className="font-bold gap-[8px] rounded-[4px] mt-2 block grid gap-4 truncate">{format(items[38])}</div>
      <span className={cn("py-1 h-10 font-bold lg:grid-cols-3", active && "text-sm h-10 text-gray-700 border bg-blue-500 bg-[#fff] p-2")}>{String(39)}</span>
    </div>
  );
}
