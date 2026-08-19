'use client';

import CardDeckCarousel from '@/components/card-deck-carousel';
import { ARTEFACTS } from '@/data/artefacts.const';

export default function MemoriesSection() {
  return (
    <section className="bg-background px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            <p className="eyebrow-line section-kicker text-secondary mb-4">
              Kenangan Indah
            </p>
            <h2 className="display-serif text-5xl sm:text-6xl text-primary mb-6">
              Cerita dari
              <br />
              <span className="text-teal">tahun lalu.</span>
            </h2>
            <p className="text-base leading-7 text-muted-foreground mb-6">
              Setiap gathering memberi cerita baru, tawa canda serta momen yang
              tak terlupakan. Kebersamaan menjadikan inspirasi untuk tetap
              bertumbuh dalam budaya yang positif!!!
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-1 bg-teal rounded-full"></div>
                <div>
                  <p className="font-semibold text-primary">
                    Kebersamaan yang Autentik
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Momen nyata dari tim yang saling mendukung dan tumbuh
                    bersama.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-1 bg-teal rounded-full"></div>
                <div>
                  <p className="font-semibold text-primary">
                    Kenangan yang Bermakna
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Setiap foto adalah bukti ikatan dan loyalitas tim SIG
                    Surabaya.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-1 bg-teal rounded-full"></div>
                <div>
                  <p className="font-semibold text-primary">
                    Tradisi Berlanjut
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Tahun ini, kita akan menciptakan memori baru di Banyuwangi
                    yang sama spesialnya.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Card Deck Carousel */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md md:max-w-lg">
              <CardDeckCarousel
                items={ARTEFACTS}
                visibleCount={3}
                className="mx-auto"
              />
              <p className="text-center text-sm text-muted-foreground mt-24">
                ✨ Drag atau swipe untuk melihat lebih banyak kenangan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
