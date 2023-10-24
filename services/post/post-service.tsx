import {Posts} from "@/entities/post.entity";
import globalConfig from "@/config";

type PostDto = {
    id: number
    authorUserName: string
    authorAvatarSrc: string
    imgSrc: string
    description: string
    likesCount: number
    commentsCount: number
}

const getPosts = async (): Promise<Posts> => {
    const res = await fetch(globalConfig.apiUrl+"posts", {
        next: {
            revalidate: 10
        }
    })
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    return res.json()
}

export {getPosts}