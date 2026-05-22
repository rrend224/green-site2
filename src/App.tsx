import { useEffect, useState } from 'react'
import { Header } from './Header'

type PageKey = 'about' | 'work' | 'culture' | 'people' | 'entry-a' | 'entry-b' | 'company'

const heroSlides = ['slide-a', 'slide-b', 'slide-c', 'slide-d', 'slide-e']

const news = [
  ['2026.04.23', 'News', 'サンプルニュースのタイトルが入ります'],
  ['2026.04.02', 'Info', 'サンプルのお知らせテキストが入ります'],
  ['2025.12.19', 'Event', 'サンプルイベント情報が入ります'],
]

const people = [
  ['person-a', 'サンプル職種A', 'サンプルインタビューの見出しテキストが入ります', 'A・A'],
  ['person-b', 'サンプル職種B', 'サンプルインタビューの見出しテキストが入ります', 'B・B'],
  ['person-c', 'サンプル職種C', 'サンプルインタビューの見出しテキストが入ります', 'C・C'],
  ['person-d', 'サンプル職種D', 'サンプルインタビューの見出しテキストが入ります', 'D・D'],
  ['person-e', 'サンプル職種E', 'サンプルインタビューの見出しテキストが入ります', 'E・E'],
  ['person-f', 'サンプル職種F', 'サンプルインタビューの見出しテキストが入ります', 'F・F'],
]

const pages: Record<
  PageKey,
  {
    label: string
    sub: string
    lead: string
    tone: string
    sections: Array<{ title: string; body: string }>
  }
> = {
  about: {
    label: 'About',
    sub: 'サンプル会社を知る',
    lead: 'ここには会社紹介ページのサンプルリード文が入ります。理念、沿革、特徴を伝えるための仮テキストです。',
    tone: 'image-placeholder--about-a',
    sections: [
      {
        title: 'サンプルメッセージ',
        body: 'ここには企業メッセージのサンプルテキストが入ります。事業や組織の考え方を、読みやすい文章量で紹介する想定です。',
      },
      {
        title: 'サンプルデータ',
        body: 'ここには数字で見る会社情報のサンプルテキストが入ります。人数、拠点、プロジェクト比率などを配置できます。',
      },
    ],
  },
  work: {
    label: 'Work',
    sub: 'サンプルワーク',
    lead: 'ここには仕事紹介ページのサンプルリード文が入ります。職種やプロジェクトの広がりを紹介する想定です。',
    tone: 'image-placeholder--work-a',
    sections: [
      {
        title: 'サンプル職種A',
        body: 'ここには職種紹介のサンプルテキストが入ります。仕事内容、チーム体制、身につくスキルなどを掲載できます。',
      },
      {
        title: 'サンプル職種B',
        body: 'ここには別職種のサンプルテキストが入ります。プロジェクトの進め方や働き方の特徴を説明できます。',
      },
    ],
  },
  culture: {
    label: 'Culture',
    sub: 'サンプルカルチャー',
    lead: 'ここには環境紹介ページのサンプルリード文が入ります。制度、福利厚生、成長支援などを掲載する想定です。',
    tone: 'image-placeholder--culture-a',
    sections: [
      {
        title: 'サンプル制度',
        body: 'ここには制度紹介のサンプルテキストが入ります。働きやすさを支える仕組みをカード形式で展開できます。',
      },
      {
        title: 'サンプルイベント',
        body: 'ここには社内イベントや交流機会のサンプルテキストが入ります。写真枠やレポート導線にも展開できます。',
      },
    ],
  },
  people: {
    label: 'People',
    sub: 'サンプルメンバー',
    lead: 'ここにはメンバー紹介ページのサンプルリード文が入ります。カードから詳細インタビューへ進む設計を想定しています。',
    tone: 'person-a',
    sections: [
      {
        title: 'サンプルインタビュー',
        body: 'ここにはメンバーの働き方や入社理由を紹介するサンプルテキストが入ります。',
      },
      {
        title: 'サンプルクロストーク',
        body: 'ここには対談コンテンツのサンプルテキストが入ります。複数名の会話記事にも展開できます。',
      },
    ],
  },
  'entry-a': {
    label: 'Entry',
    sub: 'エントリーA',
    lead: 'ここにはエントリーAの募集情報サンプルが入ります。応募条件や選考フローを掲載する想定です。',
    tone: 'image-placeholder--culture-c',
    sections: [
      {
        title: 'サンプル応募項目A',
        body: '職種、勤務地、勤務時間、給与、休日休暇などのサンプル項目を配置できます。',
      },
      {
        title: 'サンプル選考フロー',
        body: 'エントリー、書類確認、面談、最終確認などの流れをサンプルとして掲載できます。',
      },
    ],
  },
  'entry-b': {
    label: 'Entry',
    sub: 'エントリーB',
    lead: 'ここにはエントリーBの募集情報サンプルが入ります。別区分の応募導線として使えるページです。',
    tone: 'image-placeholder--culture-d',
    sections: [
      {
        title: 'サンプル応募項目B',
        body: '経験、スキル、歓迎条件、配属イメージなどのサンプル項目を配置できます。',
      },
      {
        title: 'サンプルFAQ',
        body: '応募前によくある質問のサンプルテキストが入ります。アコーディオン表示にも拡張できます。',
      },
    ],
  },
  company: {
    label: 'Company',
    sub: 'サンプル企業サイト',
    lead: 'ここには企業サイト風ページのサンプルリード文が入ります。概要、サービス、問い合わせ導線を配置できます。',
    tone: 'image-placeholder--about-b',
    sections: [
      {
        title: 'サンプル会社概要',
        body: '会社名、所在地、設立、サービス内容などのサンプル情報を掲載するエリアです。',
      },
      {
        title: 'サンプルサービス',
        body: '提供サービスや実績のサンプルテキストが入ります。採用サイト外への導線としても使えます。',
      },
    ],
  },
}

function getRoute() {
  return window.location.hash.replace(/^#/, '') || '/'
}

function useHashRoute() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}

function SectionTitle({
  label,
  sub,
  text,
}: {
  label: string
  sub: string
  text?: string
}) {
  return (
    <div className="section-title">
      <h2>{label}</h2>
      <p className="section-title__sub">{sub}</p>
      {text && <p className="section-title__text">{text}</p>}
    </div>
  )
}

function HomePage() {
  return (
    <main>
      <section className="hero" aria-label="メインビジュアル">
        <div className="hero__slider">
          {heroSlides.map((slide, index) => (
            <div
              className={`hero__slide ${slide}`}
              style={{ animationDelay: `${index * 4}s` }}
              key={slide}
            />
          ))}
        </div>
        <div className="hero__copy">
          <p className="hero__tag">SAMPLE COMPANY</p>
          <h1>サンプルコピーが入ります</h1>
          <p>サンプルのリード文が入ります。</p>
        </div>
        <div className="hero__scroll">Scroll</div>
      </section>

      <section className="news section">
        <SectionTitle label="News" sub="サンプルニュース" />
        <div className="news__list">
          {news.map(([date, tag, title]) => (
            <a className="news__item" href="#/company" key={title}>
              <time>{date}</time>
              <span>{tag}</span>
              <p>{title}</p>
            </a>
          ))}
        </div>
        <a className="round-button" href="#/company">
          More
        </a>
      </section>

      <section className="about section section--dust">
        <SectionTitle
          label="About"
          sub="サンプル会社を知る"
          text="ここにはサンプル会社の紹介文が入ります。理念、特徴、働き方などを説明するための仮テキストです。"
        />
        <div className="about__grid">
          <a className="feature-card feature-card--large" href="#/about">
            <div className="image-placeholder image-placeholder--about-a" />
            <span>サンプル項目A</span>
          </a>
          <a className="feature-card" href="#/about">
            <div className="image-placeholder image-placeholder--about-b" />
            <span>サンプル項目B</span>
          </a>
        </div>
      </section>

      <section className="work section">
        <SectionTitle
          label="Work"
          sub="サンプルワーク"
          text="ここには仕事紹介のサンプル説明文が入ります。職種やプロジェクト、チームの特徴を紹介する仮テキストです。"
        />
        <div className="split">
          <div className="image-placeholder image-placeholder--work-a" />
          <div className="split__body">
            <p className="eyebrow">Business</p>
            <h3>サンプル見出しが入ります。</h3>
            <p>
              ここにはサービスや業務内容を説明するサンプルテキストが入ります。
              実際の情報に差し替える前の仮コンテンツです。
            </p>
            <a className="round-button" href="#/work">
              More
            </a>
          </div>
          <div className="image-placeholder image-placeholder--work-b" />
        </div>
      </section>

      <section className="culture section section--dust">
        <SectionTitle
          label="Culture"
          sub="サンプルカルチャー"
          text="ここには制度や環境を紹介するサンプル説明文が入ります。福利厚生や社内文化などを掲載する想定です。"
        />
        <div className="culture__grid">
          {[
            ['サンプル項目C', 'image-placeholder--culture-a'],
            ['サンプル項目D', 'image-placeholder--culture-b'],
            ['サンプル項目E', 'image-placeholder--culture-c'],
            ['サンプル項目F', 'image-placeholder--culture-d'],
          ].map(([title, tone]) => (
            <a className="feature-card" href="#/culture" key={title}>
              <div className={`image-placeholder ${tone}`} />
              <span>{title}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="people section">
        <SectionTitle
          label="People"
          sub="サンプルメンバー"
          text="ここにはメンバー紹介のサンプル説明文が入ります。実在情報ではない仮のカードです。"
        />
        <div className="people__rail" aria-label="サンプルメンバー">
          {people.map(([tone, role, text, name]) => (
            <a className="person-card" href="#/people" key={name}>
              <div className={`person-card__image ${tone}`} />
              <div>
                <p className="person-card__role">{role}</p>
                <h3>{text}</h3>
                <p className="person-card__name">{name}</p>
                <p className="person-card__data">20XX年参加／サンプル区分</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <aside className="recruit">
        <SectionTitle
          label="Entry"
          sub="サンプルエントリー"
          text="ここには募集情報やFAQへの導線を配置する想定のサンプルテキストが入ります。"
        />
        <div className="recruit__grid">
          <a className="entry entry--green" href="#/entry-a">
            <span>エントリーA</span>
            <strong>Entry</strong>
          </a>
          <a className="entry entry--light" href="#/entry-b">
            <span>エントリーB</span>
            <strong>Entry</strong>
          </a>
        </div>
      </aside>
    </main>
  )
}

function DetailPage({ page }: { page: (typeof pages)[PageKey] }) {
  return (
    <main className="lower">
      <section className="lower-hero">
        <div className={`lower-hero__visual image-placeholder ${page.tone}`} />
        <div className="lower-hero__body">
          <p className="hero__tag">SAMPLE PAGE</p>
          <h1>{page.label}</h1>
          <p>{page.sub}</p>
        </div>
      </section>

      <section className="section lower-lead">
        <SectionTitle label={page.label} sub={page.sub} text={page.lead} />
      </section>

      <section className="section lower-content section--dust">
        <div className="lower-cards">
          {page.sections.map((section, index) => (
            <article className="lower-card" key={section.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
        <div className="lower-feature">
          <div className={`image-placeholder ${page.tone}`} />
          <div>
            <p className="eyebrow">Sample Detail</p>
            <h2>サンプル詳細見出しが入ります。</h2>
            <p>
              ここには下層ページ共通の詳細テキストが入ります。トップページと同じデザイン言語で、
              角丸の大きな画像枠、グリーンの背景、ゆったりした余白を使っています。
            </p>
          </div>
        </div>
      </section>

      <aside className="lower-cta">
        <SectionTitle
          label="Entry"
          sub="サンプルエントリー"
          text="気になるページを見たあとに、エントリー導線へ進める想定です。"
        />
        <div className="recruit__grid">
          <a className="entry entry--green" href="#/entry-a">
            <span>エントリーA</span>
            <strong>Entry</strong>
          </a>
          <a className="entry entry--light" href="#/entry-b">
            <span>エントリーB</span>
            <strong>Entry</strong>
          </a>
        </div>
      </aside>
    </main>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <a className="footer__logo" href="#/">
        サンプル株式会社
        <br />
        SAMPLE RECRUIT SITE
      </a>
      <nav aria-label="フッターナビゲーション">
        <a href="#/about">会社を知る</a>
        <a href="#/work">仕事を知る</a>
        <a href="#/culture">環境を知る</a>
        <a href="#/people">人を知る</a>
        <a href="#/entry-a">エントリーA</a>
        <a href="#/entry-b">エントリーB</a>
      </nav>
      <small>Copyright © Sample Company All rights reserved.</small>
    </footer>
  )
}

function App() {
  const route = useHashRoute()
  const pageKey = route.replace(/^\//, '') as PageKey
  const page = pages[pageKey]

  return (
    <div className="site">
      <Header activePath={route} />
      {page ? <DetailPage page={page} /> : <HomePage />}
      <Footer />
    </div>
  )
}

export default App
