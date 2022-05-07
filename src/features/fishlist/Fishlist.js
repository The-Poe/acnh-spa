import React from "react";
export function FishList({ fishes }) {
  let fishlist = [];
  Object.keys(fishes).forEach((key, index) => {
    fishlist.push(fishes[key]);
  });
  return (
    <div className="w-5/6 flex justify-center md:flex flex-wrap mb-4 m-10 rounded mx-auto">
      {fishlist.map((fish) => (
        <div
          key={fish["id"]}
          class="bg-orange-100 w-full md:w-1/4 m-5 rounded overflow-hidden shadow-lg  relative flex flex-col"
        >
          <img
            class="w-full"
            src={fish["image_uri"]}
            alt={fish["file-name"] + "'s pic"}
          />
          <div class="px-6 py-4 h-full">
            <div class="font-bold text-xl mb-2">{fish["file-name"]}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
