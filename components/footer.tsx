import { GENERAL_INFO } from '@/data/general.const';

export default function Footer() {
  return <footer className="surface-dark border-t border-primary-foreground/10 px-6 py-10 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="section-kicker text-secondary">SIG Surabaya / Employee Gathering 2026</p><p className="display-serif mt-3 text-3xl text-primary-foreground">{GENERAL_INFO.theme}</p></div><div className="text-left text-xs leading-5 text-primary-foreground/60 sm:text-right">Banyuwangi, Jawa Timur<br />18–20 September 2026<br />© 2026 IT SIGS Team</div></div></footer>;
}
