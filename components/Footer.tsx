import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
	return (
		<>
        <section className="mx-auto max-w-7xl">
			<div className=" h-1/2 w-full flex lg:flex-row flex-col justify-around items-start   mx-auto">
				<div className="py-5 ">
					<ul>
						<Image
							width={300}
                            height={150}
							alt="NextUI hero Image"
							src={'/logo.svg'}
							/>
						<div className="flex gap-5 pb-5 pl-8 pt-6">
							<Link href={'https://www.instagram.com/raazain.store/'}>
							  <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							</Link>
							<Link href={'https://twitter.com/i/flow/login?redirect_after_login=%2Fraazainuae'}>
							<FaXTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							</Link>
							<Link href={'https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F101499627%2Fadmin%2F'}>
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							</Link>
							<Link href={'https://www.tiktok.com/@raazain.store'}>
							<FaTiktok className="text-2xl cursor-pointer hover:text-red-600" />
							</Link>
							<Link href={'https://www.pinterest.com/raazainstore/'}>
								<FaPinterest className="hover:text-primary text-2xl cursor-pointer" />
							</Link>
							<Link href={'https://www.facebook.com/raazain.uae'}>
								<FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
							</Link>
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className=" font-bold text-2xl pb-4">Categories</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                            Beauty & Health
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                            Skin Care Products
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                            Home Decor & appliances
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
							Jewelry & Accessories 
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                            Makeup Accessories
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                            Perfume & Fragrance
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className=" font-bold text-2xl pb-4">Legal</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
							Privacy Policy
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
							Terms & Conditions
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
							Refund Policy
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className=" font-bold text-2xl pb-4">Service Center</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer w-[270px]">
							H.No.24 Behind Dr. Rajeevan&apos;s Clinic, Ajman Indsutrial Area 2, Ajman, UAE
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
							Tel: +971558522916
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
							Email: raazain.store@gmail.com
						</li>
					</ul>
				</div>
			</div>
			
            </section>
            <div className="flex flex-col justify-center items-center text-center  py-5 border-t">
				<h1 className=" text-gray-400 font-semibold">
					© 2024 RAAZAIN, All rights reserved 
				</h1>
			</div>
		</>
	);
}

export default Footer;