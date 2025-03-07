'use client'; // Important! This marks it as a client component

import { useState, useEffect } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { RankItem } from './RankItem';
import { useStore } from '../utils/store';

export default function RankingList() {
    const {
        userRank,
        hasSubmitted,
        setUserRank,
        fetchDailyItems,
    } = useStore();

    useEffect(() => {
        if (userRank.length === 0) {
            fetchDailyItems();
        }
    }, [fetchDailyItems, userRank.length])

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = userRank.findIndex((item) => item.id === active.id);
            const newIndex = userRank.findIndex((item) => item.id === over.id);

            // Create new array with reordered items
            const newRanking = arrayMove([...userRank], oldIndex, newIndex);

            // Update the store with the entire new ranking
            setUserRank(newRanking);
        }
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
        >
            <SortableContext
                items={userRank.map(item => item.id)}
                strategy={verticalListSortingStrategy}
                disabled={hasSubmitted}
            >
                <div className="h-full flex flex-col justify-between">
                    {userRank.map((item, index) => (
                        <RankItem
                            key={item.id}
                            id={item.id}
                            rank={index + 1}
                            name={item.name}
                        />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
}