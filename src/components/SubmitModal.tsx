import Link from "next/link";

type ModalProps = {
    show: boolean;
    onClose: () => void;
    // title?: string;
    // children?: React.ReactNode;
};

export default function SubmitModal({ show, onClose}: ModalProps) {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 bg-blur-lg overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="w-[90%] px-4 pt-6 pb-4 border rounded-[20px] bg-white">
                <div className="flex flex-col gap-4 text-center">
                    <h3 className="text-2xl font-bold text-[#7E71FC]">Ready to Submit?</h3>
                    <p className="text-md text-black">
                        Please confirm that you're happy with your rankings.
                        You won't be able to edit them after submission.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button
                            className="bg-white text-[#767676] w-full h-12 border border-[#767676] rounded-[10px] hover:bg-[#E4E4E4]"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <Link
                            href="/results"
                            className="flex items-center justify-center bg-[#7E71FC] text-white w-full h-12 rounded-[10px] hover:bg-[#5E4DFB]"
                        >
                            Submit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}