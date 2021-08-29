import { homePages } from '../pages/Home.pages'

And(/^estou logado$/, () => {
    homePages.mensagemBemVindo()
})