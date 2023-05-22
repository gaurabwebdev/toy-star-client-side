import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UserToyTable = ({ userToys }) => {
  const [currentUserToys, setCurrentUserToys] = useState([]);
  useEffect(() => {
    setCurrentUserToys(userToys);
  }, [userToys]);
  const location = useLocation();

  const [targetedToy, setTargetedToy] = useState({});
  const handleEdit = (id) => {
    console.log(id);
    const findToy = userToys.find((toy) => toy._id === id);
    setTargetedToy(findToy);
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.toyprice.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updatedInfo = { _id: targetedToy._id, price, quantity, details };
    console.log(updatedInfo);
    fetch("https://khelaghor-server-site.vercel.app/usertoys", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          toast("Updated Successfully");
        }
      });
  };
  const handleDelete = (id) => {
    fetch(`https://khelaghor-server-site.vercel.app/usertoys?delete=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingToys = currentUserToys.filter((toy) => toy._id !== id);
          setCurrentUserToys(remainingToys);
          toast("Toy Deleted Successfully!");
        }
      });
  };
  console.log({ currentUserToys });
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            {location.pathname === "/mytoys" && (
              <th className="text-center">Photo</th>
            )}
            <th className="text-center">Toy Name</th>
            <th className="text-center">Seller Name & Email</th>
            <th className="text-center">Sub Category</th>
            <th className="text-center">Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Details</th>

            {location.pathname === "/mytoys" && (
              <>
                <th className="text-center">Update/Delete</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {/* rows */}

          {currentUserToys?.map((toy, index) => (
            <>
              <tr key={toy._id}>
                <td className="text-center">{index + 1}</td>
                {location.pathname === "/mytoys" && (
                  <td>
                    <img
                      className="w-12 h-12"
                      src={toy.photoURL}
                      alt="toy photo"
                    />
                  </td>
                )}
                <td className="text-center">{toy.toyName}</td>
                <td className="text-center">
                  <div>
                    <p>{toy.sellerName}</p>&<p>{toy.sellerEmail}</p>
                  </div>
                </td>
                <td className="text-center">{toy.sub_category}</td>
                <td className="text-center">${toy.price}</td>

                <td className="text-center">{toy.quantity}</td>
                {location.pathname === "/mytoys" && (
                  <>
                    <td className="text-center">{toy.details?.slice(0, 25)}</td>
                    <td>
                      <div className="flex justify-center items-center gap-2">
                        <label htmlFor="my-modal">
                          <img
                            htmlFor="my-modal"
                            onClick={() => handleEdit(toy._id)}
                            className="w-6 h-6 cursor-pointer"
                            src="https://i.ibb.co/wLzNPGN/edit.png"
                            alt="edit-icon"
                          />
                        </label>

                        <img
                          onClick={() => handleDelete(toy._id)}
                          className="w-6 h-6 cursor-pointer"
                          src="https://i.ibb.co/CvT5nks/delete.png"
                          alt="delete icon"
                        />
                      </div>
                    </td>
                  </>
                )}
                {location.pathname === "/alltoys" && (
                  <td className="text-center">
                    <Link to={`/usertoys/${toy._id}`}>
                      <button className="btn btn-danger">View</button>
                    </Link>
                  </td>
                )}
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <>
        <div className="relative">
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <form onSubmit={handleUpdate}>
                <div className="py-5 px-10">
                  <input
                    type="text"
                    placeholder="Toy Price"
                    className="input input-bordered input-error w-full mb-4"
                    name="toyprice"
                  />
                  <input
                    type="text"
                    placeholder="Quantity"
                    className="input input-bordered input-error w-full mb-4"
                    name="quantity"
                  />
                  <input
                    type="text"
                    placeholder="Toy Details"
                    className="input input-bordered input-error w-full mb-4"
                    name="details"
                  />
                  <div className="modal-action">
                    <input
                      className="btn btn-error w-full"
                      type="submit"
                      value="Update"
                    />
                  </div>
                </div>
              </form>
              <div className="modal-action">
                <label
                  htmlFor="my-modal"
                  className="btn rounded-full absolute top-2 right-2"
                >
                  X
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
      <ToastContainer />
    </div>
  );
};

export default UserToyTable;
