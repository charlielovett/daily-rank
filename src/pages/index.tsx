import RankingList from "@/components/RankingList";
import SubmitModal from "@/components/SubmitModal";
import { useEffect, useState } from "react";
import { useStore } from "../utils/store";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  const { hasSubmitted, currentDate, submitRank, fetchDailyItems } = useStore();
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // push to results page if user has already submitted
  useEffect(() => {
    fetchDailyItems();

    if (hasSubmitted) {
      router.push('/results');
    }

  }, [hasSubmitted, router, currentDate, fetchDailyItems]);

  return (
    <div>
      <SubmitModal
        show={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
        onSubmit={submitRank}
      />

      {/* height = screen - header.height - margin.height ** 2 */}
      <div className="flex flex-col overflow-hidden m-8 gap-8" style={{ height: 'calc(100vh - 96px - 64px)' }}>

        {/* Prompt Title */}
        <div>
          <h1 className="text-3xl font-bold">
            Rank your
          </ h1>
          <h1 className="text-3xl text-primary font-bold">
            favorite cities
          </h1>
        </div>


        {/* Rank Area */}
        <div className="flex-1 overflow-auto">
          <RankingList />
        </div>

        {/* Submit Button summons modal*/}
        <button
          className={`py-2 px-4 rounded
          ${hasSubmitted ?
              "bg-white text-[#767676] border border-[#767676]" :
              "bg-primary text-white hover:bg-[#5E4DFB]"}`}
          onClick={() => setShowSubmitModal(true)}
          disabled={hasSubmitted}
        >
          Submit
        </button >
      </div >
    </div>
  );
}
