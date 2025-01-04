import CloseButton from "@/app/components/ui/icons/close-button";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="bg-background2">
      <div className="flex justify-end">
        <CloseButton />
      </div>
      <div className="bg-background h-52  rounded-t-xl">
        <div className="content">
          <h3>Project Title</h3>
          <div>
            <div>
              <Image
                src={"/victor-photo-1.png"}
                alt="Victor Merseguel"
                width={50}
                height={50}
              />
              <div>
                <p>Victor Merseguel</p>
                <p>Front end Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
