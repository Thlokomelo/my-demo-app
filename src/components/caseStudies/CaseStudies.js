import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl =
  "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws";

const requestOptions = {
  method: "GET", // Change to your HTTP method (e.g., 'POST' for POST requests)
  headers: {
    "Content-Type": "application/json",
  },
};

function CaseStudies() {
  const [images, setImages] = useState(undefined);
  useEffect(() => {
    const fetchData = () => {
      //   axiosInstance
      //     .get(`${apiUrl}/1`)
      //     .then((response) => {
      //       console.log("response.data: ", response.data);
      //       setImages(response.data);
      //     })
      //     .catch((error) => {
      //       console.error("Error:", error);
      //     });

      fetch(`${apiUrl}/1`, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setImages(data);
        })
        .catch((error) => {
          console.log("sucks");
          setImages([
            {
              imageUrl: "https://d2vcaowhp5v7jq.cloudfront.net/olympian.jpeg",
              description:
                "The only athlete in the world to do her Olympic routine in 2020",
              title: "The Olympian",
            },
            {
              imageUrl: "https://d2vcaowhp5v7jq.cloudfront.net/dragon.jpeg",
              description: "Grow your savings treasure and grow your dragon.",
              title: "The Savings Jar",
            },
            {
              imageUrl: "https://d2vcaowhp5v7jq.cloudfront.net/skhokho.jpeg",
              description:
                "Helping South Africans become #CashCleva with Skhokho and TymeBank",
              title: "Skhokho seMali",
            },
          ]);
        });
    };

    fetchData();
  }, []);
  return (
    <>
      <h5
        className="text-3xl tracking-tight text-black sm:text-3xl py-10"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          style={{
            width: 40,
            height: 4,
            marginRight: 20,
            marginTop: 15,
            backgroundColor: "#D100C9",
          }}
        ></div>
        <div>Case studiess</div>
      </h5>
      <div className="flex flex-wrap justify-center">
        {/* Column 1 */}
        {images &&
          images.map((image) => (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
              <div className="relative">
                <img
                  src={image.imageUrl} // Replace with your image URL
                  alt="Image 1"
                  className="w-full h-auto rounded-lg sm:w-full md:w-1/2 lg:w-full"
                />
                <div className="absolute bottom-0 left-0 p-4 text-white transition-opacity opacity-100">
                  <div
                    style={{
                      width: 40,
                      height: 4,
                      marginBottom: 10,
                      backgroundColor: "#D100C9",
                    }}
                  ></div>
                  <h3 className="text-2xl font-bold">{image.title}</h3>
                  <p className="mt-2">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default CaseStudies;
