'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MdDragIndicator } from "react-icons/md";


interface RankItemProps {
    id: string;
    rank: number;
    name: string;
}

const rankColorMap: Record<number, string> = {
    1: "bg-primary",
    2: "bg-[#9990FD]",
    3: "bg-[#B5AEFE]",
    4: "bg-[#D0CDFE]",
    5: "bg-[#EBEBFF]",
};

export function RankItem({ id, rank, name }: RankItemProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div className="flex items-center mb-2">
            {/* Static rank number - not draggable */}
            <div className={`w-12 h-9 rounded-md flex items-center justify-center mr-2 font-medium
                            ${rankColorMap[rank]} ${rank > 2 ? 'text-black' : 'text-white'}`}>
                {rank}
            </div>

            {/* Draggable item */}
            <div
                ref={setNodeRef}
                style={style}
                {...attributes}
                {...listeners}
                className={`bg-[#EBEBFF] p-4 rounded-md w-full cursor-grab active:cursor-grabbing flex justify-between items-center
                   ${isDragging ? 'border border-[#5E4DFB] shadow-sm z-10' : ''}`}
            >
                <span>{name}</span>
                <MdDragIndicator className="text-[#BFB8FD] text-2xl" />
            </div>
        </div>
    );
}