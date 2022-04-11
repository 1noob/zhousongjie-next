import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { cx, formatDate } from '@/lib/utils';
import { getLatestUpdate } from '@/lib/feed';
import { MDXRemote } from 'next-mdx-remote';
import { components } from '@/components/MDXComponents';
import Prose from '@/components/Prose';

type HomeProps = any;

const Home: NextPage<HomeProps> = ({ date, mdx }) => {
  return (
    <>
      <article
        className={cx(
          '-mt-4 relative w-full p-4 rounded-md border',
          'bg-white border-gray-200',
          'dark:bg-gray-800 dark:border-gray-700',
        )}
      >
        <span
          className={cx(
            'block w-4 h-4 absolute top-0 left-4 rotate-45 -translate-y-1/2 border border-r-0 border-b-0',
            'bg-white border-gray-200',
            'dark:bg-gray-800 dark:border-gray-700',
          )}
        />
        <Prose>
          <MDXRemote {...mdx} components={components} />
        </Prose>
        <p
          className={cx(
            'mt-4 text-sm flex justify-between flex-wrap gap-4',
            'text-gray-600',
            'dark:text-gray-300',
          )}
        >
          <span>&mdash; {formatDate(date, 'full')}</span>
          <Link href="/feed/tagged/update">
            <a className="underline">View more</a>
          </Link>
        </p>
      </article>

      <Prose className="mt-12">
        <h2>About</h2>
        <div className="relative float-right w-1/3 ml-4 md:ml-8 mb-4 md:mb-8 inline-flex rounded-md overflow-hidden">
          <Image
            src="/img/gdufe.jpeg"
            width={400}
            height={400}
            alt="graduate"
          />
        </div>
        <p>
          周颂杰，2020届广东财经大学计算机科学与技术本科毕业生。
          热衷于算法竞赛，在校期间加入校 ACM 协会，多次参加 CCPC、ICPC 比赛。
          算法之外主要学习 Web 开发，擅长 Angular.js、Node.js、SpringBoot、Mysql 等。
          使用的语言比较杂，算法竞赛的时候用的 C++，开发用的 Java，业余项目喜欢用 Python。
        </p>
        <p>
          毕业后一直在考研中，比较倾向计算机视觉方向，参加过 Kaggle 平台的
          <a href='https://www.kaggle.com/competitions/classify-leaves'>
            Classify Leaves
          </a>、
          <a href='https://www.kaggle.com/competitions/cowboyoutfits'>
            CowBoy Outfits Detection
          </a>
          等视觉竞赛。
        </p>
        <h2>Colophon</h2>
        <p>
          本站的技术栈有 Next.js，Tailwind CSS，Framer Motion，React
          Aria，TypeScript，MDX，在 Vercel 上部署。字体风格为 JetBrains Mono。
        </p>
      </Prose>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const update = await getLatestUpdate();
  return {
    props: {
      ...update,
    },
  };
};

export default Home;
