export type UserEntity = {
    username: string
    fullName: string
    bio: string
    subscriptionsCount: number
    subscribersCount: number
    avatarSrc: string
    subscribers: SubUserEntity[]
    subscriptions: SubUserEntity[]
}

export type SubUserEntity = Pick<UserEntity, "username" | "fullName" | "avatarSrc">

