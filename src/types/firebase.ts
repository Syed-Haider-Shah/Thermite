import { Timestamp } from 'firebase/firestore'

export interface WithdrawInterface {
  id: string
  amount: number
  creatorId: string
  createdAt: Timestamp
  status: 'pending' | 'complete'
}

export const INITAIL_WITHDRAWS_DATA: WithdrawInterface = {
  id: '',
  amount: 0,
  creatorId: '',
  createdAt: Timestamp.now(),
  status: 'pending'
}

export interface UserInterface {
  id: string
  uid: string
  name: string
  username: string
  bio: string
  category: string
  authProvider: 'google' | 'local'
  verificationStatus?: 'verified' | 'pending'
  acceptedSign?: boolean
  tokenAddr?: string
  tokenName?: string
  tokenSymbol?: string
  tokenPrice?: string
  email: string
  avatar: string | null
  banner: string | null
  mainMedia?: string
  isCreator: boolean | null
  createdAt: Timestamp
  tokenCreatedAt: Timestamp
  verified?: boolean
  twitter: string
  youtube: string
  instagram: string
  tiktok: string
  twitch: string
  kick: string
  website?: string
  pricePerMonth?: number
  costInTokens?: number
  isFreeMembership?: boolean
  stripeMembershipId?: string
  stripeAccountId?: string
  perks?: string[]
  tokenPriceId?: string
  innoxBlueSubcriptionId?: string
  innoxBlueStatus?: 'active' | 'pending'
  customerId?: string
  tokenOwners: string[]
  subscriptionAmount?: number
  tokenAmount?: number
}

export const INITIAL_USER_DATA: UserInterface = {
  id: '',
  uid: '',
  name: '',
  username: '',
  bio: '',
  category: '',
  authProvider: 'local',
  email: '',
  avatar: null,
  banner: null,
  isCreator: null,
  createdAt: Timestamp.now(),
  tokenCreatedAt: Timestamp.now(),
  twitter: '',
  youtube: '',
  instagram: '',
  tiktok: '',
  twitch: '',
  kick: '',
  tokenOwners: []
}
