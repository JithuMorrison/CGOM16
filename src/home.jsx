import React from 'react'

const Home = () => {
  return (
    <div>
        {/* Welcome Section */}
        <section className="bg-red-600 text-white text-center py-8 mt-6">
            <h2 className="text-2xl font-bold">WELCOME TO CGOM16!</h2>
            <p className="mt-2 font-light">
                CRYSTAL GROWTH OF ORGANIC MATERIALS
            </p>
        </section>

        <section className="p-6 text-gray-500 w-[800px]" style={{ fontFamily: "'League Gothic', sans-serif", fontSize: "1.7rem", lineHeight: "2.5rem", letterSpacing: "0.02em",transform: "scaleX(1.3)",display: "inline-block",}} >
            <p>
                On behalf of the organizing committee, we cordially invite you to
                the 15th International Workshop on Crystal Growth of Organic
                Materials (CGOM16), which will be held in Phuket, Thailand, from
                23 to 26 July 2024. The aim of this CGOM16 is to provide a forum
                for academic researchers, scientists, and industry experts to
                share and discuss recent advances in crystallization and crystal growth sciences and process technology. The program will include plenary lectures, invited lectures, oral presentations and poster presentations. You will be greatly welcome to join us..
            </p>
            <p className="p-10">Looking forward to seeing you in Phuket, Thailand.</p>
            <p className="p-10">Organizing Chairs</p>
        </section>

        <section className="p-8 font-sans w-[800px] inline-block text-center">
            <h2 className="text-2xl font-bold uppercase">
                Topics <span className="text-[#D34310]">for the Conference</span>
            </h2>

            <ul className="list-none mt-4 mx-auto">
                <li className="flex items-start mb-4 justify-center">
                <p className="m-0">
                    <span className="text-[#D34310] mr-2 text-xl">🔺</span><strong>Crystallization and crystal growth fundamentals:</strong> crystal nucleation, crystal growth,
                    agglomeration, thermodynamics, solution structure, transport phenomena in crystal growth etc.
                </p>
                </li>

                <li className="flex items-start mb-4 justify-center">
                <p className="m-0">
                    <span className="text-[#D34310] mr-2 text-xl">🔺</span><strong>Crystal engineering and crystals in pharmaceutical:</strong> crystal structure characterization,
                    polymorphism, solvates, amorphous, salts, nano-crystals, co-crystals, chiral separation, surface
                    crystallization, protein crystallization etc.
                </p>
                </li>

                <li className="flex items-start mb-4 justify-center">
                <p className="m-0">
                    <span className="text-[#D34310] mr-2 text-xl">🔺</span><strong>Crystallization process and crystal growth modelling, design, control and digital design</strong>
                </p>
                </li>

                <li className="flex items-start mb-4 justify-center">
                <p className="m-0">
                    <span className="text-[#D34310] mr-2 text-xl">🔺</span><strong>New materials and products</strong>
                </p>
                </li>

                <li className="flex items-start mb-4 justify-center">
                <p className="m-0">
                    <span className="text-[#D34310] mr-2 text-xl">🔺</span><strong>Sustainable crystallization technologies</strong>
                </p>
                </li>
            </ul>
        </section>
        <div className="flex flex-col items-center justify-center py-10">
            <h2 className="text-3xl font-bold text-orange-600">Co-organizers</h2>
            <div className="flex justify-center items-center gap-10 mt-6">
                <img src="path-to-sut-logo.png" alt="SUT Logo" className="h-24" />
                <img src="path-to-vistec-logo.png" alt="Vistec Logo" className="h-24" />
                <img src="path-to-tiche-logo.png" alt="TICHE Logo" className="h-24" />
            </div>
            </div>
    </div>
  )
}

export default Home