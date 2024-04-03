import React, { useRef } from "react";
import { CloseIcon } from "../../../assets/icons/Icon";

export const Modal = ({ setIsOpen }) => {
  const onCloseModalHandler = () => {
    setIsOpen(false);
  };
  const inputRef = useRef("");
  return (
    <div className="fixed shadow-2xl inset-y-1/4 inset-x-[550px] flex gap-4 flex-col bg-white w-[320px] h-[400px] rounded-lg">
      <button
        onClick={onCloseModalHandler}
        className="px-4 py-2 text-gray-500 flex justify-end w-full h-11 text-2xl  bg-gray-100"
      >
        <CloseIcon />
      </button>
      <div className="p-5">
        <input
          className="pt-3 border-0 text-gray-600 text-2xl pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
          ref={inputRef}
          type="text"
          placeholder="Add title"
        />
      </div>
      <div className="px-5 text-gray-700 text-lg mb-8">
        <p className="mb-6">Select the topic</p>
        <div className="flex gap-2">
          <div className="rounded-full w-8 h-8 bg-[#1c48ff]"></div>
          <div className="rounded-full w-8 h-8 bg-[#1ba71b]"></div>
          <div className="rounded-full w-8 h-8 bg-[#ee2727]"></div>
          <div className="rounded-full w-8 h-8 bg-[#8b8b8f]"></div>
        </div>
      </div>
      <button className="ml-52 bg-[#94a3b8] px-3 py-2 w-24 text-[18px] text-white rounded">
        Save
      </button>
    </div>
  );
};
