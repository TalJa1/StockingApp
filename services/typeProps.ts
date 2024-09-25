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
