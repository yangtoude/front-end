const data = {
  carousels: [
    {
      imageUrl: './static/banner-1.png'
    },
    {
      imageUrl: './static/banner-2.png'
    },
    {
      imageUrl: './static/banner-3.png'
    }
  ],
  recommand: {
    favorites: [
      {
        title: '极客时间旗舰店',
        logo: './static/geektime-logo.png',
        tag: '天猫',
        img01: './static/recommend/toy01.png',
        img02: './static/recommend/toy02.png'
      },
      {
        title: '乔丹旗舰店',
        logo: './static/jordon-logo.png',
        tag: '天猫',
        img01: './static/recommend/jordon-jackets.png',
        img02: './static/recommend/jordon-shoe.png'
      }
    ],
    list: [
      {
        title: '极客时间旗舰店',
        logo: './static/geektime-logo.png',
        tag: '天猫',
        count: 13000,
        img01: './static/recommend/geektime-big.png',
        img02: './static/recommend/geektime-small01.png',
        img03: './static/recommend/geektime-small02.png',
        link: 'javascript:void(0);'
      },
      {
        title: '极客大学天猫店',
        logo: './static/geekcollege-logo.png',
        tag: '天猫',
        count: 8000,
        img01: './static/recommend/geekcollege-big.png',
        img02: './static/recommend/geekcollege-small01.png',
        img03: './static/recommend/geekcollege-small02.png',
        link: 'javascript:void(0);'
      },
      {
        title: 'InfoQ官方旗舰店',
        logo: './static/infoq-logo.png',
        tag: '天猫',
        count: 23000,
        img01: './static/recommend/infoq-big.png',
        img02: './static/recommend/infoq-small01.png',
        img03: './static/recommend/infoq-small02.png',
        link: 'javascript:void(0);'
      }
    ]
  },
  interesting: {
    surprise: [
      [
        {
          img: './static/recommend/geektime-big.png',
          title: 'RINATE',
          diamond: 4,
          link: 'javascript:void(0);'
        },
        {
          img: './static/recommend/geektime-small01.png',
          title: '阿里妈妈',
          diamond: 4,
          link: 'javascript:void(0);'
        },
        {
          img: './static/recommend/geektime-small02.png',
          title: '阿里巴巴',
          diamond: 4,
          link: 'javascript:void(0);'
        }
      ],
      [
        {
          img: './static/interesting/nanshan01.png',
          title: '阿里妈妈',
          diamond: 4,
          link: 'javascript:void(0);'
        },
        {
          img: './static/interesting/taideng01.png',
          title: '阿里巴巴',
          diamond: 4,
          link: 'javascript:void(0);'
        },
        {
          img: './static/interesting/coffe-cup.png',
          title: 'RINATE',
          diamond: 4,
          link: 'javascript:void(0);'
        }
      ],
      [
        {
          img: './static/interesting/taideng-big01.png',
          title: 'RINATE',
          diamond: 4,
          link: 'javascript:void(0);'
        },
        {
          img: './static/recommend/geektime-small01.png',
          title: '阿里妈妈',
          diamond: 4,
          link: 'javascript:void(0);'
        },
        {
          img: './static/recommend/geektime-small02.png',
          title: '阿里巴巴',
          diamond: 4,
          link: 'javascript:void(0);'
        }
      ]
    ],
    fancy: [
      [
        {
          img: './static/recommend/geektime-big.png',
          title: 'RINATE',
          diamond: 4,
          link: 'javascript:void(0);'
        },
        {
          img: './static/recommend/geektime-small01.png',
          title: '阿里妈妈',
          diamond: 4,
          link: 'javascript:void(0);'
        },
        {
          img: './static/recommend/geektime-small02.png',
          title: '阿里巴巴',
          diamond: 4,
          link: 'javascript:void(0);'
        }
      ],
      [
        {
          img: './static/interesting/nanshan01.png',
          title: '阿里妈妈',
          diamond: 4,
          link: 'javascript:void(0);'
        },
        {
          img: './static/interesting/taideng01.png',
          title: '阿里巴巴',
          diamond: 4,
          link: 'javascript:void(0);'
        },
        {
          img: './static/interesting/coffe-cup.png',
          title: '阿里妈妈',
          diamond: 4,
          link: 'javascript:void(0);'
        }
      ],
      [
        {
          img: './static/interesting/taideng-big01.png',
          title: 'RINATE',
          diamond: 4,
          link: 'javascript:void(0);'
        },
        {
          img: './static/recommend/geektime-small01.png',
          title: '阿里妈妈',
          diamond: 4,
          link: 'javascript:void(0);'
        },
        {
          img: './static/recommend/geektime-small02.png',
          title: '阿里巴巴',
          diamond: 4,
          link: 'javascript:void(0);'
        }
      ]
    ]
  },
  newShop: [{
    title: '极客时间旗舰店',
    logo: './static/geektime-logo.png',
    tag: '科技风 行业优质',
    count: 39000,
    img01: './static/interesting/taideng01.png',
    img02: './static/recommend/infoq-big.png',
    link: 'javascript:void(0);'
  }, {
    title: '极客大学天猫店',
    logo: './static/geekcollege-logo.png',
    tag: '科技风 行业优质',
    count: 18000,
    img01: './static/interesting/taideng01.png',
    img02: './static/recommend/infoq-big.png',
    link: 'javascript:void(0);'
  }, {
    title: 'InfoQ官方旗舰店',
    logo: './static/infoq-logo.png',
    tag: '科技风 行业优质',
    count: 24000,
    img01: './static/interesting/taideng01.png',
    img02: './static/recommend/infoq-big.png',
    link: 'javascript:void(0);'
  }]
};

const fs = require('fs');

fs.writeFile('./data.json', JSON.stringify(data), err => {
  if (err) {
    console.error('写入文件失败', err);
  } else {
    console.log('写入文件成功');
  }
});
