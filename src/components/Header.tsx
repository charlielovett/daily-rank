import { IoSettingsOutline } from "react-icons/io5";

export default function Header() {
    return (
        <header className="flex flex-row justify-between items-center h-16 mx-8 mt-8">
            <h2 className="text-4xl font-bold">Daily Rank</h2>
            <div className="bg-[#EEE] rounded-full p-3">
                <IoSettingsOutline size={32} color="#7E71FC" />
            </div>
        </header>
    )
};
