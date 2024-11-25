import React from 'react'

const AboutSection = () => {
    return (
        <div id='about' className='mb-20'>
            <div className="container">
                <h3 className="text-center text-2xl md:text-3xl playfair text-tertiary">About Zysk Group:</h3>
                <div className="flex justify-center my-6">
                    <p className="text-center md:w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit reiciendis possimus praesentium, optio vero! Praesentium omnis, sed labore, quod inventore magni officiis eius temporibus libero soluta sit totam? Cum.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-5 my-16">
                    <div className="rounded-xl borde p-4 shadow-2xl hover:shadow-black/50 card_bg">
                        <h6 className="text-center text-lg font-bold mb-5">Vision</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis harum architecto optio alias. Error quaerat dolore doloremque hic, non ipsam animi ratione veritatis voluptas voluptatum minus nam, quasi maxime?</p>
                    </div>
                    <div className="rounded-xl borde p-4 shadow-2xl hover:shadow-black/50 card_bg">
                        <h6 className="text-center text-lg font-bold mb-5">Mission</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis harum architecto optio alias. Error quaerat dolore doloremque hic, non ipsam animi ratione veritatis voluptas voluptatum minus nam, quasi maxime?</p>
                    </div>
                    <div className="rounded-xl borde p-4 shadow-2xl hover:shadow-black/50 card_bg">
                        <h6 className="text-center text-lg font-bold mb-5">Values</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis harum architecto optio alias. Error quaerat dolore doloremque hic, non ipsam animi ratione veritatis voluptas voluptatum minus nam, quasi maxime?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection