import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./team.scss";

var staffList = [
  {
    img: "ISTA OB/Vani_IST.webp",
    name: "DR.K.Vani",
    position: "President",
  }, {
    img: "ISTA OB/selviravindran.jpg",
    name: "DR.Selvi Ravindran",
    position: "Staff Treasurer",
  }
];

var keysHeads = [
  {
    name: "Sanmitha V S",
    position: "Chair Person",
    domain: "",
    imageUrl: "https://drive.google.com/open?id=1_cFkhyoRiXCllqT8uPOIKP3EFAcsizBM"
  }, {
    name: "Ibrahim Navas S",
    position: "Treasurer",
    domain: "",
    imageUrl: "https://drive.google.com/open?id=1dFrSDKF14f2tYGUFXdXa7teeC2IyiqoJ"
  },
  {
    name: "Aruna M",
    position: "Overall Coordinator",
    domain: "",
    imageUrl: "https://drive.google.com/open?id=12HGdzX43_THU61OIyZgjVL8_zQ6YCIAn"
  }]

var newTeamMembers = [
  {
    name: "Varun Karthik T",
    position: "Deputy Head",
    domain: "Web Development",
    imageUrl: "https://drive.google.com/open?id=1RzdBbO03uy6tIdS37Cmi0RMTfUd2uu-x"
  },
  {
    name: "Hariharan P",
    position: "Deputy Head",
    domain: "Events",
    imageUrl: "https://drive.google.com/open?id=1oxjsdl5o4Q67UDj4w2shocwTepd9O2ZE"
  },
  {
    name: "Shanjanaa G",
    position: "Head",
    domain: "Media",
    imageUrl: "https://drive.google.com/open?id=1QabmBZA9agBvY3DqPdwDnUM_AOMJkYfJ"
  },
  {
    name: "Mowniya Thangaraj",
    position: "Deputy Head",
    domain: "Industrial relation",
    imageUrl: "https://drive.google.com/open?id=1ZW4CDSFZPevlupdRtdt_nlm9Nvfpc9Nb"
  },
  {
    // https://drive.google.com/file/d/18tucFxveQ7hHRLhY906djFOl2OYL4kSP/view?usp=sharing
    name: "Arun Karthick Saravanan",
    position: "Deputy Head",
    domain: "Marketing",
    imageUrl: "https://drive.google.com/open?id=18tucFxveQ7hHRLhY906djFOl2OYL4kSP"
  },
  {
    name: "SRI DHARANI R",
    position: "Deputy Head",
    domain: "Web Development",
    imageUrl: "https://drive.google.com/open?id=1sXSfw6HC4p5kiTYN4B5z7rEIUtFFrUSE"
  },
  {
    name: "Arnaud Joe Nirmal",
    position: "Deputy Head",
    domain: "Events",
    imageUrl: "https://drive.google.com/open?id=115rpyPY0aH0S_Lb_xYThKUPospWEg8_1"
  },
  {
    name: "Dhivyadharshini S K",
    position: "Head",
    domain: "Marketing",
    imageUrl: "https://drive.google.com/open?id=1UKGhitsrp4KCkgeYOaJPgE3F-6ZlT1AQ"
  },
  {
    name: "Shivabalan Mani",
    position: "Deputy Head",
    domain: "Design",
    imageUrl: "https://drive.google.com/open?id=142_9LKXimmXs0gZPV3q_-sKnARslKFYF"
  },
  {
    name: "Nithyasri S R",
    position: "Head",
    domain: "Industrial Relations",
    imageUrl: "https://drive.google.com/open?id=1J2ZzRIljwLIO5Llnh4zA57DVgeT0dW8T"
  },
  {
    name: "REVATHI R T",
    position: "Deputy Head",
    domain: "Placement",
    imageUrl: "https://drive.google.com/open?id=17nmQdTdWa8XJlWpxJto0Zdan3xZuqMBm"
  },
  {
    name: "Rishi Kumar U",
    position: "Deputy Head",
    domain: "Co-ordinators",
    imageUrl: "https://drive.google.com/open?id=1nqQ4qgl-fCoKs60QlIDUHRQXFT3Orh6R"
  },
  {
    name: "Lekha S",
    position: "Head",
    domain: "Courses",
    imageUrl: "https://drive.google.com/open?id=1amBlt92Cw_bCR1BzZJSKWY-45jU3INJs"
  },
  {
    name: "Ajay Kumar R",
    position: "Deputy Head",
    domain: "Co-ordinator",
    imageUrl: "https://drive.google.com/open?id=1Lj8VIgHMkhDAocdix5uNLhuj-51fCc64"
  },
  {
    name: "JOTHIRUBAN M",
    position: "Deputy Head",
    domain: "Marketing",
    imageUrl: "https://drive.google.com/open?id=1unJ1LQQ-hcufgBikYEpttN-bM08lpHzA"
  },
  {
    name: "Hariharan I S",
    position: "Head",
    domain: "Web Development",
    imageUrl: "https://drive.google.com/open?id=1NWZGU_iiYe5mKLRzKcwTbK9FBpOFp33V"
  },
  {
    name: "HEMACHANAR K",
    position: "Deputy Head",
    domain: "Placement",
    imageUrl: "https://drive.google.com/open?id=1IEtCJOtRTrK6PbPd7R3uexl8Pl_rspgD"
  },
  {
    name: "Purushothaman S",
    position: "Deputy Head",
    domain: "Media",
    imageUrl: "https://drive.google.com/open?id=1wbWPN9uP2AHHpoavO5A-KcjTUqc0gH8B"
  },
  {
    name: "Mahalakshmi",
    position: "Head",
    domain: "Events",
    imageUrl: "https://drive.google.com/open?id=1R-r6xRocybxaKE5goy10fqLz2fJuQIPJ"
  },
  {
    name: "Abhijith Varma",
    position: "Deputy Head",
    domain: "Industrial Relations",
    imageUrl: "https://drive.google.com/open?id=1o_IiApjTcYTjAqhgO9YmbVpeh9pAsG6l"
  },
  {
    name: "Dharaniraj VM",
    position: "Deputy Head",
    domain: "Internship",
    imageUrl: "https://drive.google.com/open?id=1_yHk-H5KFWRdbyyRU6t720c3ZxGGyQzn"
  },
  {
    name: "Salai Kowshikan S",
    position: "Deputy Head",
    domain: "Media",
    imageUrl: "https://drive.google.com/open?id=1Z36WpN67IUmHJZLQRGOgGzRfDO8Ogcso"
  },
  {
    name: "Vijay K G",
    position: "Deputy Head",
    domain: "Marketing",
    imageUrl: "https://drive.google.com/open?id=15GBxr2ziLiiZoR7xAqRCSJ8bHzfpPyAI"
  },
  {
    name: "Hariharan P",
    position: "Deputy Head",
    domain: "Events",
    imageUrl: "https://drive.google.com/open?id=1hnSxfIPVFMKTree6nYkOi7ydpL1-Csrg"
  },
  {
    name: "Dharaniraj V M",
    position: "Deputy Head",
    domain: "Internship",
    imageUrl: "https://drive.google.com/open?id=1Gy5QY6h5xE-qbTX8hil4YmAT6-4HoN2j"
  },
  {
    name: "Ezhil Dhiraviya J",
    position: "Deputy Head",
    domain: "Internship",
    imageUrl: "https://drive.google.com/open?id=1_swC8aav1ljmIlMheIqr2xQ0pAaCNwBV"
  },
  {
    name: "Shreya Elizabeth Franklin",
    position: "Head",
    domain: "Industrial Relations",
    imageUrl: "https://drive.google.com/open?id=1UdHADB1df2e3JUSFhK88p3Ey2KglaPQa"
  },
  {
    name: "Soumya R",
    position: "Deputy Head",
    domain: "Industry relations",
    imageUrl: "https://drive.google.com/open?id=1dzpkBUwBRr2qWMXH_kiQhmCrpDiWUwI6"
  },
  {
    name: "Srilekha Ramkumar",
    position: "Deputy Head",
    domain: "Design",
    imageUrl: "https://drive.google.com/open?id=1MQry88tYK8ZQOaXOg2MhuJKUFW5TARRd"
  },
  {
    name: "Ananya K A",
    position: "Head",
    domain: "Media",
    imageUrl: "https://drive.google.com/open?id=1wBh4Mb4tgmsLU3jee4h27MmGwwwxUgu7"
  },
  {
    name: "Yuvaraj V",
    position: "Head",
    domain: "Web Development",
    imageUrl: "https://drive.google.com/open?id=1OOOQolXuqlsKFFkV8MB6ifF8Stvie5Fc"
  },
  {
    name: "Gopi R",
    position: "Head",
    domain: "Events",
    imageUrl: "https://drive.google.com/open?id=1d7KX6eMB0tyxCyZtdZzBVmFkH_Cd4rVv"
  },
  {
    name: "Mowniya T",
    position: "Deputy Head",
    domain: "IR",
    imageUrl: "https://drive.google.com/open?id=1rl5mnpCL9h7O_6QcSTHfoGQy-UyGfKi_"
  },
  {
    name: "Mukilarasan V",
    position: "Head",
    domain: "Courses",
    imageUrl: "https://drive.google.com/open?id=1VktzRuSiaQkxriEognA4_3xnll7SOxtn"
  },
  {
    name: "Ratish M S",
    position: "Head",
    domain: "Placements",
    imageUrl: "https://drive.google.com/open?id=1ThTz-ehuyC2XF-G9xmtdDKNrTW5Sn9kg"
  },
  {
    name: "Dharini A",
    position: "Head",
    domain: "Design",
    imageUrl: "https://drive.google.com/open?id=1m1CUfkyOYf3u1r7bRA-PgLJSKsnMnSnB"
  }
]

console.log(newTeamMembers.length)

function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

function convertImageUrls(members) {
  return members.map(member => {
    const fileId = member.imageUrl.split('=')[1];
    member.name = toTitleCase(member.name)
    member.imageUrl = `https://lh3.googleusercontent.com/d/${fileId}`;
    return member;
  });
}

var newTeamMembers2 = convertImageUrls(newTeamMembers);

keysHeads = convertImageUrls(keysHeads);

const keyPositions = newTeamMembers2.filter(member => {
  return ['Chair Person', 'Treasurer', 'Overall Coordinator', 'Head'].includes(member.position);
});

const deputyHeads = newTeamMembers2.filter(member => {
  return member.position === 'Deputy Head';
});


function Team(props) {
  return (

    <div className='team-section'>

      <h1 className="meet-title">Meet Our Team</h1>

      {/* Row 1: Staff List */}
      <div className='team-row'>
        {staffList.map((member, index) => (
          <div className='team-member' key={index}>
            <img src={member.img} alt={member.name} loading="lazy" />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
        ))}
      </div>

      {/* Row 2: Key Heads */}
      <div className='team-row'>
        {keysHeads.map((member, index) => (
          <div className='team-member' key={index}>
            <img src={member.imageUrl} alt={member.name} loading="lazy" />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
        ))}
      </div>

      {/* Row 3: Heads - Horizontal Scrolling */}
      <h2 className="sub-title">Heads</h2>
      <div className='team-row scrollable-row'>
        {newTeamMembers
          .filter(member => member.position === 'Head')
          .map((member, index) => (
            <div className='team-member' key={index}>
              <img src={member.imageUrl} alt={member.name} loading="lazy" />
              <h3>{member.name}</h3>
              <p>{member.domain}</p>
            </div>
          ))}
      </div>

      {/* Row 4: Deputy Heads - Horizontal Scrolling */}
      <h2 className="sub-title">Deputy Heads</h2>
      <div className='team-row scrollable-row'>
        {newTeamMembers
          .filter(member => member.position === 'Deputy Head')
          .map((member, index) => (
            <div className='team-member' key={index}>
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