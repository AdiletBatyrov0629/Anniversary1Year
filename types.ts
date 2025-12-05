export type SlideType = 
  | 'intro' 
  | 'stat-big' 
  | 'chart' 
  | 'stat-grid' 
  | 'music' 
  | 'awards' 
  | 'gallery' 
  | 'outro';

export interface ChartItem {
  label: string;
  value: number;
  icon?: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: string;
}

export interface AwardItem {
  title: string;
  winner: string;
  description: string;
  icon: string;
}

export interface SlideData {
  id: number;
  type: SlideType;
  title?: string;
  subtitle?: string;
  content?: string;
  statValue?: number | string;
  statLabel?: string;
  statIcon?: string;
  chartData?: ChartItem[];
  gridData?: StatItem[];
  musicData?: {
    song: string;
    artist: string;
    albumArt: string;
    audioUrl?: string;
  };
  awardsData?: AwardItem[];
  images?: string[];
  buttonText?: string;
}