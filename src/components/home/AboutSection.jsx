import React from 'react'

const AboutSection = () => {
    return (
        <div id='about' className='mb-20 '>
            <div className="container">
                <div className=" bg-white/10 py-16 rounded-2xl px-4">
                    <h3 className="text-center text-2xl md:text-3xl playfair text-secondary">About Zysk Group:</h3>
                    <div className="flex justify-center my-6">
                        <p className="text-center md:w-3/4">Zysk Group is a dynamic conglomerate committed to innovation, excellence, and transformative solutions. With a diverse portfolio spanning technology, consulting, food, real estate, and investment sectors, Zysk Group is dedicated to meeting the evolving needs of individuals, businesses, and communities. Each subsidiary under the Zysk umbrella operates with a shared commitment to quality, integrity, and sustainability, making Zysk Group a trusted name in both local and global markets.

At the forefront of technological innovation, Zysk Technologies delivers cutting-edge software and digital solutions for businesses and consumers alike, bridging the gap between efficiency and creativity. Meanwhile, Zysk Consulting offers unparalleled expertise in immigration services, job placements, and contract facilitation, ensuring smooth transitions and strategic growth for clients worldwide.

In the food industry, Zysk Foods is revolutionising food processing by combining quality and innovation, providing products that satisfy both taste and health standards. Zysk Construction and Real Estate is redefining living and working spaces with modern, sustainable designs that cater to diverse needs, while Zysk Capital empowers investors with access to lucrative opportunities in tangible assets, focusing on real estate and beyond.

At Zysk Group, our mission goes beyond providing services—we aim to create lasting impacts and foster meaningful relationships with our stakeholders. Guided by our core values of innovation, integrity, and collaboration, we continuously strive to shape a brighter future. By combining expertise across industries, Zysk Group remains at the forefront of progress, transforming visions into realities and challenges into opportunities.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5 my-16">
                        <div className="rounded-xl borde p-4 shadow-2xl hover:shadow-black/50 card_bg">
                            <h6 className="text-center text-lg font-bold mb-5">Vision</h6>
                            <p>To be a globally recognised leader in innovation, driving progress and transformation across industries, while creating lasting value for communities, clients, and stakeholders. We envision a future where our solutions shape the way people live, work, and invest, fostering a legacy of impact and growth.</p>
                        </div>
                        <div className="rounded-xl borde p-4 shadow-2xl hover:shadow-black/50 card_bg">
                            <h6 className="text-center text-lg font-bold mb-5">Mission</h6>
                            <p>To deliver exceptional solutions across technology, consulting, food, construction, and investment sectors, empowering clients and fostering sustainable growth worldwide. Our mission is to bridge global markets, transform industries, and contribute to a better tomorrow through innovative and tailored services.</p>
                        </div>
                        <div className="rounded-xl borde p-4 shadow-2xl hover:shadow-black/50 card_bg">
                            <h6 className="text-center text-lg font-bold mb-5">Values</h6>
                            <p>We value innovation, integrity, excellence, sustainability, collaboration, customer focus, and empowerment, ensuring our actions reflect our commitment to progress and impact. These principles guide every decision we make, enabling us to build trust and drive positive change globally.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
