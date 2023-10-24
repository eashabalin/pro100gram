export type Post = {
    id: number
    authorUserName: string
    authorAvatarSrc: string
    imgSrc: string
    description: string
    likesCount: number
    commentsCount: number
}

export type Posts = Post[]