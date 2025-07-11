import { FaSearch, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import LOGO from "../../public/Logo.png";
import { NavMenuItem } from "../types/nav";

type Props = {
	nav: boolean;
	// handleNav: () => void;
	// setNavMenu: React.Dispatch<React.SetStateAction<NavMenuItem[]>>;
	navMenu: NavMenuItem[];
};

export const MobileNav = ({ nav, navMenu }: Props) => {
	return (
		<div className={nav ? "fixed top-0 bg-black transition duration-700 ease-in-out h-full w-full translate-y-0 z-30" : "hidden transition duration-700 translate-y-full ease-in-out"}>
			<div className="container mx-auto lg:flex items-center justify-between p-8">
				<div className="text-white uppercase text-3xl flex items-center gap-2">
					<img src={LOGO} width={50} alt="Blog Logo" />
					<h3 className="font-sans3 text-7xl md:text-4xl">KellyDEV</h3>
				</div>
			</div>
			<div className="flex items-center justify-center gap-4">
				<a href="#" className="text-white">
					<FaFacebook size={48} />
				</a>
				<a href="#" className="text-white">
					<FaInstagram size={48} />
				</a>
				<a href="#" className="text-white">
					<FaYoutube size={48} />
				</a>
			</div>
			<div className="flex items-center justify-between gap-4 border-2 border-gray-600 rounded-[5px] bg-gray-800 py-[.25rem] m-10">
				<input className="placeholder-white px-4" type="Search" placeholder="Search..." />
				<FaSearch className="text-white mr-4" />
			</div>
			<ul className="flex flex-col items-center justify-center uppercase text-white font-bold">
				{navMenu.map((menu) => {
					return (
						<li key={menu.title} className="border-b-2 border-gray-600 relative w-full text-center hover:bg-gray-800">
							<a className="text-3xl font-sans3 lg:text-[1rem]" href={menu.href}>
								{menu.title}
							</a>
							{menu.dropdown && (
								<ul className="hidden absolute top-full left-0 bg-gray-800 text-white p-2 rounded shadow-lg">
									{menu.dropdown.map((item) => (
										<li key={item.title}>
											<a href={item.href} className="block px-4 py-2 hover:bg-gray-700">
												{item.title}
											</a>
										</li>
									))}
								</ul>
							)}
						</li>
					);
				})}
			</ul>
			<div className="flex items-center justify-center gap-4 mt-4">
				<p className="text-white uppercase font-sans3 text-[1rem] font-bold">
					<a href="#">Subscribe</a>
				</p>
			</div>
		</div>
	);
};
