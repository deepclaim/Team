import { User, Post, Location, PremiumPackage } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'ayse_gezgin',
    displayName: 'Ayşe Gezgin',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    isVerified: true,
    premiumTier: 'xl',
    followersCount: 1250,
    followingCount: 340,
    postsCount: 89
  },
  {
    id: '2',
    username: 'mehmet_istanbul',
    displayName: 'Mehmet Kaya',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    isVerified: false,
    premiumTier: 'smoll',
    followersCount: 567,
    followingCount: 123,
    postsCount: 34
  },
  {
    id: '3',
    username: 'zeynep_photographer',
    displayName: 'Zeynep Özkan',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    isVerified: true,
    premiumTier: 'xxl',
    followersCount: 3420,
    followingCount: 890,
    postsCount: 156
  }
];

export const mockLocations: Location[] = [
  {
    id: '1',
    name: 'Galata Kulesi',
    city: 'İstanbul',
    country: 'Türkiye',
    coordinates: { lat: 41.0256, lng: 28.9744 }
  },
  {
    id: '2',
    name: 'Kapadokya Balon Turu',
    city: 'Nevşehir',
    country: 'Türkiye',
    coordinates: { lat: 38.6431, lng: 34.8331 }
  },
  {
    id: '3',
    name: 'Pamukkale Travertenleri',
    city: 'Denizli',
    country: 'Türkiye',
    coordinates: { lat: 37.9200, lng: 29.1200 }
  }
];

export const mockPosts: Post[] = [
  {
    id: '1',
    user: mockUsers[0],
    location: mockLocations[0],
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    caption: 'Galata Kulesi\'nden İstanbul manzarası',
    story: 'Bu kulenin tepesinden İstanbul\'u izlemek, sanki zamanın durduğu bir an gibi. Her defasında farklı bir hikaye anlatıyor bu şehir. Bugün güneş batarken, Haliç\'in üzerindeki ışık oyunları beni büyüledi.',
    timestamp: new Date('2024-01-15T18:30:00'),
    likesCount: 234,
    commentsCount: 18,
    isLiked: true,
    tags: ['istanbul', 'galatakulesi', 'manzara', 'günbatımı']
  },
  {
    id: '2',
    user: mockUsers[1],
    location: mockLocations[1],
    image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    caption: 'Kapadokya\'da balon turu deneyimi',
    story: 'Hayatımda gördüğüm en büyüleyici manzara! Yüzlerce balon arasında uçmak, aşağıdaki peri bacalarını izlemek... Bu anı hiç unutmayacağım. Sabah 5\'te kalkmaya değdi.',
    timestamp: new Date('2024-01-14T06:45:00'),
    likesCount: 456,
    commentsCount: 32,
    isLiked: false,
    tags: ['kapadokya', 'balon', 'manzara', 'deneyim']
  },
  {
    id: '3',
    user: mockUsers[2],
    location: mockLocations[2],
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    caption: 'Pamukkale\'nin beyaz cennet travertenleri',
    story: 'Doğanın binlerce yıllık eseri... Bu beyaz travertenler, sanki bulutların yeryüzüne inmiş hali. Termal sular ayaklarımı okşarken, bu mucizeyi yaşamanın mutluluğunu hissettim.',
    timestamp: new Date('2024-01-13T14:20:00'),
    likesCount: 189,
    commentsCount: 24,
    isLiked: true,
    tags: ['pamukkale', 'doğa', 'termal', 'beyaz']
  }
];

export const premiumPackages: PremiumPackage[] = [
  {
    id: 'smoll',
    name: 'Smoll Paket',
    price: 200,
    monthlyPosts: 5,
    prizeValue: '2.000 TL',
    features: [
      '5 aylık fotoğraf paylaşımı',
      '2.000 TL değerinde ödül şansı',
      'Market çeki, akaryakıt kartı',
      'Aylık çekiliş katılımı'
    ],
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'xl',
    name: 'XL Paket',
    price: 500,
    monthlyPosts: 10,
    prizeValue: '10.000 TL',
    features: [
      '10 aylık fotoğraf paylaşımı',
      'Elektrikli scooter şansı',
      '10.000 TL nakit ödül',
      'Öncelikli destek'
    ],
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'xxl',
    name: 'XXL Paket',
    price: 800,
    monthlyPosts: 20,
    prizeValue: '50cc Motor',
    features: [
      '20 aylık fotoğraf paylaşımı',
      '50cc motor şansı',
      'Apple akıllı telefon',
      'VIP destek ve özellikler'
    ],
    color: 'from-purple-400 to-purple-600'
  }
];