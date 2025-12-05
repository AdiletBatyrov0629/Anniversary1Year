import React from 'react';
import { SlideData } from '../types';
import IntroSlide from './slides/IntroSlide';
import StatBigSlide from './slides/StatBigSlide';
import ChartSlide from './slides/ChartSlide';
import StatGridSlide from './slides/StatGridSlide';
import MusicSlide from './slides/MusicSlide';
import AwardsSlide from './slides/AwardsSlide';
import GallerySlide from './slides/GallerySlide';

interface Props {
  data: SlideData;
  onNext?: () => void;
  onPrev?: () => void;
  onRestart?: () => void; 
}

const SlideRenderer: React.FC<Props> = ({ data, onNext, onRestart }) => {
  switch (data.type) {
    case 'intro':
        return <IntroSlide data={data} onAction={onNext} />;
    case 'outro':
        return <IntroSlide data={data} onAction={onRestart} />;
    case 'stat-big':
        return <StatBigSlide data={data} />;
    case 'chart':
        return <ChartSlide data={data} />;
    case 'stat-grid':
        return <StatGridSlide data={data} />;
    case 'music':
        return <MusicSlide data={data} />;
    case 'awards':
        return <AwardsSlide data={data} />;
    case 'gallery':
        return <GallerySlide data={data} />;
    default:
        return <div className="p-10">Unknown Slide Type</div>;
  }
};

export default SlideRenderer;