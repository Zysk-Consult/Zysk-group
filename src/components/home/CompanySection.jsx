import React from 'react'
import { GrSettingsOption } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const CompanySection = () => {
    return (
        <div id='service'>
            <div className="container">
                <h3 className="text-center text-2xl md:text-3xl playfair text-tertiary">Our Companies:</h3>
                {/* <div className="flex justify-center my-8">
                    <p className="text-center md:w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit reiciendis possimus praesentium, optio vero! Praesentium omnis, sed labore, quod inventore magni officiis eius temporibus libero soluta sit totam? Cum.</p>
                </div> */}
                <div className="grid md:grid-cols-3 gap-5 my-16">
                    <div className="rounded-xl hover:scale-[1.01] hover:bg-black/50 transition-all p-4 shadow-2xl hover:shadow-black/50 bg-black/40">
                        <h6 className="text-center text-lg font-bold mb-5">Zysk Technology</h6>
                        <div className="flex justify-center my-5">
                            <span>
                                <GrSettingsOption size={50} />
                            </span>
                        </div>
                        <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis harum architecto optio alias. Error quaerat dolore doloremque hic, non ipsam animi ratione veritatis voluptas voluptatum minus nam, quasi maxime?</p>
                        <Link to={""} className='btn_link py-4 w-[130px] text-alt hover:text-tertiary'><span>Learn more</span></Link>
                    </div>
                    <div className="rounded-xl hover:scale-[1.01] hover:bg-black/50 transition-all p-4 shadow-2xl hover:shadow-black/50 bg-black/40">
                        <h6 className="text-center text-lg font-bold mb-5">Zysk Technology</h6>
                        <div className="flex justify-center my-5">
                            <span>
                                <GrSettingsOption size={50} />
                            </span>
                        </div>
                        <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis harum architecto optio alias. Error quaerat dolore doloremque hic, non ipsam animi ratione veritatis voluptas voluptatum minus nam, quasi maxime?</p>
                        <Link to={""} className='btn_link py-4 w-[130px] text-alt hover:text-tertiary'><span>Learn more</span></Link>
                    </div>
                    <div className="rounded-xl hover:scale-[1.01] hover:bg-black/50 transition-all p-4 shadow-2xl hover:shadow-black/50 bg-black/40">
                        <h6 className="text-center text-lg font-bold mb-5">Zysk Technology</h6>
                        <div className="flex justify-center my-5">
                            <span>
                                <GrSettingsOption size={50} />
                            </span>
                        </div>
                        <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis harum architecto optio alias. Error quaerat dolore doloremque hic, non ipsam animi ratione veritatis voluptas voluptatum minus nam, quasi maxime?</p>
                        <Link to={""} className='btn_link py-4 w-[130px] text-alt hover:text-tertiary'><span>Learn more</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanySection