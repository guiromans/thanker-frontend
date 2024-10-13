import { GDPR_EN_HTML, GDPR_PT_HTML } from "../model/GDPR";
import { StorageService } from "./StorageService";
import { PROFESSION_ACTOR, PROFESSION_ACTRESS, PROFESSION_COMEDIAN, PROFESSION_JOURNALIST, PROFESSION_LAYWER, PROFESSION_MONK, PROFESSION_MUSICIAN, PROFESSION_SINGER_WOMAN, PROFESSION_PHILOSOPHER, PROFESSION_PSYCHOLOGIST, PROFESSION_ROMAN_EMPEROR, PROFESSION_SCIENTIST, PROFESSION_SPIRITUAL_LEADER, PROFESSION_WRITER, PROFESSION_WRITER_WOMAN, QUOTE_1, QUOTE_10, QUOTE_11, QUOTE_12, QUOTE_13, QUOTE_14, QUOTE_15, QUOTE_16, QUOTE_17, QUOTE_18, QUOTE_19, QUOTE_2, QUOTE_20, QUOTE_21, QUOTE_22, QUOTE_23, QUOTE_24, QUOTE_25, QUOTE_26, QUOTE_27, QUOTE_28, QUOTE_29, QUOTE_3, QUOTE_30, QUOTE_31, QUOTE_32, QUOTE_33, QUOTE_34, QUOTE_35, QUOTE_36, QUOTE_37, QUOTE_4, QUOTE_5, QUOTE_6, QUOTE_7, QUOTE_8, QUOTE_9, QUOTE_38, QUOTE_39, QUOTE_40, QUOTE_41, QUOTE_42, PROFESSION_MARTIAL_ARTIST, QUOTE_43, QUOTE_44, PROFESSION_PSYCHOLOGIST_WOMAN, PROFESSION_RESEARCHER_WOMAN, QUOTE_45, QUOTE_46, QUOTE_47, QUOTE_48, PROFESSION_ENTERPRENEUR, QUOTE_49, QUOTE_50, PROFESSION_TV_HOST_WOMAN, PROFESSION_ENTERPRENEUR_WOMAN, PROFESSION_YOGA_TEACHER_WOMAN } from "./translations/QuotesService";

export enum Language {
    PT = "PT", GB = "GB", ES = "ES", JP = "JP"
};

export const MAKE_YOUR_DAY: string = "make-your-day";
export const WALL_OF_GRATITUDE: string = "wall-of-gratitude";
export const USER_PAGE: string = "user-page";
export const THANK: string = "thank";
export const IM_THANKFUL_FOR: string = "im-thankful-for";
export const I_THANK_YOU_FOR: string = "i-thank-you-for";
export const TEXT_NOT_EMPTY: string = "text-not-empty";
export const CHECK_YOUR_EMAIL_ACCOUNT_CREATE: string = "check-your-email-account-create";
export const CREATE_USER: string = "create-user";
export const CREATE: string = "create";
export const RESET_PASSWORD: string = "reset-password";
export const UPDATE_PASSWORD: string = "update-password";
export const NEW_CONFIRMATION: string = "new-confirmation";
export const NEW_CONFIRMATION_TITLE: string = "new-confirmation-title";
export const REQUEST_RESET_PASSWORD: string = "request-reset-password";
export const RESET_PASSWORD_SUCCESS: string = "reset-password-success";
export const RESET_PASSWORD_ERROR: string = "reset-password-error";
export const CANNOT_RESET_PASSWORD: string = "cannot-reset-password";
export const YOUR_EMAIL: string = "your-email";
export const ERROR_LOGIN_MSG: string = "error-login-msg";
export const SEARCH_USERS_HINT: string = "search-users-hint";
export const SEARCH_FOLLOWING_HINT: string = "search-following-hint";
export const PRIVATE: string = "PRIVATE";
export const PUBLIC: string = "PUBLIC";
export const PASSWORD: string = "password";
export const THANKS: string = "thanks";
export const LOGIN: string = "login";
export const I_AM: string = "I-am";
export const TERMS_AND_CONDITIONS: string = "terms-and-conditions";
export const USER_CREATED_TEXT: string = "user-created-text";
export const THANKER_INTRO: string = "thanker-intro";
export const FOLLOWING: string = "following";
export const FOLLOW: string = "follow";
export const UNKNOWN: string = "unknown";
export const PLATO: string = "Plato";
export const CHANGED_PRIVACY_TYPE: string = "changed-privacy-type";
export const PASSWORD_RESET_REQUEST_SENT: string = "password-reset-request-sent";
export const NEW_CONFIRMATION_EMAIL_REQUESTED: string = "new-confirmation-email-requested";
export const ACCOUNT_IS_CONFIRMED: string = "account-is-confirmed";
export const ACCOUNT_CONFIRMATION_SUCCESS: string = "account-confirmation-success";
export const ACCOUNT_CONFIRMATION_ERROR: string = "account-confirmation-error";
export const NEW_PASSWORD: string = "new-password";
export const CONFIRM_NEW_PASSWORD: string = "confirm-new-password";
export const SUBMIT: string = "submit";
export const YOU_ARE_NOW_FOLLOWING: string = "you-are-now-following";
export const ERROR_TRYING_TO_FOLLOW: string = "error-trying-to-follow";
export const THANKER_IS_THANKFUL_TO: string = "thanker-is-thankful-to";
export const THANKING_MAKES_YOU_HAPPIER: string = "thanking-makes-you-happier";
export const CLICK_YOUR_NAME_UPDATE: string = "click-your-name-update";
export const CLICK_YOUR_PICTURE_UPDATE: string = "click-your-picture-update";
export const UPDATE: string = "update";
export const ARE_YOU_SURE_TO_DELETE: string = "are-you-sure-to-delete";
export const YES: string = "yes";
export const NO: string = "no";
export const SEE_MORE: string = "see-more";
export const SHOW_GRATITUDE_TEXT: string = "show-gratitude-text";
export const CRYPTOGRAPHY_INFO: string = "cryptography-info";
export const INQUIRIES_AND_EMAIL: string = "inquiries-and-email";
export const USERNAME_UPDATED: string = "username-updated";
export const PAGE_NOT_FOUND: string = "page-not-found";
export const GO_FIND_GRATITUDE: string = "go-find-gratitude";
export const PROFILE_PAGE: string = "profile-page";
export const PROFILE_IS_OPEN_SETTING: string = "profile-is-open-setting";
export const PROFILE_NOT_OPEN_SETTING: string = "profile-not-open-setting";
export const DEFAULT_THANKS_PRIVACY_PRIVATE: string = "default-thanks-privacy-private";
export const DEFAULT_THANKS_PRIVACY_PUBLIC: string = "default-thanks-privacy-public";
export const BE_THE_FIRST_THANKER: string = "be-the-first-thanker";
export const THIS_IS_PRIVATE_PROFILE: string = "this-is-private-profile";
export const FOLLOW_TO_SEE_THANKS: string = "follow-to-see-thanks";
export const START_FOLLOWING: string = "start-following";
export const MADE_PROFILE_PRIVATE_TO_THANKS: string = "made-profile-private-to-thanks";
export const MADE_PROFILE_PUBLIC_TO_THANKS: string = "made-profile-public-to-thanks";
export const COULD_NOT_UPDATE_PROFILE_PRIVACY: string = "could-not-update-profile-privacy";
export const YOUR_DEFAULT_THANKS_PRIVACY_PRIVATE: string = "your-default-thanks-privacy-private";
export const YOUR_DEFAULT_THANKS_PRIVACY_PUBLIC: string = "your-default-thanks-privacy-public";
export const HARVARD_ARTICLE: string = "harvard-article";
export const BERKELEY_ARTICLE: string = "berkeley-article";
export const UCLA_ARTICLE: string = "ucla-article";
export const GDPR: string = "gdpr";
export const FILES_MUST_BE: string = "files-must-be";
export const PRIVACY_ICON_TOOLTIP: string = "privacy-icon-tooltip";
export const LOCK_ICON_TOOLTIP: string = "lock-icon-tooltip";
export const GRATITUDE_WALL: string = "gratitude-wall";
export const SEARCH: string = "search-label";
export const GIVING_THANKS_PLEASE_HOLD: string = "giving-thanks-please-hold";

export const INTRO_THANKFUL_FOR: string = "intro-thankful-for";
export const INTRO_GRATEFUL_FOR: string = "intro-grateful-for";
export const INTRO_THANKS_FOR: string = "intro-thanks-for";

export const OTHER_INTRO_THANKS: string = "other-intro-thanks";
export const OTHER_INTRO_EXPRESSED_GRATITUDE: string = "other-intro-expressed-gratitude";
export const OTHER_INTRO_IS_THANKFUL_TO: string = "other-intro-is-thankful-to";

export const HINT_MADE_YOU_HAPPY: string ="hint-made-happy";
export const HINT_MADE_YOU_SMILE: string = "hint-made-smile";
export const HINT_MADE_YOUR_DAY: string = "hint-made-your-day";
export const HINT_HELPED_YOU: string = "hint-helped-you";
export const HINT_GRATEFUL: string = "hint-grateful";
export const HINT_GRATEFUL_FOR: string = "hint-grateful-for";
export const HINT_THANK_YOURSELF: string = "hint-thank-yourself";
export const HINT_WHAT_TO_THANK: string = "hint-what-to-thank";

export const HINT_OTHER_GRATEFUL_1: string = "hint-other-1";
export const HINT_OTHER_GRATEFUL_2: string = "hint-other-2";
export const HINT_OTHER_GRATEFUL_3: string = "hint-other-3";

export const REGISTER_NAME: string = "register-name";
export const REGISTER_HANDLE: string = "register-handle";
export const REGISTER_EMAIL: string = "register-email";
export const REGISTER_PASSWORD: string = "register-password";
export const REGISTER_CONFIRM_PASSWORD: string = "register-confirm-password";

export const INSPIRATION_1: string = "inspiration-1";
export const INSPIRATION_2: string = "inspiration-2";
export const INSPIRATION_3: string = "inspiration-3";
export const INSPIRATION_4: string = "inspiration-4";
export const INSPIRATION_5: string = "inspiration-5";
export const INSPIRATION_6: string = "inspiration-6";

export const HEADER_HOME: string = "header-home";
export const HEADER_FOLLOWING: string = "header-following";
export const HEADER_GRATITUDE_WALL: string = "header-gratitude-wall";
export const HEADER_SETTINGS: string = "header-settings";
export const HEADER_QUOTE: string = "header-quote";
export const HEADER_ABOUT: string = "header-about";
export const HEADER_LOGOUT: string = "header-logout";

export const ERRORS: string = "errors";
export const ERRORS_IN_FORM: string = "errors-in-form";
export const ERROR_CHANGE_PRIVACY_TYPE: string = "error-change-privacy-type";
export const ERROR_EMAIL_NOT_EXISTS: string = "error-email-not-exists";
export const ERROR_INVALID_EMAIL: string = "error-invalid-email";
export const ERROR_NAME_NOT_EMPTY: string = "error-name-not-empty";
export const ERROR_HANDLE_VALIDITY: string = "error-handle-validity";
export const ERROR_EMAIL_NOT_EMPTY: string = "error-email-not-empty";
export const ERROR_PASSWORD_NOT_EMPTY: string = "error-password-not-empty";
export const ERROR_PASSWORD_RULES: string = "error-password-rules";
export const ERROR_PASSWORD_AND_CONFIRMATION_NOT_MATCHING: string = "error-password-and-confirmation-not-matching";
export const ERROR_ACCEPT_TERMS_AND_CONDITIONS: string = "error-accept-terms-and-conditions";
export const ERROR_SERVER_COMMS: string = "error-server-comms";
export const ERROR_GOOGLE_LOGIN: string = "error-google-login";

export class TranslationService {
    storageService: StorageService = new StorageService();
    language: Language = this.storageService.getLanguage();

    setLanguage(language: Language) {
        this.language = language;
    }

    private TRANLATIONS_MAP: Map<Language, Map<string, string>> = new Map<Language, Map<string, string>>([
        [Language.PT, new Map<string, string>([
            [MAKE_YOUR_DAY, "Faz o teu dia"],
            [WALL_OF_GRATITUDE, "Mural da Gratidão"],
            [USER_PAGE, "Página do Utilizador"],
            [THANK, "Agradeço"],
            [IM_THANKFUL_FOR, "Sinto gratidão por"],
            [I_THANK_YOU_FOR, "Agradeço-te por"],
            [TEXT_NOT_EMPTY, "Agradecimento não pode estar vazio"],
            [CREATE, "Criar"],
            [SEE_MORE, "...(Ver Mais)"],
            [CHECK_YOUR_EMAIL_ACCOUNT_CREATE, "Por favor consulta o teu e-mail para encontrares o link de confirmação!"],
            [CREATE_USER, "Criar Utilizador"],
            [RESET_PASSWORD, "Recuperar Password"],
            [UPDATE_PASSWORD, "Atualizar password"],
            [RESET_PASSWORD_SUCCESS, "A password foi atualizada. Podes ir para a página de entrada, ou esperar alguns segundos pela redireção"],
            [RESET_PASSWORD_ERROR, "A password, e sua confirmação, têm de ter o mesmo valor"],
            [CANNOT_RESET_PASSWORD, "Não é possível alterar a password: período para alteração expirou, ou existiu erro a comunicar com o servidor. Por favor tenta pedir nova alteração de password, assim que possível. Obrigado!"],
            [NEW_CONFIRMATION, "Pedir novo e-mail de confirmação"],
            [NEW_CONFIRMATION_TITLE, "Pedir nova confirmação"],
            [REQUEST_RESET_PASSWORD, "Pedir para criar nova Password"],
            [YOUR_EMAIL, "O teu E-mail"],
            [USER_CREATED_TEXT, "Obrigado por criares conta no Thanker! Por favor acede ao teu e-mail para a confirmares"],
            [ERROR_LOGIN_MSG, "Erro na combinação e-mail/password.\nSe persistir tenta criar uma password nova"],
            [HINT_MADE_YOU_HAPPY, "O que te fez feliz hoje?"],
            [HINT_MADE_YOUR_DAY, "O que te fez hoje o dia?"],
            [HINT_MADE_YOU_SMILE, "O que te fez sorrir hoje?"],
            [HINT_HELPED_YOU, "O que te ajudou hoje?"],
            [HINT_GRATEFUL, "O que te fez sentir Gratidão hoje?"],
            [HINT_GRATEFUL_FOR, "Pelo que estás a sentir Gratidão?"],
            [HINT_THANK_YOURSELF, "Pelo que te queres agradecer a ti?"],
            [HINT_WHAT_TO_THANK, "Pelo que gostavas de agradecer?"],
            [SEARCH_USERS_HINT, "Pesquisa utilizadores"],
            [SEARCH_FOLLOWING_HINT, "Pesquisa quem segues"],
            [PRIVATE, "Privado"],
            [PUBLIC, "Público"],
            [PASSWORD, "Palavra-Passe"],
            [THANKS, "Agradecimentos"],
            [HINT_OTHER_GRATEFUL_1, "O que te fez sentir gratidão por"],
            [HINT_OTHER_GRATEFUL_2, "O que queres agradecer a"],
            [HINT_OTHER_GRATEFUL_3, "Pelo que queres reconhecer"],
            [LOGIN, "Entrar"],
            [INTRO_THANKFUL_FOR, "Obrigado por"],
            [INTRO_GRATEFUL_FOR, "Sinto gratidão por"],
            [INTRO_THANKS_FOR, "Agradeço por"],
            [OTHER_INTRO_THANKS, "agradece a"],
            [OTHER_INTRO_EXPRESSED_GRATITUDE, "expressa gratidão a"],
            [OTHER_INTRO_IS_THANKFUL_TO, "sente gratidão por"],
            [TERMS_AND_CONDITIONS, "Aceito os Termos e Condições da plataforma Thanker"],
            [THANKER_INTRO, "Thanker é o teu Diário de Gratidão, onde outras pessoas também podem escrever 😉"],
            [FOLLOWING, "Seguindo"],
            [FOLLOW, "Seguir"],
            [YOU_ARE_NOW_FOLLOWING, "Estás a agora a seguir"],
            [ERROR_TRYING_TO_FOLLOW, "Erro ao tentar seguir"],
            [THANKING_MAKES_YOU_HAPPIER, "Agradecer faz-te mais feliz"],
            [SHOW_GRATITUDE_TEXT, "Demonstrar Gratidão tem de facto um impacto na tua felicidade e na forma de olhares para a vida. Utiliza o Thanker para manteres o teu diário de Gratidão, e escreveres também no diário dos teus amigos/as ;)"],
            [CRYPTOGRAPHY_INFO, "Os agradecimentos que guardas no Thanker são encriptados (codificados), e só depois salvos na base de dados (para efeitos de privacidade). São depois desencriptados quando os carregamos na página."],
            [INQUIRIES_AND_EMAIL, "Para mais questões, cartas de amor e outras demonstrações de Gratidão, envia-nos e-mail para"],
            [USERNAME_UPDATED, "Nome de utilizador atualizado"],
            [PAGE_NOT_FOUND, "Página não encontrada"],
            [GO_FIND_GRATITUDE, "Agora encontra aquilo por que sentes Gratidão"],
            [PROFILE_PAGE, "Perfil"],
            [PROFILE_IS_OPEN_SETTING, "O teu perfil está aberto a receber Agradecimentos de outras pessoas (público)"],
            [PROFILE_NOT_OPEN_SETTING, "O teu perfil está fechado a receber Agradecimentos de outras pessoas (privado)"],
            [DEFAULT_THANKS_PRIVACY_PRIVATE, "A opção padrão dos teus agradecimentos será \"Privado\""],
            [DEFAULT_THANKS_PRIVACY_PUBLIC, "A opção padrão dos teus agradecimentos será \"Público\""],
            [BE_THE_FIRST_THANKER, "Sê o primeiro Thanker deste perfil"],
            [THIS_IS_PRIVATE_PROFILE, "Este perfil não está aberto a outros Agradecimentos, atualmente"],
            [FOLLOW_TO_SEE_THANKS, "Segue outros utilizadores para veres o mural da Gratidão, ou espera que eles façam Thanks!"],
            [START_FOLLOWING, "Começa a seguir outros perfis"],
            [MADE_PROFILE_PUBLIC_TO_THANKS, "A tua página pode agora receber Agradecimentos de outros perfis"],
            [MADE_PROFILE_PRIVATE_TO_THANKS, "A tua página já não permite Agradecimentos de outros perfis"],
            [COULD_NOT_UPDATE_PROFILE_PRIVACY, "Não foi possível atualizar a Privacidade da tua página"],
            [YOUR_DEFAULT_THANKS_PRIVACY_PRIVATE, "Alteraste a privacidade padrão dos teus Thanks para: Privado - para Thanks que vais dar"],
            [YOUR_DEFAULT_THANKS_PRIVACY_PUBLIC, "Alteraste a privacidade padrão dos teus Thanks para: Público - para Thanks que vais dar"],
            [HARVARD_ARTICLE, "Artigo da Universidade de Harvard"],
            [BERKELEY_ARTICLE, "Artigo da Universidade de Berkeley"],
            [UCLA_ARTICLE, "Artigo da UCLA"],
            [GDPR, GDPR_PT_HTML],
            [FILES_MUST_BE, "Ficheiros têm de ser"],
            [PRIVACY_ICON_TOOLTIP, "Privado: só tu (e a quem deres) conseguem visualizar o Thanks.\nPúblico: toda a gente conseguirá ver este Thanks."],
            [LOCK_ICON_TOOLTIP, "Os Thanks são encriptados na base de dados"],
            [CLICK_YOUR_NAME_UPDATE, "Clica no teu nome para o atualizares"],
            [CLICK_YOUR_PICTURE_UPDATE, "Clica na tua imagem para a atualizares"],
            [UPDATE, "Atualiza"],
            [GRATITUDE_WALL, "Mural de Gratidão"],
            [SEARCH, "Pesquisa"],
            [GIVING_THANKS_PLEASE_HOLD, "A dar o Agradecimento. Por favor aguarda :)"],
            [ARE_YOU_SURE_TO_DELETE, "De certeza que queres apagar este Agradecimento?"],
            [YES, "Sim"],
            [NO, "Não"],
            [PROFESSION_ACTOR, "Ator"],
            [PROFESSION_ACTRESS, "Atriz"],
            [PROFESSION_COMEDIAN, "Comediante"],
            [PROFESSION_JOURNALIST, "Jornalista"],
            [PROFESSION_LAYWER, "Advogado"],
            [PROFESSION_MONK, "Monge"],
            [PROFESSION_MUSICIAN, "Músico"],
            [PROFESSION_SINGER_WOMAN, "Cantora"],
            [PROFESSION_PHILOSOPHER, "Filósofo"],
            [PROFESSION_PSYCHOLOGIST, "Psicólogo"],
            [PROFESSION_ROMAN_EMPEROR, "Imperador Romano"],
            [PROFESSION_SCIENTIST, "Cientista"],
            [PROFESSION_SPIRITUAL_LEADER, "Líder Espiritual"],
            [PROFESSION_WRITER, "Escritor"],
            [PROFESSION_WRITER_WOMAN, "Escritora"],
            [PROFESSION_MARTIAL_ARTIST, "Lutador de Artes Marciais"],
            [PROFESSION_PSYCHOLOGIST_WOMAN, "Psicóloga"],
            [PROFESSION_RESEARCHER_WOMAN, "Investigadora"],
            [PROFESSION_ENTERPRENEUR, "Empreendedor"],
            [PROFESSION_TV_HOST_WOMAN, "Apresentadora de TV"],
            [PROFESSION_YOGA_TEACHER_WOMAN, "Instrutora de Yoga"],
            [PROFESSION_ENTERPRENEUR_WOMAN, "Empreendedora"],
            [REGISTER_NAME, "Nome"],
            [REGISTER_HANDLE, "Handle"],
            [REGISTER_EMAIL, "E-Mail"],
            [REGISTER_PASSWORD, "Palavra-Passe"],
            [REGISTER_CONFIRM_PASSWORD, "Confirmar palavra-passe"],
            [INSPIRATION_1, "Gratidão faz-te Feliz!"],
            [INSPIRATION_2, "Faz o teu dia!"],
            [INSPIRATION_3, "Obrigado a obrigado, enche a Felicidade o papo!"],
            [INSPIRATION_4, "Sabe bem sentir Gratidão"],
            [INSPIRATION_5, "Procura dentro de ti"],
            [INSPIRATION_6, "Dá-te o teu Reconhecimento"],
            [HEADER_HOME, "Início"],
            [HEADER_FOLLOWING, "Seguindo"],
            [HEADER_GRATITUDE_WALL, "Mural da Gratidão"],
            [HEADER_QUOTE, "Citação"],
            [HEADER_SETTINGS, "Configurações"],
            [HEADER_ABOUT, "Sobre"],
            [HEADER_LOGOUT, "Sair"],
            [UNKNOWN, "Desconhecido"],
            [PLATO, "Platão"],
            [ERRORS, "Erros"],
            [ERRORS_IN_FORM, "Há erros no formulário"],
            [CHANGED_PRIVACY_TYPE, "Alteraste a privacidade do Agradecimento para:"],
            [ERROR_CHANGE_PRIVACY_TYPE, "Erro ao alterar a privacidade do Agradecimento para:"],
            [ERROR_EMAIL_NOT_EXISTS, "E-mail não existe na base de dados:"],
            [ERROR_INVALID_EMAIL, "Endereço providenciado não é um e-mail válido:"],
            [PASSWORD_RESET_REQUEST_SENT, "Pedido para configuração de nova password enviado"],
            [NEW_CONFIRMATION_EMAIL_REQUESTED, "Pedido para nova confirmação de e-mail feito!"],
            [ACCOUNT_IS_CONFIRMED, "Conta confirmada. Por favor faz login. Obrigado!"],
            [ACCOUNT_CONFIRMATION_SUCCESS, "Conta confirmada com sucesso!"],
            [ACCOUNT_CONFIRMATION_ERROR, "Erro a confirmar a conta: confirmação já foi feita, ou autorização para confirmação expirou. Faz novo pedido através da página inicia, por favor. Redireção para lá em alguns segundos..."],
            [NEW_PASSWORD, "Nova password"],
            [CONFIRM_NEW_PASSWORD, "Confirma nova password"],
            [SUBMIT, "Submeter"],
            [ERROR_NAME_NOT_EMPTY, "Nome não pode estar vazio"],
            [ERROR_HANDLE_VALIDITY, "Handle não pode estar vazio, e tem de ter alfanumérico (caracteres maiúsculos e minúsculos, sem sinais, e também números)"],
            [ERROR_EMAIL_NOT_EMPTY, "E-mail não pode estar vazio"],
            [ERROR_PASSWORD_NOT_EMPTY, "Password não pode estar vazia"],
            [ERROR_PASSWORD_RULES, "Password tem de ter pelo menos: 8 caracters (tamanho), 1 letra maiúscula, 1 letra minúscula, e 1 caracter especial"],
            [ERROR_PASSWORD_AND_CONFIRMATION_NOT_MATCHING, "Password e confirmação de password têm de ser iguais"],
            [ERROR_ACCEPT_TERMS_AND_CONDITIONS, "Necessário aceitar Termos & Condições"],
            [ERROR_SERVER_COMMS, "Erro na comunicação com o servidor"],
            [ERROR_GOOGLE_LOGIN, "Erro no login com Google"],
            [THANKER_IS_THANKFUL_TO, "O Thanker agradece a:"],
            [QUOTE_1, "A Gratidão dá sentido ao nosso passado, traz paz ao presente, e cria uma visão para o amanhã"],
            [QUOTE_2, "A raíz da Felicidade é a Gratidão"],
            [QUOTE_3, "Quando comecei a contar as minhas bençãos, a minha vida deu toda uma volta"],
            [QUOTE_4, "Sou feliz porque sou grato. Eu escolho ser grato. A Gratidão permite-me ser Feliz"],
            [QUOTE_5, "Este é um dia maravilhoso. Nunca tinha experienciado este antes"],
            [QUOTE_6, "A apreciação é uma coisa maravilhosa. Faz com que o que é excelente nos outros também nos pertença"],
            [QUOTE_7, "É algo engraçado na vida: quando começas a notar as coisas pelas quais sentes Gratidão, começas também a perder de vista as coisas que te faltam"],
            [QUOTE_8, "A Gratidão não é apenas a maior das virtudes, mas também a mãe de todas elas"],
            [QUOTE_9, "Não são as pessoas felizes que são gratas: as pessoas gratas é que são as felizes"],
            [QUOTE_10, "Há apenas duas formas de viver a vida. Uma é como se nada fosse um milagre. A outra é como se tudo fosse um milagre"],
            [QUOTE_11, "Não tens motivos senão para sentir Gratidão e Felicidade"],
            [QUOTE_12, "Sentir Gratidão e não a expressar, é como embrulhar um presente e não o oferecer"],
            [QUOTE_13, "Não há dever mais urgente do que expressar Gratidão"],
            [QUOTE_14, "Veste a Gratidão como um manto, e este acomodará todos os cantos da tua vida"],
            [QUOTE_15, "A essência de toda a bela arte, toda a grande arte, é a Gratidão"],
            [QUOTE_16, "Há uma calmaria numa vida vivida com Gratidão, uma alegria silenciosa"],
            [QUOTE_17, "Sejamos gratos a quem nos faz felizes"],
            [QUOTE_18, "Gratidão é quando a memória é guardada no coração, e não na mente"],
            [QUOTE_19, "Quando te levantares de manhã, pensa no precioso privilégio que é estar vivo, respirar, pensar, aproveitar, e amar"],
            [QUOTE_20, "Tento começar e acabar cada dia, tirando um momento para praticar a Gratidão"],
            [QUOTE_21, "Viver num estado de Gratidão é a ponte para o estado de graça"],
            [QUOTE_22, "A Gratidão é a coisa mais próxima da beleza, manifestada numa emoção"],
            [QUOTE_23, "Se contares todas as tuas coisas boas, essas sempre te demonstrarão um saldo positivo"],
            [QUOTE_24, "Aproveita as pequenas coisas, pois um dia poderás olhar para trás e perceber que elas eram as grandes coisas"],
            [QUOTE_25, "Se queres que a tua vida dê uma volta, experimenta Gratidão. Irá mudar poderosamente a tua vida"],
            [QUOTE_26, "A Gratidão é mais um elogio a ti próprio/a que a outra pessoa"],
            [QUOTE_27, "A Gratidão é uma poderosa catalisadora de felicidade. É a faísca que acende um fogo de alegria na tua alma"],
            [QUOTE_28, "A Gratidão transforma o que temos em muito"],
            [QUOTE_29, "Reconhecer o bom que já tens na tua vida é a base para toda a abundância"],
            [QUOTE_30, "Uma mente grata é uma grande mente que eventualmente atrai para si grandes coisas"],
            [QUOTE_31, "O milagre da Gratidão é que ela altera a tua percepção de tal forma, que muda até o mundo que vês"],
            [QUOTE_32, "Algumas pessoas queixam-se que as rosas têm espinhos. Eu agradeço que os espinhos tenham rosas"],
            [QUOTE_33, "Ó Senhor que me dás a vida, dá-me também um coração cheio de Gratidão"],
            [QUOTE_34, "A melhor coisa que podes fazer para mudares a tua vida hoje, é começares a agradecer pelo que tens neste momento"],
            [QUOTE_35, "Na vida o que faz a diferença é se tomas as coisas como garantidas, ou se as tomas com Gratidão"],
            [QUOTE_36, "Ser-se grato não significa que tudo é necessariamente bom. Significa apenas que podes aceitar tudo como uma dádiva"],
            [QUOTE_37, "O poder de encontrar beleza na mais humilde das coisas, torna a tua casa feliz, e a vida bonita"],
            [QUOTE_38, "Gratidão é riqueza"],
            [QUOTE_39, "O que quer que valorizes e ao qual dês graças, irá aumentar na tua vida"],
            [QUOTE_40, "Tem Gratidão por tudo o que tens, e poderás ser feliz tal e qual como estás"],
            [QUOTE_41, "Se queres encontrar a felicidade, encontra a Gratidão"],
            [QUOTE_42, "Agradeço ao Universo por ter tirado tudo o que já tirou, e por me ter dado tudo o que tem dado"],
            [QUOTE_43, "No mundo moderno, estamos rodeados por tanta abundância que nem a vemos"],
            [QUOTE_44, "Ao praticarmos a Gratidão, conseguimos de facto ensinar os nossos cérebros a criar resiliência"],
            [QUOTE_45, "Gratidão e generosidade são exemplo de uma vida excepcional"],
            [QUOTE_46, "Estejamos gratos que vivamos na Terra ao mesmo tempo que toda a gente que conhecemos"],
            [QUOTE_47, "Ao escrever sobre aquilo por que sentia Gratidão, aprendi a procurar as coisas que me fazem sorrir"],
            [QUOTE_48, "Se escutares o cantar dos pássaros, todos os teus dias serão repletos de música"],
            [QUOTE_49, "Quando vês o mundo com uma atitude de Gratidão, estás a treinar-te para te focares no lado bom da vida"],
            [QUOTE_50, "É muito importante a educação. É muito importante a cortesia. É muito importante a Gratidão"],
        ])
        ],
        [Language.GB, new Map<string, string>([
            [MAKE_YOUR_DAY, "Make your day"],
            [WALL_OF_GRATITUDE, "Wall of Gratitude"],
            [USER_PAGE, "User Page"],
            [THANK, "Thanks"],
            [IM_THANKFUL_FOR, "I'm grateful for"],
            [I_THANK_YOU_FOR, "I thank you for"],
            [TEXT_NOT_EMPTY, "Thanks text cannot be empty"],
            [CREATE, "Create"],
            [SEE_MORE, "...(See More)"],
            [CHECK_YOUR_EMAIL_ACCOUNT_CREATE, "Please check your e-mail to find the confirmation link!"],
            [CREATE_USER, "Create User"],
            [RESET_PASSWORD, "Reset Password"],
            [UPDATE_PASSWORD, "Update Password"],
            [RESET_PASSWORD_SUCCESS, "Your password has been updated. Please go to the login page, or wait a few seconds for being redirected there"],
            [RESET_PASSWORD_ERROR, "The password, and its confirmation, must match"],
            [CANNOT_RESET_PASSWORD, "Cannot change password: time for updating has expired, or there was an error communicating to the server. Please try requesting a new password reset as soon as possible. Thank you!"],
            [NEW_CONFIRMATION, "Request new confirmation e-mail"],
            [NEW_CONFIRMATION_TITLE, "New confirmation e-mail"],
            [REQUEST_RESET_PASSWORD, "Request Password Reset"],
            [YOUR_EMAIL, "Your E-mail"],
            [ERROR_LOGIN_MSG, "Error on e-mail/password combination.\nIf it persists try resetting your password"],
            [HINT_MADE_YOU_HAPPY, "What made you happy today?"],
            [HINT_MADE_YOUR_DAY, "What made your day, today?"],
            [HINT_MADE_YOU_SMILE, "What made you smile today?"],
            [HINT_HELPED_YOU, "What helped you today?"],
            [HINT_GRATEFUL, "What made you Grateful today?"],
            [HINT_GRATEFUL_FOR, "What are you feeling Grateful for?"],
            [HINT_THANK_YOURSELF, "What do you want to thank yourself?"],
            [HINT_WHAT_TO_THANK, "What would you like to show Gratitude for?"],
            [SEARCH_USERS_HINT, "Search for users"],
            [SEARCH_FOLLOWING_HINT, "Search by who you follow"],
            [PRIVATE, "Private"],
            [PUBLIC, "Public"],
            [PASSWORD, "Password"],
            [THANKS, "Thanks"],
            [USER_CREATED_TEXT, "Thank you creating your Thanker account! Please go to your e-mail for confirmation"],
            [HINT_OTHER_GRATEFUL_1, "What made you grateful towards"],
            [HINT_OTHER_GRATEFUL_2, "Why do you want to thank"],
            [HINT_OTHER_GRATEFUL_3, "Why do you want to show gratitude to"],
            [LOGIN, "Login"],
            [INTRO_THANKFUL_FOR, "I'm thankful for"],
            [INTRO_GRATEFUL_FOR, "I feel grateful for"],
            [INTRO_THANKS_FOR, "Thanks for"],
            [OTHER_INTRO_THANKS, "thanks"],
            [OTHER_INTRO_EXPRESSED_GRATITUDE, "expresses gratitude to"],
            [OTHER_INTRO_IS_THANKFUL_TO, "feels gratitude towards"],
            [TERMS_AND_CONDITIONS, "I accept the Terms and Conditions of the Thanker platform"],
            [THANKER_INTRO, "Thanker is your Gratitude Journal, where other people can write, too 😉"],
            [FOLLOWING, "Following"],
            [FOLLOW, "Follow"],
            [YOU_ARE_NOW_FOLLOWING, "You are now following"],
            [ERROR_TRYING_TO_FOLLOW, "Error trying to follow"],
            [THANKING_MAKES_YOU_HAPPIER, "Thanking makes you happier"],
            [SHOW_GRATITUDE_TEXT, "Showing Gratitude definitely has an impact on your happinness, and the way you look at life. Use Thanker to keep your Gratitude journal, and to write in your friends'! ;)"],
            [CRYPTOGRAPHY_INFO, "The thanks you save on Thanker, are first encrypted, and only then stored in our database (for privacy purposes). They're then decrypted when loaded into these pages."],
            [INQUIRIES_AND_EMAIL, "For further inquiries, love letters and other gratitude displays, e-mail us to"],
            [USERNAME_UPDATED, "Username updated"],
            [PAGE_NOT_FOUND, "Page not found"],
            [GO_FIND_GRATITUDE, "Now go find what you're Grateful for"],
            [PROFILE_PAGE, "Profile"],
            [PROFILE_IS_OPEN_SETTING, "Your profile is open to receive other people's Thanks (public)"],
            [PROFILE_NOT_OPEN_SETTING, "Your profile is closed to receive other people's Thanks (private)"],
            [DEFAULT_THANKS_PRIVACY_PRIVATE, "The default option for your Thanks will be \"Private\""],
            [DEFAULT_THANKS_PRIVACY_PUBLIC, "The default option for your Thanks will be \"Public\""],
            [BE_THE_FIRST_THANKER, "Be the first Thanker of this profile"],
            [THIS_IS_PRIVATE_PROFILE, "This profile is not currently opened for other people's Thanks"],
            [FOLLOW_TO_SEE_THANKS, "Follow other users to see the Gratitude Wall, or wait for them to start Thanking!"],
            [START_FOLLOWING, "Start following other profiles"],
            [MADE_PROFILE_PUBLIC_TO_THANKS, "Your page can now receive Thanks from other profiles"],
            [MADE_PROFILE_PRIVATE_TO_THANKS, "Your page does not allow Thanks from other profiles, anymore"],
            [COULD_NOT_UPDATE_PROFILE_PRIVACY, "Could not update Thanks privacy of your page"],
            [YOUR_DEFAULT_THANKS_PRIVACY_PRIVATE, "You've updated the default privacy of your Thanks to: Private - for Thanks you're going to give"],
            [YOUR_DEFAULT_THANKS_PRIVACY_PUBLIC, "You've updated the default privacy of your Thanks to: Public - for Thanks you're going to give"],
            [HARVARD_ARTICLE, "Harvard University Article"],
            [BERKELEY_ARTICLE, "Berkeley University Article"],
            [UCLA_ARTICLE, "UCLA Article"],
            [GDPR, GDPR_EN_HTML],
            [FILES_MUST_BE, "Files must be"],
            [PRIVACY_ICON_TOOLTIP, "Private: only you (and who you give to) will be able to see this Thanks.\nPublic: everyone can see the Thanks."],
            [LOCK_ICON_TOOLTIP, "Thanks are encrypted on the database"],
            [CLICK_YOUR_NAME_UPDATE, "Click your name to update it"],
            [CLICK_YOUR_PICTURE_UPDATE, "Click your image to update it"],
            [UPDATE, "Update"],
            [GRATITUDE_WALL, "Gratitude Wall"],
            [SEARCH, "Search"],
            [GIVING_THANKS_PLEASE_HOLD, "Giving Thanks. Please hold :)"],
            [ARE_YOU_SURE_TO_DELETE, "Are you sure you want to delete this Thanks?"],
            [YES, "Yes"],
            [NO, "No"],
            [PROFESSION_ACTOR, "Actor"],
            [PROFESSION_ACTRESS, "Actress"],
            [PROFESSION_COMEDIAN, "Comediant"],
            [PROFESSION_JOURNALIST, "Journalist"],
            [PROFESSION_LAYWER, "Lawyer"],
            [PROFESSION_MONK, "Monk"],
            [PROFESSION_MUSICIAN, "Musician"],
            [PROFESSION_SINGER_WOMAN, "Singer"],
            [PROFESSION_PHILOSOPHER, "Philosopher"],
            [PROFESSION_PSYCHOLOGIST, "Psychologist"],
            [PROFESSION_ROMAN_EMPEROR, "Roman Emperor"],
            [PROFESSION_SCIENTIST, "Scientist"],
            [PROFESSION_SPIRITUAL_LEADER, "Spiritual Leader"],
            [PROFESSION_WRITER, "Writer"],
            [PROFESSION_WRITER_WOMAN, "Writer"],
            [PROFESSION_ENTERPRENEUR, "Enterpreneur"],
            [PROFESSION_ENTERPRENEUR_WOMAN, "Enterpreneur"],
            [PROFESSION_MARTIAL_ARTIST, "Martial Artist"],
            [PROFESSION_PSYCHOLOGIST_WOMAN, "Psychologist"],
            [PROFESSION_RESEARCHER_WOMAN, "Researcher"],
            [PROFESSION_TV_HOST_WOMAN, "TV Host"],
            [PROFESSION_YOGA_TEACHER_WOMAN, "Yoga Teacher"],
            [REGISTER_NAME, "Name"],
            [REGISTER_HANDLE, "Handle"],
            [REGISTER_EMAIL, "E-Mail"],
            [REGISTER_PASSWORD, "Password"],
            [REGISTER_CONFIRM_PASSWORD, "Confirm password"],
            [INSPIRATION_1, "Thanking makes you happy!"],
            [INSPIRATION_2, "Make your day!"],
            [INSPIRATION_3, "One Thanks a day, keeps Happinness our way!"],
            [INSPIRATION_4, "Feels good to be Grateful"],
            [INSPIRATION_5, "Look within..."],
            [INSPIRATION_6, "Acknowledge Yourself"],
            [HEADER_HOME, "Home"],
            [HEADER_FOLLOWING, "Following"],
            [HEADER_GRATITUDE_WALL, "Gratitude Wall"],
            [HEADER_QUOTE, "Quote"],
            [HEADER_SETTINGS, "Settings"],
            [HEADER_ABOUT, "About"],
            [HEADER_LOGOUT, "Logout"],
            [UNKNOWN, "Unknown"],
            [PLATO, "Plato"],
            [CHANGED_PRIVACY_TYPE, "Changed Thanks privacy to:"],
            [ERRORS, "Errors"],
            [ERRORS_IN_FORM, "Errors in form"],
            [ERROR_NAME_NOT_EMPTY, "Name cannot be empty"],
            [ERROR_HANDLE_VALIDITY, "Handle cannot be empty, and just have alphanumeric characters (lower and upper cases, and numbers)"],
            [ERROR_EMAIL_NOT_EMPTY, "E-mail cannot be empty"],
            [ERROR_PASSWORD_NOT_EMPTY, "Password cannot be empty"],
            [ERROR_PASSWORD_RULES, "Password must have at least: 8 characters length), 1 uppercase letter, 1 lowercase letter, and 1 special character"],
            [ERROR_PASSWORD_AND_CONFIRMATION_NOT_MATCHING, "Password and password confirmation values must match"],
            [ERROR_ACCEPT_TERMS_AND_CONDITIONS, "Need to accept Terms & Conditions"],
            [ERROR_SERVER_COMMS, "Error communicating with the server"],
            [ERROR_GOOGLE_LOGIN, "Error logging in with Google"],
            [ERROR_CHANGE_PRIVACY_TYPE, "Error changing thanks privacy to:"],
            [ERROR_EMAIL_NOT_EXISTS, "E-mail does not exist:"],
            [ERROR_INVALID_EMAIL, "Provided e-mail is not a valid one:"],
            [PASSWORD_RESET_REQUEST_SENT, "Password reset request sent"],
            [NEW_CONFIRMATION_EMAIL_REQUESTED, "New confirmation e-mail requested"],
            [ACCOUNT_IS_CONFIRMED, "Account is confirmed. Please login. Thank you!"],
            [ACCOUNT_CONFIRMATION_SUCCESS, "Account has been successfully confirmed!"],
            [ACCOUNT_CONFIRMATION_ERROR, "Error confirming account: it has already been done, or authorization expired. Please do a new a request from the Login page. You'll redirected there in a few seconds..."],
            [NEW_PASSWORD, "New password"],
            [CONFIRM_NEW_PASSWORD, "Confirm new password"],
            [SUBMIT, "Submit"],
            [THANKER_IS_THANKFUL_TO, "Thanker is thankful to:"],
            [QUOTE_1, "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow"], //Melody Beattie
            [QUOTE_2, "The root of joy is gratefulness"], //David Steindl-Rast
            [QUOTE_3, "When I started counting my blessings, my whole life turned around"], // Willie Nelson,
            [QUOTE_4, "I am happy because I’m grateful. I choose to be grateful. That gratitude allows me to be happy"],
            [QUOTE_5, "This is a wonderful day. I have never seen this one before"],
            [QUOTE_6, "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well"],
            [QUOTE_7, "It’s a funny thing about life, once you begin to take note of the things you are grateful for, you begin to lose sight of the things that you lack"],
            [QUOTE_8, "Gratitude is not only the greatest of virtues, but the parent of all the others"],
            [QUOTE_9, "It is not happy people who are thankful, it is thankful people who are happy"],
            [QUOTE_10, "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle"],
            [QUOTE_11, "You have no cause for anything but gratitude and joy"],
            [QUOTE_12, "Feeling gratitude and not expressing it is like wrapping a present and not giving it"],
            [QUOTE_13, "No duty is more urgent than giving thanks"],
            [QUOTE_14, "Wear gratitude like a cloak and it will feed every corner of your life"],
            [QUOTE_15, "The essence of all beautiful art, all great art, is gratitude"],
            [QUOTE_16, "There is a calmness to a life lived in gratitude, a quiet joy"],
            [QUOTE_17, "Let us be grateful to people who make us happy"],
            [QUOTE_18, "Gratitude is when memory is stored in the heart and not in the mind"],
            [QUOTE_19, "When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love"],
            [QUOTE_20, "I try to start every day and end every day by taking a moment to be grateful"],
            [QUOTE_21, "Living in a state of gratitude is the gateway to grace"],
            [QUOTE_22, "Gratitude is the closest thing to beauty manifested in an emotion"],
            [QUOTE_23, "If you count all your assets, you always show a profit"],
            [QUOTE_24, "Enjoy the little things, for one day you may look back and realize they were the big things"],
            [QUOTE_25, "If you want to turn your life around, try Thankfulness. It will change your life mightily"],
            [QUOTE_26, "Gratitude is more of a compliment to yourself than someone else"],
            [QUOTE_27, "Gratitude is a powerful catalyst for happiness. It’s the spark that lights a fire of joy in your soul"],
            [QUOTE_28, "Gratitude turns what we have into enough"],
            [QUOTE_29, "Acknowledging the good that you already have in your life is the foundation for all abundance"],
            [QUOTE_30, "A grateful mind is a great mind which eventually attracts to itself great things"],
            [QUOTE_31, "The miracle of gratitude is that it shifts your perception to such an extent that it changes the world you see"],
            [QUOTE_32, "Some people are always grumbling because roses have thorns; I am thankful that thorns have roses"],
            [QUOTE_33, "O Lord that lends me life, lend me a heart replete with thankfulness"],
            [QUOTE_34, "The single greatest thing you can do to change your life today would be to start being Grateful for what you have right now"],
            [QUOTE_35, "When it comes to life the critical thing is whether you take things for granted or take them with gratitude"],
            [QUOTE_36, "Being grateful does not mean that everything is necessarily good. It just means that you can accept it as a gift"],
            [QUOTE_37, "The power of finding beauty in the humblest things makes home happy and life lovely"],
            [QUOTE_38, "Gratitude is riches"],
            [QUOTE_39, "Whatever you appreciate and give thanks for will increase in your life"],
            [QUOTE_40, "Have gratitude for all that you have, and you can be happy exactly as you are"],
            [QUOTE_41, "If you want to find happiness, find gratitude"],
            [QUOTE_42, "I thank the universe for taking everything it has taken, and giving to me everything it is giving"],
            [QUOTE_43, "In the modern world, we are surrounded by so much abundance that we cannot see it"],
            [QUOTE_44, "By practicing gratitude, we can actually wire our brains to help us build resilience"],
            [QUOTE_45, "Gratitude and kindness exemplify an exceptional life"],
            [QUOTE_46, "Let’s just be thankful that we get to be on Earth at the same time as everybody we get to meet"],
            [QUOTE_47, "By writing what I was grateful for, I learned to look for things that made me smile"],
            [QUOTE_48, "If you listen to birds, every day will have a song in it"],
            [QUOTE_49, "When you view your world with an attitude of gratitude, you are training yourself to focus on the good in life"],
            [QUOTE_50, "I'm big on manners. I'm big on politeness. I'm big on Gratitude"],
        ])
        ],
        [Language.ES, new Map<string, string>([
            [MAKE_YOUR_DAY, "Haz que tu día sea especial"],
            [WALL_OF_GRATITUDE, "Muro de Gratitud"],
            [USER_PAGE, "Página del Usuario"],
            [THANK, "Gracias"],
            [IM_THANKFUL_FOR, "Estoy agradecido por"],
            [I_THANK_YOU_FOR, "Te agradezco por"],
            [TEXT_NOT_EMPTY, "El texto de agradecimiento no puede estar vacío"],
            [CREATE, "Crear"],
            [SEE_MORE, "...(Ver más)"],
            [CHECK_YOUR_EMAIL_ACCOUNT_CREATE, "Por favor, revisa tu correo electrónico para encontrar el enlace de confirmación."],
            [CREATE_USER, "Crear Usuario"],
            [RESET_PASSWORD, "Restablecer Contraseña"],
            [UPDATE_PASSWORD, "Actualizar Contraseña"],
            [RESET_PASSWORD_SUCCESS, "Tu contraseña ha sido actualizada. Por favor, ve a la página de inicio de sesión o espera unos segundos para ser redirigido allí"],
            [RESET_PASSWORD_ERROR, "La contraseña y su confirmación deben coincidir"],
            [CANNOT_RESET_PASSWORD, "No se puede cambiar la contraseña: el tiempo para actualizar ha expirado o hubo un error al comunicarse con el servidor. Por favor, intenta solicitar un nuevo restablecimiento de contraseña lo antes posible. ¡Gracias!"],
            [NEW_CONFIRMATION, "Solicitar nuevo correo de confirmación"],
            [NEW_CONFIRMATION_TITLE, "Nuevo correo de confirmación"],
            [REQUEST_RESET_PASSWORD, "Solicitar Restablecimiento de Contraseña"],
            [YOUR_EMAIL, "Tu correo electrónico"],
            [ERROR_LOGIN_MSG, "Error en la combinación de correo electrónico/contraseña.\nSi persiste, intenta restablecer tu contraseña"],
            [HINT_MADE_YOU_HAPPY, "¿Qué te hizo feliz hoy?"],
            [HINT_MADE_YOUR_DAY, "¿Qué hizo tu día hoy?"],
            [HINT_MADE_YOU_SMILE, "¿Qué te hizo sonreír hoy?"],
            [HINT_HELPED_YOU, "¿Qué te ayudó hoy?"],
            [HINT_GRATEFUL, "¿Qué te hizo sentir agradecido hoy?"],
            [HINT_GRATEFUL_FOR, "¿Por qué te sientes agradecido?"],
            [HINT_THANK_YOURSELF, "¿Por qué quieres agradecerte a ti mismo?"],
            [HINT_WHAT_TO_THANK, "¿Por qué te gustaría mostrar gratitud?"],
            [SEARCH_USERS_HINT, "Buscar usuarios"],
            [SEARCH_FOLLOWING_HINT, "Buscar por quienes sigues"],
            [PRIVATE, "Privado"],
            [PUBLIC, "Público"],
            [PASSWORD, "Contraseña"],
            [THANKS, "Gracias"],
            [USER_CREATED_TEXT, "¡Gracias por crear tu cuenta de Thanker! Por favor, ve a tu correo para la confirmación"],
            [HINT_OTHER_GRATEFUL_1, "¿Qué te hizo sentir agradecido hacia"],
            [HINT_OTHER_GRATEFUL_2, "¿Por qué quieres agradecer a"],
            [HINT_OTHER_GRATEFUL_3, "¿Por qué quieres mostrar gratitud a"],
            [LOGIN, "Iniciar sesión"],
            [INTRO_THANKFUL_FOR, "Estoy agradecido por"],
            [INTRO_GRATEFUL_FOR, "Me siento agradecido por"],
            [INTRO_THANKS_FOR, "Gracias por"],
            [OTHER_INTRO_THANKS, "gracias"],
            [OTHER_INTRO_EXPRESSED_GRATITUDE, "expresa gratitud a"],
            [OTHER_INTRO_IS_THANKFUL_TO, "se siente agradecido hacia"],
            [TERMS_AND_CONDITIONS, "Acepto los Términos y Condiciones de la plataforma Thanker"],
            [THANKER_INTRO, "Thanker es tu Diario de Gratitud, donde otras personas también pueden escribir 😉"],
            [FOLLOWING, "Siguiendo"],
            [FOLLOW, "Seguir"],
            [YOU_ARE_NOW_FOLLOWING, "Ahora estás siguiendo a"],
            [ERROR_TRYING_TO_FOLLOW, "Error al intentar seguir"],
            [THANKING_MAKES_YOU_HAPPIER, "Agradecer te hace más feliz"],
            [SHOW_GRATITUDE_TEXT, "Mostrar gratitud definitivamente tiene un impacto en tu felicidad y en la forma en que ves la vida. Usa Thanker para mantener tu diario de gratitud y para escribir en el de tus amigos ;)"],
            [CRYPTOGRAPHY_INFO, "Los agradecimientos que guardas en Thanker están primero cifrados y luego almacenados en nuestra base de datos (por motivos de privacidad). Luego se descifran cuando se cargan en estas páginas."],
            [INQUIRIES_AND_EMAIL, "Para consultas adicionales, cartas de amor y otras muestras de gratitud, envíanos un correo a"],
            [USERNAME_UPDATED, "Nombre de usuario actualizado"],
            [PAGE_NOT_FOUND, "Página no encontrada"],
            [GO_FIND_GRATITUDE, "Ahora ve a encontrar por qué estás agradecido"],
            [PROFILE_PAGE, "Perfil"],
            [PROFILE_IS_OPEN_SETTING, "Tu perfil está abierto para recibir los agradecimientos de otras personas (público)"],
            [PROFILE_NOT_OPEN_SETTING, "Tu perfil está cerrado para recibir los agradecimientos de otras personas (privado)"],
            [DEFAULT_THANKS_PRIVACY_PRIVATE, "La opción predeterminada para tus agradecimientos será \"Privado\""],
            [DEFAULT_THANKS_PRIVACY_PUBLIC, "La opción predeterminada para tus agradecimientos será \"Público\""],
            [BE_THE_FIRST_THANKER, "Sé el primer Agradecedor de este perfil"],
            [THIS_IS_PRIVATE_PROFILE, "Este perfil no está actualmente abierto para los agradecimientos de otras personas"],
            [FOLLOW_TO_SEE_THANKS, "¡Sigue a otros usuarios para ver el Muro de Gratitud, o espera a que ellos empiecen a dar las gracias!"],
            [START_FOLLOWING, "Empieza a seguir otros perfiles"],
            [MADE_PROFILE_PUBLIC_TO_THANKS, "Tu página ahora puede recibir agradecimientos de otros perfiles"],
            [MADE_PROFILE_PRIVATE_TO_THANKS, "Tu página ya no permite agradecimientos de otros perfiles"],
            [COULD_NOT_UPDATE_PROFILE_PRIVACY, "No se pudo actualizar la privacidad de los agradecimientos de tu página"],
            [YOUR_DEFAULT_THANKS_PRIVACY_PRIVATE, "Has actualizado la privacidad predeterminada de tus agradecimientos a: Privado - para los agradecimientos que vas a dar"],
            [YOUR_DEFAULT_THANKS_PRIVACY_PUBLIC, "Has actualizado la privacidad predeterminada de tus agradecimientos a: Público - para los agradecimientos que vas a dar"],
            [HARVARD_ARTICLE, "Artículo de la Universidad de Harvard"],
            [BERKELEY_ARTICLE, "Artículo de la Universidad de Berkeley"],
            [UCLA_ARTICLE, "Artículo de UCLA"],
            [GDPR, GDPR_EN_HTML],
            [FILES_MUST_BE, "Los archivos deben ser"],
            [PRIVACY_ICON_TOOLTIP, "Privado: solo tú (y quien se lo des) podrán ver este agradecimiento.\nPúblico: todos pueden ver el agradecimiento."],
            [LOCK_ICON_TOOLTIP, "Los agradecimientos están cifrados en la base de datos"],
            [CLICK_YOUR_NAME_UPDATE, "Haz clic en tu nombre para actualizarlo"],
            [CLICK_YOUR_PICTURE_UPDATE, "Haz clic en tu imagen para actualizarla"],
            [UPDATE, "Actualizar"],
            [GRATITUDE_WALL, "Muro de Gratitud"],
            [SEARCH, "Buscar"],
            [GIVING_THANKS_PLEASE_HOLD, "Dando agradecimientos. Por favor, espera :)"],
            [ARE_YOU_SURE_TO_DELETE, "¿Estás seguro de que quieres eliminar este agradecimiento?"],
            [YES, "Sí"],
            [NO, "No"],
            [PROFESSION_ACTOR, "Actor"],
            [PROFESSION_ACTRESS, "Actriz"],
            [PROFESSION_COMEDIAN, "Comediante"],
            [PROFESSION_JOURNALIST, "Periodista"],
            [PROFESSION_LAYWER, "Abogado"],
            [PROFESSION_MONK, "Monje"],
            [PROFESSION_MUSICIAN, "Músico"],
            [PROFESSION_SINGER_WOMAN, "Cantante"],
            [PROFESSION_PHILOSOPHER, "Filósofo"],
            [PROFESSION_PSYCHOLOGIST, "Psicólogo"],
            [PROFESSION_ROMAN_EMPEROR, "Emperador Romano"],
            [PROFESSION_SCIENTIST, "Científico"],
            [PROFESSION_SPIRITUAL_LEADER, "Líder Espiritual"],
            [PROFESSION_WRITER, "Escritor"],
            [PROFESSION_WRITER_WOMAN, "Escritora"],
            [PROFESSION_ENTERPRENEUR, "Empresario"],
            [PROFESSION_ENTERPRENEUR_WOMAN, "Empresaria"],
            [PROFESSION_MARTIAL_ARTIST, "Artista Marcial"],
            [PROFESSION_PSYCHOLOGIST_WOMAN, "Psicóloga"],
            [PROFESSION_RESEARCHER_WOMAN, "Investigadora"],
            [PROFESSION_TV_HOST_WOMAN, "Presentadora de TV"],
            [PROFESSION_YOGA_TEACHER_WOMAN, "Profesora de Yoga"],
            [REGISTER_NAME, "Nombre"],
            [REGISTER_HANDLE, "Usuario"],
            [REGISTER_EMAIL, "Correo Electrónico"],
            [REGISTER_PASSWORD, "Contraseña"],
            [REGISTER_CONFIRM_PASSWORD, "Confirmar contraseña"],
            [INSPIRATION_1, "¡Agradecer te hace feliz!"],
            [INSPIRATION_2, "¡Haz que tu día sea especial!"],
            [INSPIRATION_3, "¡Un agradecimiento al día, mantiene la felicidad en nuestro camino!"],
            [INSPIRATION_4, "Se siente bien ser agradecido"],
            [INSPIRATION_5, "Mira dentro de ti..."],
            [INSPIRATION_6, "Reconócete a ti mismo"],
            [HEADER_HOME, "Inicio"],
            [HEADER_FOLLOWING, "Siguiendo"],
            [HEADER_GRATITUDE_WALL, "Muro de Gratitud"],
            [HEADER_QUOTE, "Cita"],
            [HEADER_SETTINGS, "Configuración"],
            [HEADER_ABOUT, "Acerca de"],
            [HEADER_LOGOUT, "Cerrar sesión"],
            [UNKNOWN, "Desconocido"],
            [PLATO, "Platón"],
            [CHANGED_PRIVACY_TYPE, "Cambió la privacidad de los agradecimientos a:"],
            [ERRORS, "Errores"],
            [ERRORS_IN_FORM, "Errores en el formulario"],
            [ERROR_NAME_NOT_EMPTY, "El nombre no puede estar vacío"],
            [ERROR_HANDLE_VALIDITY, "El usuario no puede estar vacío y solo debe tener caracteres alfanuméricos (mayúsculas, minúsculas y números)"],
            [ERROR_EMAIL_NOT_EMPTY, "El correo electrónico no puede estar vacío"],
            [ERROR_PASSWORD_NOT_EMPTY, "La contraseña no puede estar vacía"],
            [ERROR_PASSWORD_RULES, "La contraseña debe tener al menos: 8 caracteres, 1 letra mayúscula, 1 letra minúscula y 1 carácter especial"],
            [ERROR_PASSWORD_AND_CONFIRMATION_NOT_MATCHING, "La contraseña y la confirmación de la contraseña deben coincidir"],
            [ERROR_ACCEPT_TERMS_AND_CONDITIONS, "Debe aceptar los Términos y Condiciones"],
            [ERROR_SERVER_COMMS, "Error al comunicarse con el servidor"],
            [ERROR_GOOGLE_LOGIN, "Error en el inicio de sesión con Google"],
            [ERROR_CHANGE_PRIVACY_TYPE, "Error al cambiar la privacidad de los agradecimientos a:"],
            [ERROR_EMAIL_NOT_EXISTS, "El correo electrónico no existe:"],
            [ERROR_INVALID_EMAIL, "El correo electrónico proporcionado no es válido:"],
            [PASSWORD_RESET_REQUEST_SENT, "Solicitud de restablecimiento de contraseña enviada"],
            [NEW_CONFIRMATION_EMAIL_REQUESTED, "Nuevo correo electrónico de confirmación solicitado"],
            [ACCOUNT_IS_CONFIRMED, "La cuenta está confirmada. Por favor, inicia sesión. ¡Gracias!"],
            [ACCOUNT_CONFIRMATION_SUCCESS, "¡La cuenta ha sido confirmada con éxito!"],
            [ACCOUNT_CONFIRMATION_ERROR, "Error al confirmar la cuenta: ya ha sido confirmada o la autorización ha expirado. Por favor, solicita una nueva desde la página de inicio de sesión. Serás redirigido allí en unos segundos..."],
            [NEW_PASSWORD, "Nueva contraseña"],
            [CONFIRM_NEW_PASSWORD, "Confirmar nueva contraseña"],
            [SUBMIT, "Enviar"],
            [THANKER_IS_THANKFUL_TO, "El agradecedor está agradecido a:"],
            [QUOTE_1, "La gratitud da sentido a nuestro pasado, trae paz para hoy y crea una visión para mañana"], //Melody Beattie
            [QUOTE_2, "La raíz de la alegría es la gratitud"], //David Steindl-Rast
            [QUOTE_3, "Cuando comencé a contar mis bendiciones, toda mi vida cambió"], // Willie Nelson
            [QUOTE_4, "Estoy feliz porque soy agradecido. Elijo ser agradecido. Esa gratitud me permite ser feliz"],
            [QUOTE_5, "Este es un día maravilloso. Nunca he visto uno como este antes"],
            [QUOTE_6, "La apreciación es una cosa maravillosa. Hace que lo que es excelente en los demás también nos pertenezca"],
            [QUOTE_7, "Es curioso cómo en la vida, una vez que comienzas a tomar nota de las cosas por las que estás agradecido, comienzas a perder de vista las cosas que te faltan"],
            [QUOTE_8, "La gratitud no solo es la mayor de las virtudes, sino la madre de todas las demás"],
            [QUOTE_9, "No son las personas felices las que están agradecidas, son las personas agradecidas las que son felices"],
            [QUOTE_10, "Solo hay dos formas de vivir tu vida. Una es como si nada fuera un milagro. La otra es como si todo fuera un milagro"],
            [QUOTE_11, "No tienes motivo para nada más que gratitud y alegría"],
            [QUOTE_12, "Sentir gratitud y no expresarla es como envolver un regalo y no entregarlo"],
            [QUOTE_13, "Ningún deber es más urgente que dar gracias"],
            [QUOTE_14, "Lleva la gratitud como un manto y alimentará cada rincón de tu vida"],
            [QUOTE_15, "La esencia de todo arte hermoso, de todo gran arte, es la gratitud"],
            [QUOTE_16, "Hay una calma en una vida vivida en gratitud, una alegría silenciosa"],
            [QUOTE_17, "Seamos agradecidos con las personas que nos hacen felices"],
            [QUOTE_18, "La gratitud es cuando la memoria se almacena en el corazón y no en la mente"],
            [QUOTE_19, "Cuando te levantes por la mañana, piensa en lo precioso que es estar vivo, respirar, pensar, disfrutar, amar"],
            [QUOTE_20, "Intento comenzar cada día y terminar cada día tomando un momento para ser agradecido"],
            [QUOTE_21, "Vivir en un estado de gratitud es la puerta de entrada a la gracia"],
            [QUOTE_22, "La gratitud es lo más cercano a la belleza manifestada en una emoción"],
            [QUOTE_23, "Si cuentas todos tus activos, siempre mostrarás una ganancia"],
            [QUOTE_24, "Disfruta de las pequeñas cosas, porque un día podrás mirar atrás y darte cuenta de que eran las grandes cosas"],
            [QUOTE_25, "Si quieres cambiar tu vida, prueba con la gratitud. Cambiará tu vida enormemente"],
            [QUOTE_26, "La gratitud es más un cumplido para ti mismo que para otra persona"],
            [QUOTE_27, "La gratitud es un poderoso catalizador para la felicidad. Es la chispa que enciende un fuego de alegría en tu alma"],
            [QUOTE_28, "La gratitud convierte lo que tenemos en suficiente"],
            [QUOTE_29, "Reconocer lo bueno que ya tienes en tu vida es la base para toda abundancia"],
            [QUOTE_30, "Una mente agradecida es una gran mente que eventualmente atrae grandes cosas"],
            [QUOTE_31, "El milagro de la gratitud es que cambia tu percepción hasta el punto de cambiar el mundo que ves"],
            [QUOTE_32, "Algunas personas siempre se quejan porque las rosas tienen espinas; yo estoy agradecido de que las espinas tengan rosas"],
            [QUOTE_33, "Oh Señor que me prestas la vida, préstame un corazón lleno de agradecimiento"],
            [QUOTE_34, "La cosa más grande que puedes hacer para cambiar tu vida hoy sería empezar a ser agradecido por lo que tienes ahora mismo"],
            [QUOTE_35, "Cuando se trata de la vida, lo crítico es si das las cosas por sentadas o las tomas con gratitud"],
            [QUOTE_36, "Ser agradecido no significa que todo sea necesariamente bueno. Solo significa que puedes aceptarlo como un regalo"],
            [QUOTE_37, "El poder de encontrar belleza en las cosas más humildes hace que el hogar sea feliz y la vida encantadora"],
            [QUOTE_38, "La gratitud es riqueza"],
            [QUOTE_39, "Lo que aprecias y agradeces aumentará en tu vida"],
            [QUOTE_40, "Ten gratitud por todo lo que tienes, y puedes ser feliz tal como eres"],
            [QUOTE_41, "Si quieres encontrar la felicidad, encuentra la gratitud"],
            [QUOTE_42, "Agradezco al universo por tomar todo lo que ha tomado y darme todo lo que está dando"],
            [QUOTE_43, "En el mundo moderno, estamos rodeados de tanta abundancia que no podemos verla"],
            [QUOTE_44, "Al practicar la gratitud, en realidad podemos cablear nuestro cerebro para ayudarnos a construir resiliencia"],
            [QUOTE_45, "La gratitud y la amabilidad ejemplifican una vida excepcional"],
            [QUOTE_46, "Solo seamos agradecidos de que podamos estar en la Tierra al mismo tiempo que todos los que conocemos"],
            [QUOTE_47, "Al escribir lo que estaba agradecido, aprendí a buscar cosas que me hacían sonreír"],
            [QUOTE_48, "Si escuchas a los pájaros, cada día tendrá una canción"],
            [QUOTE_49, "Cuando ves tu mundo con una actitud de gratitud, te estás entrenando para enfocarte en lo bueno de la vida"],
            [QUOTE_50, "Soy muy respetuoso con las normas. Soy muy respetuoso con la cortesía. Soy muy respetuoso con la gratitud"]
        ]),
        ],
        [
            Language.JP, new Map<string, string>([
                [MAKE_YOUR_DAY, "自分の一日を作ろう"],
                [WALL_OF_GRATITUDE, "感謝の壁"],
                [USER_PAGE, "ユーザーページ"],
                [THANK, "ありがとう"],
                [IM_THANKFUL_FOR, "感謝しています"],
                [I_THANK_YOU_FOR, "ありがとう"],
                [TEXT_NOT_EMPTY, "感謝のメッセージは空にできません"],
                [CREATE, "作成"],
                [SEE_MORE, "...（もっと見る）"],
                [CHECK_YOUR_EMAIL_ACCOUNT_CREATE, "確認リンクを見つけるために、メールを確認してください！"],
                [CREATE_USER, "ユーザーを作成"],
                [RESET_PASSWORD, "パスワードをリセット"],
                [UPDATE_PASSWORD, "パスワードを更新"],
                [RESET_PASSWORD_SUCCESS, "パスワードが更新されました。ログインページに移動するか、数秒待つとリダイレクトされます"],
                [RESET_PASSWORD_ERROR, "パスワードとその確認が一致する必要があります"],
                [CANNOT_RESET_PASSWORD, "パスワードを変更できません: 更新の時間が期限切れ、またはサーバーとの通信エラーが発生しました。できるだけ早く新しいパスワードリセットをリクエストしてください。ありがとうございます！"],
                [NEW_CONFIRMATION, "新しい確認メールをリクエスト"],
                [NEW_CONFIRMATION_TITLE, "新しい確認メール"],
                [REQUEST_RESET_PASSWORD, "パスワードリセットをリクエスト"],
                [YOUR_EMAIL, "あなたのメール"],
                [ERROR_LOGIN_MSG, "メール/パスワードの組み合わせにエラーがあります。\n続く場合は、パスワードをリセットしてください"],
                [HINT_MADE_YOU_HAPPY, "今日、あなたを幸せにしたことは？"],
                [HINT_MADE_YOUR_DAY, "今日、あなたの一日を作ったことは？"],
                [HINT_MADE_YOU_SMILE, "今日、あなたを笑顔にしたことは？"],
                [HINT_HELPED_YOU, "今日、あなたを助けたことは？"],
                [HINT_GRATEFUL, "今日、あなたが感謝していることは？"],
                [HINT_GRATEFUL_FOR, "何に感謝していますか？"],
                [HINT_THANK_YOURSELF, "自分に何を感謝したいですか？"],
                [HINT_WHAT_TO_THANK, "何に感謝したいですか？"],
                [SEARCH_USERS_HINT, "ユーザーを検索"],
                [SEARCH_FOLLOWING_HINT, "フォローしている人で検索"],
                [PRIVATE, "プライベート"],
                [PUBLIC, "パブリック"],
                [PASSWORD, "パスワード"],
                [THANKS, "ありがとう"],
                [USER_CREATED_TEXT, "Thankerアカウントの作成ありがとうございます！確認のためにメールをご確認ください"],
                [HINT_OTHER_GRATEFUL_1, "誰に感謝しているのか"],
                [HINT_OTHER_GRATEFUL_2, "なぜ感謝したいのか"],
                [HINT_OTHER_GRATEFUL_3, "誰に感謝の気持ちを示したいのか"],
                [LOGIN, "ログイン"],
                [INTRO_THANKFUL_FOR, "感謝しています"],
                [INTRO_GRATEFUL_FOR, "感謝しています"],
                [INTRO_THANKS_FOR, "ありがとう"],
                [OTHER_INTRO_THANKS, "ありがとう"],
                [OTHER_INTRO_EXPRESSED_GRATITUDE, "感謝の意を表します"],
                [OTHER_INTRO_IS_THANKFUL_TO, "感謝の気持ちを持っています"],
                [TERMS_AND_CONDITIONS, "Thankerプラットフォームの利用規約に同意します"],
                [THANKER_INTRO, "Thankerはあなたの感謝ジャーナルで、他の人も書き込むことができます 😉"],
                [FOLLOWING, "フォロー中"],
                [FOLLOW, "フォロー"],
                [YOU_ARE_NOW_FOLLOWING, "現在フォローしています"],
                [ERROR_TRYING_TO_FOLLOW, "フォロー中にエラーが発生しました"],
                [THANKING_MAKES_YOU_HAPPIER, "感謝することは、あなたをもっと幸せにします"],
                [SHOW_GRATITUDE_TEXT, "感謝を示すことは、あなたの幸せと人生の見方に確実に影響を与えます。Thankerを使って感謝ジャーナルを保ち、友達のジャーナルにも書き込みましょう！ ;)"],
                [CRYPTOGRAPHY_INFO, "Thankerで保存された感謝のメッセージは、まず暗号化され、その後データベースに保存されます（プライバシーの目的のため）。その後、ページに読み込まれるときに復号化されます。"],
                [INQUIRIES_AND_EMAIL, "さらなるお問い合わせ、ラブレター、その他の感謝の表示については、以下のメールアドレスまでご連絡ください"],
                [USERNAME_UPDATED, "ユーザー名が更新されました"],
                [PAGE_NOT_FOUND, "ページが見つかりません"],
                [GO_FIND_GRATITUDE, "今、感謝しているものを見つけに行こう"],
                [PROFILE_PAGE, "プロフィール"],
                [PROFILE_IS_OPEN_SETTING, "あなたのプロフィールは他の人の感謝を受け取るために公開されています（パブリック）"],
                [PROFILE_NOT_OPEN_SETTING, "あなたのプロフィールは他の人の感謝を受け取らない設定になっています（プライベート）"],
                [DEFAULT_THANKS_PRIVACY_PRIVATE, "感謝のデフォルト設定は「プライベート」です"],
                [DEFAULT_THANKS_PRIVACY_PUBLIC, "感謝のデフォルト設定は「パブリック」です"],
                [BE_THE_FIRST_THANKER, "このプロフィールの最初の感謝者になりましょう"],
                [THIS_IS_PRIVATE_PROFILE, "このプロフィールは現在、他の人の感謝を受け取ることができません"],
                [FOLLOW_TO_SEE_THANKS, "他のユーザーをフォローして感謝の壁を見よう、または彼らが感謝し始めるのを待ちましょう！"],
                [START_FOLLOWING, "他のプロフィールをフォローし始める"],
                [MADE_PROFILE_PUBLIC_TO_THANKS, "あなたのページは他のプロフィールからの感謝を受け取ることができるようになりました"],
                [MADE_PROFILE_PRIVATE_TO_THANKS, "あなたのページは、もはや他のプロフィールからの感謝を受け取らないようになりました"],
                [COULD_NOT_UPDATE_PROFILE_PRIVACY, "プロフィールの感謝プライバシーを更新できませんでした"],
                [YOUR_DEFAULT_THANKS_PRIVACY_PRIVATE, "あなたの感謝のデフォルトプライバシー設定を「プライベート」に更新しました"],
                [YOUR_DEFAULT_THANKS_PRIVACY_PUBLIC, "あなたの感謝のデフォルトプライバシー設定を「パブリック」に更新しました"],
                [HARVARD_ARTICLE, "ハーバード大学の記事"],
                [BERKELEY_ARTICLE, "バークレー大学の記事"],
                [UCLA_ARTICLE, "UCLAの記事"],
                [GDPR, GDPR_EN_HTML],
                [FILES_MUST_BE, "ファイルは以下でなければなりません"],
                [PRIVACY_ICON_TOOLTIP, "プライベート: あなたとあなたが指定した人だけがこの感謝を見られます。\nパブリック: 誰でも感謝を見ることができます。"],
                [LOCK_ICON_TOOLTIP, "感謝はデータベース上で暗号化されています"],
                [CLICK_YOUR_NAME_UPDATE, "名前をクリックして更新してください"],
                [CLICK_YOUR_PICTURE_UPDATE, "画像をクリックして更新してください"],
                [UPDATE, "更新"],
                [GRATITUDE_WALL, "感謝の壁"],
                [SEARCH, "検索"],
                [GIVING_THANKS_PLEASE_HOLD, "感謝しています。お待ちください :)"],
                [ARE_YOU_SURE_TO_DELETE, "この感謝を削除してもよろしいですか？"],
                [YES, "はい"],
                [NO, "いいえ"],
                [PROFESSION_ACTOR, "俳優"],
                [PROFESSION_ACTRESS, "女優"],
                [PROFESSION_COMEDIAN, "コメディアン"],
                [PROFESSION_JOURNALIST, "ジャーナリスト"],
                [PROFESSION_LAYWER, "弁護士"],
                [PROFESSION_MONK, "僧侶"],
                [PROFESSION_MUSICIAN, "ミュージシャン"],
                [PROFESSION_SINGER_WOMAN, "歌手"],
                [PROFESSION_PHILOSOPHER, "哲学者"],
                [PROFESSION_PSYCHOLOGIST, "心理学者"],
                [PROFESSION_ROMAN_EMPEROR, "ローマ皇帝"],
                [PROFESSION_SCIENTIST, "科学者"],
                [PROFESSION_SPIRITUAL_LEADER, "スピリチュアルリーダー"],
                [PROFESSION_WRITER, "作家"],
                [PROFESSION_WRITER_WOMAN, "作家"],
                [PROFESSION_ENTERPRENEUR, "起業家"],
                [PROFESSION_ENTERPRENEUR_WOMAN, "起業家"],
                [PROFESSION_MARTIAL_ARTIST, "武道家"],
                [PROFESSION_PSYCHOLOGIST_WOMAN, "心理学者"],
                [PROFESSION_RESEARCHER_WOMAN, "研究者"],
                [PROFESSION_TV_HOST_WOMAN, "テレビホスト"],
                [PROFESSION_YOGA_TEACHER_WOMAN, "ヨガの先生"],
                [REGISTER_NAME, "名前"],
                [REGISTER_HANDLE, "ハンドル"],
                [REGISTER_EMAIL, "メールアドレス"],
                [REGISTER_PASSWORD, "パスワード"],
                [REGISTER_CONFIRM_PASSWORD, "パスワードの確認"],
                [INSPIRATION_1, "感謝することで幸せになれます！"],
                [INSPIRATION_2, "一日を楽しんで！"],
                [INSPIRATION_3, "一日に一度の感謝が、幸せをもたらします！"],
                [INSPIRATION_4, "感謝の気持ちを持つことは良い気分です"],
                [INSPIRATION_5, "内面を見つめて..."],
                [INSPIRATION_6, "自分自身を認めて"],
                [HEADER_HOME, "ホーム"],
                [HEADER_FOLLOWING, "フォロー中"],
                [HEADER_GRATITUDE_WALL, "感謝の壁"],
                [HEADER_QUOTE, "引用"],
                [HEADER_SETTINGS, "設定"],
                [HEADER_ABOUT, "アバウト"],
                [HEADER_LOGOUT, "ログアウト"],
                [UNKNOWN, "不明"],
                [PLATO, "プラトン"],
                [CHANGED_PRIVACY_TYPE, "感謝のプライバシー設定が変更されました:"],
                [ERRORS, "エラー"],
                [ERRORS_IN_FORM, "フォームにエラーがあります"],
                [ERROR_NAME_NOT_EMPTY, "名前は空にできません"],
                [ERROR_HANDLE_VALIDITY, "ハンドルは空にできず、英数字（大文字と小文字、数字）のみを含む必要があります"],
                [ERROR_EMAIL_NOT_EMPTY, "メールアドレスは空にできません"],
                [ERROR_PASSWORD_NOT_EMPTY, "パスワードは空にできません"],
                [ERROR_PASSWORD_RULES, "パスワードは少なくとも8文字の長さ、1つの大文字、1つの小文字、1つの特殊文字を含む必要があります"],
                [ERROR_PASSWORD_AND_CONFIRMATION_NOT_MATCHING, "パスワードとパスワード確認の値が一致する必要があります"],
                [ERROR_ACCEPT_TERMS_AND_CONDITIONS, "利用規約に同意する必要があります"],
                [ERROR_SERVER_COMMS, "サーバーとの通信エラー"],
                [ERROR_GOOGLE_LOGIN, "Googleでのログインにエラーが発生しました"],
                [ERROR_CHANGE_PRIVACY_TYPE, "感謝のプライバシー設定変更エラー:"],
                [ERROR_EMAIL_NOT_EXISTS, "メールアドレスが存在しません:"],
                [ERROR_INVALID_EMAIL, "提供されたメールアドレスは無効です:"],
                [PASSWORD_RESET_REQUEST_SENT, "パスワードリセットリクエストが送信されました"],
                [NEW_CONFIRMATION_EMAIL_REQUESTED, "新しい確認メールがリクエストされました"],
                [ACCOUNT_IS_CONFIRMED, "アカウントが確認されました。ログインしてください。ありがとうございます！"],
                [ACCOUNT_CONFIRMATION_SUCCESS, "アカウントが正常に確認されました！"],
                [ACCOUNT_CONFIRMATION_ERROR, "アカウント確認エラー: すでに確認済み、または認証が期限切れです。ログインページから新しいリクエストを行ってください。数秒後にリダイレクトされます..."],
                [NEW_PASSWORD, "新しいパスワード"],
                [CONFIRM_NEW_PASSWORD, "新しいパスワードの確認"],
                [SUBMIT, "送信"],
                [THANKER_IS_THANKFUL_TO, "感謝している相手:"],
                [QUOTE_1, "感謝は過去を意味づけ、今日の平和をもたらし、明日のビジョンを創造します"],
                [QUOTE_2, "喜びの根源は感謝です"],
                [QUOTE_3, "祝福を数え始めたとき、私の人生は一変しました"],
                [QUOTE_4, "私は感謝しているから幸せです。感謝することを選びます。その感謝が私を幸せにします"],
                [QUOTE_5, "今日は素晴らしい日です。これまでに見たことがありません"],
                [QUOTE_6, "感謝は素晴らしいものです。それは他人の優れたものを私たちのものにします"],
                [QUOTE_7, "人生について面白いのは、一度感謝すべきことに気付くと、欠けているものに気を取られなくなることです"],
                [QUOTE_8, "感謝はすべての美徳の中で最も偉大であり、すべての他の美徳の親です"],
                [QUOTE_9, "幸せな人が感謝するのではなく、感謝する人が幸せです"],
                [QUOTE_10, "人生を生きる方法は二つだけです。一つは、何も奇跡ではないかのように。もう一つは、すべてが奇跡であるかのように"],
                [QUOTE_11, "感謝と喜び以外の理由はありません"],
                [QUOTE_12, "感謝の気持ちを抱くことは、プレゼントを包んで渡さないようなものです"],
                [QUOTE_13, "感謝することは、どんな義務よりも急務です"],
                [QUOTE_14, "感謝をマントのように身に付けると、それがあなたの人生のすべての隅々に栄養を与えます"],
                [QUOTE_15, "すべての美しいアート、すべての偉大なアートの本質は感謝です"],
                [QUOTE_16, "感謝の中に生きる人生には、落ち着きと静かな喜びがあります"],
                [QUOTE_17, "私たちを幸せにしてくれる人々に感謝しましょう"],
                [QUOTE_18, "感謝は心に記憶され、頭には記憶されません"],
                [QUOTE_19, "朝起きたとき、生きること、呼吸すること、考えること、楽しむこと、愛することがどれほど貴重な特権であるかを考えてください"],
                [QUOTE_20, "毎日を始めるときも終わるときも、感謝の気持ちを持つようにしています"],
                [QUOTE_21, "感謝の状態に生きることが、恩恵への入り口です"],
                [QUOTE_22, "感謝は感情で表現された美しさに最も近いものです"],
                [QUOTE_23, "自分の資産をすべて数えると、常に利益があることがわかります"],
                [QUOTE_24, "小さなことを楽しんでください。いつかそれが大きなことだったと気づく日が来るかもしれません"],
                [QUOTE_25, "人生を変えたいなら、感謝を試してみてください。それがあなたの人生を大きく変えるでしょう"],
                [QUOTE_26, "感謝は他の誰かよりも自分自身への褒め言葉です"],
                [QUOTE_27, "感謝は幸せの強力な触媒です。それは魂に喜びの火を灯す火花です"],
                [QUOTE_28, "感謝は、持っているものを十分に変えます"],
                [QUOTE_29, "自分の人生にすでにある良いものを認識することが、すべての豊かさの基礎です"],
                [QUOTE_30, "感謝の心は偉大な心であり、最終的に偉大なものを引き寄せます"],
                [QUOTE_31, "感謝の奇跡は、あなたの視点を大きく変えることによって、あなたが見る世界を変えます"],
                [QUOTE_32, "バラに棘があることに不平を言う人もいますが、私は棘にバラがあることに感謝します"],
                [QUOTE_33, "私に命を貸してくれる主よ、感謝で満ちた心を貸してください"],
                [QUOTE_34, "今日、人生を変えるためにできる最も大きなことは、今持っているものに感謝し始めることです"],
                [QUOTE_35, "人生において重要なのは、物事を当然に思うか、感謝の気持ちを持つかです"],
                [QUOTE_36, "感謝することは、すべてが必ずしも良いという意味ではありません。ただ、それを贈り物として受け入れることができるという意味です"],
                [QUOTE_37, "最も控えめなものの中に美を見出す力は、家庭を幸せにし、人生を素晴らしくします"],
                [QUOTE_38, "感謝は富です"],
                [QUOTE_39, "感謝し、感謝することで、人生に増えるものはすべてです"],
                [QUOTE_40, "持っているすべてのものに感謝することで、ちょうどそのまま幸せになることができます"],
                [QUOTE_41, "幸せを見つけたいなら、感謝を見つけてください"],
                [QUOTE_42, "宇宙に感謝します、すべてを取り去り、すべてを与えてくれることに"],
                [QUOTE_43, "現代の世界では、私たちはあまりにも豊かで、それを見ることができません"],
                [QUOTE_44, "感謝を実践することで、実際に私たちの脳を配線し、レジリエンスを構築するのに役立てることができます"],
                [QUOTE_45, "感謝と親切は、卓越した人生を体現しています"],
                [QUOTE_46, "私たちが出会うすべての人と同じ地球上にいることに感謝しましょう"],
                [QUOTE_47, "感謝していたことを書くことで、私を笑顔にするものを探すことを学びました"],
                [QUOTE_48, "鳥の声を聞けば、毎日が歌で満たされます"],
                [QUOTE_49, "感謝の態度で世界を見れば、人生の良いことに集中するように自分を訓練しています"],
                [QUOTE_50, "私はマナー、礼儀、感謝にこだわります"]
            ])
        ]
    ]);

    private hintsList: string[] = [
        HINT_MADE_YOUR_DAY, HINT_MADE_YOU_HAPPY, HINT_MADE_YOU_SMILE, HINT_HELPED_YOU, HINT_GRATEFUL,
        HINT_GRATEFUL_FOR, HINT_THANK_YOURSELF, HINT_WHAT_TO_THANK
    ];

    private hintsOtherList: string[] = [
        HINT_OTHER_GRATEFUL_1, HINT_OTHER_GRATEFUL_2, HINT_OTHER_GRATEFUL_3
    ]

    private introsList: string[] = [
        INTRO_THANKFUL_FOR, INTRO_GRATEFUL_FOR, INTRO_THANKS_FOR
    ]

    private othersIntrosList: string[] = [
        OTHER_INTRO_THANKS, OTHER_INTRO_EXPRESSED_GRATITUDE, OTHER_INTRO_IS_THANKFUL_TO
    ]

    private inspirations: string[] = [
        INSPIRATION_1, INSPIRATION_2, INSPIRATION_3, INSPIRATION_4, INSPIRATION_5, INSPIRATION_6
    ]

    getFor = (label: string): string | undefined => {
        return this.TRANLATIONS_MAP.get(this.language)?.get(label);
    }

    getForLanguage = (label: string, language: Language): string | undefined => {
        return this.TRANLATIONS_MAP.get(language)?.get(label);
    }

    getHint = (): string | undefined => {
        return this.getRandomItemFromList(this.hintsList);
    }

    getHintOther = (): string | undefined => {
        return this.getRandomItemFromList(this.hintsOtherList);
    }

    getIntro = (): string | undefined => {
        return this.getRandomItemFromList(this.introsList);
    }

    getOthersIntro = (): string | undefined => {
        return this.getRandomItemFromList(this.othersIntrosList);
    }

    getInspiration = (): string | undefined => {
        return this.getRandomItemFromList(this.inspirations);
    }

    private getRandomItemFromList = (list: string[]): string | undefined => {
        const randomIndex: number = this.randomIndexOf(list);
        return this.getListTranslationAt(list, randomIndex);
    }

    private getListTranslationAt = (list: string[], index: number): string | undefined => {
        return this.TRANLATIONS_MAP.get(this.language)?.get(list[index]); 
    }

    private randomIndexOf = (list: string[]): number => {
        return Math.floor(Math.random() * list.length);
    }
       
}