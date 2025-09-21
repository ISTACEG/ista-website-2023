import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./team.scss";

var staffList = [
  {
    img: "ISTA OB/Viji_maam.png",
    name: "Dr. M. Vijayalakshmi",
    position: "President",
  },
  {
    img: "ISTA OB/Vidhya maam.png",
    name: "Dr. K. Vidya",
    position: "Staff Treasurer",
  },
];

var keysHeads = [
  {
    name: "Arun Karthick S",
    position: "Chair Person",
    domain: "",
    imageUrl:
      "https://drive.google.com/open?id=1jvQUq5LkhcMiIFIFAEoLWBBJqUnbyRGM",
  },
  {
    name: "Padma Prabha M",
    position: "Treasurer",
    domain: "",
    imageUrl:
      "https://drive.google.com/open?id=1z7bE7grNC_bH6ps_cy6LjauYjfCib1oP",
  },
  {
    name: "Ajay Kumar R",
    position: "Overall Coordinator",
    domain: "",
    imageUrl:
      "https://drive.google.com/open?id=1qX8naiLcBs7iEuStI-LJbVUykGMoa8Ja",
  },
];

var newTeamMembers = [
  {
    name: "Harish M",
    position: "Head",
    domain: "Events",
    imageUrl: "https://drive.google.com/open?id=1ZuJ0CG39E0vjALwK4qjizwDZWLi7JBp6",
  },
  {
    name: "Abinaya S M",
    position: "Head",
    domain: "Events",
    imageUrl: "https://drive.google.com/open?id=1b4dv9R7RQMLRgrzxtSxzJUmW3KC-dY5T",
  },
  {
    name: "Arnaud Joe Nirmal A",
    position: "Head",
    domain: "Events",
    imageUrl: "https://drive.google.com/open?id=1RLkA_Gi7ZXBht-kzib5dhl5Via_EYPEh",
  },
  {
    name: "Razeen",
    position: "Head",
    domain: "Events",
    imageUrl: "https://drive.google.com/open?id=13dQV2fV2x4dX794MTcEsjUFjEu3SMViZ",
  },

  
  {
    name: "Rishi Kumar U",
    position: "Head",
    domain: "Marketing and Media ",
    imageUrl: "https://drive.google.com/open?id=1iFEmUpG_91r0im0to2QysvwT4QZvQmFa",
  },

  {
    name: "Hemachandar K",
    position: "Head",
    domain: "Marketing and Media ",
    imageUrl: "https://drive.google.com/open?id=1A4XrmhvXEYtkTHwtHd2B37gPXUzHWBrC",
  },
  {
    name: "Girish Sai D",
    position: "Head",
    domain: "Marketing and Media ",
    imageUrl: "https://drive.google.com/open?id=1WHmDxqyX9Uq8aDIC_xWDK47eHmtXSncP",
  },
  {
    name: "Abishek R",
    position: "Head",
    domain: "Marketing and Media ",
    imageUrl: "https://drive.google.com/open?id=1b0nZ7egYr1xoUToUtpfpQBZwPVTe7KAx",
  },
  {
    name: "Sri Dharani R",
    position: "Head",
    domain: "Web Development",
    imageUrl: "https://drive.google.com/open?id=1djC49oWt7Lybz248olTc6xtaO1NLfTLD",
    // 
  },
  {
    name: "Syed Sharaafeth Haasan S",
    position: "Head",
    domain: "Web Development",
    imageUrl: "https://drive.google.com/open?id=1lwKr7bUS8PQxVw_u_2i8ZqYoP5Vt3C2V",
  },

  {
    name: "Srilekha Ramkumar ",
    position: "Head",
    domain: "Design",
    imageUrl: "https://drive.google.com/open?id=1pcb-2NteGDNgMblbuPOjvnhip_RzzSBs",
  },
  {
    name: "Shivabalan M",
    position: "Head",
    domain: "Design",
    imageUrl: "https://drive.google.com/open?id=1q99mlrDW69te5R-rFAxO8wqg8ZsT3d32",
  },
  {
    name: "Varun Karthik T",
    position: "Head",
    domain: "External Relations",
    imageUrl: "https://drive.google.com/open?id=1WoNYE4bQZ7Wnsd8p-GAgDE3Oj1A1-0jB",
  },
  {
    name: "Gadiraju Dinesh",
    position: "Head",
    domain: "External Relations",
    imageUrl: "https://drive.google.com/open?id=1Rpnw6ZqhblXr4wBuloVzmUSRo-zQB-KL",
  },
  {
    name: "Neelakandan S",
    position: "Head",
    domain: "Courses",
    imageUrl: "https://drive.google.com/open?id=1knSKCWohSxaYNqIeyVJ8rNOorsmYtlac",
  },
  {
    name: "Naziya Kouser H",
    position: "Head",
    domain: "Courses",
    imageUrl: "https://drive.google.com/open?id=1jC7Gn5PT7dBY9eaUU8EWByLlXFP21JOi",
  },
  {
    name: "Abharna Shree M",
    position: "Head",
    domain: "Courses",
    imageUrl: "https://drive.google.com/open?id=1q_gjOX55-TYPMphGBl9nZcOpj85TnW_K",
  },

  {
    name: "Sarumathi S",
    position: "Head",
    domain: "Contents",
    imageUrl: "https://drive.google.com/open?id=1H_vIgmwifI8ONsENE2MwXbUaVihIAdGY",
  },
  {
    name: "Jayashree J",
    position: "Head",
    domain: "Contents",
    imageUrl: "https://drive.google.com/open?id=1kKx3h_IeR84vFSabWkwuMwutWs1zWYNc",
  },
  {
    name: "Soumya R",
    position: "Head",
    domain: "Contents",
    imageUrl: "https://drive.google.com/open?id=1hNRIe2xTZn43bIVDtvkJKQLHMO4FQ4zm ",
  },
  {
    name: "Preethi B",
    position: "Head",
    domain: "Contents",
    imageUrl: "https://drive.google.com/open?id=1W-YeMfGnYrrUCB9r9fVru3s5PB65HxKJ",
  },
  {
    name: "Abhinav MS",
    position: "Head",
    domain: "Placement Training Coordinator",
    imageUrl: "https://drive.google.com/open?id=1GQ_wYf5bwCR5AeC3mNfe_jerXN8qUBX9",
  },
  {
    name: "Sreeram T R",
    position: "Head",
    domain: "Placement Training Coordinator",
    imageUrl: "https://drive.google.com/open?id=11R7d4Mvplz5L9noX_lgMEjOF21lx6DmR",
  },
  {
    name: "Pramoth Kumar KS",
    position: "Head",
    domain: "Intern Training Coordinator",
    imageUrl: "https://drive.google.com/open?id=1422J3GJ_-zhxVNJOcfNVUfCw5Ve6_bEQ",
  },
  {
    name: "Madhan D",
    position: "Head",
    domain: "Intern Training Coordinator",
    imageUrl: "https://drive.google.com/open?id=1nQLfHs3quWyfXliVvzCFQ5zRvRVvaAic",
  },
  {
    name: "Kishore A",
    position: "Head",
    domain: "Logistics Coordinator",
    imageUrl: "https://drive.google.com/open?id=1_3yT1867bkmpIRF9nempAjyotwIHr0Zb",
  },
  {
    name: "Stephen T",
    position: "Head",
    domain: "Logistics Coordinator",
    imageUrl: "https://drive.google.com/open?id=1swpcK4U4kX_LUXhvrTX7OHgmpNTd7ngJ",
  },
  {
    name: "Ananyalakshmi V K",
    position: "Deputy Head",
    domain: "Events",
    imageUrl: "https://drive.google.com/open?id=1zvUfJg_jsEj6kFYcWsP3NU_ExOSGTy8v",
  },
  {
    name: "Purushothaman V",
    position: "Deputy Head",
    domain: "Events",
    imageUrl: "https://drive.google.com/open?id=15WnzYKJ8ANx6b2wr7xkAGIA0FpVULDb3",
  },

  {
    name: "Pavadharani P",
    position: "Deputy Head",
    domain: "Events",
    imageUrl: "https://drive.google.com/open?id=1w3dmXc_r4CCcwZ-505h23RbVlPFRgpCW",
  },

  {
    name: "Karunyan S",
    position: "Deputy Head",
    domain: "Marketing and Media",
    imageUrl: "https://drive.google.com/open?id=16fikIEk542WM8SdKNk9_EoOPWl9VtHIM",
  },
  {
    name: "Devarajan S S",
    position: "Deputy Head",
    domain: "Marketing and Media",
    imageUrl: "https://drive.google.com/open?id=1hRdrVY3WUOcXek0eY_1lA64WeyQENkdK",
  },
  {
    name: "Samyuktha P",
    position: "Deputy Head",
    domain: "Marketing and Media",
    imageUrl: "https://drive.google.com/open?id=12RuA0EZ_zqxWq2rEgP6WLXNbbfJCOxCu",
  },
  {
    name: "Sivadharshini C",
    position: "Deputy Head",
    domain: "Marketing and Media",
    imageUrl: "https://drive.google.com/open?id=1WYw-_sMk0-hEo9oPxTzmaGkAa7dR6FGF",
  },

  {
    name: "Prithvi S K K",
    position: "Deputy Head",
    domain: "Web Development",
    imageUrl: "https://drive.google.com/open?id=1R2WlrWFref9VlKLN9qm7UGTHdWXuaAYw",
  },

  {
    name: "Nagasurya N",
    position: "Deputy Head",
    domain: "Web Development",
    imageUrl: "https://drive.google.com/open?id=1EBEHUDvvzhFq5y4g7CrYl4bjxcarixIe",
  },

  {
    name: "Gogul",
    position: "Deputy Head",
    domain: "Web Development",
    imageUrl: "https://drive.google.com/open?id=1707e4nNFip8solwSYle_6VJirLRRpqW2",
  },
  {
    name: "Praveena R",
    position: "Deputy Head",
    domain: "Design",
    imageUrl: "https://drive.google.com/open?id=14eQCkH71Z-nncRf9aMYnq2pyw05R3K_-",
  },
  {
    name: "Divakar D",
    position: "Deputy Head",
    domain: "Design",
    imageUrl: "https://drive.google.com/open?id=1niIwPgpkS_QJZSiN4dfS_oRbpOOoJcmq",
  },
  {
    name: "Asifalekha M",
    position: "Deputy Head",
    domain: "Design",
    imageUrl: "https://drive.google.com/open?id=1b9gLSj2--za24Xgro2Qry3GZ_RX_1Gi9",
  },
  {
    name: "Anieshwar S",
    position: "Deputy Head",
    domain: "Design",
    imageUrl: "https://drive.google.com/open?id=1Y_qyJPPiUpAHsriulaxKkq0MrC66pr29",
  },
  {
    name: "Rakshan R",
    position: "Deputy Head",
    domain: "External Relations",
    imageUrl: "https://drive.google.com/open?id=1j3aLznSkAhpoyc9OM6tqB1Pt1RVtZXoI",
  },
  {
    name: "Navinesharan S",
    position: "Deputy Head",
    domain: "External Relations",
    imageUrl: "https://drive.google.com/open?id=1O0LDxqlME8OkVBJWUNJb_ZyZwM_Fi98o",
  },
  {
    name: "Siva S",
    position: "Deputy Head",
    domain: "Courses",
    imageUrl: "https://drive.google.com/open?id=15SGEh_OOHVRtz8p_LJ4CuEMqTvkqsbEd",
  },
  {
    name: "Akshaya S K",
    position: "Deputy Head",
    domain: "Courses",
    imageUrl: "https://drive.google.com/open?id=1NNJD2J8KfhKGfCC8fS5ZmHLiBeFe82oz",
  },
  {
    name: "Nithiya Sri G S S",
    position: "Deputy Head",
    domain: "Courses",
    imageUrl: "https://drive.google.com/open?id=1RxkJAI4B3CX1fWAANjktZWue2hHjxsw4",
  },
  {
    name: "Hari Bala P",
    position: "Deputy Head",
    domain: "Contents",
    imageUrl: "https://drive.google.com/open?id=103vKuDHIWjYDBUeGO1ZIpEoy-A1_APMJ",
  },
  {
    name: "Rajabu Nisha A",
    position: "Deputy Head",
    domain: "Contents",
    imageUrl: "https://drive.google.com/open?id=1q1lhTmTSmidfXAJfidcymwUjI7alOl0m",
  },
  {
    name: "Sethumadhavan A S",
    position: "Deputy Head",
    domain: "Placements",
    imageUrl: "https://drive.google.com/open?id=1aj4xqYfMJKl8hEW-fRKyor0-D132Ukjq",
  },
  {
    name: "Naveen O T",
    position: "Deputy Head",
    domain: "Placements",
    imageUrl: "https://drive.google.com/open?id=1nJkWO6THUi_yD90IgamWt-3ZBrSJMT7u",
  },
  {
    name: "Sankara Krishnan P",
    position: "Deputy Head",
    domain: "Internship",
    imageUrl: "https://drive.google.com/open?id=1H_Dw0gIAZZs3eXOZvqlUdA5Y3w4bI3xB",
  },
  {
    name: "Sarathkumar R",
    position: "Deputy Head",
    domain: "Internship",
    imageUrl: "https://drive.google.com/open?id=14-q9AZUIrYPKZME9fl2C1_X09_Fp412b",
  },
  {
    name: "Jeevesh V",
    position: "Deputy Head",
    domain: "Logistics",
    imageUrl: "https://drive.google.com/open?id=1x59c2Bsy3rnygH5N0Isxb3O8yUT7XVKt",
  },
  {
    name: "Agash B",
    position: "Deputy Head",
    domain: "Logistics",
    imageUrl: "https://drive.google.com/open?id=1-mAF6R2bS9PQyRGuCwiRTv8Md4RgdIGG",
  },
  {
    name: "Sattanathan M",
    position: "Deputy Head",
    domain: "Coordinators",
    imageUrl: "https://drive.google.com/open?id=1k5E6H3WmpEY4_jpsd8muPgNF-wjDbIDJ",
  },
  {
    name: "Janis Miracline A",
    position: "Deputy Head",
    domain: "Coordinators",
    imageUrl: "https://drive.google.com/open?id=1BvsHwzwimprBAlnAtbWkNGo4woREu9hR",
  },
  {
    name: "Akileshwaran S",
    position: "Deputy Head",
    domain: "Coordinators",
    imageUrl: "https://drive.google.com/open?id=1lbNzp5OncV2rWiuggyu_IRfj3vq3o5y_",
  },
];

console.log(newTeamMembers.length);

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function convertImageUrls(members) {
  return members.map((member) => {
    const fileId = member.imageUrl.split("=")[1];
    member.name = toTitleCase(member.name);
    member.imageUrl = `https://lh3.googleusercontent.com/d/${fileId}`;
    return member;
  });
}

var newTeamMembers2 = convertImageUrls(newTeamMembers);

keysHeads = convertImageUrls(keysHeads);

const keyPositions = newTeamMembers2.filter((member) => {
  return ["Chair Person", "Treasurer", "Overall Coordinator", "Head"].includes(
    member.position
  );
});

const deputyHeads = newTeamMembers2.filter((member) => {
  return member.position === "Deputy Head";
});

function Team(props) {
  return (
    <div className="team-section">
      <h1 className="meet-title">Meet Our Team</h1>

      {/* Row 1: Staff List */}
      <div className="team-row">
        {staffList.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.img} alt={member.name} loading="lazy" />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
        ))}
      </div>

      {/* Row 2: Key Heads */}
      <div className="team-row">
        {keysHeads.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.imageUrl} alt={member.name} loading="lazy" />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
        ))}
      </div>

      {/* Row 3: Heads - Horizontal Scrolling */}
      <h2 className="sub-title">Heads</h2>
      <div className="team-row scrollable-row">
        {newTeamMembers
          .filter((member) => member.position === "Head")
          .map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.imageUrl} alt={member.name} loading="lazy" />
              <h3>{member.name}</h3>
              <p>{member.domain}</p>
            </div>
          ))}
      </div>

      {/* Row 4: Deputy Heads - Horizontal Scrolling */}
      <h2 className="sub-title">Deputy Heads</h2>
      <div className="team-row scrollable-row">
        {newTeamMembers
          .filter((member) => member.position === "Deputy Head")
          .map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.imageUrl} alt={member.name} loading="lazy" />
              <h3>{member.name}</h3>
              <p>{member.domain}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Team;
