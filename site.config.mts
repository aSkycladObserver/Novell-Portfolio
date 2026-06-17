export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export default {
	title: 'RT',
	favicon: 'favicon.ico',
	owner: 'Romane Treluyer',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/rhum.trel/',
			icon: 'simple-icons:instagram',
		},
		{
			name: 'ArtStation',
			url: 'https://www.artstation.com/romanetreluyer',
			icon: 'simple-icons:artstation',
		},
	],
};
