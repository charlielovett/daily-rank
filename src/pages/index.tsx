import RankingList from "@/components/RankingList";
import SubmitModal from "@/components/SubmitModal";
import { useState } from "react";


export default function Home() {
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  return (
    <div>
      <SubmitModal
        show={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
      />

      {/* height = screen - header.height - margin.height ** 2 */}
      <div className="flex flex-col overflow-hidden m-8 gap-8" style={{ height: 'calc(100vh - 96px - 64px)' }}>

        {/* Prompt Title */}
        <div>
          <h1 className="text-3xl font-bold">
            Rank your
          </ h1>
          <h1 className="text-3xl text-[#7E71FC] font-bold">
            favorite cities
          </h1>
        </div>


        {/* Rank Area */}
        <div className="flex-1 overflow-auto">
          <RankingList />
        </div>

        {/* Submit Button summons modal*/}
        <button
          className="bg-[#7E71FC] text-white py-2 px-4 rounded hover:bg-[#5E4DFB]"
          onClick={() => setShowSubmitModal(true)}
        >
          Submit
        </button >
      </div >
    </div>
  );
}
