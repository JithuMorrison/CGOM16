import React from 'react';

const Committee = () => {
    const members = [
        { name: "Adrian Flood", institution: "Vidyasirimedhi Institute of Science and Technology, Thailand" },
        { name: "Allen S. Myerson", institution: "MIT, U.S.A." },
        { name: "Allison Lewis", institution: "University of Cape Town, South Africa" },
        { name: "Ann Chow", institution: "University of Cambridge, Singapore" },
        { name: "Ashwin Rajagopalan", institution: "University of Manchester, UK" },
        { name: "B N Thorat", institution: "ICT, India" },
        { name: "Brian Glenn", institution: "University of Florida, USA" },
        { name: "C Malla Reddy", institution: "IIT Hyderabad, India" },
        { name: "Doris Braun", institution: "University of Innsbruck, Austria" },
        { name: "Elias Vlieg", institution: "Radboud University, Netherlands" },
        { name: "Elena Simone", institution: "Politecnico di Torino, Italy" },
        { name: "Filipa Castro", institution: "University of Minho, Portugal" },
        { name: "Gérard Coquerel", institution: "University of Rouen Normandy, France" },
        { name: "Hiroshi Takiyama", institution: "Tokyo University of Agriculture and Technology, Japan" },
        { name: "Hongxun Hao", institution: "Tianjin University, China" },
        { name: "Huaiyu Yang", institution: "Loughborough University, UK" },
        { name: "Izumi Hirasawa", institution: "Waseda University, Japan" },
        { name: "Jeongwon Kang", institution: "Korea University, South Korea" },
        { name: "Jerry Heng", institution: "Imperial College London, UK" },
        { name: "Jonghui Lee", institution: "Joongang University, South Korea" },
        { name: "Jose V Parambil", institution: "IIT Patna, India" },
        { name: "Kevin Roberts", institution: "University of Leeds, UK" },
        { name: "Koichi Igarashi", institution: "Osaka Metropolitan University, Japan" },
        { name: "Lek Wantha", institution: "Suranaree University of Technology, Thailand" },
        { name: "Marco Mazzotti", institution: "ETH Zurich, Switzerland" },
        { name: "Raghavender Medish", institution: "IIT Hyderabad, India" },
        { name: "Richard Lakerveld", institution: "Hong Kong University of Science and Technology, Hong Kong" },
        { name: "Romain Grossier", institution: "Aix-Marseille University, France" },
        { name: "Sevgi Polat", institution: "Marmara University, Turkey" },
        { name: "Srinivasan Karuppannan", institution: "Bharathiar University, India" },
        { name: "Tom Leyssens", institution: "UCLouvain, Belgium" },
        { name: "Tu Lee", institution: "National Central University, Taiwan" },
        { name: "Woo-Sik Kim", institution: "Kyung Hee University, South Korea" },
      ];

  return (
    <div className="font-sans p-6 bg-gray-50 text-gray-800">
      {/* Conference Chair Section */}
      <div className="mb-10 p-6 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-bold text-red-600 flex items-center mb-4">
            <span className="mr-2 text-2xl text-red-500">⦿</span>Conference Chair
        </h2>
        <hr className="my-3 border-t border-gray-300" />
        <ul className="space-y-4">
            <li className="flex justify-between items-center">
            <span className="font-semibold text-gray-800 text-base">Dr. Rajesh Paulraj</span>
            <span className="text-gray-500 text-sm ">
                SSN College of Engineering, India
            </span>
            </li>
        </ul>
        </div>

      {/* Local Organizing Committee Section */}
      <div className="mb-10 p-6 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-bold text-red-600 flex items-center">
          <span className="mr-2 text-2xl">⦿</span>Local Organizing Committee
        </h2>
        <hr className="my-3 border-t border-gray-300" />
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span className="font-bold text-gray-700">CHIEF PATRON</span>
            <div className="flex flex-col text-right">
              <span className="font-medium">Dr. Shiv Nadar</span>
              <span className="text-gray-600 text-sm">SSN Institutions, Chennai, India</span>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-bold text-gray-700">PATRON</span>
            <div className="flex flex-col text-right">
              <span className="font-medium">Dr. Kala Vijayakumar</span>
              <span className="text-gray-600 text-sm">SSN Institutions, Chennai, India</span>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-bold text-gray-700">CO-PATRON</span>
            <div className="flex flex-col text-right">
              <span className="font-medium">Dr. S. Radha</span>
              <span className="text-gray-600 text-sm">SSN College of Engineering, Chennai, India</span>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-bold text-gray-700">CO-PATRON</span>
            <div className="flex flex-col text-right">
              <span className="font-medium">Dr. P. Ramasamy</span>
              <span className="text-gray-600 text-sm">SSN College of Engineering, Chennai, India</span>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-bold text-gray-700">CONVENER</span>
            <div className="flex flex-col text-right">
              <span className="font-medium">Dr. Rajesh Paulraj</span>
              <span className="text-gray-600 text-sm">SSN College of Engineering, Chennai, India</span>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-bold text-gray-700">CO-CONVENER</span>
            <div className="flex flex-col text-right">
              <span className="font-medium">Prof. Srinivasan Karuppannan</span>
              <span className="text-gray-600 text-sm">Bharathiar University, Coimbatore, India</span>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-bold text-gray-700">LOCAL ORGANIZING COMMITTEE</span>
            <div className="flex flex-col text-right">
              <span className="font-medium">Prof. K. Masilla Moses Kennedy</span>
              <span className="text-gray-600 text-sm">SSN College of Engineering, Chennai, India</span>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-bold text-gray-700"></span>
            <div className="flex flex-col text-right">
              <span className="font-medium">Dr. S.I. Davispresely</span>
              <span className="text-gray-600 text-sm">SSN College of Engineering, Chennai, India</span>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-bold text-gray-700"></span>
            <div className="flex flex-col text-right">
              <span className="font-medium">Dr. S. Rajalakshmi</span>
              <span className="text-gray-600 text-sm">SSN College of Engineering, Chennai, India</span>
            </div>
          </li>
        </ul>
      </div>
        <div className="font-sans p-6 bg-gray-50 text-gray-800">
        <h1 className="text-2xl font-bold text-red-600 mb-6"><span className="mr-2 text-2xl">⦿</span>Committee Members</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, index) => (
            <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.institution}</p>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Committee;
