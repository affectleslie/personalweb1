
import { Thought, Observation } from './types';

export const COLORS = {
  accent: '#5a7d9a', // Mist Blue
  text: '#1a1a1a',
  bg: '#fcfcfc',
  gray: '#888888',
  lightGray: '#e5e5e5',
};

export const MOCK_THOUGHTS: Thought[] = [
  {
    id: '1',
    title: '复杂世界的极简剪影',
    excerpt: '在信息爆炸的时代，主动选择视而不见是一种最高级的自由。',
    content: '我们生活在一个被过度诠释的世界里。每一个像素、每一行代码、每一句对话都被赋予了沉重的意义。作为“透镜”，我尝试剥离这些冗余。极简不是匮乏，而是一种对核心价值的极度聚焦。正如贝聿铭所言：“让光线来做设计”。在思想的构建中，留白往往比陈述更有力量。',
    date: '2024.03.15'
  },
  {
    id: '2',
    title: '数字画廊的物理性回归',
    excerpt: '触觉的消失是否意味着感知的退化？',
    content: '当书本变成电子墨水，照片变成云端代码，我们失去了与物质世界的摩擦感。这个网站的每一个细节——磨砂的质感、舒缓的动效——都是一种对“物理性”的拙劣模仿，但也寄托了我对真实触感的怀念。',
    date: '2024.02.28'
  },
  {
    id: '3',
    title: '时间的非线性切片',
    excerpt: '记忆不是录像带，而是散落在地上的幻灯片。',
    content: '所谓见闻，不过是主观意识对客观世界的一次采样。我们总是倾向于按照逻辑重组过去，但真正的瞬间往往是无序且破碎的。',
    date: '2024.01.10'
  }
];

export const MOCK_OBSERVATIONS: Observation[] = [
  {
    id: 'o1',
    imageUrl: 'https://picsum.photos/seed/lens1/800/1200',
    title: '静谧之蓝',
    location: '冰岛, 维克',
    description: '在黑沙滩上注视着远方的海浪，时间仿佛凝固。',
    category: 'photography'
  },
  {
    id: 'o2',
    imageUrl: 'https://picsum.photos/seed/lens2/800/800',
    title: '《存在与时间》',
    location: '书架',
    description: '重读海德格尔，探讨此在的本质。',
    category: 'book'
  },
  {
    id: 'o3',
    imageUrl: 'https://picsum.photos/seed/lens3/1200/800',
    title: '街角光影',
    location: '京都',
    description: '下午四点的斜阳穿过鸟居，洒落在青石板路上。',
    category: 'photography'
  },
  {
    id: 'o4',
    imageUrl: 'https://picsum.photos/seed/lens4/800/1000',
    title: '极简建筑',
    location: '安藤忠雄艺术馆',
    description: '清水混凝土与自然光的完美交织。',
    category: 'photography'
  },
  {
    id: 'o5',
    imageUrl: 'https://picsum.photos/seed/lens5/900/1100',
    title: '昨日之诗',
    location: '某本旧杂志',
    description: '“万物皆有裂痕，那是光照进来的地方。”',
    category: 'quote'
  }
];
