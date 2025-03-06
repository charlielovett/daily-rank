import { useState } from "react";

interface RankItem {
    id: string;
    content: string;
}

interface Tab {
    id: string;
    name: string;
}

export default function Results() {
    const userRank: RankItem[] = ([
        { id: 'item-1', content: 'Chicago' },
        { id: 'item-2', content: 'Los Angeles' },
        { id: 'item-3', content: 'Miami' },
        { id: 'item-4', content: 'New York' },
        { id: 'item-5', content: 'Houston' },
    ]);

    const worldRank: RankItem[] = ([
        { id: 'item-1', content: 'New York' },
        { id: 'item-2', content: 'Los Angeles' },
        { id: 'item-3', content: 'Chicago' },
        { id: 'item-4', content: 'Houston' },
        { id: 'item-5', content: 'Miami' },
    ]);

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
                    className={`flex items-center justify-center w-full h-10 rounded-full ${activeTab == tabs[0].id ? "bg-[#7E71FC]" : ''}`}
                    onClick={() => handleChangeTab(tabs[0].id)}
                >
                    <p className={`${activeTab == tabs[0].id ? "text-white" : "text-[#767676]"} text-sm font-bold`}>
                        My Rank
                    </p>
                </div>

                <div
                    className={`flex items-center justify-center w-full h-10 rounded-full ${activeTab == tabs[1].id ? "bg-[#7E71FC]" : ''}`}
                    onClick={() => handleChangeTab(tabs[1].id)}
                >
                    <p className={`${activeTab == tabs[1].id ? "text-white" : "text-[#767676]"} text-sm font-bold`}>
                        World Rank
                    </p>
                </div>

            </div>

            {/* Results */}
            <div className="h-fit px-6 pt-6 pb-4 rounded-[20px] bg-[#7E71FC]">
                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-white text-2xl font-bold">{activeTab == tabs[0].id ? "Your" : "World's"} favorite cities</h2>

                    {/* Results List */}
                    <div className="flex flex-col justify-between h-full w-full gap-1">
                        {currentRank.map((item, index) => (
                            <div className="flex items-center mb-2">

                                {/* Rank Numbers */}
                                <div className="w-12 h-9 rounded-md flex items-center justify-center mr-2 font-medium bg-white text-[#7E71FC]">
                                    {index + 1}
                                </div>

                                {/* Items */}
                                <div className="bg-white text-[#7E71FC] p-4 rounded-md w-full">
                                    <span>{item.content}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div >
    );
}