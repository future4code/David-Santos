export const goToLogin = (history) => {
    history.push("/")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToFeedPage = (history) => {
    history.push("/postagens")
}

export const goToPostPage = (history, id) => {
    history.push(`/postagens/${id}`)
}