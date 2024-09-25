/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

// style import
import {SvgXml} from 'react-native-svg';

export const test = (w?: any, h?: any, color?: any) => {
  const xml = ``;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const homeIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7318_460)">
<path d="M19 9.21001L13.667 5.06201C13.199 4.69792 12.623 4.50024 12.03 4.50024C11.4371 4.50024 10.861 4.69792 10.393 5.06201L5.05903 9.21001C4.73847 9.4593 4.47912 9.77854 4.30078 10.1434C4.12245 10.5082 4.02984 10.9089 4.03003 11.315V18.515C4.03003 19.0454 4.24074 19.5542 4.61582 19.9292C4.99089 20.3043 5.4996 20.515 6.03003 20.515H18.03C18.5605 20.515 19.0692 20.3043 19.4442 19.9292C19.8193 19.5542 20.03 19.0454 20.03 18.515V11.315C20.03 10.492 19.65 9.71501 19 9.21001Z" stroke=${
    color ?? '#76787E'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 15.5C13.79 16.833 10.208 16.833 8 15.5" stroke=${
    color ?? '#76787E'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_7318_460">
<rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const chartIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7318_1119)">
<path d="M10.75 3.69998C9.18567 4.06262 7.74688 4.83718 6.58284 5.94332C5.4188 7.04946 4.5719 8.44689 4.12999 9.99066C3.68808 11.5344 3.66725 13.1683 4.06965 14.7229C4.47206 16.2774 5.28305 17.696 6.41851 18.8314C7.55397 19.9669 8.97254 20.7779 10.5271 21.1803C12.0816 21.5827 13.7155 21.5619 15.2593 21.12C16.8031 20.678 18.2005 19.8311 19.3066 18.6671C20.4128 17.5031 21.1873 16.0643 21.55 14.5C21.55 14.2348 21.4446 13.9804 21.2571 13.7929C21.0695 13.6053 20.8152 13.5 20.55 13.5H13.75C13.2195 13.5 12.7108 13.2893 12.3357 12.9142C11.9607 12.5391 11.75 12.0304 11.75 11.5V4.49998C11.7375 4.38151 11.7017 4.26668 11.6446 4.16215C11.5874 4.05763 11.5101 3.96548 11.4171 3.89107C11.3241 3.81665 11.2172 3.76144 11.1027 3.72864C10.9882 3.69584 10.8683 3.6861 10.75 3.69998Z" stroke=${
    color ?? '#76787E'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.75 4C17.0197 4.44708 18.173 5.1733 19.1248 6.12516C20.0767 7.07702 20.8029 8.23028 21.25 9.5H16.75C16.4848 9.5 16.2304 9.39464 16.0429 9.20711C15.8554 9.01957 15.75 8.76522 15.75 8.5V4Z" stroke=${
    color ?? '#76787E'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_7318_1119">
<rect width="24" height="24" fill="white" transform="translate(0.75 0.5)"/>
</clipPath>
</defs>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const stockIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9982 6L21.552 6.00052L21.6522 6.01444L21.7511 6.04205L21.8113 6.0676C21.8906 6.10246 21.9648 6.15315 22.03 6.21836L22.0707 6.2624L22.1143 6.31878L22.1684 6.4089L22.2071 6.49922L22.2263 6.5633L22.2399 6.6273L22.2492 6.7215L22.2497 14.2539C22.2497 14.6681 21.9139 15.0039 21.4997 15.0039C21.12 15.0039 20.8062 14.7217 20.7566 14.3557L20.7497 14.2539L20.7493 8.559L13.0304 16.2793C12.7642 16.5455 12.3475 16.5698 12.0539 16.3519L11.9698 16.2793L8.99928 13.3089L3.5296 18.7786C3.2367 19.0715 2.76183 19.0715 2.46894 18.7786C2.20267 18.5123 2.17846 18.0957 2.39632 17.8021L2.46894 17.7179L8.46894 11.7179C8.7352 11.4517 9.15186 11.4275 9.44547 11.6453L9.52959 11.7179L12.5001 14.6883L19.6873 7.5H13.9982C13.6185 7.5 13.3047 7.21785 13.255 6.85177L13.2482 6.75C13.2482 6.3703 13.5303 6.05651 13.8964 6.00685L13.9982 6Z" fill=${
    color ?? '#76787E'
  }/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const tradeIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.69653 12.5329L13.0447 12.5329" stroke=${
    color ?? '#1A1A1A'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.10986 15.9311L1.69597 12.5329L5.10986 9.13477" stroke=${
    color ?? '#1A1A1A'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.3059 4.25923L3.95776 4.25923" stroke=${
    color ?? '#1A1A1A'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.8925 0.861206L15.3064 4.25935L11.8925 7.6575" stroke=${
    color ?? '#1A1A1A'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const profileIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7318_1132)">
<path d="M12 11.5C14.2091 11.5 16 9.70914 16 7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5C8 9.70914 9.79086 11.5 12 11.5Z" stroke=${
    color ?? '#76787E'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 21.5V19.5C6 18.4391 6.42143 17.4217 7.17157 16.6716C7.92172 15.9214 8.93913 15.5 10 15.5H14C15.0609 15.5 16.0783 15.9214 16.8284 16.6716C17.5786 17.4217 18 18.4391 18 19.5V21.5" stroke=${
    color ?? '#76787E'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_7318_1132">
<rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};
