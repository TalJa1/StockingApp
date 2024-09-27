export interface InitPageProps {
  img: any;
  title: string;
  description: string;
}

export interface SignUpInputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export interface StockHomeData1Interface {
  name: string;
  logo: any;
  shortName: string;
  isIncrease: boolean;
  value: number;
}

export interface StockData {
  logo: any;
  name: string;
  shortName: string;
  isIncrease: boolean;
  value: number;
  chart: any;
}
