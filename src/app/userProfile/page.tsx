import React from "react";
import profilePic from "@/../public/images/profile-pics.png";
import Book1 from "@/../public/images/book1.png";
import Image from "next/image";

export default function UserProfile() {
  return (
    <div className="min-h-screen flex w-screen">
      <div className="p-6 w-full ">
        <div className="flex justify-between items-center">
          <div className="flex items-center  space-x-4">
            <Image
            src={profilePic} // Replace with the actual path to the avatar image
            alt="User Avatar"
            className="w-36 h-36 rounded-full"
          />
          <div>
            <h2 className="text-3xl font-bold">Betman Gemink</h2>
            <p className="text-2xl font-normal text-gray-500">@BetmanGemink</p>
          </div> 
          </div>
                 
          <button className="mt-4 h-12 px-10 bg-blue-600 text-white py-2 rounded-lg">Edit Profile</button>

        </div>
        <div className="mt-20">
          <h3 className="text-3xl font-bold">Your Activity</h3>
          <div className="mt-7 flex space-x-4 overflow-x-auto">
            {[
              {
                title: "Batman: The Dark Knight",
                status: "Borrowed",
                until: "25/06/2024",
                date: "",
              },
              {
                title: "Batman: The Dark Knight",
                status: "Returned",
                date: "20/06/2024",
              },
              {
                title: "Batman: The Dark Knight",
                status: "Returned",
                date: "10/06/2024",
              },
              {
                title: "Batman: The Dark Knight",
                status: "Returned",
                date: "01/06/2024",
              },
            ].map((activity, index) => (
              <div key={index} className="flex-shrink-0 w-48 p-4 rounded-lg shadow-sm">
                <Image
                  src={Book1}
                  alt={activity.title}
                  className="w-full h-56 object-cover rounded"
                />
                <div className="mt-2 text-center">
                  <h4 className="text-xl font-semibold">{activity.title}</h4>
                  <p
                    className={`text-sm ${
                      activity.status === "Borrowed"
                        ? "text-orange-500"
                        : "text-green-500"
                    }`}
                  >
                    Status: {activity.status}
                  </p>
                  {activity.until && (
                    <p className="text-sm text-gray-500">Until: {activity.until}</p>
                  )}
                  {activity.date && (
                    <p className="text-sm text-gray-500">Date: {activity.date}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
