// Single source for every photograph on the page.
// `file` -> /public/photos/<file>.jpg · `pexels` -> photo id on pexels.com (credit + swap target).
// All are stand-ins from Pexels: replace the file (same name) with The Glasshouse's own photo.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export type Photo = { file: string; pexels: number; alt: string };

export const src = (file: string) => `${base}/photos/${file}.jpg`;

export const photos = {
	hero: { file: 'hero', pexels: 15964946, alt: 'Paviliun berdinding kaca menyala hangat saat senja, resepsi berlangsung di dalamnya di antara pepohonan' },
	space: { file: 'space', pexels: 5947948, alt: 'Pohon palem tropis tumbuh di bawah atap kaca' },
	roomHall: { file: 'room-hall', pexels: 17022996, alt: 'Aula resepsi dengan meja bundar, jendela lengkung tinggi, dan rangkaian bunga besar' },
	roomGarden: { file: 'room-garden', pexels: 26975888, alt: 'Meja panjang berhias lilin di taman, dengan untaian lampu di antara pepohonan' },
	roomLounge: { file: 'room-lounge', pexels: 29844873, alt: 'Bar dan sudut santai bernuansa hijau tua dengan rak botol' },
	evWedding: { file: 'ev-wedding', pexels: 7082467, alt: 'Upacara pernikahan di ruang kaca berbentuk segitiga dengan lengkung bunga' },
	evCorporate: { file: 'ev-corporate', pexels: 38446275, alt: 'Meja panjang berlilin untuk jamuan malam dengan pencahayaan ungu' },
	evBirthday: { file: 'ev-birthday', pexels: 37296132, alt: 'Meja kue ulang tahun ke-70 dengan balon biru dan camilan' },
	evPrewedding: { file: 'ev-prewedding', pexels: 679568, alt: 'Sepasang kekasih berpelukan di bawah pergola yang dirambati bunga tropis' },
	evGraduation: { file: 'ev-graduation', pexels: 16255363, alt: 'Sekelompok lulusan berpakaian toga merayakan kelulusan bersama' },
	evBrand: { file: 'ev-brand', pexels: 31129059, alt: 'Pembicara berdiri di panggung menghadap penonton yang menyalakan lampu ponsel' },
	gNightReception: { file: 'g-night-reception', pexels: 15964967, alt: 'Resepsi malam hari di luar ruangan dengan untaian lampu' },
	gDance: { file: 'g-dance', pexels: 30992968, alt: 'Pasangan berdansa di bawah lampu gantung pada malam pernikahan' },
	gCandle: { file: 'g-candle', pexels: 30742026, alt: 'Meja kayu panjang dengan lilin menyala dan kain putih menjuntai' },
	gCourtyard: { file: 'g-courtyard', pexels: 28976226, alt: 'Meja panjang di halaman berdinding batu dan tanaman rambat menuju pelaminan' },
	gCouple: { file: 'g-couple', pexels: 31688036, alt: 'Pengantin tertawa bahagia di dalam ruangan bernuansa gelap' },
	gLightsTable: { file: 'g-lights-table', pexels: 34597463, alt: 'Meja bundar dengan gelas dan lilin kecil di bawah untaian bohlam' },
	gCocktail: { file: 'g-cocktail', pexels: 3171770, alt: 'Gelas sampanye berdenting dengan percikan kembang api kecil' },
	gCorpStage: { file: 'g-corp-stage', pexels: 39351603, alt: 'Penonton menghadap panggung bercahaya pada acara perusahaan' },
	gBirthday: { file: 'g-birthday', pexels: 30464360, alt: 'Kue, gelas, dan balon krem di atas meja bundar untuk perayaan ulang tahun' },
	location: { file: 'location', pexels: 11177414, alt: 'Gedung-gedung tinggi Jakarta Selatan pada malam hari' },
} satisfies Record<string, Photo>;

export const photoList = Object.values(photos) as Photo[];
