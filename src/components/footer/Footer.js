import React from "react";

function Footer() {
  return (
    <>
      <div class="w-full bg-primary-indigo sm:h-96 text-white py-10">
        <div class="container px-4">
          <h5
            className="text-xl tracking-tight text-white sm:text-xl"
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
            <div>Contact us</div>
          </h5>
          <div class="grid sm:grid-cols-6 gap-4">
            <div class="sm:col-span-4">
              <h5 className="text-3xl font-bold tracking-tight text-white sm:text-5xl py-10">
                Have a project in mind? Let's make it happen
              </h5>
            </div>
            <div class="sm:col-span-2">
              22 Street Name, Suburb, 8000,
              <br /> Cape Town, South Africa
              <br /> +27 21 431 0001
              <br /> enquirie@website.co.za
            </div>
            <div class="">
              <ol>
                <li>Terms of service</li>
                <li>Privacy policy</li>
                <li>Impressum</li>
              </ol>
            </div>
            <div class="">
              <ol>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ol>
            </div>
            <div class="">
              <ol>
                <li>Github</li>
                <li>Linkedin</li>
                <li>Teams</li>
              </ol>
            </div>
            <div class="">
              <ol>
                <li>Youtube</li>
                <li>Behance</li>
                <li>Dribbble</li>
              </ol>
            </div>
            <div class="sm:col-span-2">
              Explore open jobs
              <br />
              <br /> ©2000—2023 Company Name
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
