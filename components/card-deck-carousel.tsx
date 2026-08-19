/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
  type Transition,
} from 'motion/react';

export interface DeckItem {
  src: string;
  alt?: string;
}

interface CardDeckCarouselProps {
  items: DeckItem[];
  visibleCount?: number;
  className?: string;
}

const TILTS = [0, -7, 5, -10, 8, -5];
const Y_STEP = 10;
const SCALE_STEP = 0.045;

const SPRING: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
  mass: 0.6,
};

export default function CardDeckCarousel({
  items,
  visibleCount = 4,
  className = '',
}: CardDeckCarouselProps) {
  const [order, setOrder] = useState<number[]>(() => items.map((_, i) => i));

  const sendFrontToBack = () => {
    setOrder(prev => {
      const [front, ...rest] = prev;
      return [...rest, front];
    });
  };

  return (
    <div
      className={`relative w-full max-w-xl aspect-[16/10] ${className}`}
      style={{ perspective: 1200 }}
    >
      {/* PENTING: map seluruh `order`, JANGAN di-slice. Kartu yang berada
          di luar `visibleCount` tetap dirender (hanya disamarkan lewat opacity)
          supaya animasinya tidak terputus/hilang instan. */}
      {order.map((itemIndex, stackPos) => (
        <DeckCard
          key={itemIndex}
          item={items[itemIndex]}
          stackPos={stackPos}
          total={order.length}
          visibleCount={visibleCount}
          onSwipedAway={stackPos === 0 ? sendFrontToBack : undefined}
        />
      ))}
    </div>
  );
}

function DeckCard({
  item,
  stackPos,
  total,
  visibleCount,
  onSwipedAway,
}: {
  item: DeckItem;
  stackPos: number;
  total: number;
  visibleCount: number;
  onSwipedAway?: () => void;
}) {
  const isFront = stackPos === 0;
  const isVisible = stackPos < visibleCount;
  // kartu di luar jendela visibleCount "ditahan" tepat di belakang
  // kartu terakhir yang terlihat, siap slide masuk saat gilirannya tiba
  const clampedPos = Math.min(stackPos, visibleCount);

  const x = useMotionValue(0);
  const y = useMotionValue(clampedPos * Y_STEP);
  const rotateZ = useMotionValue(TILTS[clampedPos % TILTS.length]);
  const scale = useMotionValue(1 - clampedPos * SCALE_STEP);
  const opacity = useMotionValue(isVisible ? 1 : 0);

  const rotateX = useTransform(y, [-300, 300], [18, -18]);
  const rotateY = useTransform(x, [-300, 300], [-18, 18]);

  const mounted = useRef(false);

  useEffect(() => {
    const targetY = clampedPos * Y_STEP;
    const targetScale = 1 - clampedPos * SCALE_STEP;
    const targetRotateZ = TILTS[clampedPos % TILTS.length];
    const targetOpacity = isVisible ? 1 : 0;

    if (!mounted.current) {
      mounted.current = true;
      x.set(0);
      y.set(targetY);
      scale.set(targetScale);
      rotateZ.set(targetRotateZ);
      opacity.set(targetOpacity);
      return;
    }

    const controls = [
      animate(x, 0, SPRING),
      animate(y, targetY, SPRING),
      animate(scale, targetScale, SPRING),
      animate(rotateZ, targetRotateZ, SPRING),
      animate(opacity, targetOpacity, { duration: 0.25 }),
    ];

    return () => controls.forEach(c => c.stop());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stackPos]);

  function handleDragEnd(_: unknown, info: PanInfo) {
    const DRAG_THRESHOLD = 130;
    const distance = Math.hypot(info.offset.x, info.offset.y);
    const isFlick = Math.hypot(info.velocity.x, info.velocity.y) > 600;

    if ((distance > DRAG_THRESHOLD || isFlick) && onSwipedAway) {
      onSwipedAway();
    } else {
      animate(x, 0, SPRING);
      animate(y, 0, SPRING);
    }
  }

  return (
    <motion.div
      className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 ring-1 ring-white/10 cursor-grab active:cursor-grabbing"
      style={{
        zIndex: total - stackPos,
        x,
        y,
        rotateZ,
        rotateX,
        rotateY,
        scale,
        opacity,
        transformPerspective: 1200,
        pointerEvents: isFront ? 'auto' : 'none',
      }}
      drag={isFront}
      dragElastic={1}
      dragMomentum={false}
      onDragEnd={isFront ? handleDragEnd : undefined}
      whileDrag={{ cursor: 'grabbing' }}
    >
      <img
        src={item.src}
        alt={item.alt ?? ''}
        className="h-full w-full object-cover pointer-events-none"
        draggable={false}
      />
    </motion.div>
  );
}
