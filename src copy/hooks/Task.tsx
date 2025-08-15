// import React, { useState } from "react";

// export default function Task() {
//   const [checkedItems, setCheckedItems] = useState([]);
//   const items = ["HTML", "CSS", "JavaScript", "React"];

//   function handleCheckboxChange(event) {
//     const name = event.target.name;
//     const isChecked = event.target.checked;

//     if (isChecked) {
      
//       if (checkedItems.length < 2) {
//         setCheckedItems([...checkedItems, name]);
//       } else {
//         alert("You can select a maximum of 2 skills only!");
//       }
//     } else {
      
//       setCheckedItems(checkedItems.filter((item) => item !== name));
//     }
//   }

//   return (
//     <div>
//       <h2>Select Skills (Max 2)</h2>
//       {items.map((item) => (
//         <label key={item} style={{ display: "block" }}>
//           <input
//             type="checkbox"
//             name={item}
//             checked={checkedItems.includes(item)}
//             onChange={handleCheckboxChange}
//           />
//           {item}
//         </label>
//       ))}

//       <p>
//         {checkedItems.length > 0
//           ? "✅ Selected: " + checkedItems.join(", ")
//           : "❌ No skills selected"}
//       </p>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function Task() {
  const [selected, setSelected] = useState([]);
  const items = ["HTML", "CSS", "JavaScript", "React"];

  function handleChange(e) {
    const value = e.target.name;
    const checked = e.target.checked;

    if (checked) {
      if (selected.length < 2) {
        setSelected([...selected, value]);
      } else {
        alert("You can select a maximum of 2 skills only!");
      }
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  }

  function removeItem(item) {
    setSelected(selected.filter((skill) => skill !== item));
  }

  return (
    <div>
      <h2>Select Skills (Max 2)</h2>
      {items.map((item) => (
        <label key={item}>
          <input
            type="checkbox"
            name={item}
            checked={selected.includes(item)}
            onChange={handleChange}
          />
          {item}
          <br />
        </label>
      ))}

      
      <div style={{ marginTop: "10px" }}>
        {selected.map((skill) => (
          <span
            key={skill}
            style={{
              display: "inline-block",
              padding: "5px 10px",
              margin: "5px",
              backgroundColor: "#d0ebff",
              borderRadius: "15px"
            }}
          >
            {skill}{" "}
            <span
              onClick={() => removeItem(skill)}
              style={{ cursor: "pointer", color: "red" }}
            >
              ❌
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}


