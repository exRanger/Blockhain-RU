export function getUsers(){
    return `users {
        comments_id
        avatar_url
        id
        username
    }`
}

export function getTasks(limit = 5){
    return `tasks(limit: ${limit}){
            description
            created_at
            comments_id
            description
            followers_id
            group_id
            id
            isDone
            user_id
    }`
}

export function tasks_By_pk(id){
    return `tasks_by_pk(id: ${id}) {
        comments_id
        created_at
        description
        followers_id
        group_id
        id
        isDone
    }`
}


 