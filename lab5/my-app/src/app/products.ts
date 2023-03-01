export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  img: string
  url: string;
  category: string;
  like: number;
}

export const products = [
  {
    id: 1,
    name: 'Ноутбук Apple MacBook Air 13 MLXW3 серый',
    price: 635148,
    description:"Дисплей - 13.6 дюйм,\nПроцессор - Apple M2,",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/he9/52679187890206/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-1.jpg',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxw3-seryi-105933794/',
    category: "Laptops",
    rating: 5,
    like: 0,
  }
  ,
  {
    id: 2,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 389897,
    description: 'Дисплей - 15.6 дюйм,\nПроцессор - Intel Core i5 11400H',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    url: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/',
    category: "Laptops",
    rating: 5,
    like: 0,
  },
  {
    id: 3,
    name: 'Ноутбук Acer Extensa 15 EX215-52 NX.EG8ER.00B черный',
    price: 299990,
    description: "Дислпей - 15.6 дюймб\nПроцессор - Intel Core i5 1035G1",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h05/h56/52615655948318/acer-extensa-15-ex215-52-nx-eg8er-00b-serebristyj-105725654-1.jpg',
    url: 'https://kaspi.kz/shop/p/acer-extensa-15-ex215-52-nx-eg8er-00b-chernyi-105725654/',
    category: "Laptops",
    rating: 5,
    like: 0,
  },
  {
    id: 4,
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 164990,
    description: 'Дисплей - 15.6 дюйм,\nПроцессор - Intel Pentium Gold 7505',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
    url: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/',
    category: "Laptops",
    rating: 5,
    like: 0,
  },
  {
    id: 5,
    name: 'Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый',
    price: 239924,
    description: 'Дисплей - 15.6 дюйм,\nПроцессор - Intel Core i3 1115G4',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg',
    url: 'https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/',
    category: "Laptops",
    rating: 5,
    like: 0,
  },
  {
    id: 6,
    name: 'Ноутбук Apple MacBook Air 13 MGND3 золотистый',
    price: 498000,
    description: 'Дисплей - 13.3 дюйм,\nПроцессор - Apple M1',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h54/33286638272542/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/',
    category: "Laptops",
    rating: 5,
    like: 0,
  },
  {
    id: 7,
    name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
    price: 369990,
    description: 'Дисплей - 15.6 дюйм,\nПроцессор - AMD Ryzen 5 4600H',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
    url: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/',
    category: "Laptops",
    rating: 5,
    like: 0,
  },
  {
    id: 8,
    name: 'Ноутбук Apple MacBook Air 13 MGN93 серебристый',
    price: 499780,
    description: 'Дисплей - 13.3 дюйм,\nПроцессор - Apple M1',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/h5b/33271772446750/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/',
    category: "Laptops",
    rating: 5,
    like: 0,
  },
  {
    id: 9,
    name: 'Ноутбук Acer Nitro 5 AN515-45 NH.QB9ER.004 черный',
    price: 379980 ,
    description: 'Дисплей - 15.6 дюйм,\nПроцессор - AMD Ryzen 5 5600H',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h65/66626494398494/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784-1.jpg',
    url: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784/',
    category: "Laptops",
    rating: 5,
    like: 0,
  },
  {
    id: 10,
    name: 'Ноутбук Apple MacBook Air 13 MLY33 черный',
    price: 628327,
    description: 'Дисплей - 13.6 дюйм,\nПроцессор - Apple M2 8-Core',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc0/h3d/52679174357022/apple-macbook-air-13-mly33-chernyi-105933768-1.jpg',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/',
    category: "Laptops",
    rating: 5,
    like: 0,
  },
];