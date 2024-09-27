export const InitPageData = [
  {
    img: require('../assets/init/phone1.png'),
    title: 'Biểu đồ giao dịch chứng khoán',
    description:
      'Hợp lý hóa các quyết định đầu tư của bạn với sự hướng dẫn của chuyên gia.',
  },
  {
    img: require('../assets/init/phone2.png'),
    title: 'Tăng lợi nhuận của bạn',
    description: 'Mở khóa tiềm năng lợi nhuận cho tăng trưởng tài chính.',
  },
];

export const stockHomeData1 = [
  {
    name: 'Standard & Poor’s',
    logo: require('../assets/home/logoSP.png'),
    shortName: 'S&P 500',
    isIncrease: true,
    value: 0.12,
  },
  {
    name: 'NASDAQ Composite',
    logo: require('../assets/home/logoDOW.png'),
    shortName: 'NASDAQ',
    isIncrease: false,
    value: 0.34,
  },
  {
    name: 'Dow Jones Industrial Average',
    logo: require('../assets/home/logoDOW.png'),
    shortName: 'DJIA',
    isIncrease: true,
    value: 0.45,
  },
  {
    name: 'FTSE 100',
    logo: null,
    shortName: 'FTSE',
    isIncrease: true,
    value: 0.23,
  },
  {
    name: 'Nikkei 225',
    logo: null,
    shortName: 'Nikkei',
    isIncrease: false,
    value: 0.56,
  },
  {
    name: 'Shanghai Composite',
    logo: null,
    shortName: 'Shanghai',
    isIncrease: true,
    value: 0.78,
  },
];

export const stockHomeData2 = [
  {
    logo: require('../assets/home/amazon.png'),
    name: 'Amazon, Inc.',
    shortName: 'AMZN',
    isIncrease: false,
    value: 0.12,
    chart: require('../assets/home/amazonchart.png'),
  },
  {
    logo: require('../assets/home/adobe.png'),
    name: 'Adobe Inc.',
    shortName: 'ADBE',
    isIncrease: true,
    value: 0.32,
    chart: require('../assets/home/adobechart.png'),
  },
];
