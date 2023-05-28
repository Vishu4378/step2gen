import React, { useState, useEffect } from "react";

export default function About() {
  const [value, setvalue] = useState<string>("");

  useEffect(() => {
    function show() {
      console.log("useEffect mount", value);
    }
    show();

    return function () {
      console.log("value after", value);
    };
  }, [value]);

  const str = "string";

  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={(e) => {
          var letters = /^[A-Za-z]+$/;
          if (e.target.value.match(letters)) {
            setvalue(e.target.value);
          }
        }}
      ></input>

      {/* <button onClick={() => setvalue(value + 1)} className="">
        value
      </button> */}
    </div>
  );
}
