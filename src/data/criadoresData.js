// Paulo
import PauloRostoImg from '../img/fotoPerfilPaulo-Real.jpg';
import PauloFakeNattyImg from '../img/fotoPerfilPaulo-DonkeyMusica.jpg';

// Kristine

import KristineRostoImg from '../img/fotoPerfilKristine-Real.jpg';
import KristineKoKichiOmaImg from '../img/fotoPerfilKristine-KokichiOma.jpg';

// João 
import JoaoRostoImg from '../img/fotoPerfilJoao-Real.jpg';
import JoaoViolinistaImg from '../img/fotoPerfilJoao-CachorroViolinista.jpg';

// Matheus
import MatheusRostoImg from '../img/fotoPerfilMatheus-Real.jpg';
import MatheusAranhaImg from '../img/fotoPerfilAranha-Matheus.jpg';

const criadores = [
    {
        id: 1,
        nome: 'Paulo',
        redes: [
            {
                tipo: 'Instagram', 
                link: 'https://www.instagram.com/phenr.ique16?utm_source=ig_web_button_share_sheet&igsh=dWl0OGxkb2N6a3J5',
            },
        ],
        fotos: {
            fotoPerfilReal: PauloRostoImg,
            fotoPerfilQualquer: PauloFakeNattyImg,
        },
    },
    {
        id: 2,
        nome: 'Kristine',
        redes: [
            {
                tipo: 'Instagram', 
                link: 'https://www.instagram.com/kanako_kh?igsh=MXQzb3R5c3BlZ2xxeA==',
            },
            {
                tipo: 'Facebook', 
                link: 'https://www.facebook.com/share/1BVTqhagcB/',
            },
            {
                tipo: 'Spotify', 
                link: 'https://open.spotify.com/user/31sx2ffuwr7qyxhgc6rbqz5gesou?si=P8EFxIfhSeCj1TIIhzI8ww',
            },
            {
                tipo: 'Steam', 
                link: 'https://steamcommunity.com/profiles/76561199066037569/',
            }
        ],
        fotos: {
            fotoPerfilReal: KristineRostoImg,
            fotoPerfilQualquer: KristineKoKichiOmaImg,
        },
    },
    {
        id: 3,
        nome: 'João Reis',
        redes: [
            {
                tipo: 'Whatsapp',
                link: 'https://wa.me/+5514996790586',
            }
        ],
        fotos: {
            fotoPerfilReal: JoaoRostoImg,
            fotoPerfilQualquer: JoaoViolinistaImg,
        },
    },
    {
        id: 4,
        nome: 'Matheus',
        redes: [
            {
                tipo: 'Instagram', 
                link: 'https://www.instagram.com/matheus.ldr_?igsh=amR6b2wwbWFwdTRp',
            },
            {
                tipo: 'Spotify', 
                link: 'https://open.spotify.com/user/s1t5wwszi69fy7i42iifq8qd4?si=2b87157c73d247e4',
            },
            {
                tipo: 'Steam', 
                link: 'https://steamcommunity.com/profiles/76561199162227570/',
            },
        ],
        fotos: {
            fotoPerfilReal: MatheusRostoImg,
            fotoPerfilQualquer: MatheusAranhaImg,
        },
    },
];

export default criadores;