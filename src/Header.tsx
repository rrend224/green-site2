import { useState } from 'react'

const navItems = [
  ['About', '会社を知る', '#/about'],
  ['Work', '仕事を知る', '#/work'],
  ['Culture', '環境を知る', '#/culture'],
  ['People', '人を知る', '#/people'],
  ['Company', '企業サイト', '#/company'],
]

export function Header({ activePath }: { activePath: string }) {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="header">
      <a className="header__logo" href="#/" onClick={closeMenu}>
        サンプル株式会社
        <span>SAMPLE RECRUIT SITE</span>
      </a>
      <button
        className="header__menu"
        type="button"
        aria-expanded={open}
        aria-label="メニュー"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
      </button>
      <div className={`header__panel ${open ? 'is-open' : ''}`}>
        <nav className="header__nav" aria-label="メインナビゲーション">
          {navItems.map(([en, ja, href]) => (
            <a
              className={activePath === href.replace('#', '') ? 'is-current' : ''}
              href={href}
              key={en}
              onClick={closeMenu}
            >
              <strong>{en}</strong>
              <span>{ja}</span>
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <a className="pill pill--dark" href="#/entry-a" onClick={closeMenu}>
            エントリーA
          </a>
          <a className="pill pill--light" href="#/entry-b" onClick={closeMenu}>
            エントリーB
          </a>
        </div>
      </div>
    </header>
  )
}
