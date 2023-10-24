import {UserEntity} from "@/entities/user.entity";
import globalConfig from "@/config";
import {URLSearchParams} from "next/dist/compiled/@edge-runtime/primitives";

const getUser = async (username: string): Promise<UserEntity> => {
    const res = await fetch(globalConfig.apiUrl + "users?" + new URLSearchParams({
        username: username
    }), {
        cache: "no-cache"
    })
    if (!res.ok) {
        throw new Error("fail get user")
    }
    const users: UserEntity[] = await res.json()
    if (users.length > 0) {
        return users[0]
    }
    throw new Error("user not found")
}

export {getUser}