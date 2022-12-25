import { NumberS } from "../../functions/utils";

export const ListItemsProduct = ({ products, setProducts }) => {
  function updateCountProductById(id, value) {
    products.forEach((product) => {
      if (product.id === id) {
        setProducts((currentItem) =>
          currentItem.map((x) =>
            x.id === id
              ? {
                  ...x,
                  count: value,
                }
              : x
          )
        );
      }
    });
  }
  function decrement(e) {
    let input = document.getElementById(e);
    let value = Number(input.value);
    if (value <= 1) {
      return (input.value = 1);
    }
    value--;
    updateCountProductById(e, value);
  }
  function remove(e) {
    setProducts(products.filter((v) => v.id != e));
  }
  function increment(e) {
    let input = document.getElementById(e);
    let value = Number(input.value);
    if (value < 0) {
      return (input.value = 0);
    }
    value++;
    updateCountProductById(e, value);
    input.value = value;
  }
  return (
    <ul role="list" className="divide-y  divide-gray-200 dark:divide-gray-700">
      {products.map((data, index) => (
        <>
          <li className="py-3 px-2 sm:py-4 w-full " key={index}>
            <div className="grid grid-cols-12">
              <div className=" col-span-2 ">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {data.name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="text-base font-semibold text-center text-gray-900 dark:text-white col-start-7">
                {new NumberS(data.tax).getValueFormat()}%
              </div>

              <div className=" text-base font-semibold text-center text-gray-900 dark:text-white col-start-8">
                {new NumberS(data.price).getValueFormat()}
              </div>
              <div className=" text-base font-semibold text-center text-gray-900 dark:text-white col-start-9">
                {new NumberS(data.descount).getValueFormat()}
              </div>
              <div className=" text-base font-semibold text-center text-gray-900 dark:text-white col-start-10">
                {new NumberS(data.price)
                  .multiple(data.count)
                  .subtract(data.descount)
                  .getValueFormat()}
              </div>

              <div
                className="flex flex-row h-10 rounded-lg  bg-transparent mt-1 col-span-2 col-start-11"
                key={data.id}
              >
                <button
                  type="button"
                  className="text-white bg-red-900 mr-2  hover:scale-110 p-1 rounded-lg  "
                  onClick={() => remove(data.id)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
                      fill="currentColor"
                    />
                    <path d="M9 9H11V17H9V9Z" fill="currentColor" />
                    <path d="M13 9H15V17H13V9Z" fill="currentColor" />
                  </svg>
                </button>

                <button
                  data-action="decrement"
                  onClick={() => decrement(data.id)}
                  className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-12 rounded-l cursor-pointer outline-none"
                >
                  <span className="m-auto text-2xl font-thin">-</span>
                </button>

                <input
                  type="number"
                  disabled=""
                  className="focus:outline-none text-center w-12 bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
                  name="custom-input-number"
                  id={data.id}
                  value={data.count}
                  readOnly={true}
                />

                <button
                  onClick={() => increment(data.id)}
                  data-action="increment"
                  className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-12 rounded-r cursor-pointer"
                >
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
          </li>
        </>
      ))}
    </ul>
  );
};
