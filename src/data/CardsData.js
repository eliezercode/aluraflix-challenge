
const cardsData = [
    {
        id: 1,
        title: "Deadpool 3",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-one.webp?raw=true",
        link: "https://www.youtube.com/embed/BRGBYU7iW1g?si=pOEpPnTTHY7Kqtps",
        category: "ACCIÓN",
        description: "Una dupla destinada a salvarnos."
    },
    {
        id: 2,
        title: "Arthur",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-two.webp?raw=true",
        link: "https://www.youtube.com/embed/P0RmKLvzRSc?si=ZQ4XLADGh8b-pZlp",
        category: "DRAMA",
        description: "El capitán de un equipo sueco de carreras de aventuras, se hace amigo de un perro callejero herido llamado Arthur."
    },
    {
        id: 3,
        title: "El Duro",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-three.webp?raw=true",
        link: "https://www.youtube.com/embed/4bDKG_E-wo4?si=zunwcQo3xO3bHmIK",
        category: "ACCIÓN",
        description: "En esta readaptación cargada de adrenalina del clásico de culto de los 80, el ex luchador de UFC Dalton (Jake Gyllenhaal) acepta un trabajo como portero en una taberna de los Cayos de Florida."
    },
    {
        id: 4,
        title: "Furiosa",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-four.webp?raw=true",
        link: "https://www.youtube.com/embed/GgerHF86Rv4?si=q-KaGS4ougAUEwMs",
        category: "ACCIÓN",
        description: "Miller ahora vuelve a pasar página con una nueva aventura de acción original e independiente que revelará los orígenes del poderoso personaje."
    },
    {
        id: 5,
        title: "Kung Fu Panda 4",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-five.webp?raw=true",
        link: "https://www.youtube.com/embed/kg3Q63gzF6I?si=9Rv4Zy-xvLq2r8tB",
        category: "ANIMADA",
        description: "Después de tres aventuras desafiando a la muerte y derrotando a villanos de clase mundial con su incomparable coraje y sus alocadas habilidades en las artes marciales, Po, el Guerrero Dragón (Omar Chaparro), es llamado por el destino para..."
    },
    {
        id: 6,
        title: "Rescate Imposible",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-six.webp?raw=true",
        link: "https://www.youtube.com/embed/In8YRKCdNow?si=7bxVYsodBf0Du8xl",
        category: "DRAMA",
        description: "Un piloto de las fuerzas aéreas apoya a un equipo de operaciones especiales en su intento de convertir una misión que ha salido mal en una operación de rescate."
    },
    {
        id: 7,
        title: "Dañado",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-seven.webp?raw=true",
        link: "https://www.youtube.com/embed/Sg8NuJL5P_8?si=xjFxQcI-HV_lZv-N",
        category: "DRAMA",
        description: "¿Cómo se atrapa un monstruo brillante? Cuando un asesino sádico aparece en Escocia, las aterrorizadas autoridades locales llaman a un detective de la policía de Chicago."
    },
    {
        id: 8,
        title: "La Chica de Miller",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-eight.webp?raw=true",
        link: "https://www.youtube.com/embed/F-GVsTIR2gg?si=8sBTaHLRhZpZjUN7",
        category: "DRAMA",
        description: "Un estudiante y un maestro que entablan una relación oscura después de una tarea de escritura creativa."
    },
    {
        id: 9,
        title: "Intensamente 2",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-nine.webp?raw=true",
        link: "https://www.youtube.com/embed/9bol4Yyx9Gs?si=2SsYd4QIxOjYMj97",
        category: "ANIMADA",
        description: "La película que te hará sentir todo intensamente llegó a los cines."
    },
    {
        id: 10,
        title: "El chico y la Garza",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-ten.webp?raw=true",
        link: "https://www.youtube.com/embed/h4Q0zG-sjFw?si=gsVW65PnBIDeOfBM",
        category: "ANIMADA",
        description: "Es en pocas palabras una sutil y hermosa historia sobre la mayoría de edad que también es una historia mágica y realista sobre el dolor, la soledad y cómo aprender a aceptar."
    },
    {
        id: 11,
        title: "Atlas",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-eleven.webp?raw=true",
        link: "https://www.youtube.com/embed/MxQFmgk8J3Y?si=Ap8HHghM4odeipgY",
        category: "ACCIÓN",
        description: "Atlas Shepherd (Jennifer Lopez), una analista de datos brillante pero antipática, que no se fía nada de la inteligencia artificial, participa en una misión para rescatar a un robot rebelde."
    },
    {
        id: 12,
        title: "Godzilla y Kong El nuevo Imperio",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-twelve.webp?raw=true",
        link: "https://www.youtube.com/embed/yHeJTh2f4NA?si=ARy4s5YgUVAVFVNF",
        category: "ACCIÓN",
        description: "La batalla épica continúa! La película de Legendary Pictures continúa el explosivo enfrentamiento de “Godzilla vs. Kong” con una aventura completamente nueva."
    },
    {
        id: 13,
        title: "Monkey Man",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-trece.webp?raw=true",
        link: "https://www.youtube.com/embed/5IjnS7RswEw?si=SSVa6_Hxm0WqhMyp",
        category: "ACCIÓN",
        description: "Un ex delincuente recientemente liberado que vive en la India lucha por adaptarse a un mundo de avaricia corporativa y valores espirituales erosionados."
    },
    {
        id: 14,
        title: "Contrareloj",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-catorce.webp?raw=true",
        link: "https://www.youtube.com/embed/1NbGiFg4Bd4?si=JF-woHuIitNKnBJ9",
        category: "DRAMA",
        description: "CONTRARRELOJ Tráiler Español (2023) Liam Neeson "
    },
    {
        id: 15,
        title: "Agente Fortune",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-quince.webp?raw=true",
        link: "https://www.youtube.com/embed/Mthr5hR7fpA?si=UWbxCthrVeFUhJnJ",
        category: "DRAMA",
        description: "En esta misión, el superespía Orson Fortune (Jason Statham) debe rastrear y detener la venta de una mortífera tecnología"
    },
    {
        id: 16,
        title: "65 al Borde de la Extinción",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-dieciseis.webp?raw=true",
        link: "https://www.youtube.com/embed/6NFAIZW9Rc4?si=tuV4saoFdbJWwMMS",
        category: "ACCIÓN",
        description: "De los escritores de Un Lugar en Silencio y el productor Sam Raimi, #65película - Al Borde de la Extinción."
    },
    {
        id: 17,
        title: "Resistencia",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-diecisiete.webp?raw=true",
        link: "https://www.youtube.com/embed/DMMa4A5ULmA?si=0wzRWj539FlUtknv",
        category: "ACCIÓN",
        description: "La inteligencia artificial se rebela. ¿De qué lado estás? Mira el nuevo tráiler de #Resistencia."
    },
    {
        id: 18,
        title: "Pollitos en Fuga",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-dieciocho.webp?raw=true",
        link: "https://www.youtube.com/embed/kL9gybbOzeQ?si=uo-TkoOaP9AS74DS",
        category: "ANIMADA",
        description: "POLLITOS EN FUGA 2: El origen de los nuggets"
    },
    {
        id: 19,
        title: "Tortugas Ninja Caos Mutante",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-diecinueve.webp?raw=true",
        link: "https://www.youtube.com/embed/VDbAG_ke8o0?si=C7LKfSvvMR5JgeuW",
        category: "ANIMADA",
        description: "Después de años de estar protegidos del mundo humano, estos hermanos se propusieron ganarse los corazones de los neoyorquinos y ser aceptados como adolescentes normales."
    },
    {
        id: 20,
        title: "Nimona",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-veinte.webp?raw=true",
        link: "https://www.youtube.com/embed/Ldnj6PTaRhE?si=qYOAPuXp88g6Tsa9",
        category: "ANIMADA",
        description: "Un poco de rebeldía, un poco de heroísmo. Nimona"
    },
    {
        id: 21,
        title: "Your Name",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-veintiuno.webp?raw=true",
        link: "https://www.youtube.com/embed/yPPaLgSXYlM?si=kal08AmoPPh-F0Vj",
        category: "ANIMADA",
        description: "Your Name cuenta la historia de Mitsuha, una chica que está harta de su vida en el Japón rural y Taki, un chico que vive en Tokio."
    },
    {
        id: 22,
        title: "Oppenheimer",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-veintidos.webp?raw=true",
        link: "https://www.youtube.com/embed/MVvGSBKV504?si=q2cxgo1PmLfOQGm5",
        category: "DRAMA",
        description: "Oppenheimer es un thriller épico filmado en IMAX® que sumerge al público en la intensa paradoja del enigmático hombre que debe arriesgarse a destruir el mundo para salvarlo."
    },
    {
        id: 23,
        title: "Sobrevivientes",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-veintitres.webp?raw=true",
        link: "https://www.youtube.com/embed/egIxeoEKpMc?si=Cnq1c8AZlnGNWIB0",
        category: "DRAMA",
        description: "Sobrevivientes - Después del terremoto"
    },
    {
        id: 24,
        title: "Vidas Pasadas",
        photo: "https://github.com/eliezercode/challenge-aluraflix-api/blob/main/assets/img/movie-veinticuatro.webp?raw=true",
        link: "https://www.youtube.com/embed/zle1xaJLRWo?si=X8dznqQaPAO8srcH",
        category: "DRAMA",
        description: "A24 te volverá a sorprender, esta vez con una película que se centra en los amores prohibidos, las pérdidas y “que hubiera pasado si”."
    }
];

export default cardsData;