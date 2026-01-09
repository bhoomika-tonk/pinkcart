import React from 'react';
import BeautySection from './BeautySection';

function Home({ search }) {

  const moisturizers = [
    {
      title: 'Foxtale Brightening Moisturizer',
      price: 347,
      image: 'https://m.media-amazon.com/images/I/61S3Oum8BmL._AC_UL480_FMwebp_QL65_.jpg',
      link:  'https://www.amazon.in/Brightening-Moisturizer-Niacinamide-Moisturization-Non-Comedogenic/dp/B0DGGVK28R/ref=sr_1_2?crid=35MRB9Z6T31QA&dib=eyJ2IjoiMSJ9.OOWuWH3PUyr1KC4TDkGqPgxVaoqZ3Uy_VQtvYWaj5V1Gsgln_34y-YZTEC_FuuCMbiFAQmPxCPDQiuBIHr_5Shw68lSglH-0sMZe9h2isseEnj9s0XpmJGkBRSfj62q8hQBRdaMKU9-eYfbo6V_68xl7XzPFUpohR0em79m-DRNx_nC255J-AOCAXY5RETqUOe4Er3qS6vw8s6Ih_UNQrRtBgDubh-PSgYMTufa1ZVZipgBrfFn14mZpCw-d0cv8Uetxc2YH3r05b2R_644ctSWJuQTc7Vf42eIPSbZVWg4.mjLXtV-dt2Hzqp-xyCsKY6Qi6cqsSE-1fhwuL50t8n8&dib_tag=se&keywords=moisturizer+cream&qid=1767796726&sprefix=moisturizer+cream%2Caps%2C394&sr=8-2'
    },

    {
        title: 'Dot & Key Brightening Moisturizer',
        price: 250,
        image: 'https://m.media-amazon.com/images/I/51gJ+0PY82L._SX679_.jpg',
        link:  'https://www.amazon.in/Dot-Key-Brightening-Moisturizer-Niacinamide/dp/B0C3CP6B5Y/ref=sr_1_1?crid=3VK0NLZJSS58M&dib=eyJ2IjoiMSJ9.BoO2Mcs9qLfgfTLfvOJfF3tsdRgxO00gISV4BLAhXXBzILQZJEKDwWuVNwX3OMpImkG-YUVFzObORk7JE4HM1uuu45AAI7W6s3_MyWHqI9l9LQPJjoZT_rTl4EsHagwpTRoimu3fyn8_RPUVDfgrHQ4YkyhUmH2olpD1H_1Eg7X1psfyukQirHPfc9M2E_pZB4lSYBCcjf3AwHhfTqyG16HjgBvRvnw6H9uWpkCiJxTLWVYh2ROlWPH8yOqzoJAxSrime_RtipS6zoISV2X7-HrZlZ5d0mapd_u3dXn1WOw.DKjiebjNPmI7cnJz0LlWnRaBKnbTbImBv5sGxnc7s0o&dib_tag=se&keywords=moisturizer&qid=1767796888&sprefix=moisturizer%2Caps%2C372&sr=8-1'
    },
    {
      title: 'Neutrogena Hydro Boost Water Gel',
      price: 999,
      image: 'https://m.media-amazon.com/images/I/51w7RQHpaeL._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDc2MjI0NTY1NTgzMDM4OjE3Njc4NjMyODc6c3BfYXRmOjMwMDI5MzkwNTY0NjEzMjo6MDo6&url=%2FCetaphil-Moisturising-Cream-80g%2Fdp%2FB01HMLB0LW%2Fref%3Dsr_1_4_sspa%3Fcrid%3D1E0MJ92A6NWLL%26dib%3DeyJ2IjoiMSJ9.OOWuWH3PUyr1KC4TDkGqPgxVaoqZ3Uy_VQtvYWaj5V1Gsgln_34y-YZTEC_FuuCMbiFAQmPxCPDQiuBIHr_5Shw68lSglH-0sMZe9h2isseEnj9s0XpmJGkBRSfj62q81BbgBeQwD1huAM1kvwr0vqvWuuvIlGZr2ORfY9PR6cYPjuBK0h8QiDExjZ8zWKni7Z6jEVcCWzYwfnmpY_DLh0OrZkboevCwvIoCdSesz-I5aPfmBnKBy8JIqr1pmPM4DbHZI_lJm53JKRA9yvumIhZEk-4vgSbXSxd-7Leyr2M.cpPhnfHS5Ogr4l3Oce_ad7dPg1xs4lLkCfB_EACfkIc%26dib_tag%3Dse%26keywords%3Dmoisturizer%2Bcream%26qid%3D1767863287%26sprefix%3Dmoistur%252Caps%252C388%26sr%3D8-4-spons%26aref%3DbBoFTCKcRk%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=bBoFTCKcRk&sp_cr=ZAZ'
    },
    {      title: 'Plum Green Tea Mattifying Moisturizer',  
      price: 499,
      image: 'https://m.media-amazon.com/images/I/51cwSTdfTAL._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/CeraVe-Moisturizers-Moisturizing-Cream-Very/dp/B07CH8F17Q/ref=sr_1_14?crid=1E0MJ92A6NWLL&dib=eyJ2IjoiMSJ9.OOWuWH3PUyr1KC4TDkGqPgxVaoqZ3Uy_VQtvYWaj5V1Gsgln_34y-YZTEC_FuuCMbiFAQmPxCPDQiuBIHr_5Shw68lSglH-0sMZe9h2isseEnj9s0XpmJGkBRSfj62q81BbgBeQwD1huAM1kvwr0vqvWuuvIlGZr2ORfY9PR6cYPjuBK0h8QiDExjZ8zWKni7Z6jEVcCWzYwfnmpY_DLh0OrZkboevCwvIoCdSesz-I5aPfmBnKBy8JIqr1pmPM4DbHZI_lJm53JKRA9yvumIhZEk-4vgSbXSxd-7Leyr2M.cpPhnfHS5Ogr4l3Oce_ad7dPg1xs4lLkCfB_EACfkIc&dib_tag=se&keywords=moisturizer+cream&qid=1767863287&sprefix=moistur%2Caps%2C388&sr=8-14'
    },
    {
      title: 'Neutrogena Moisturizing Cream',
      price: 599,
      image: 'https://m.media-amazon.com/images/I/419yLoaMY1L._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/Face-Shop-Ceramide-Moisturizer-Emulsion/dp/B0CZ8VTMY8/ref=sr_1_17?crid=1E0MJ92A6NWLL&dib=eyJ2IjoiMSJ9.OOWuWH3PUyr1KC4TDkGqPgxVaoqZ3Uy_VQtvYWaj5V1Gsgln_34y-YZTEC_FuuCMbiFAQmPxCPDQiuBIHr_5Shw68lSglH-0sMZe9h2isseEnj9s0XpmJGkBRSfj62q81BbgBeQwD1huAM1kvwr0vqvWuuvIlGZr2ORfY9PR6cYPjuBK0h8QiDExjZ8zWKni7Z6jEVcCWzYwfnmpY_DLh0OrZkboevCwvIoCdSesz-I5aPfmBnKBy8JIqr1pmPM4DbHZI_lJm53JKRA9yvumIhZEk-4vgSbXSxd-7Leyr2M.cpPhnfHS5Ogr4l3Oce_ad7dPg1xs4lLkCfB_EACfkIc&dib_tag=se&keywords=moisturizer+cream&qid=1767863287&sprefix=moistur%2Caps%2C388&sr=8-17'

    },
    {
      title: 'Cetaphil Moisturizing Cream',
      price: 850,
      image: 'https://m.media-amazon.com/images/I/51g9c5DjXpL._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/Cetaphil-Daily-Advance-Hydrating-Lotion/dp/B01N9975KN/ref=sr_1_18?crid=1E0MJ92A6NWLL&dib=eyJ2IjoiMSJ9.OOWuWH3PUyr1KC4TDkGqPgxVaoqZ3Uy_VQtvYWaj5V1Gsgln_34y-YZTEC_FuuCMbiFAQmPxCPDQiuBIHr_5Shw68lSglH-0sMZe9h2isseEnj9s0XpmJGkBRSfj62q81BbgBeQwD1huAM1kvwr0vqvWuuvIlGZr2ORfY9PR6cYPjuBK0h8QiDExjZ8zWKni7Z6jEVcCWzYwfnmpY_DLh0OrZkboevCwvIoCdSesz-I5aPfmBnKBy8JIqr1pmPM4DbHZI_lJm53JKRA9yvumIhZEk-4vgSbXSxd-7Leyr2M.cpPhnfHS5Ogr4l3Oce_ad7dPg1xs4lLkCfB_EACfkIc&dib_tag=se&keywords=moisturizer+cream&qid=1767863287&sprefix=moistur%2Caps%2C388&sr=8-18' 
       },
       {
      title: 'Nivea Soft Moisturizing Cream',
      price: 400,
      image: 'https://m.media-amazon.com/images/I/51tF7Q-FLuL._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/Bioderma-3401399458835-Atoderm-Creme-200g/dp/B0025YVBG6/ref=sr_1_28?crid=1E0MJ92A6NWLL&dib=eyJ2IjoiMSJ9.OOWuWH3PUyr1KC4TDkGqPgxVaoqZ3Uy_VQtvYWaj5V1Gsgln_34y-YZTEC_FuuCMbiFAQmPxCPDQiuBIHr_5Shw68lSglH-0sMZe9h2isseEnj9s0XpmJGkBRSfj62q81BbgBeQwD1huAM1kvwr0vqvWuuvIlGZr2ORfY9PR6cYPjuBK0h8QiDExjZ8zWKni7Z6jEVcCWzYwfnmpY_DLh0OrZkboevCwvIoCdSesz-I5aPfmBnKBy8JIqr1pmPM4DbHZI_lJm53JKRA9yvumIhZEk-4vgSbXSxd-7Leyr2M.cpPhnfHS5Ogr4l3Oce_ad7dPg1xs4lLkCfB_EACfkIc&dib_tag=se&keywords=moisturizer+cream&qid=1767863287&sprefix=moistur%2Caps%2C388&sr=8-28'
       }
    ];

  const sunscreens = [
    {
      title: 'Dot & Key Vitamin C Sunscreen',
      price: 699,
      image: 'https://m.media-amazon.com/images/I/61UGAajCkwL._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2MzkxMzMyMjA0Njg0MTUxOjE3Njc3OTcwMDg6c3BfYXRmOjMwMDQ4NDMyNjU4NDgzMjo6MDo6&url=%2FVitamin-Sunscreen-Water-Light-Protection-Absorption%2Fdp%2FB0BLK4YRSN%2Fref%3Dsr_1_1_sspa%3Fcrid%3D3VK0NLZJSS58M%26dib%3DeyJ2IjoiMSJ9.BoO2Mcs9qLfgfTLfvOJfF3tsdRgxO00gISV4BLAhXXBzILQZJEKDwWuVNwX3OMpImkG-YUVFzObORk7JE4HM1uuu45AAI7W6s3_MyWHqI9l9LQPJjoZT_rTl4EsHagwpTRoimu3fyn8_RPUVDfgrHQ4YkyhUmH2olpD1H_1Eg7X1psfyukQirHPfc9M2E_pZB4lSYBCcjf3AwHhfTqyG16HjgBvRvnw6H9uWpkCiJxTLWVYh2ROlWPH8yOqzoJAxSrime_RtipS6zoISV2X7-HrZlZ5d0mapd_u3dXn1WOw.DKjiebjNPmI7cnJz0LlWnRaBKnbTbImBv5sGxnc7s0o%26dib_tag%3Dse%26keywords%3Dsunscreen%26qid%3D1767797008%26sprefix%3Dsuncream%252Caps%252C372%26sr%3D8-1-spons%26aref%3DC6296lDhZn%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=C6296lDhZn&sp_cr=ZAZ'
    },
    {
        title: 'Foxtale Essentials Sunscreen',    
        price: 499,
        image: 'https://m.media-amazon.com/images/I/51NlieDNvsL._AC_UL480_FMwebp_QL65_.jpg',
        link: 'https://www.amazon.in/Foxtale-Essentials-Sunscreen-Vitamin-Niacinamide/dp/B0C3CP6B5Y/ref=sr_1_5?crid=3VK0NLZJSS58M&dib=eyJ2IjoiMSJ9.BoO2Mcs9qLfgfTLfvOJfF3tsdRgxO00gISV4BLAhXXBzILQZJEKDwWuVNwX3OMpImkG-YUVFzObORk7JE4HM1uuu45AAI7W6s3_MyWHqI9l9LQPJjoZT_rTl4EsHagwpTRoimu3fyn8_RPUVDfgrHQ4YkyhUmH2olpD1H_1Eg7X1psfyukQirHPfc9M2E_pZB4lSYBCcjf3AwHhfTqyG16HjgBvRvnw6H9uWpkCiJxTLWVYh2ROlWPH8yOqzoJAxSrime_RtipS6zoISV2X7-HrZlZ5d0mapd_u3dXn1WOw.DKjiebjNPmI7cnJz0LlWnRaBKnbTbImBv5sGxnc7s0o&dib_tag=se&keywords=sunscreen&qid=1767797008&sprefix=suncream%2Caps%2C372&sr=8-5'
    },
    {
      title: 'Neutrogena Ultra Sheer Sunscreen',
      price: 299,
      image: 'https://m.media-amazon.com/images/I/51qu97DFTjL._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDc2MjI0NTY1NTgzMDM4OjE3Njc4NjMyODc6c3BfYXRmOjMwMDc1OTM2MDQ0NjEzMjo6MDo6&url=%2FMoisturizer-Non-Greasy-Vitamin-Instant-Hydration%2Fdp%2FB00E96N6O8%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1E0MJ92A6NWLL%26dib%3DeyJ2IjoiMSJ9.OOWuWH3PUyr1KC4TDkGqPgxVaoqZ3Uy_VQtvYWaj5V1Gsgln_34y-YZTEC_FuuCMbiFAQmPxCPDQiuBIHr_5Shw68lSglH-0sMZe9h2isseEnj9s0XpmJGkBRSfj62q81BbgBeQwD1huAM1kvwr0vqvWuuvIlGZr2ORfY9PR6cYPjuBK0h8QiDExjZ8zWKni7Z6jEVcCWzYwfnmpY_DLh0OrZkboevCwvIoCdSesz-I5aPfmBnKBy8JIqr1pmPM4DbHZI_lJm53JKRA9yvumIhZEk-4vgSbXSxd-7Leyr2M.cpPhnfHS5Ogr4l3Oce_ad7dPg1xs4lLkCfB_EACfkIc%26dib_tag%3Dse%26keywords%3Dmoisturizer%2Bcream%26qid%3D1767863287%26sprefix%3Dmoistur%252Caps%252C388%26sr%3D8-1-spons%26aref%3DbntBcYn2TN%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=bntBcYn2TN&sp_cr=ZAZ'
    },
    {
      title: 'La Shield Sunscreen', 
      price: 472,
      image: 'https://m.media-amazon.com/images/I/61uC+7RoR3L._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDc2MjI0NTY1NTgzMDM4OjE3Njc4NjMyODc6c3BfYXRmOjMwMDU3MDA0MjgzNjAzMjo6MDo6&url=%2FPlum-Niacinamide-Moisturizer-MatmarineTM-Lightweight%2Fdp%2FB0C2Z5F5TJ%2Fref%3Dsr_1_3_in_f3_0o_fs_sspa%3Fcrid%3D1E0MJ92A6NWLL%26dib%3DeyJ2IjoiMSJ9.OOWuWH3PUyr1KC4TDkGqPgxVaoqZ3Uy_VQtvYWaj5V1Gsgln_34y-YZTEC_FuuCMbiFAQmPxCPDQiuBIHr_5Shw68lSglH-0sMZe9h2isseEnj9s0XpmJGkBRSfj62q81BbgBeQwD1huAM1kvwr0vqvWuuvIlGZr2ORfY9PR6cYPjuBK0h8QiDExjZ8zWKni7Z6jEVcCWzYwfnmpY_DLh0OrZkboevCwvIoCdSesz-I5aPfmBnKBy8JIqr1pmPM4DbHZI_lJm53JKRA9yvumIhZEk-4vgSbXSxd-7Leyr2M.cpPhnfHS5Ogr4l3Oce_ad7dPg1xs4lLkCfB_EACfkIc%26dib_tag%3Dse%26keywords%3Dmoisturizer%2Bcream%26qid%3D1767863287%26sprefix%3Dmoistur%252Caps%252C388%26sr%3D8-3-spons%26aref%3DwumAbeu3g3%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=wumAbeu3g3&sp_cr=ZAZ'
    },
    {
      title: 'Neutrogena Hydro Boost Water Gel Sunscreen',
      price: 550,
      image: 'https://m.media-amazon.com/images/I/51w7RQHpaeL._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDc2MjI0NTY1NTgzMDM4OjE3Njc4NjMyODc6c3BfYXRmOjMwMDI5MzkwNTY0NjEzMjo6MDo6&url=%2FCetaphil-Moisturising-Cream-80g%2Fdp%2FB01HMLB0LW%2Fref%3Dsr_1_4_sspa%3Fcrid%3D1E0MJ92A6NWLL%26dib%3DeyJ2IjoiMSJ9.OOWuWH3PUyr1KC4TDkGqPgxVaoqZ3Uy_VQtvYWaj5V1Gsgln_34y-YZTEC_FuuCMbiFAQmPxCPDQiuBIHr_5Shw68lSglH-0sMZe9h2isseEnj9s0XpmJGkBRSfj62q81BbgBeQwD1huAM1kvwr0vqvWuuvIlGZr2ORfY9PR6cYPjuBK0h8QiDExjZ8zWKni7Z6jEVcCWzYwfnmpY_DLh0OrZkboevCwvIoCdSesz-I5aPfmBnKBy8JIqr1pmPM4DbHZI_lJm53JKRA9yvumIhZEk-4vgSbXSxd-7Leyr2M.cpPhnfHS5Ogr4l3Oce_ad7dPg1xs4lLkCfB_EACfkIc%26dib_tag%3Dse%26keywords%3Dmoisturizer%2Bcream%26qid%3D1767863287%26sprefix%3Dmoistur%252Caps%252C388%26sr%3D8-4-spons%26aref%3DbBoFTCKcRk%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=bBoFTCKcRk&sp_cr=ZAZ'
    },
    {
      title: 'La Shield Matte Finish Sunscreen',
      price: 450,
      image: 'https://m.media-amazon.com/images/I/61SSD0FoULL._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/Moisturizer-Combination-Moisturization-Hyaluronic-Non-Comedogenic/dp/B0BDVG99J5/ref=sr_1_8?crid=1E0MJ92A6NWLL&dib=eyJ2IjoiMSJ9.OOWuWH3PUyr1KC4TDkGqPgxVaoqZ3Uy_VQtvYWaj5V1Gsgln_34y-YZTEC_FuuCMbiFAQmPxCPDQiuBIHr_5Shw68lSglH-0sMZe9h2isseEnj9s0XpmJGkBRSfj62q81BbgBeQwD1huAM1kvwr0vqvWuuvIlGZr2ORfY9PR6cYPjuBK0h8QiDExjZ8zWKni7Z6jEVcCWzYwfnmpY_DLh0OrZkboevCwvIoCdSesz-I5aPfmBnKBy8JIqr1pmPM4DbHZI_lJm53JKRA9yvumIhZEk-4vgSbXSxd-7Leyr2M.cpPhnfHS5Ogr4l3Oce_ad7dPg1xs4lLkCfB_EACfkIc&dib_tag=se&keywords=moisturizer+cream&qid=1767863287&sprefix=moistur%2Caps%2C388&sr=8-8'
    },
    {
      title: 'Neutrogena Ultra Sheer Dry-Touch Sunscreen',
      price: 320,
      image: 'https://m.media-amazon.com/images/I/612ilo+HgML._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/Pilgrim-Moisturizer-Hyaluronic-Niacinamide-Lightweight/dp/B0F6NTH43P/ref=sr_1_12?crid=1E0MJ92A6NWLL&dib=eyJ2IjoiMSJ9.OOWuWH3PUyr1KC4TDkGqPgxVaoqZ3Uy_VQtvYWaj5V1Gsgln_34y-YZTEC_FuuCMbiFAQmPxCPDQiuBIHr_5Shw68lSglH-0sMZe9h2isseEnj9s0XpmJGkBRSfj62q81BbgBeQwD1huAM1kvwr0vqvWuuvIlGZr2ORfY9PR6cYPjuBK0h8QiDExjZ8zWKni7Z6jEVcCWzYwfnmpY_DLh0OrZkboevCwvIoCdSesz-I5aPfmBnKBy8JIqr1pmPM4DbHZI_lJm53JKRA9yvumIhZEk-4vgSbXSxd-7Leyr2M.cpPhnfHS5Ogr4l3Oce_ad7dPg1xs4lLkCfB_EACfkIc&dib_tag=se&keywords=moisturizer+cream&qid=1767863287&sprefix=moistur%2Caps%2C388&sr=8-12'
    },
  ];

  const serums = [
    {
      title: 'Vitamin C Serum',
      price: 899,
      image: 'https://m.media-amazon.com/images/I/61UC31rVhQL._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1OTUwODYzODE4MDkzNDE5OjE3Njc3OTcyMjM6c3BfYXRmOjMwMDU0NzA3MTg5OTAzMjo6MDo6&url=%2FDOT-KEY-Niacinamide-Strawberry-Hyperpigmentation%2Fdp%2FB0F2MDWP9Y%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2QRQBQVYA99SP%26dib%3DeyJ2IjoiMSJ9.H_mJrA7aTSMjmW5to6aZhB-JQ9b5-MuX-Qf68xVRB5aShzC08F3lp8kq_dGj0U1gKYtMnJLz34kvFoRIe5m5rCIaew_KKwRV1DctOgg-ipeZeBhflGxUTDS6CFzuh7aWyv8x7NwILQhuoOJs_IRiYkLYTgR5dW76CBV4DjMI49IseKf9QbxmxcOBJQ8hKKudJwR2U8gxIIVZX3Ul-4tTqoQ-W5thybUY-WMgK6AfXGGsl9Yc8v4stDtIqLjeIgqU4HRkv2HYgM_NpNvyoMGtYGgmUhGMAkOw1nXkKg2V3ig.mbK69z8-BWghdtUcT1OOZJDZPNfBiAnNRnjocxtB9Cg%26dib_tag%3Dse%26keywords%3Dserums%2Bfor%2Bglowing%2Bskin%26qid%3D1767797223%26sprefix%3Dserums%252Caps%252C372%26sr%3D8-1-spons%26aref%3DRZkvjpTJq9%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=RZkvjpTJq9&sp_cr=ZAZ'
    },
    {
        title: 'Hyaluronic Acid Serum',
        price: 1200,
        image: 'https://m.media-amazon.com/images/I/51-0Yb6kfJL._AC_UL480_FMwebp_QL65_.jpg',
        link: 'https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1OTUwODYzODE4MDkzNDE5OjE3Njc3OTcyMjM6c3BfYXRmOjIwMDQzMjk5ODY2MjAxOjowOjo&url=%2FGarnier-Brightening-Anti-Dark-Niacinamide-Salicylic%2Fdp%2FB08FTQXWC7%2Fref%3Dsr_1_3_sspa%3Fcrid%3D2QRQBQVYA99SP%26dib%3DeyJ2IjoiMSJ9.H_mJrA7aTSMjmW5to6aZhB-JQ9b5-MuX-Qf68xVRB5aShzC08F3lp8kq_dGj0U1gKYtMnJLz34kvFoRIe5m5rCIaew_KKwRV1DctOgg-ipeZeBhflGxUTDS6CFzuh7aWyv8x7NwILQhuoOJs_IRiYkLYTgR5dW76CBV4DjMI49IseKf9QbxmxcOBJQ8hKKudJwR2U8gxIIVZX3Ul-4tTqoQ-W5thybUY-WMgK6AfXGGsl9Yc8v4stDtIqLjeIgqU4HRkv2HYgM_NpNvyoMGtYGgmUhGMAkOw1nXkKg2V3ig.mbK69z8-BWghdtUcT1OOZJDZPNfBiAnNRnjocxtB9Cg%26dib_tag%3Dse%26keywords%3Dserums%2Bfor%2Bglowing%2Bskin%26qid%3D1767797223%26sprefix%3Dserums%252Caps%252C372%26sr%3D8-3-spons%26aref%3Duk0p5toWlw%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=uk0p5toWlw&sp_cr=ZAZ'
    },
    {
      title: 'Niacinamide Serum',
      price: 699,
      image: 'https://m.media-amazon.com/images/I/61Tb8jTn5WL._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NjA0MzM1MDYzMDI5MTU2OjE3Njc4NjQ4NTQ6c3BfYXRmOjMwMDUyODA0MjYxMDkzMjo6MDo6&url=%2FDr-Sheths-Argireline-Advanced-Anti-Aging%2Fdp%2FB0DZ21HM73%2Fref%3Dsr_1_3_sspa%3Fcrid%3D2PZYNIKE152ZN%26dib%3DeyJ2IjoiMSJ9.i_nQ26k5_NUdnhTXocdcNlFX6yqXVaZCMF9ZzCSCQlKcjQ2io-50YCgnP0xY3fWhHusI5J10YFOdOtDb6BWoDm1Bppq-EkMkhWdJgznu6-br0jMF6i06NHqi2NT_jEL9LLg4NHYQdG9jCqL0yls3NPdutUY2QaUS7_-c1hVb35zWk2-1zuL4WrWdhRpvpKJzG7xHFDcdOPwx1WT6A28ONoM1IRpkzYgthYywA3B_bnisI5q6MszUFgenHnpf9wXz-eupnK75IM80NM9vKexAuA-yf5jCjQdiWBV7asa6R8E.wOcrfu8QuiWJ1z9ZdzOSw2eHeaEr3czGa9ar2gMHgdM%26dib_tag%3Dse%26keywords%3Dserums%26qid%3D1767864854%26sprefix%3Dserums%252Caps%252C417%26sr%3D8-3-spons%26aref%3DPMzv0NeS1R%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=PMzv0NeS1R&sp_cr=ZAZ'
    },
    {
      title: 'Retinol Serum',
      price: 999,
      image: 'https://m.media-amazon.com/images/I/61d22zfqoDL._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/Derma-Co-Salicylic-Serum-Marks/dp/B08TT6DPXN/ref=sr_1_7_in_f3_0o_fs_mod_primary_alm?crid=2PZYNIKE152ZN&dib=eyJ2IjoiMSJ9.i_nQ26k5_NUdnhTXocdcNlFX6yqXVaZCMF9ZzCSCQlKcjQ2io-50YCgnP0xY3fWhHusI5J10YFOdOtDb6BWoDm1Bppq-EkMkhWdJgznu6-br0jMF6i06NHqi2NT_jEL9LLg4NHYQdG9jCqL0yls3NPdutUY2QaUS7_-c1hVb35zWk2-1zuL4WrWdhRpvpKJzG7xHFDcdOPwx1WT6A28ONoM1IRpkzYgthYywA3B_bnisI5q6MszUFgenHnpf9wXz-eupnK75IM80NM9vKexAuA-yf5jCjQdiWBV7asa6R8E.wOcrfu8QuiWJ1z9ZdzOSw2eHeaEr3czGa9ar2gMHgdM&dib_tag=se&keywords=serums&qid=1767864854&sbo=m6DjfpMzMLDmL8pSMKX8hw%3D%3D&sprefix=serums%2Caps%2C417&sr=8-7'

    }
  ];

  const otherCreams = [
    {
      title: 'Night Repair Cream',
      price: 799,
      image: 'https://m.media-amazon.com/images/I/61vmEu4MuZL._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/Minimalist-Formulated-Sensitive-Irritating-Brightening/dp/B0CW1M1BC1/ref=sr_1_8?crid=2QRQBQVYA99SP&dib=eyJ2IjoiMSJ9.H_mJrA7aTSMjmW5to6aZhB-JQ9b5-MuX-Qf68xVRB5aShzC08F3lp8kq_dGj0U1gKYtMnJLz34kvFoRIe5m5rCIaew_KKwRV1DctOgg-ipeZeBhflGxUTDS6CFzuh7aWyv8x7NwILQhuoOJs_IRiYkLYTgR5dW76CBV4DjMI49IseKf9QbxmxcOBJQ8hKKudJwR2U8gxIIVZX3Ul-4tTqoQ-W5thybUY-WMgK6AfXGGsl9Yc8v4stDtIqLjeIgqU4HRkv2HYgM_NpNvyoMGtYGgmUhGMAkOw1nXkKg2V3ig.mbK69z8-BWghdtUcT1OOZJDZPNfBiAnNRnjocxtB9Cg&dib_tag=se&keywords=serums+for+glowing+skin&qid=1767797223&sprefix=serums%2Caps%2C372&sr=8-8'
    },
    {
      title: 'Under Eye Cream',
      price: 650,
      image: 'https://m.media-amazon.com/images/I/31Q4dL4U08L._AC_UL480_FMwebp_QL65_.jpg',
      link: 'https://www.amazon.in/Paris-Brightening-Glycolic-Visibly-Minimizes/dp/B0B9QMYYY4/ref=sr_1_17?crid=2PZYNIKE152ZN&dib=eyJ2IjoiMSJ9.i_nQ26k5_NUdnhTXocdcNlFX6yqXVaZCMF9ZzCSCQlKcjQ2io-50YCgnP0xY3fWhHusI5J10YFOdOtDb6BWoDm1Bppq-EkMkhWdJgznu6-br0jMF6i06NHqi2NT_jEL9LLg4NHYQdG9jCqL0yls3NPdutUY2QaUS7_-c1hVb35zWk2-1zuL4WrWdhRpvpKJzG7xHFDcdOPwx1WT6A28ONoM1IRpkzYgthYywA3B_bnisI5q6MszUFgenHnpf9wXz-eupnK75IM80NM9vKexAuA-yf5jCjQdiWBV7asa6R8E.wOcrfu8QuiWJ1z9ZdzOSw2eHeaEr3czGa9ar2gMHgdM&dib_tag=se&keywords=serums&qid=1767864854&sprefix=serums%2Caps%2C417&sr=8-17'

    },
    {
      title: 'Hand Cream',
      price: 299,
      image: 'https://m.media-amazon.com/images/I/51EpZT48XJL._AC_UL480_FMwebp_QL65_.jpg',
      link:'https://www.amazon.in/Niacinamide-Serum-Reduces-Excess-Sensitive/dp/B0BJ77CVGY/ref=sr_1_26?crid=2PZYNIKE152ZN&dib=eyJ2IjoiMSJ9.i_nQ26k5_NUdnhTXocdcNlFX6yqXVaZCMF9ZzCSCQlKcjQ2io-50YCgnP0xY3fWhHusI5J10YFOdOtDb6BWoDm1Bppq-EkMkhWdJgznu6-br0jMF6i06NHqi2NT_jEL9LLg4NHYQdG9jCqL0yls3NPdutUY2QaUS7_-c1hVb35zWk2-1zuL4WrWdhRpvpKJzG7xHFDcdOPwx1WT6A28ONoM1IRpkzYgthYywA3B_bnisI5q6MszUFgenHnpf9wXz-eupnK75IM80NM9vKexAuA-yf5jCjQdiWBV7asa6R8E.wOcrfu8QuiWJ1z9ZdzOSw2eHeaEr3czGa9ar2gMHgdM&dib_tag=se&keywords=serums&qid=1767864854&sprefix=serums%2Caps%2C417&sr=8-26'
    }
  ];
  const filterProducts = (products) =>
  products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
      <BeautySection title="Moisturizers" products={filterProducts(moisturizers)} />
      <BeautySection title="Sunscreens" products={filterProducts(sunscreens)} />
      <BeautySection title="Serums" products={filterProducts(serums)} />
      <BeautySection title="Other Creams" products={filterProducts(otherCreams)} />
    </>
  );
}

export default Home;
