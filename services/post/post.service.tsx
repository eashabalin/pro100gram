import {Post, Posts} from "@/entities/post.entity";
import globalConfig from "@/config";
import {URLSearchParams} from "next/dist/compiled/@edge-runtime/primitives";

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

const getUserPosts = async (username: string): Promise<Posts> => {
    const res = await fetch(globalConfig.apiUrl+"posts?"+new URLSearchParams({
        authorUserName: username
    }))
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    return res.json()
}

const getUserPost = async (username: string, id: number): Promise<Post> => {
    const res = await fetch(globalConfig.apiUrl+"posts?"+new URLSearchParams({
        authorUserName: username,
        id: id.toString()
    }))
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const posts: Posts = await res.json()
    if (posts.length > 0) {
        return posts[0]
    }
    throw new Error(`post username:${username} id:${id} not found`)
}

export {getPosts, getUserPosts, getUserPost}