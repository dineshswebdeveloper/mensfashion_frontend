import React, { Fragment, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function SearchComponent() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 2) {
      navigate(`/products/search/?search=${search}`);
    } else {
      toast.error("Enter minimun 3 Character", {
        position: "bottom-center",
        autoClose: 3000,
        closeOnClick: true,
        theme: "dark",
        pauseOnHover: true,
      });
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Fragment>
      <form
        className=" d-flex border rounded-10 ps-2 bg-white"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="form-control p-1 border-0 shadow-none"
          onChange={handleChange}
        />
        <button className="btn btn-danger py-0 px-2 text-white">
          <CiSearch />
        </button>
      </form>
    </Fragment>
  );
}

export default SearchComponent;
