import { useMemo, useState, useEffect, useCallback } from 'react'
import { differenceInCalendarDays } from 'date-fns'
import { FaGithub, FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import avatarImg from '@assets/avatar.webp'

const FloatAvatar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  
  const handleScroll = useCallback(() => {
      setScrollY(window.scrollY)
    }, []);
    const handleResize = useCallback(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, []);

  useEffect(() => {
    let animationFrameId;

    const optimizedScrollHandler = () => {
      animationFrameId ??= requestAnimationFrame(() => {
          handleScroll();
          animationFrameId = null;
        });
    };

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [handleScroll, handleResize]);

  const verticalThreshold = windowSize.height * 0.21;
  const horizontalLimit = -windowSize.width * 0.4;

  let scale = 1;
  let translateY = 0;
  let translateX = 0;

  if(scrollY <= verticalThreshold) {
    scale = Math.max(0.35, 1 - (scrollY / verticalThreshold) * 0.35);
    translateY = -scrollY * 1;
  } else {
    scale = 0.35;
    translateY = -verticalThreshold * 2;
    translateX = Math.max(horizontalLimit, -(scrollY - verticalThreshold) * 1);
  }

  return (
    <img
      className="fixed transform z-100 top-1/2 left-1/2 size-64 origin-center transition-transform duration-300 ease-out rounded-full ring-8 ring-primary-300"
      style={{
        transform:`
        translate(-50%, -50%)
        translateX(${translateX}px)
        translateY(${translateY}px)
        scale(${scale})
        `,
        transition: `0.1s`
      }}
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
  // 前置数据
  const elapsedTime = useMemo(() => {
    const birthDay = new Date('2006-02-06');
    const currentDate = new Date();
    const daysPassed = differenceInCalendarDays(currentDate, birthDay);
    return daysPassed + "天"
  }, [])
  

  // 基础资料
  const basicInfo = useMemo(() => {
    return [
      ['编号', 'Zubmarine'],
      ['内容', '基于 Cogito-Existo 协议存在的人类实体'],
      ['别称', '希尔 / Corlz'],
      ['坐标', 'Guangdong, China'],
      ['存在', elapsedTime],
      ['其他', '...'],
    ]
  }, [elapsedTime])

  // 外部链接
  const externalLinks = useMemo(() => {
    return [
      [{key: 'GitHub', icon: <FaGithub />}, '@Zubmarine', 'https://github.com/Zubmarine',],
      [{key: 'X', icon: <FaXTwitter />}, '@AbyssumMaris', 'https://x.com/AbyssumMaris'],
      [{key: 'Telegram', icon: <FaTelegram />}, '@Sier Zubmarine', 'https://t.me/Zubmar1ne'],
    ]
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-50 flex h-16 flex-col items-center justify-center 
      topbar-blur bg-primary-500/20 px-(--padding-page) text-xl font-bold text-primary-50">
        <span className="w-full max-w-4xl">Zubmarine&apos;s Utopia</span>
      </div>
      <div className="z-10 flex flex-1 flex-col items-center bg-primary-50 px-(--padding-page) text-primary-900 
      dark:bg-primary-950 dark:text-primary-50">
        <div className='h-[5vh]' />
        <div className="flex h-full w-full max-w-4xl flex-col items-center justify-center py-8 md:flex-row md:items-start md:gap-8 md:py-12">
          {/* 左侧内容 */}
          <div className="flex w-full max-w-md flex-col items-center md:items-start">
            {/* 序言 */}
            <section className="mb-8 w-full text-center md:text-left">
              <h2 className="text-4xl font-bold">理想国之春</h2>
              <div className='h-[0.5em]'></div>
              <p className="mt-2 text-lg">闲来侧眼新垂柳，烟消水暖风轻。寻寻觅觅盼新晴，天苍茫处，有赤鹿食苹。</p>
              <p className='mt-2 text-lg'>高歌对酌清梦醒，云闲日朗波平。悠悠念念忆曾经，付诸一笑，听野鹤和鸣。</p>
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
                  <li key={name.key} className="contents">
                    <span className="pr-4 text-2xl text-primary-500 dark:text-primary-50">{name.icon}</span>
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
        <div className="h-[100px]" />
        <div className="w-full max-w-md scroll-mb-5">
          <p>如有问题请致电赛博移民委员会</p>
          <p>
            {' '}
            <a href="https://s1.imagehub.cc/images/2025/04/10/d2a96881ad4298d541445b6ca06609a3.jpg" target="_blank" rel="noreferrer noopener">
              <span className='text-primary-500'>+86 178 B04E CC3F</span>
            </a>
          </p>
        </div>
        <div className='h-[100vh]' />
        <div className="w-full max-w-4xl pb-4">
          <p>Made with <span className="text-red-500">❤</span> by{' '}
            <a href="https://github.com/ShellWen" target="_blank" rel="noreferrer noopener">
              ShellWen
            </a>
          </p>
          <p>Maintained by Zubmarine</p>
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
