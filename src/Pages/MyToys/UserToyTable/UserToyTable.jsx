import { React, useState } from "react";

const UserToyTable = ({ userToys }) => {
  const [updateToyInfo, setUpdateToyInfo] = useState(false);
  const handleEdit = (id) => {
    console.log(id);
  };
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th className="text-center">Photo</th>
            <th className="text-center">Toy Name</th>
            <th className="text-center">Seller Name & Email</th>
            <th className="text-center">Sub Category</th>
            <th className="text-center">Price</th>
            <th className="text-center">Rating</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Details</th>
            <th className="text-center">Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}

          {userToys.map((toy, index) => (
            <>
              <tr key={toy._id}>
                <td className="text-center">{index + 1}</td>
                <td>
                  <img
                    className="w-12 h-12"
                    src={toy.photoURL}
                    alt="toy photo"
                  />
                </td>
                <td className="text-center">{toy.toyName}</td>
                <td className="text-center">
                  <div>
                    <p>{toy.sellerName}</p>&<p>{toy.sellerEmail}</p>
                  </div>
                </td>
                <td className="text-center">{toy.sub_category}</td>
                <td className="text-center">{toy.price}</td>
                <td className="text-center">{toy.rating}</td>
                <td className="text-center">{toy.quantity}</td>
                <td className="text-center">{toy.details.slice(0, 25)}</td>

                <td>
                  <div className="flex justify-center items-center gap-2">
                    <label htmlFor="my-modal">
                      <img
                        htmlFor="my-modal"
                        onClick={() => setUpdateToyInfo(true)}
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
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <>
        {updateToyInfo && (
          <div className="relative">
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Congratulations random Internet user!
                </h3>
                <p className="py-4">
                  You have been selected for a chance to get one year of
                  subscription to use Wikipedia for free!
                </p>
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
        )}
      </>
    </div>
  );
};

export default UserToyTable;
