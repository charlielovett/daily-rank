import { useEffect, useState } from "react";
import { useStore } from '../utils/store';

interface Tab {
    id: string;
    name: string;
}

export default function Results() {
    const {
        userRank,
        worldRank,
        totalSubmissions,
        fetchWorldRank,
    } = useStore();

    useEffect(() => {
        if (worldRank.length === 0) {
            fetchWorldRank();
        }
    }, [fetchWorldRank, worldRank])

    const tabs: Tab[] = ([
        { id: 'tab-1', name: 'My Rank' },
        { id: 'tab-2', name: 'World Rank' },
    ])

    const [activeTab, setActiveTab] = useState(tabs[0].id)
    const [currentRank, setCurrentRank] = useState(userRank)

    function handleChangeTab(newTab: string) {
        setActiveTab(newTab);
        newTab == 'tab-1' ? setCurrentRank(userRank) : setCurrentRank(worldRank);
    }

    return (
        <div className="flex flex-col overflow-hidden m-8 gap-4" style={{ height: 'calc(100vh - 96px - 64px)' }}>

            {/* Tabs */}
            <div className="flex justify-center items-center gap-1 bg-[#EEEEEE] rounded-full p-1">

                <div
                    className={`flex items-center justify-center w-full h-10 rounded-full ${activeTab == tabs[0].id ? "bg-primary" : ''}`}
                    onClick={() => handleChangeTab(tabs[0].id)}
                >
                    <p className={`${activeTab == tabs[0].id ? "text-white" : "text-[#767676]"} text-sm font-bold`}>
                        My Rank
                    </p>
                </div>

                <div
                    className={`flex items-center justify-center w-full h-10 rounded-full ${activeTab == tabs[1].id ? "bg-primary" : ''}`}
                    onClick={() => handleChangeTab(tabs[1].id)}
                >
                    <p className={`${activeTab == tabs[1].id ? "text-white" : "text-[#767676]"} text-sm font-bold`}>
                        World Rank
                    </p>
                </div>

            </div>

            {/* Results */}
            <div className="h-fit px-6 pt-6 pb-4 rounded-[20px] bg-primary">
                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-white text-2xl font-bold">{activeTab == tabs[0].id ? "Your" : "World's"} favorite cities</h2>

                    {/* Results List */}
                    <div className="flex flex-col justify-between h-full w-full gap-1">
                        {currentRank.map((item, index) => (
                            <div className="flex items-center mb-2">

                                {/* Rank Numbers */}
                                <div className="w-12 h-9 rounded-md flex items-center justify-center mr-2 font-medium bg-white text-primary">
                                    {index + 1}
                                </div>

                                {/* Items */}
                                <div className="bg-white text-primary p-4 rounded-md w-full">
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Total Submissions */}
            <div className="flex flex-col items-center justify-center">
                <p className="text-sm">Total Submissions</p>
                <h3 className="text-3xl tracking-wider font-bold text-primary">{totalSubmissions.toLocaleString()}</h3>
            </div>

        </div >
    );
}