
export interface Thought {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export interface Observation {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  description: string;
  category: 'photography' | 'book' | 'quote' | 'link';
}

export enum Page {
  Home = 'home',
  Thoughts = 'thoughts',
  Observations = 'observations'
}
