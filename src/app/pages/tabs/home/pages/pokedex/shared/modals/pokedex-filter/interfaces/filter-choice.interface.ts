export interface IFilterChoice {
  label?: string;
  value?: any;
  icon?: string;
  isSelected?: boolean;
  hasSubchoices?: boolean;
  subChoices?: IFilterChoice[];
}
