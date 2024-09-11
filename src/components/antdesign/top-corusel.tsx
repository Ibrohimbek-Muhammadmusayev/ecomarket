import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '260px',
  color: '#fff',
  lineHeight: '260px',
  textAlign: 'center',
  background: '#364d79',
};

const TopCorusel: React.FC = () => (
  <div className="">
    <Carousel arrows autoplay>
      <div>
        <h3 style={contentStyle}><img src="https://avatars.mds.yandex.net/i?id=5234f51eaabc5589930925551ec82cc5_l-5656941-images-thumbs&n=13" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="https://img2.akspic.ru/attachments/crops/4/9/2/3/13294/13294-liniya_gorizonta-gorod-risovanie-gorizont-gorodskoj_pejzazh-3840x2160.jpg" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </div>
);

export default TopCorusel;