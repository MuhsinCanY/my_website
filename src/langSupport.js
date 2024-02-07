import {
  faCodepen,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const en = {
  hero: {
    name: 'almila',
    header: 'I am a Frontend Developer...',
    content:
      '...who likes to craft solid and scalable frontend products with great user experiences.',
    img: '/assets/hero/hero.png',
    lang: 'TÜRKÇE',
    theme: { dark: 'DARK MODE', light: 'LIGHT MODE' },
  },
  skills: {
    skillTitle: 'Skills',
    skillBox: [
      { img: '/assets/skills/Javascript.png', name: 'JAVASCRIPT' },
      { img: '/assets/skills/React.png', name: 'REACT' },
      { img: '/assets/skills/Redux.png', name: 'REDUX' },
      { img: '/assets/skills/Node.png', name: 'NODE' },
      { img: '/assets/skills/VSCode.png', name: 'VS CODE' },
      { img: '/assets/skills/Figma.png', name: 'FIGMA' },
    ],
  },
  profile: {
    profileTitle: 'Profile',
    info: {
      title: 'Basic Information',
      info: [
        { question: 'Date of birth', answer: '07.07.1998' },
        { question: 'City of Residence', answer: 'Ankara/Turkey' },
        {
          question: 'Educational Status',
          answer: 'Hacettepe Univ. Bachelor of Mathematics, 2022',
        },
        { question: 'Preferred Role', answer: 'Frontend, UI' },
      ],
    },
    img: '/assets/profile/profile.png',
    aboutMe: {
      title: 'About Me',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.    Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam  magnam!',
    },
  },
  projects: {
    title: 'Projects',
    project: [
      {
        img: '/assets/projects/project1.png',
        title: 'Workintech',
        context:
          'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.',
        techStack: ['react', 'redux', 'vercel'],
        site: { title: 'View Site', url: '' },
        github: { title: 'GitHub', url: '' },
      },
      {
        img: '/assets/projects/project2.png',
        title: 'Journey',
        context:
          'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.',
        techStack: ['react', 'redux', 'vercel'],
        site: { title: 'View Site', url: '' },
        github: { title: 'GitHub', url: '' },
      },
    ],
  },
  footer: {
    title: 'Send me a message!',
    content: 'Got a question or proposal, or just want to say hello? Go ahead.',
    mail: 'almilasucode@gmail.com',
    icons: [faTwitter, faCodepen, faAt, faInstagram],
  },
}

const tr = {
  hero: {
    name: 'almila',
    header: 'Frontend Geliştirici',
    content:
      '...mükemmel kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir ön uç ürünleri oluşturmayı seven.',
    img: '/assets/hero/hero.png',
    lang: 'ENGLİSH',
    theme: { dark: 'KARANLIK MOD', light: 'AYDINLIK MOD' },
  },
  skills: {
    skillTitle: 'Yetenekler',
    skillBox: [
      { img: '/assets/skills/Javascript.png', name: 'JAVASCRIPT' },
      { img: '/assets/skills/React.png', name: 'REACT' },
      { img: '/assets/skills/Redux.png', name: 'REDUX' },
      { img: '/assets/skills/Node.png', name: 'NODE' },
      { img: '/assets/skills/VSCode.png', name: 'VS CODE' },
      { img: '/assets/skills/Figma.png', name: 'FIGMA' },
    ],
  },
  profile: {
    profileTitle: 'Profil',
    info: {
      title: 'Temel Bilgiler',
      info: [
        { question: 'Doğum Tarihi', answer: '07.07.1998' },
        { question: 'Yaşadığı Şehir', answer: 'Ankara/Turkey' },
        {
          question: 'Eğitim Durumu',
          answer: 'Hacettepe Uni. Lisans Matematik, 2022',
        },
        { question: 'Tercih Edilen Rol', answer: 'Frontend, UI' },
      ],
    },
    img: '/assets/profile/profile.png',
    aboutMe: {
      title: 'Benim Hakkımda',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.    Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam  magnam!',
    },
  },
  projects: {
    title: 'Projeler',
    project: [
      {
        img: '/assets/projects/project1.png',
        title: 'Workintech',
        context:
          'Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.',
        techStack: ['react', 'redux', 'vercel'],
        site: { title: 'Web Sitesi', url: '' },
        github: { title: 'GitHub', url: '' },
      },
      {
        img: '/assets/projects/project2.png',
        title: 'Journey',
        context:
          'Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.',
        techStack: ['react', 'redux', 'vercel'],
        site: { title: 'Web Sitesi', url: '' },
        github: { title: 'GitHub', url: '' },
      },
    ],
  },
  footer: {
    title: 'Bana mesaj gönder!',
    content:
      'Bir sorunuz veya öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Devam etmek.',
    mail: 'almilasucode@gmail.com',
    icons: [faTwitter, faCodepen, faAt, faInstagram],
  },
}

export const language = {
  en: en,
  tr: tr,
}
