const Icons: Array<{ name: string; icon: string }> = [
  {
    name: 'people',
    icon: 'people.svg',
  },
  {
    name: 'company',
    icon: 'building.svg',
  },
  {
    name: 'location',
    icon: 'location.svg',
  },
  {
    name: 'blog',
    icon: 'link.svg',
  },
  {
    name: 'email',
    icon: 'mail.svg',
  },
  {
    name: 'twitter_username',
    icon: 'twitter.svg',
  },
  {
    name: 'repository',
    icon: 'bookmark.svg',
  },
  {
    name: 'star',
    icon: 'star.svg',
  },
  {
    name: 'fork',
    icon: 'fork.svg',
  },
]

export const getIcons = (name: string): string => {
  const findIcon = Icons.find((item) => item.name === name)
  if (findIcon?.icon == null) return 'github_logo.svg'
  return `icons/${findIcon.icon}`
}
