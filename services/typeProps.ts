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
  logo: string | null;
  shortName: string;
  isIncrease: boolean;
  value: number;
}
