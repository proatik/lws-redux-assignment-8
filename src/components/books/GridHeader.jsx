import { useDispatch, useSelector } from "react-redux";

// RTK actions.
import { changeStatus } from "../../redux/features/filters/filtersSlice";

const GridHeader = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.filters.status);

  const changeStatusHandler = (status) => {
    dispatch(changeStatus(status));
  };

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => changeStatusHandler("all")}
          className={`lws-filter-btn ${active === "all" && "active-filter"}`}
        >
          All
        </button>
        <button
          onClick={() => changeStatusHandler("featured")}
          className={`lws-filter-btn ${
            active === "featured" && "active-filter"
          }`}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default GridHeader;
