interface NavigationItem {
    label: string,
    href: string,
    clickable?: boolean
  }
  
  interface TopNavigationItem extends NavigationItem {
    subLinks?: NavigationItem[],
    scrollTo?: boolean
    id: string
}

interface News {
  title: string,
  details: string,
  imageUrl: string,
  href: string,
}

export const MainNavigation : TopNavigationItem[] = [
  {
    label: "About Us",
    id: 'about-us',
    href: "/about",
  },
  // {
  //   label: "IP Assets",
  //   href: "/",
  // },
  {
    label: "News",
    id: 'news',
    href: "/",
    scrollTo: true
  },
  {
    label: "Contact",
    id: 'contact',
    href: "/",
    scrollTo: true
  },
];

export const NewsMock : News[] = [
  {
    title: 'Manifiesto',
    details: 'What\'s in store for Decentraland this year? Read on!',
    imageUrl: '/img/newsMock.png',
    href: 'https://decentraland.org/blog/announcements/foundation-2022-manifesto/'
  },
  {
    title: 'Security update',
    details: 'Recent LAND vulnerability report and what the Decentraland Foundation is doing to protect Decentraland\'s IP',
    imageUrl: '/img/newsMock.png',
    href: 'https://decentraland.org/blog/announcements/decentraland-security-update/'
  },
  // {
  //   title: 'Decentraland Foundation Update',
  //   details: 'Lorem ipsum text just to fill the space on this particular section',
  //   imageUrl: '/img/newsMock.png',
  //   href: '/'
  // },
];