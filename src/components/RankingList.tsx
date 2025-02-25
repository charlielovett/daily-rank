'use client'; // Important! This marks it as a client component

import { useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { RankItem } from './RankItem';

interface Item {
    id: string;
    content: string;
}

export default function RankingList() {
    const [items, setItems] = useState<Item[]>([
        { id: 'item-1', content: 'Chicago' },
        { id: 'item-2', content: 'Los Angeles' },
        { id: 'item-3', content: 'Miami' },
        { id: 'item-4', content: 'New York' },
        { id: 'item-5', content: 'Houston' },
    ]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
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
                items={items.map(item => item.id)}
                strategy={verticalListSortingStrategy}
            >
                <div className="h-full flex flex-col justify-between">
                    {items.map((item, index) => (
                        <RankItem
                            key={item.id}
                            id={item.id}
                            rank={index + 1}
                            content={item.content}
                        />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
}