export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  isVerified: boolean;
  premiumTier?: 'smoll' | 'xl' | 'xxl';
  followersCount: number;
  followingCount: number;
  postsCount: number;
}

export interface Location {
  id: string;
  name: string;
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Post {
  id: string;
  user: User;
  location: Location;
  image: string;
  caption: string;
  story: string;
  timestamp: Date;
  likesCount: number;
  commentsCount: number;
  isLiked: boolean;
  tags: string[];
}

export interface PremiumPackage {
  id: 'smoll' | 'xl' | 'xxl';
  name: string;
  price: number;
  monthlyPosts: number;
  prizeValue: string;
  features: string[];
  color: string;
}