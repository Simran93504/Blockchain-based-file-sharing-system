import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
<<<<<<< HEAD
  const getdata = async () => {
    let dataArray = [];
=======
>>>>>>> eda6023bb9eb2f2d8a92c70e5cfcb46007a554b0
  

  const getdata = async () => {
    const Otheraddress = document.querySelector(".address").value;
    try{
      let dataArray = [];
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
      } else {
        await contract.allow(account);
        dataArray = await contract.display(account);
      }
  
      if (dataArray.length > 0) {
        const str = dataArray.toString();
        const str_array = str.split(",");
        const images = str_array.map((item, i) => {
          return (
            <a href={item} key={i} target="_blank" rel="noreferrer">
              <img
                key={i}
                src={item}
                alt="new"
                className="image-list"
              ></img>
            </a>
          );
        });
        setData(images);
      } else {
        alert("No image to display");
      }
    } catch (e) {
      alert("You don't have access");
    }
  };
  

  return (
    <>
      <div className="image-list">{data}</div>
      <input type="text" placeholder="Enter Address" className="address"></input>

      <button className="center button" onClick={getdata}>
        Get Data
      </button>
    </>
  );
};


export default Display;

