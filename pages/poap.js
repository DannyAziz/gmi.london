const claimCodes = [
  // '2kpmww',
  'g7lz8g',
  'eyp91e',
  'nmmm9m',
  '6g2yp7',
  'na388r',
  '9e573n',
  'l1srrl',
  'a094ik',
  'vjl7np',
  '57y3fm',
  'qlczkg',
  'q3cda5',
  '88zybp',
  'gfp5xd',
  'fkv6nc',
  'x4bcie',
  'lk535v',
  'q0k1al',
  'tzq0p6',
  'n7awvh',
  'tnpzg0',
  '242l04',
  's1z0r4',
  'aa6oa6',
  'b7x8vk',
  'x8csoo',
  'zsmtoi',
  'ija15v',
  '0lhvta',
  'aptfmz',
  '5xzyho',
  '2edj1l',
  'e4olju',
  'ch2r8l',
  'bj3bkk',
  'xio3ne',
  'vpv61q',
  '9acup5',
  'sxf4xz',
  'km1ja4',
  'rtsrdd',
  '6v2cph',
  'e2h0a2',
  '7t7r6u',
  'w1doa3',
  'binj0t',
  'e5b23z',
  'xk98kk',
  'm0pm9h',
  'r7x5nt',
  'vcrg0p',
  'exumq0',
  'kpo56q',
  'qvthle',
  'qu5g10',
  'y2ezfq',
  'fbbcp2',
  'u7k1sq',
  'm9vqhd',
  'bjt6w9',
  'u8fn80',
  'x8unmm',
  'vck3vg',
  'i73vz8',
  'lczq2k',
  '5gwr6c',
  'y7g8xv',
  'bthjze',
  '1k9gbz',
  'c987ix',
  'fb6usb',
  '0lc17u',
  'zgj4na',
  '4574g0',
  'oloq01',
  'aryeq2',
  'udl7pk',
  'jsun5i',
  'x2tl7p',
];

const POAP_API = 'https://frontend.poap.tech/actions/claim-qr?qr_hash=';

const Page = () => {
  return <div></div>;
};

export async function getServerSideProps(ctx) {
  for (let claimCode of claimCodes) {
    const res = await fetch(POAP_API + claimCode, {
      headers: {
        accept: '*/*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'google-token':
          '03AGdBq270I2DX4oNlNuhxut8FkEhNi1ea5-5n3X5v6GplLmO1z0u_rINtnNrpSoqePIU9SJUNEwVLo7t0kC7CCj6rgHGdTLgdfzW0gDc353H7lD4_-Z_iyBkYpsD_AMdeKTmxc7HaPKI9fWqbApO2ogVqgTUju_7esmYw88b57Z01TfPtNQEbuO7IrHrIawUExlqipzyqvNKuph65FHGfWCnmuJ3M22YupftU5czu8UmHUhjWnlEVp9QsxEKaeEZrR8cS6wt9YXlouKYhjk8hcx4NQIaIISAJI-lsyGiKsccBtYTPz3beqdqCgACbYlLorHtIm8OQENlgzQ7buXRJ4j_PSUtQiRa0RKqtQLIS0d3Y_LXlryO8bRVhqNTdYRuMW9gBBmAe0KNdl_TVCpgUVsSvDtwt4RQz2MasPOmTOXBh05aWwOUuOr0N2PlnZzQFoTt6EMOk8xkxqSNUeE9880S8cMuX1BG7cX-8PmJRsdsD-FHOeWWOLHV2Rif9Mu3EUTunHenucnyB156MfCGyjIYCdo056unP-EECnyaVE7rIMKEspE-w0OS5MGkhQA2w9PcD-enBTyT5Y9GE1SUru3KPvAHEL0I89AmbkGnLm8WHJ8ZCZhXQGUyB0kTRGGP1y1y64bSLxETidp7MiolsOKJz9B6KX-BDwRQYFVqA-r_yjv-3gfolJi4LpUuNDp6WfKYJB3ux4rrV7ubTVSX8Wnee8U5VjuwRHV__zzY_1ZfDNkZLAW5DM2z-4Npb7r0zXHsU6YKld9aZLmH8BBUiPlGH17esJ1Dg0xVKuIlKtKnUaW5S6VG6pHgRGMDPj9xwNf3AQTLP3DXAXegqBlV5MjaMRNI5XcBxu16xaRGZt6moqVUG6VQbPBIB930tL4fIifOji4vCnu7FsV47liU2LLb0tOjYf0pSkhqpxyMu2rNTbSDm0ySXKA7DQ9pQ0RD_vAU-kfznDztc4WYn-5xSk5H35_f3VZGtmQvLWxjjroAtbYklvbVieSOU-b5O1ykK6Cca1Pei2U42lC05fTCXtr9xNCERiV-PH2yVHHCIojrpr78rh6MGSRQrtbCEASUsGxMl6snXfItr_qOKyHPy2H3Lsa7eohIP9a9VunfKuo5HDCOW3rQsuR0AU5hS_T9aqlLvb9F_u75-7pxSwDtSQIuPqz4PgWS81uoIfrXA4O3lTtL_wz6OWF_jExwg9zB_MByhZZYCeDNB',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        Referer: 'https://app.poap.xyz/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    });
    const json = await res.json();
    console.log(json);
    if (!json.claimed) {
      console.log(claimCode);
      break;
    }
  }
  return {
    props: {},
  };
}

export default Page;
