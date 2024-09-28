import {arrowDownIcon, arrowUpIcon} from '../assets/svgXML';
import {vw} from './styleSheet';

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

export const StockHomeData3 = [
  {
    logo: require('../assets/home/apple.png'),
    name: 'Apple Inc.',
    shortName: 'AAPL',
    isIncrease: true,
    value: 0.12,
    chart: require('../assets/home/chart2.png'),
    amount: '142.26',
  },
  {
    logo: require('../assets/home/netflix.png'),
    name: 'Netflix Inc.',
    shortName: 'NFLX',
    isIncrease: true,
    value: 2.1,
    chart: require('../assets/home/chart3.png'),
    amount: '722.26',
  },
  {
    logo: require('../assets/home/facebook.png'),
    name: 'Facebook Inc.',
    shortName: 'FB',
    isIncrease: true,
    value: 1.2,
    chart: require('../assets/home/chart4.png'),
    amount: '343.6',
  },
];

export const StatusInforChartData = [
  {
    label: 'Gain',
    amount: '234.11',
    icon: arrowUpIcon(vw(7), vw(7)),
  },
  {
    label: 'Loss',
    amount: '34.11',
    icon: arrowDownIcon(vw(7), vw(7)),
  },
];

export const ChartPageData = [
  {
    value: 2500,
    frontColor: '#006DFF',
    gradientColor: '#009FFF',
    spacing: 6,
    label: 'Th2',
  },
  {value: 2400, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {
    value: 3500,
    frontColor: '#006DFF',
    gradientColor: '#009FFF',
    spacing: 6,
    label: 'Th3',
  },
  {value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {
    value: 4500,
    frontColor: '#006DFF',
    gradientColor: '#009FFF',
    spacing: 6,
    label: 'Th4',
  },
  {value: 4000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {
    value: 5200,
    frontColor: '#006DFF',
    gradientColor: '#009FFF',
    spacing: 6,
    label: 'Th5',
  },
  {value: 4900, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {
    value: 3000,
    frontColor: '#006DFF',
    gradientColor: '#009FFF',
    spacing: 6,
    label: 'Th6',
  },
  {value: 2800, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
];
