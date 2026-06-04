import orwellImg from "../assets/img/1984-g-orwell.jpg";
import rayuelaImg from "../assets/img/rayuela-cortazar.jpg";
import kingMaker from "../assets/img/kingMakers.jpg"; 
import paciente from "../assets/img/lapacienteSilenciosa.jpg";
import loveWords from "../assets/img/loveandOtherwords.jpg"; 
import luna from "../assets/img/lunaSinMiel.jpg"; 
import powerles from "../assets/img/powerless.jpg";
import principe from "../assets/img/principeCruel.jpg";
import debbie from "../assets/img/querida-debbie.jpg";
import acotar from "../assets/img/rosasyEspinas.jpg"; 
import atlas from "../assets/img/seisAtlas.jpg";
import wolf from "../assets/img/wolfsong.jpg"; 

export const products = [
    {
        id: 1,
        nombre: "1984",
        autor: "George Orwell",
        descripcion: "En una sociedad dominada por el Gran Hermano, Winston Smith intenta resistirse al control absoluto del Estado. Esta clásica novela distópica aborda la vigilancia, la manipulación de la verdad y la pérdida de la libertad individual.",
        categoria: "Ficción",
        precio: 17900,
        stock: 2,
        imagen: orwellImg
    },
    {
        id: 2,
        nombre: "Rayuela",
        autor: "Julio Cortázar",
        descripcion: "Horacio Oliveira recorre las calles de París y Buenos Aires en una búsqueda constante de sentido, amor y pertenencia. Con una estructura innovadora y múltiples formas de lectura, Rayuela es una de las novelas más influyentes de la literatura latinoamericana.",
        categoria: "Novela",
        precio: 22900,
        stock: 5, 
        imagen: rayuelaImg
    },
     {
        id:3 ,
        nombre: "Rosas y Espinas",
        categoria: "Fantasia",
        precio: 30000,
        imagen: acotar,
        descripcion: "Cuando la cazadora de diecinueve años Feyre mata a un lobo en el bosque, una criatura bestial irrumpe en su casa para exigir una retribución. Trasladada a una tierra mágica y engañosa que solo conoce a través de leyendas, Feyre descubre que su captor no es un animal, sino Tamlin: una criatura inmortal y letal que alguna vez reinó en su mundo. Mientras Feyre vive en su castillo, lo que siente por Tamlin muta de una hostilidad helada a una pasión ardiente y feroz, a pesar de todas las mentiras y advertencias a las que queda expuesta en ese mundo fantástico, bello y peligroso. No obstante, una vil sombra ancestral sobre la tierra de los inmortales crece día a día, y Feyre debe encontrar la forma de detenerla... o condenar a Tamlin –y a su mundo" ,
        stock: 4,
    },
     {
        id:4 ,
        nombre: "King makers",
        categoria: "Romance",
        precio: 42000,
        imagen: kingMaker,
        descripcion: "La autora bestseller de USA Today, conocida por la saga Herencia brutal, nos trae ahora una nueva serie dark college- mafia romance, el género que arrasa en BookTok.   Bienvenidos a Kingmakers, la universidad más violenta del mundo.   Unidos por la sangre, separados por amor…   En los oscuros pasillos de Kingmakers, la despiadada universidad de la mafia, los descendientes de las familias más temidas del mundo han venido a aprender cómo imponer su poder y el miedo.   Leo, amigo incondicional de Anna desde que ambos era niños, se adentra con ella en un mundo donde el amor es un arma, la confianza es una víctima y la supervivencia es la única victoria que importa.   Pero el mayor peligro lo representa Dean Yenin, heredero de la Bratva con una sed de venganza tan despiadada como su corazón. Dean quiere destruir a Leo y arrebatarle todo lo que ama… empezando por Anna.   ¿Podrá recuperar Leo a su alma gemela? ¿O habrá perdido a Anna para siempre?  ",
        stock: 5,
    },
    {
        id:5 ,
        nombre: "Wolfsong",
        categoria: "Fantasia",
        precio: 19000,
        imagen: wolf,
        descripcion: "Ox nunca tuvo a nadie, hasta que un extraño chico le tendió la mano y lo condujo a un mundo donde lo maravilloso es posible.Le dio un hogar. Una familia. Una manada.Pero allí donde vive lo increíble también lo hacen las pesadillas.Y aunque Ox es solo un humano, muy pronto deberá alzar su aullido y pelear con uñas y dientes por quienes ama.Cae en las garras de la historia que ha cautivado a miles de lectores en todo el mundo. ",
        stock: 0,
    },
    {
        id:6 ,
        nombre: "Una luna sin miel",
        categoria: "Romance",
        precio: 35000,
        imagen: luna,
        descripcion: "Olive siempre tiene mala suerte. Su gemela; en cambio; es tan afortunada que ha conseguido organizar su boda ganando concursos en las redes. Sin embargo; cuando todos se intoxican con la comida de la fiesta;la luna de miel quedavacante. Solo Olive e Ethan; su némesis; están a salvo. Si quieren disfrutar de unas vacaciones en Hawái; el único precio que deberán pagar será fingir que se aman como recién casados.¿POR CUÁNTO TIEMPO PODRÁ OLIVE SOSTENER LA MENTIRA?' ",
        stock: 10,
    },
    {
        id: 7 ,
        nombre: "Amor y otras palabras",
        categoria: "Romance",
        precio: 38000,
        imagen: loveWords,
        descripcion: "Macy Sorensen lleva una vida apasionante en lo profesional pero fría en lo emocional, hasta que se reencuentra con Elliot Petropoulos, su primer y único amor, a quien hacía once años que se negaba a ver por algo que ocurrió en el pasado. Antes, cuando eran adolescentes, Macy y Elliot eran más que amigos; ahora, se han convertido en dos extraños. A pesar del tiempo y de lo que sucedió hace más de una década, ¿podrá Elliot a comprender la verdad detrás del silencio de Macy? ¿Logrará devolverle la posibilidad de tener un amor que lo consuma todo? ",
        stock: 10,
    },
    {
        id: 8 ,
        nombre: "El principe cruel",
        categoria: "Fantasia",
        precio: 29000,
        imagen: principe,
        descripcion: "Jude tenía siete años cuando sus padres fueron asesinados y, junto con sus dos hermanas, fue trasladada a la traicionera Corte Suprema del Faerie. Diez años más tarde, lo único que Jude desea, a pesar de ser una simple mortal, es sentir que pertenece a ese lugar. Pero la mayoría de los seres feéricos desprecian a los humanos. Especialmente el príncipe Cardan, el hijo más joven y perverso del rey supremo. Para hacerse un hueco en la corte, Jude deberá enfrentarse a él. Y afrontar las consecuencias. Como resultado, se verá envuelta en una red de intrigas entre inmortales, y descubrirá su propia habilidad para el derramamiento de sangre.",
        stock: 2,
    },
     {
        id: 9 ,
        nombre: "Powerless",
        categoria: "Fantasia",
        precio: 39000,
        imagen: powerles,
        descripcion: "Solo lo extraordinario pertenece al reino de Ilya: los excepcionales, los poderosos, los élites. Aquellos que nacieron vulgares son solo eso: vulgares. Y cuando el rey decreta que todos los vulgares serán eliminados para preservar su sociedad de élite, carecer de poder se vuelve un crimen, lo cual convierte a Paedyn Gray en una criminal por destino y en una ladrona por necesidad. Finge ser psíquica en la ciudad real, y pasa desapercibida para seguir viva y fuera de peligro. Cuando Paedyn inesperadamente salva a uno de los príncipes de Ilya, se ve arrojada a las Pruebas de la Purga. La brutal competición existe para exhibir los poderes de los élites, algo de lo que Paedyn carece. Si la Purga y sus rivales no la matan, lo hará el príncipe cuando descubra lo que ella es en realidad...",
        stock: 0,
    },
    {
        id: 10 ,
        nombre: "Los seis de atlas",
        categoria: "Fantasia",
        precio: 39500,
        imagen: atlas,
        descripcion: "Cada década se eligen a los seis magos más extraordinarios para que compitan por una plaza en la Sociedad Alejandrina, la sociedad secreta más importante del mundo.Los seleccionados disfrutarán de una vida de poder y prestigio que superará sus sueños más salvajes. Pero ¿a qué precio?Cada uno de los seis reclutados tiene sus motivos para aceptar la imprecisa invitación de la Sociedad. Aunque tengan que intimar más de lo que hubieran imaginado con sus enemigos más peligrosos o sufrir una traición imperdonable de sus mejores aliados, lucharán con uñas y dientes por el derecho a unirse a las filas de los alejandrinos.Aunque con ello se arriesguen con ello a no sobrevivirBIENVENIDO A LA SOCIEDAD ALEJANDRINA",
        stock: 10,
    },
   {
        id: 11 ,
        nombre: "La paciente silenciosa",
        categoria: "Thriller",
        precio: 20000,
        imagen: paciente,
        descripcion: "Solo ella sabe lo que sucedió. Solo yo puedo hacerla hablar. LA PACIENTE SILENCIOSA   La novela que ha conmocionado a 50 países y sedujo a Brad Pitt, quien la llevará al cine.   Premio de los lectores de Goodreads   Mejor libro del mes según The Times   En las listas de más vendidos de Estados Unidos e Inglaterra.   Alicia Berenson, una exitosa pintora, descarga cinco tiros a la cabeza de su marido, y no vuelve a hablar nunca más. Su negativa a pronunciar palabra alguna convierte una tragedia doméstica en un misterio que atrapa la imaginación de toda Inglaterra. Theo Faber, un ambicioso psicoterapeuta forense obsesionado con el caso, está empeñado en desentrañar el misterio de lo que ocurrió aquella noche fatal y consigue un puesto en The Grove, la unidad de seguridad del norte de Londres a la que Alicia fue enviada seis años atrás y en la que sigue obstinada en su silencio. Pronto descubre que el mutismo de la paciente está mucho más enraizado de lo que creía. Pero, si al final ella hablara, ¿estaría dispuesto a escuchar la verdad? ",
        stock: 0,
    },
    {
        id: 12 ,
        nombre: "Querida Debbie ",
        categoria: "Thriller",
        precio: 40000,
        imagen: debbie,
        descripcion: "De la autora superventas del fenómeno internacional La asistenta, llega un inquietante y provocador thriller sobre una mujer que ya no está dispuesta a callar, y va a hacer justicia... cueste lo que cueste.   Debbie Mullen está al límite. Durante años ha ofrecido útiles y juiciosos consejos en su columna semanal, «Querida Debbie», a la que las mujeres de Nueva Inglaterra acuden en busca de empatía y sabiduría cotidiana.   Gracias a su trabajo ha escuchado a innumerables esposas ignoradas, menospreciadas o incluso maltratadas por sus maridos. Y Debbie siempre hace lo posible por guiarlas en la dirección correcta. O, al menos, lo hacía. Últimamente, su vida está fuera de control. Acaba de perder su trabajo. Algo raro está ocurriendo con sus hijas adolescentes. Y su marido guarda secretos, o eso parece a juzgar por la aplicación de geolocalización que ella misma ha instalado en su celular. Pero Debbie ya está harta de hacer lo moralmente correcto. Harta de ser sensata y práctica. Ha llegado el momento de seguir sus propios consejos.",
        stock: 10,
    }
];