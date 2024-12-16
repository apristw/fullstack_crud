import { useEffect, useState } from "react";
import axios from "axios";
import RenderTable from "./components/RenderTable";

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/users");
      setData(response.data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/users",
        formData
      );
      alert("data berhasil disubmit!!!", response.data.message);
    } catch (error) {
      alert("gagal submit", error.message);
    }

    setFormData({
      name: "",
      email: "",
      gender: "",
    });
  };

  return (
    <>
      <div className="container flex justify-center flex-col items-center mx-auto py-48 bg-slate-700">
        <h1 className="text-slate-200 text-4xl font-semibold my-9">
          Form Input
        </h1>
        <form onSubmit={handleSubmit} action="">
          <div className="">
            <label htmlFor="" className="text-slate-200">
              Masukan Nama
            </label>
            <input
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="">
            <label htmlFor="" className="text-slate-200">
              Masukan Email
            </label>
            <input
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="">
            <select
              onChange={handleChange}
              name="gender"
              value={formData.gender}
              className="select select-bordered w-full max-w-xs my-4"
            >
              <option disabled selected>
                Pilih Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <RenderTable data={data} />
    </>
  );
}

export default App;
