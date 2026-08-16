const projects = [
  { number: '01', title: 'MORI — Brand website', description: '小さなホテルの空気感を、静かな余白と心地よい動きで伝えるブランドサイト。', tags: ['Art direction', 'Web design', 'Development'], color: 'lime' },
  { number: '02', title: 'Loop — Product design', description: '毎日の習慣を無理なく続けるための、シンプルなモバイル体験。', tags: ['UI / UX', 'Prototype', 'Design system'], color: 'blue' },
  { number: '03', title: 'Nagi — Visual identity', description: '瀬戸内の風景から着想した、クラフトブランドのアイデンティティ。', tags: ['Branding', 'Graphic', 'Photography'], color: 'coral' },
] as const

const skills = ['Art Direction', 'UI / UX Design', 'Frontend Development', 'Branding']
const Arrow = () => <span aria-hidden="true">↗</span>

function App() {
  return (
    <div className="site-shell">
      <header className="header">
        <a className="logo" href="#top" aria-label="ホームへ">YN<span>.</span></a>
        <nav aria-label="メインナビゲーション">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <p className="eyebrow">Designer &amp; Developer · Tokyo</p>
          <h1>Ideas into<br /><em>meaningful</em> experiences.</h1>
          <div className="hero__footer">
            <p>デザインとコードの両方から、ブランドの魅力が<br />まっすぐ伝わる体験をつくります。</p>
            <a className="circle-link" href="#work" aria-label="制作実績を見る">↓</a>
          </div>
          <div className="orb" aria-hidden="true"><span /></div>
        </section>

        <section className="section work" id="work">
          <div className="section-heading"><p className="eyebrow">Selected work · 2024—2026</p><h2>つくったもの</h2></div>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project" href="#contact" key={project.number}>
                <div className={`project__visual project__visual--${project.color}`}>
                  <span>{project.number}</span>
                  <div className="project__mockup"><i /><strong>{project.title.split(' — ')[0]}</strong><small>Thoughtfully made.</small></div>
                </div>
                <div className="project__details"><div><h3>{project.title}</h3><p>{project.description}</p></div><Arrow /></div>
                <ul aria-label="担当領域">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </a>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <p className="eyebrow">About me</p>
          <div className="about__grid">
            <h2>考えて、つくる。<br />その間を、なめらかに。</h2>
            <div className="about__copy">
              <p>東京を拠点に活動するデザイナー / デベロッパーです。本質を見つけるところから、デザイン、実装まで一貫して取り組みます。</p>
              <ul>{skills.map((skill, index) => <li key={skill}><span>0{index + 1}</span>{skill}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">Have a project in mind?</p>
          <a href="mailto:hello@example.com">一緒につくりましょう<Arrow /></a>
          <footer><p>© 2026 Your Name</p><a href="#top">Back to top ↑</a></footer>
        </section>
      </main>
    </div>
  )
}

export default App
