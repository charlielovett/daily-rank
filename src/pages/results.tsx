interface Item {
    id: string;
    content: string;
}

export default function Results() {
    const items = ([
        { id: 'item-1', content: 'Chicago' },
        { id: 'item-2', content: 'Los Angeles' },
        { id: 'item-3', content: 'Miami' },
        { id: 'item-4', content: 'New York' },
        { id: 'item-5', content: 'Houston' },
    ]);

    return (
        <div className="flex flex-col overflow-hidden m-8 gap-8" style={{ height: 'calc(100vh - 96px - 64px)' }}>
            <div className="h-fit px-6 pt-6 pb-4 rounded-[20px] bg-[#7E71FC]">
                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-white text-2xl font-bold">Your favorite cities</h2>

                    {/* Results List */}
                    <div className="flex flex-col justify-between h-full w-full gap-1">
                        {items.map((item, index) => (
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