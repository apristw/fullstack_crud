import { useEffect, useState } from "react";
import axios from "axios";

const RenderTable = () => {
  const [data, setData] = useState([]);
  console.log({ data });

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table border">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RenderTable;
