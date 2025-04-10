import { useMemo } from 'react'

import avatarImg from '@assets/avatar.webp'

const FloatAvatar = () => {
  return (
    <img
      className="fixed top-1/2 left-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full ring-8 ring-primary-300"
      src={avatarImg}
      alt="Avatar"
    />
  )
}

const FirstPart = () => {
  // return <div className="h-screen bg-primary-500"></div>
  return <div className="h-[calc(100vh-var(--spacing)*16)] bg-primary-500"></div>
}

const SecondPart = () => {
  // 基础资料
  const basicInfo = useMemo(() => {
    return [
      ['编号', 'Zubmarine'],
      ['内容物', '基于 Cogito-Existo 协议存在的人类实体'],
      ['别称', '希尔 / Corlz'],
      ['坐标', 'Guangdong, China'],
      ['其他', '待续'],
    ]
  }, [])

  // 外部链接
  const externalLinks = useMemo(() => {
    return [
      ['GitHub', '@Zubmarine', 'https://github.com/Zubmarine'],
      ['X', '@AbyssumMaris', 'https://x.com/AbyssumMaris'],
    ]
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-100 flex h-16 flex-col items-center justify-center bg-primary-500 px-(--padding-page) text-xl font-bold text-primary-50">
        <span className="w-full max-w-4xl">Zubmarine's Utopia</span>
      </div>
      <div className="z-10 flex flex-1 flex-col items-center bg-primary-50 px-(--padding-page) text-primary-900 dark:bg-primary-950 dark:text-primary-50">
        <div className="flex h-full w-full max-w-4xl flex-col items-center justify-center py-8 md:flex-row md:items-start md:gap-8 md:py-12">
          {/* 左侧内容 */}
          <div className="flex w-full max-w-md flex-col items-center md:items-start">
            {/* 序言 */}
            <section className="mb-8 w-full text-center md:text-left">
              <h2 className="text-4xl font-bold">理想国</h2>
              <p className="mt-2 text-lg">春弦拂娇柳，骚人咏玉竹</p>
            </section>

            {/* 基础资料 */}
            <section className="mb-8 flex w-full flex-col items-center md:items-start">
              <h2 className="mb-4 text-4xl font-bold">基础资料</h2>
              <ul className="grid w-full grid-cols-[auto_1fr] gap-y-2 text-lg md:w-auto">
                {basicInfo.map(([key, value]) => (
                  <li key={key} className="contents">
                    <span className="pr-4 font-bold text-primary-500 dark:text-primary-300">{key}</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* 右侧内容 */}
          <div className="flex w-full max-w-md flex-col items-center md:items-start">
            {/* 外部链接 */}
            <section className="flex w-full flex-col items-center md:items-start">
              <h2 className="mb-4 text-4xl font-bold">外部链接</h2>
              <ul className="grid w-full grid-cols-[auto_1fr] gap-y-2 text-lg md:w-auto">
                {externalLinks.map(([name, value, link]) => (
                  <li key={name} className="contents">
                    <span className="pr-4 font-bold text-primary-500 dark:text-primary-300">{name}</span>
                    <a href={link} className="text-primary-700 underline dark:text-primary-500">
                      {value}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        <div className="flex-1" />
        {/* TODO: for testing */}
        <div className="h-[300vh]" />
        <div className="w-full max-w-4xl pb-4">
          Made with <span className="text-red-500">❤</span> by{' '}
          <a href="https://github.com/ShellWen" target="_blank" rel="noreferrer noopener">
            ShellWen
          </a>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <main className="flex min-w-screen flex-col text-primary-900">
      <FloatAvatar />
      <FirstPart />
      <SecondPart />
    </main>
  )
}

export default App
