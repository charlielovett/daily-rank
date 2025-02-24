import { IoSettingsOutline } from "react-icons/io5";

export default function Header() {
    return (
        <header className="flex flex-row justify-between items-center h-16 mx-8 mt-8">
            <h2 className="text-2xl">Daily Rank</h2>
            <IoSettingsOutline size={32} />
        </header>
    )
};
