import { categories } from "./category";

interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  description: string;
  price: number;
  isArchived: boolean;
  isFeatured: boolean;
  categoryId: string;
}

const categoryIds = {
  keyboard: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
  mouse: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
  tws: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
  accessories: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
};

export const products: Product[] = [
  {
    id: "a1b2c3d4-e5f6-7g8h-9i0j-1k2l3m4n5o6p",
    name: "Kiys Mechanical Keyboard Pro",
    slug: "kiys-mechanical-keyboard-pro",
    sku: "KMK001",
    description: "Mechanical keyboard with RGB lighting",
    price: 1000000,
    isArchived: false,
    isFeatured: true,
    categoryId: categoryIds.keyboard,
  },
  {
    id: "b2c3d4e5-f6g7-8h9i-0j1k-2l3m4n5o6p7q",
    name: "Kiys Gaming Mouse Viper 3 Pro",
    slug: "kiys-gaming-mouse-viper-3-pro",
    sku: "KGM001",
    description: "High precision gaming mouse",
    price: 500000,
    isArchived: false,
    isFeatured: true,
    categoryId: categoryIds.mouse,
  },
  {
    id: "c3d4e5f6-g7h8-9i0j-1k2l-3m4n5o6p7q8r",
    name: "Kiys Wireless Mouse Ultra",
    slug: "kiys-wireless-mouse-ultra",
    sku: "KWM001",
    description: "Wireless mouse with ergonomic design",
    price: 300000,
    isArchived: false,
    isFeatured: false,
    categoryId: categoryIds.mouse,
  },
  {
    id: "d4e5f6g7-h8i9-0j1k-2l3m-4n5o6p7q8r9s",
    name: "Kiys TWS Earbuds Max",
    slug: "kiys-tws-earbuds-max",
    sku: "KTE001",
    description: "True wireless stereo earbuds",
    price: 400000,
    isArchived: false,
    isFeatured: true,
    categoryId: categoryIds.tws,
  },
  {
    id: "e5f6g7h8-i9j0-1k2l-3m4n-5o6p7q8r9s0t",
    name: "Kiys Gaming Headset Supreme",
    slug: "kiys-gaming-headset-supreme",
    sku: "KGH001",
    description: "Surround sound gaming headset",
    price: 700000,
    isArchived: false,
    isFeatured: true,
    categoryId: categoryIds.accessories,
  },
  {
    id: "f6g7h8i9-j0k1-2l3m-4n5o-6p7q8r9s0t1u",
    name: "Kiys Mouse Pad XL",
    slug: "kiys-mouse-pad-xl",
    sku: "KMP001",
    description: "Large mouse pad with smooth surface",
    price: 150000,
    isArchived: false,
    isFeatured: false,
    categoryId: categoryIds.accessories,
  },
  {
    id: "g7h8i9j0-k1l2-3m4n-5o6p-7q8r9s0t1u2v",
    name: "Kiys Gaming Chair Elite",
    slug: "kiys-gaming-chair-elite",
    sku: "KGC001",
    description: "Ergonomic gaming chair",
    price: 2000000,
    isArchived: false,
    isFeatured: true,
    categoryId: categoryIds.accessories,
  },
  {
    id: "h8i9j0k1-l2m3-4n5o-6p7q-8r9s0t1u2v3w",
    name: "Kiys Monitor Stand Flex",
    slug: "kiys-monitor-stand-flex",
    sku: "KMS001",
    description: "Adjustable monitor stand",
    price: 250000,
    isArchived: false,
    isFeatured: false,
    categoryId: categoryIds.accessories,
  },
  {
    id: "i9j0k1l2-m3n4-5o6p-7q8r-9s0t1u2v3w4x",
    name: "Kiys USB Hub Pro",
    slug: "kiys-usb-hub-pro",
    sku: "KUH001",
    description: "USB hub with multiple ports",
    price: 200000,
    isArchived: false,
    isFeatured: false,
    categoryId: categoryIds.accessories,
  },
  {
    id: "j0k1l2m3-n4o5-6p7q-8r9s-0t1u2v3w4x5y",
    name: "Kiys Webcam HD",
    slug: "kiys-webcam-hd",
    sku: "KW001",
    description: "HD webcam for streaming",
    price: 600000,
    isArchived: false,
    isFeatured: true,
    categoryId: categoryIds.accessories,
  },
  {
    id: "k1l2m3n4-o5p6-7q8r-9s0t-1u2v3w4x5y6z",
    name: "Kiys Gaming Mouse Stealth",
    slug: "kiys-gaming-mouse-stealth",
    sku: "KGM002",
    description: "Silent gaming mouse with high DPI",
    price: 550000,
    isArchived: false,
    isFeatured: true,
    categoryId: categoryIds.mouse,
  },
  {
    id: "l2m3n4o5-p6q7-8r9s-0t1u-2v3w4x5y6z7a",
    name: "Kiys Wireless Mouse Nano",
    slug: "kiys-wireless-mouse-nano",
    sku: "KWM002",
    description: "Compact wireless mouse",
    price: 250000,
    isArchived: false,
    isFeatured: false,
    categoryId: categoryIds.mouse,
  },
  {
    id: "m3n4o5p6-q7r8-9s0t-1u2v-3w4x5y6z7a8b",
    name: "Kiys Mechanical Keyboard Lite",
    slug: "kiys-mechanical-keyboard-lite",
    sku: "KMK002",
    description: "Mechanical keyboard with blue switches",
    price: 800000,
    isArchived: false,
    isFeatured: true,
    categoryId: categoryIds.keyboard,
  },
  {
    id: "n4o5p6q7-r8s9-0t1u-2v3w-4x5y6z7a8b9c",
    name: "Kiys Wireless Keyboard Slim",
    slug: "kiys-wireless-keyboard-slim",
    sku: "KWK001",
    description: "Slim wireless keyboard",
    price: 600000,
    isArchived: false,
    isFeatured: false,
    categoryId: categoryIds.keyboard,
  },
];
