import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";

const Pagination = ({ page, setPage, totalPages }) => {
  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const getNumbers = () => {
    const numbers = [];

    for (var i = 1; i <= totalPages; i++) {
      numbers.push(i);
    }

    return numbers;
  };

  const goToPage = (pageClicked) => {
    setPage(pageClicked);
  }

  return (
    <div>
      <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
        <div className="-mt-px w-0 flex-1 flex ml-3">
          {/* usar OnClick */}
          <button
            onClick={previousPage}
            className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            <ArrowNarrowLeftIcon
              className="mr-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Previous
          </button>
        </div>

        <div className="hidden md:-mt-px md:flex">
          {getNumbers().map((item) => {
            return (
              <button
                onClick={() => goToPage(item-1)}
                className={
                `hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium ${
                  item - 1 == page 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              > 
                {item}
              </button>
            );
          })}

        {/*Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"*/}
        </div>
        <div className="-mt-px w-0 flex-1 flex justify-end mr-3">
          <button
            onClick={nextPage}
            className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            Next
            <ArrowNarrowRightIcon
              className="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
