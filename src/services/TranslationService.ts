import { GDPR_EN_HTML, GDPR_PT_HTML } from "../model/GDPR";
import { StorageService } from "./StorageService";
import { PROFESSION_ACTOR, PROFESSION_ACTRESS, PROFESSION_COMEDIAN, PROFESSION_JOURNALIST, PROFESSION_LAYWER, PROFESSION_MONK, PROFESSION_MUSICIAN, PROFESSION_SINGER_WOMAN, PROFESSION_PHILOSOPHER, PROFESSION_PSYCHOLOGIST, PROFESSION_ROMAN_EMPEROR, PROFESSION_SCIENTIST, PROFESSION_SPIRITUAL_LEADER, PROFESSION_WRITER, PROFESSION_WRITER_WOMAN, QUOTE_1, QUOTE_10, QUOTE_11, QUOTE_12, QUOTE_13, QUOTE_14, QUOTE_15, QUOTE_16, QUOTE_17, QUOTE_18, QUOTE_19, QUOTE_2, QUOTE_20, QUOTE_21, QUOTE_22, QUOTE_23, QUOTE_24, QUOTE_25, QUOTE_26, QUOTE_27, QUOTE_28, QUOTE_29, QUOTE_3, QUOTE_30, QUOTE_31, QUOTE_32, QUOTE_33, QUOTE_34, QUOTE_35, QUOTE_36, QUOTE_37, QUOTE_4, QUOTE_5, QUOTE_6, QUOTE_7, QUOTE_8, QUOTE_9, QUOTE_38, QUOTE_39, QUOTE_40, QUOTE_41, QUOTE_42, PROFESSION_MARTIAL_ARTIST, QUOTE_43, QUOTE_44, PROFESSION_PSYCHOLOGIST_WOMAN, PROFESSION_RESEARCHER_WOMAN, QUOTE_45, QUOTE_46, QUOTE_47, QUOTE_48, PROFESSION_ENTERPRENEUR, QUOTE_49, QUOTE_50, PROFESSION_TV_HOST_WOMAN, PROFESSION_ENTERPRENEUR_WOMAN, PROFESSION_YOGA_TEACHER_WOMAN } from "./translations/QuotesService";

export enum Language {
    PT = "PT", GB = "GB"
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
export const PROFILE_IS_OPEN_SETTING: string = "profile-is-open-setting";
export const PROFILE_NOT_OPEN_SETTING: string = "profile-not-open-setting";
export const DEFAULT_THANKS_PRIVACY_PRIVATE: string = "default-thanks-privacy-private";
export const DEFAULT_THANKS_PRIVACY_PUBLIC: string = "default-thanks-privacy-public";
export const BE_THE_FIRST_THANKER: string = "be-the-first-thanker";
export const THIS_IS_PRIVATE_PROFILE: string = "this-is-private-profile";
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
export const HEADER_SETTINGS: string = "header-settings";
export const HEADER_ABOUT: string = "header-about";
export const HEADER_LOGOUT: string = "header-logout";

export const ERRORS: string = "errors";
export const ERRORS_IN_FORM: string = "errors-in-form";
export const ERROR_CHANGE_PRIVACY_TYPE: string = "error-change-privacy-type";
export const ERROR_EMAIL_NOT_EXISTS: string = "error-email-not-exists";
export const ERROR_INVALID_EMAIL: string = "error-invalid-email";
export const ERROR_NAME_NOT_EMPTY: string = "error-name-not-empty";
export const ERROR_HANDLE_NOT_EMPTY: string = "error-handle-not-empty";
export const ERROR_EMAIL_NOT_EMPTY: string = "error-email-not-empty";
export const ERROR_PASSWORD_NOT_EMPTY: string = "error-password-not-empty";
export const ERROR_PASSWORD_RULES: string = "error-password-rules";
export const ERROR_PASSWORD_AND_CONFIRMATION_NOT_MATCHING: string = "error-password-and-confirmation-not-matching";
export const ERROR_ACCEPT_TERMS_AND_CONDITIONS: string = "error-accept-terms-and-conditions";
export const ERROR_SERVER_COMMS: string = "error-server-comms";

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
            [PROFILE_IS_OPEN_SETTING, "O teu perfil está aberto a receber Agradecimentos de outras pessoas (público)"],
            [PROFILE_NOT_OPEN_SETTING, "O teu perfil está fechado a receber Agradecimentos de outras pessoas (privado)"],
            [DEFAULT_THANKS_PRIVACY_PRIVATE, "A opção padrão dos teus agradecimentos será \"Privado\""],
            [DEFAULT_THANKS_PRIVACY_PUBLIC, "A opção padrão dos teus agradecimentos será \"Público\""],
            [BE_THE_FIRST_THANKER, "Sê o primeiro Thanker deste perfil"],
            [THIS_IS_PRIVATE_PROFILE, "Este perfil não está aberto a outros Agradecimentos, atualmente"],
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
            [CLICK_YOUR_NAME_UPDATE, "Clica no teu nome para o atualizares"],
            [CLICK_YOUR_PICTURE_UPDATE, "Clica na tua imagem para a atualizares"],
            [UPDATE, "Atualiza"],
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
            [ACCOUNT_IS_CONFIRMED, "Conta confirmada. Obrigado!"],
            [ACCOUNT_CONFIRMATION_SUCCESS, "Conta confirmada com sucesso!"],
            [ACCOUNT_CONFIRMATION_ERROR, "Erro a confirmar a conta: confirmação já foi feita, ou autorização para confirmação expirou. Faz novo pedido através da página inicia, por favor. Redireção para lá em alguns segundos..."],
            [NEW_PASSWORD, "Nova password"],
            [CONFIRM_NEW_PASSWORD, "Confirma nova password"],
            [SUBMIT, "Submeter"],
            [ERROR_NAME_NOT_EMPTY, "Nome não pode estar vazio"],
            [ERROR_HANDLE_NOT_EMPTY, "Handle não pode estar vazio"],
            [ERROR_EMAIL_NOT_EMPTY, "E-mail não pode estar vazio"],
            [ERROR_PASSWORD_NOT_EMPTY, "Password não pode estar vazia"],
            [ERROR_PASSWORD_RULES, "Password tem de ter pelo menos: 8 caracters (tamanho), 1 letra maiúscula, 1 letra minúscula, e 1 caracter especial"],
            [ERROR_PASSWORD_AND_CONFIRMATION_NOT_MATCHING, "Password e confirmação de password têm de ser iguais"],
            [ERROR_ACCEPT_TERMS_AND_CONDITIONS, "Necessário aceitar Termos & Condições"],
            [ERROR_SERVER_COMMS, "Erro na comunicação com o servidor"],
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
            [QUOTE_35, "Na vida o que faz a diferença é se tomas as coisas por garantidas, ou se as tomas com Gratidão"],
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
            [OTHER_INTRO_THANKS, "thanks for"],
            [OTHER_INTRO_EXPRESSED_GRATITUDE, "expresses gratitude for"],
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
            [PROFILE_IS_OPEN_SETTING, "Your profile is open to receive other people's Thanks (public)"],
            [PROFILE_NOT_OPEN_SETTING, "Your profile is closed to receive other people's Thanks (private)"],
            [DEFAULT_THANKS_PRIVACY_PRIVATE, "The default option for your Thanks will be \"Private\""],
            [DEFAULT_THANKS_PRIVACY_PUBLIC, "The default option for your Thanks will be \"Public\""],
            [BE_THE_FIRST_THANKER, "Be the first Thanker of this profile"],
            [THIS_IS_PRIVATE_PROFILE, "This profile is not currently opened for other people's Thanks"],
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
            [CLICK_YOUR_NAME_UPDATE, "Click your name to update it"],
            [CLICK_YOUR_PICTURE_UPDATE, "Click your image to update it"],
            [UPDATE, "Update"],
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
            [HEADER_SETTINGS, "Settings"],
            [HEADER_ABOUT, "About"],
            [HEADER_LOGOUT, "Logout"],
            [UNKNOWN, "Unknown"],
            [PLATO, "Plato"],
            [CHANGED_PRIVACY_TYPE, "Changed Thanks privacy to:"],
            [ERRORS, "Errors"],
            [ERRORS_IN_FORM, "Errors in form"],
            [ERROR_NAME_NOT_EMPTY, "Name cannot be empty"],
            [ERROR_HANDLE_NOT_EMPTY, "Handle cannot be empty"],
            [ERROR_EMAIL_NOT_EMPTY, "E-mail cannot be empty"],
            [ERROR_PASSWORD_NOT_EMPTY, "Password cannot be empty"],
            [ERROR_PASSWORD_RULES, "Password must have at least: 8 characters length), 1 uppercase letter, 1 lowercase letter, and 1 special character"],
            [ERROR_PASSWORD_AND_CONFIRMATION_NOT_MATCHING, "Password and password confirmation values must match"],
            [ERROR_ACCEPT_TERMS_AND_CONDITIONS, "Need to accept Terms & Conditions"],
            [ERROR_SERVER_COMMS, "Error communicating with the server"],
            [ERROR_CHANGE_PRIVACY_TYPE, "Error changing thanks privacy to:"],
            [ERROR_EMAIL_NOT_EXISTS, "E-mail does not exist:"],
            [ERROR_INVALID_EMAIL, "Provided e-mail is not a valid one:"],
            [PASSWORD_RESET_REQUEST_SENT, "Password reset request sent"],
            [NEW_CONFIRMATION_EMAIL_REQUESTED, "New confirmation e-mail requested"],
            [ACCOUNT_IS_CONFIRMED, "Account is confirmed. Thank you!"],
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