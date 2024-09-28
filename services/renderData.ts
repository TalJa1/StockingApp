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
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
    spacing: 6,
    label: 'Th2',
  },
  {
    value: 2400,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
  },
  {
    value: 3500,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
    spacing: 6,
    label: 'Th3',
  },
  {
    value: 3000,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
  },
  {
    value: 4500,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
    spacing: 6,
    label: 'Th4',
  },
  {
    value: 4000,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
  },
  {
    value: 5200,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
    spacing: 6,
    label: 'Th5',
  },
  {
    value: 4900,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
  },
  {
    value: 3000,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
    spacing: 6,
    label: 'Th6',
  },
  {
    value: 2800,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
  },
  {
    value: 3000,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
    spacing: 6,
    label: 'Th7',
  },
  {
    value: 2800,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
  },
  {
    value: 3000,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
    spacing: 6,
    label: 'CN',
  },
  {
    value: 2800,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
  },
];

export const ChartInforPageData = [
  {
    value: 2500,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
    spacing: 6,
    label: '1D',
  },
  {
    value: 2400,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
  },
  {
    value: 3500,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
    spacing: 6,
    label: '1T',
  },
  {
    value: 3000,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
  },
  {
    value: 2500,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
    spacing: 6,
    label: '1TH',
  },
  {
    value: 2000,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
  },
  {
    value: 5200,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
    spacing: 6,
    label: '1N',
  },
  {
    value: 4900,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
  },
  {
    value: 5000,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
    spacing: 6,
    label: '5N',
  },
  {
    value: 4800,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
  },
  {
    value: 3100,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
    spacing: 6,
    label: 'Tất',
  },
  {
    value: 2900,
    frontColor: '#2C2C2C',
    gradientColor: '#2C2C2C',
  },
];

export const IntroduceCompanyData = [
  {
    website: 'netflix.com',
    employees: 13000,
    foundingData: '29 thg 8, 1997',
    headquarters: 'Los Gatos, California, Hoa Kỳ',
    ceo: 'Reed Hastings',
    briefDescription:
      'Netflix, Inc. là một công ty giải trí truyền phát trực tuyến Mỹ được thành lập vào năm 1997 bởi Reed Hastings và Marc Randolph. Trụ sở chính của công ty đặt tại Los Gatos, California. Netflix là một trong những dịch vụ truyền phát trực tuyến lớn nhất trên thế giới với hơn 200 triệu người dùng trên toàn thế giới.',
  },
  {
    website: 'apple.com',
    employees: 147000,
    foundingData: '1 thg 4, 1976',
    headquarters: 'Cupertino, California, Hoa Kỳ',
    ceo: 'Tim Cook',
    briefDescription:
      'Apple Inc. là một công ty công nghệ đa quốc gia của Mỹ được thành lập vào năm 1976 bởi Steve Jobs, Steve Wozniak và Ronald Wayne. Trụ sở chính của công ty đặt tại Cupertino, California. Apple là một trong những công ty công nghệ lớn nhất trên thế giới, nổi tiếng với các sản phẩm như iPhone, iPad, MacBook và Apple Watch.',
  },
  {
    website: 'facebook.com',
    employees: 58600,
    foundingData: '4 thg 2, 2004',
    headquarters: 'Menlo Park, California, Hoa Kỳ',
    ceo: 'Mark Zuckerberg',
    briefDescription:
      'Facebook, Inc. là một công ty truyền thông xã hội và công nghệ của Mỹ được thành lập vào năm 2004 bởi Mark Zuckerberg cùng với Eduardo Saverin, Andrew McCollum, Dustin Moskovitz và Chris Hughes. Trụ sở chính của công ty đặt tại Menlo Park, California. Facebook là một trong những mạng xã hội lớn nhất trên thế giới với hơn 2.8 tỷ người dùng hàng tháng.',
  },
];

export const barData = [
  {
    value: 40,
    label: '2020',
    spacing: 2,
    labelWidth: 40,
    labelTextStyle: {color: 'gray'},
    frontColor: '#7DC1F1',
  },
  {value: 20, frontColor: '#FFED4B'},
  {
    value: 50,
    label: '2021',
    spacing: 2,
    labelWidth: 40,
    labelTextStyle: {color: 'gray'},
    frontColor: '#7DC1F1',
  },
  {value: 40, frontColor: '#FFED4B'},
  {
    value: 75,
    label: '2022',
    spacing: 2,
    labelWidth: 40,
    labelTextStyle: {color: 'gray'},
    frontColor: '#7DC1F1',
  },
  {value: 25, frontColor: '#FFED4B'},
  {
    value: 75,
    label: '2023',
    spacing: 2,
    labelWidth: 40,
    labelTextStyle: {color: 'gray'},
    frontColor: '#7DC1F1',
  },
  {value: 25, frontColor: '#FFED4B'},
];
