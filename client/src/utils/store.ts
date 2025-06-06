import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RankItem {
    id: string;
    name: string;
}

interface DailyRankState {
    // today's data
    currentDate: string;
    todaysTopic: string;
    todaysOptions: RankItem[];
    userRank: RankItem[];
    worldRank: RankItem[];
    hasSubmitted: boolean;
    totalSubmissions: number;

    // actions
    setUserRank: (rank: RankItem[]) => void; // sets userRank state var
    submitRank: () => void; // API call after submit button
    fetchWorldRank: () => void; // results page should fetch
    fetchDailyItems: () => void;
}

// Helper to get today's date in YYYY-MM-DD format
const getTodayString = () => {
    return new Date().toISOString().split('T')[0];
};

export const useStore = create<DailyRankState>()(
    persist(
        (set, get) => ({
            // Initial state
            currentDate: getTodayString(),
            todaysTopic: "",
            todaysOptions: [],
            userRank: [],
            worldRank: [],
            hasSubmitted: false,
            totalSubmissions: 0,

            // actions
            setUserRank: (rank) => set({ userRank: rank }),

            submitRank: () => set({
                hasSubmitted: true
                // TODO: send ranking to backend with API call
            }),

            fetchDailyItems: async () => {
                // set currentDate if not equal
                // fetch todays topic
                // fetch todays options
                const today = getTodayString();
                const { currentDate } = get();

                if (today !== currentDate) {
                    // It's a new day, reset the store and potentially fetch new topic
                    set({
                        currentDate: today,
                        userRank: [],
                        hasSubmitted: false,
                        // TODO: fetch the new topic from an API
                        todaysTopic: "favorite cities"
                    });
                }

                try {
                    // TODO: fetch data
                    const mockTodaysOptions: RankItem[] = [
                        { id: "1", name: "Chicago" },
                        { id: "2", name: "Houston" },
                        { id: "3", name: "Los Angeles" },
                        { id: "4", name: "Miami" },
                        { id: "5", name: "New York City" },
                    ];

                    set({
                        todaysOptions: mockTodaysOptions,
                        userRank: mockTodaysOptions
                    })
                } catch (err) {
                    console.error("error fetching daily items: ", err)
                };
            },

            fetchWorldRank: async () => {
                try {
                    // TODO: fetch data
                    const mockWorldRank: RankItem[] = [
                        { id: "1", name: "New York City" },
                        { id: "2", name: "Los Angeles" },
                        { id: "3", name: "Chicago" },
                        { id: "4", name: "Houston" },
                        { id: "5", name: "Miami" },
                    ]

                    const mockTotalSubmissions = 123456;

                    set({
                        worldRank: mockWorldRank,
                        totalSubmissions: mockTotalSubmissions,
                    });

                } catch (err) {
                    console.error("error fetching world rank: ", err);
                }
            }
        }),
        {
            name: 'daily-rank-storage',
            // Only persist these keys
            partialize: (state) => ({
                currentDate: state.currentDate,
                todaysTopic: state.todaysTopic,
                userRank: state.userRank,
                hasSubmitted: state.hasSubmitted
            }),
        }
    )
);