import React from 'react'
import "./../css/paralax.css"
import BIRD1 from "./assets/bird1.png" 
import BIRD2 from "./assets/bird2.png" 
import FOREST from "./assets/forest.png" 
import ROCKS from "./assets/rocks.png" 
import WATER from "./assets/water.png" 

import { Parallax, Background } from 'react-parallax';

const Paralax = () => {
  return (
    <section className='navbar'>
        <header id="header">
            <a href="#" className="logo">Jungle</a>
            <ul>
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Destination</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
        <div className='adv'>
                    <h2 id="text"><span>It's time for a new</span><br />Adventure</h2>
                    <a href="#" id="btn">Explore</a>
            <Parallax
            strength={400}
            className="para"
            >      
                <Background className='custom-bg'>
                    <img src={BIRD1} alt="bird-right" id="bird1" />
                </Background>
                <Background className='custom-bg'>
                    <img src={BIRD2} alt="bird-left" id="bird2" />
                </Background>
                <Background className='custom-bg'>
                     <img src={FOREST} alt="forest" id="forest" />
                </Background>
                <Background className='custom-bg'>
                    <img src={ROCKS} alt="rocks" id="rocks" />
                </Background>
                <Background className='custom-bg'>
                    <img src={WATER} alt="water" id="water" />
                </Background>
            </Parallax>
        </div>
        <div className="sec">
            <h2>Parallax Scrolling Effects</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam voluptatem non enim nobis 
            repellendus fugit adipisci, architecto minima eveniet voluptates quis quidem beatae aperiam fugiat, dolores, culpa quisquam eius. <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam architecto expedita impedit optio fugiat facilis nobis voluptatibus fuga assumenda labore repellendus perspiciatis aut rerum voluptas quibusdam, nihil, blanditiis molestiae modi? <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias placeat sequi ex, nihil, sunt voluptatem excepturi magnam aut omnis voluptas nam illum perspiciatis nobis commodi beatae minus, corporis impedit.<br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur excepturi impedit rem dolor corporis qui quidem architecto repellendus perferendis doloribus, nulla sed accusantium accusamus! Suscipit labore rerum magni dolores.<br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam reiciendis natus, maxime soluta quis facilis repudiandae voluptate dolorem nulla eveniet ut, obcaecati illum quae dignissimos quas tempore? Officiis, libero totam!
            Repudiandae illum optio pariatur deleniti quisquam fugiat autem asperiores incidunt, voluptates provident corporis, similique ullam iure eos animi consequatur ea deserunt illo quo reiciendis eligendi nemo! Fugit ut nemo voluptatum.
            Molestias quisquam molestiae, distinctio nobis iure harum reiciendis in! Ipsa, repellat quisquam. Tempore sed cupiditate, quasi animi repellat dolor eligendi, rem sint quod, officiis laborum ad qui? Vero, cum rem?
            Commodi magnam officiis aliquid maiores sit, nesciunt nisi laboriosam eum rerum soluta culpa nihil porro consectetur praesentium eos modi dolorum odio iste neque quos ipsa unde dolorem ab. Odio, recusandae.0<br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut quia eum incidunt voluptas rerum soluta reiciendis at labore! Error laboriosam repellat culpa expedita nisi rem quos magni distinctio suscipit.
            Qui, laboriosam exercitationem. Repellendus modi officia perspiciatis veniam quo nesciunt, sunt dolores corrupti voluptatem nobis dicta eius similique libero. Veritatis vero ducimus reprehenderit eligendi a deleniti distinctio voluptate dolore totam.
            Blanditiis itaque debitis aperiam assumenda velit necessitatibus illo molestias obcaecati neque eius. Est tempora nemo enim aliquam voluptate quisquam, optio maxime. Optio impedit soluta quod minus doloremque quas assumenda reiciendis?
            Corrupti, velit ipsum maiores voluptas, distinctio quo natus eum ut labore itaque officia iure deleniti ducimus iusto est consequuntur maxime pariatur alias quaerat nesciunt nemo omnis, laborum recusandae? Accusantium, unde!
            Beatae porro labore architecto dolorem distinctio aliquid placeat. Facilis repellat impedit quaerat animi ducimus consequatur at explicabo a earum. Hic placeat adipisci harum omnis nobis veritatis eveniet earum suscipit ex.
            Aut officiis sint cumque minima odio dolores nobis, quod, in non suscipit maiores quos quas atque aspernatur inventore obcaecati quo voluptate doloremque quam consequuntur a porro, unde voluptatibus. Reprehenderit, facere!
            Eligendi nobis aliquam vel quos magni laborum dolore repellat hic, maxime obcaecati magnam odit ullam facere eos, doloremque porro omnis aut ipsa, enim deserunt earum harum quo mollitia accusamus? Natus?
            Maxime culpa quam odit amet molestias, qui id dolore cupiditate nam maiores officia. Temporibus blanditiis quos laboriosam eos quam odio error, ab quis sed, praesentium aperiam dicta ea enim. Corporis!
            Nemo esse qui quod, deleniti excepturi debitis nesciunt adipisci quam aliquid a quidem harum, dolore libero nobis, reprehenderit deserunt expedita voluptatibus iste facilis nulla culpa. Dolor ad ipsam esse eveniet.
            Possimus maxime nisi placeat reprehenderit facere tempora. Aperiam excepturi, cupiditate numquam minus dignissimos consectetur soluta. Tenetur cumque dolores debitis repudiandae praesentium, accusantium dolor, esse quae atque optio mollitia ratione porro!
            Accusantium at excepturi illum quaerat odit hic enim. Provident, iure sit tenetur ratione quidem ipsa rem ea similique numquam nostrum est repellat voluptas atque vero, eveniet autem laudantium. Necessitatibus, porro.
            Voluptate quis officiis inventore aut. Repellendus beatae, iure iusto commodi, necessitatibus consequatur perferendis odit officiis numquam perspiciatis dolores? Id eius ducimus porro! Facere fugiat ipsam numquam quidem iusto officiis soluta.
            Aspernatur, officiis inventore? Esse maxime eligendi doloremque deleniti optio officiis voluptates voluptas illum repellendus. Accusamus ullam sunt aut eos debitis deserunt iusto, incidunt pariatur velit aliquam eligendi quam, quod exercitationem.
            Dicta omnis ipsam natus fugit facilis dolorem odit distinctio architecto magni iusto fugiat enim perspiciatis, optio repellat doloremque totam. Delectus repellendus quis laudantium quod magni atque quam itaque eligendi ex?
            Eum tempora doloremque ea natus voluptas. Natus, eius amet id nemo minima quasi ducimus accusantium eos assumenda aut voluptatibus mollitia ex asperiores facilis beatae adipisci atque necessitatibus rem iusto nulla.
            Voluptate, velit modi corrupti temporibus alias est facilis exercitationem reiciendis illum qui minus quas ratione consequatur a molestias, debitis sed. Suscipit totam ex nobis error placeat ipsum praesentium pariatur sequi?
            Itaque voluptatum doloremque harum illum numquam, saepe hic necessitatibus possimus expedita sunt, quam enim temporibus repellendus labore sit nisi odio accusamus ullam deserunt? Necessitatibus repellendus rerum deleniti nam non suscipit!
            Ad modi aliquam non magni deleniti ab dolorem explicabo dignissimos at eveniet dicta quos qui cum eligendi totam voluptatum laborum nobis, autem asperiores? Asperiores nihil sint earum temporibus quidem. Nobis!
            Voluptate, enim dolore laboriosam officia placeat aspernatur architecto blanditiis non mollitia, corrupti ullam accusantium id, similique iure ipsum? Explicabo nobis quis necessitatibus nisi dicta, repudiandae nostrum veniam dolorem at sed.
            Quisquam odit est repudiandae obcaecati, quibusdam neque delectus eius nostrum incidunt dicta. Veniam perspiciatis repudiandae praesentium ad fugiat? Eveniet error cupiditate enim pariatur minima veritatis quae quisquam fugiat dolores neque.
            Non, earum! Nihil eos mollitia cumque corporis exercitationem officiis iusto ratione blanditiis aut facere eius expedita maxime deleniti totam praesentium, modi error sequi enim ducimus facilis ipsum omnis. Facilis, cumque.
            Hic eum, error architecto aliquam facilis optio. Voluptatibus consequuntur laboriosam porro id fugit consectetur dicta quidem alias illum, repudiandae iusto nobis? At natus quas exercitationem consectetur consequatur officia aperiam nobis.
            Cumque, consequatur corporis. Laudantium reiciendis asperiores doloremque aliquid tenetur ipsum dicta enim hic. Facilis, corrupti sint. Obcaecati, quod quia, ullam maxime exercitationem numquam officia eaque esse, earum vel quaerat aliquam?
            Quaerat maxime qui illum error fugiat culpa quasi expedita sapiente necessitatibus? Ipsum explicabo veniam, quisquam voluptatibus maxime, velit nihil ad, dolorem in porro ea itaque nostrum tenetur voluptatum? Iste, autem.
            Quod in cum harum alias iusto nobis amet officia numquam eligendi quam voluptatem neque quae facilis impedit, mollitia corporis nemo rem architecto distinctio ea quaerat id illum voluptate. Perspiciatis, sint?
            Repudiandae quas doloremque dolores ut at voluptatum ipsum, velit est, ullam, excepturi molestias nostrum laudantium. Culpa repellendus iste nam dolorem nobis, adipisci, quaerat, facere facilis iure repudiandae odio. Quae, fugit.
            Obcaecati voluptates temporibus quo rerum fugit doloribus quam ipsum voluptatem et sed maiores cupiditate perspiciatis, non enim odit itaque veritatis. Quam repellendus dolorum in architecto! Veniam voluptatibus culpa porro sapiente!
            Quisquam vero possimus quam consectetur accusamus accusantium temporibus repudiandae nesciunt est cupiditate ex vitae ea, maxime fugiat soluta aliquid architecto culpa delectus! Nulla asperiores voluptate culpa officia a id? Nihil.
            A sapiente sunt sit eveniet distinctio nihil culpa. Voluptatibus quibusdam obcaecati provident vero aspernatur corporis aliquam. Veritatis eius harum quam, numquam eaque nesciunt, impedit deserunt, laboriosam illo error architecto? Vel!
            Omnis hic animi nisi rerum totam expedita consequuntur quas? Nostrum iusto eaque aut necessitatibus iure ut optio voluptates voluptate voluptatibus assumenda quia molestiae, aliquid error dolorem facilis, eligendi cumque suscipit?
            Excepturi velit architecto consectetur eius a nesciunt molestiae, tempore quibusdam corrupti debitis, eum atque aut eaque delectus. Consequatur reprehenderit ducimus neque incidunt itaque quos sequi sint soluta, fuga accusamus sit?
            Quos incidunt dolorum repudiandae facere vel consequatur, placeat nihil ab unde vero sed sunt, ex quia cumque. Nostrum odio excepturi sit voluptas, eaque inventore molestiae ad maxime ullam distinctio. Ratione?
            At est eum magni dolores commodi quos. Officiis, vero. Temporibus repellendus itaque molestiae quos laborum quis possimus soluta vero atque, ut reprehenderit, error beatae magni impedit tempore inventore explicabo est.
            Modi excepturi quidem ut, at consequuntur cupiditate, inventore et odio molestias eaque necessitatibus. Repellat officia rerum atque eligendi impedit culpa modi provident molestiae eos, vel natus quod, reprehenderit, quos maiores.
            Consectetur provident accusantium cumque debitis at veritatis, dignissimos ab corporis expedita, nulla exercitationem libero fugit fugiat, consequuntur itaque? Soluta natus alias optio. Ipsa laudantium aperiam possimus. Quod sunt consequatur praesentium?
            Reiciendis eum accusantium minima fuga voluptatibus dolorem explicabo nam iusto, velit dignissimos maxime molestiae libero amet corporis dolor non officiis, unde quod sint aut eligendi animi. Aliquam non veniam error?
            Maiores expedita dignissimos maxime. Tenetur mollitia quas minima aliquid deserunt numquam consequuntur consectetur? Amet, obcaecati incidunt similique consequuntur harum repellendus, deserunt dolorem quia quaerat cupiditate quisquam est adipisci explicabo cum.
            Nobis iusto quae voluptates tenetur officia mollitia voluptatibus maxime at, quibusdam expedita, ipsum similique totam veniam assumenda saepe ipsam modi illum magnam aut amet, voluptas quos neque eligendi. Maiores, quo?
            Ratione repudiandae itaque beatae accusamus pariatur quidem nobis totam omnis repellendus vero eveniet delectus, molestiae consequatur doloribus. Rerum, modi corporis tenetur mollitia atque pariatur est eveniet accusamus quasi laudantium libero!
            Cupiditate laborum ex totam inventore blanditiis aut, sed asperiores molestias ipsum fugit itaque, debitis eveniet minus dignissimos quidem porro ab, eius dolorem deserunt et eum! Dolor consequuntur excepturi eius dolorem!
            Blanditiis vitae consequuntur est libero. Sit, maiores itaque quisquam illum corporis nam rerum architecto consectetur est distinctio amet error quae ipsa odit, necessitatibus, molestiae quaerat eligendi! Maxime inventore sapiente cumque!
            Et enim fugit at numquam quis autem porro consequuntur quaerat mollitia non harum tempore cupiditate quibusdam expedita nulla, eius distinctio dolores quas quod nisi sit esse. Sequi odit dolorum commodi.
            Dicta, cum. Exercitationem voluptate dolor debitis? Voluptas libero, nesciunt fugiat rem deleniti iure corrupti mollitia, veritatis asperiores non quibusdam adipisci expedita dolore cumque distinctio eveniet itaque sapiente praesentium odio beatae.
            Corporis suscipit dolorum aut mollitia fugit, animi labore, molestiae eum deleniti eveniet ad alias quia culpa, doloribus molestias. Dolorem nostrum modi quam, et esse officia voluptatibus magni dicta odit laboriosam!
            Sunt dicta suscipit aspernatur impedit totam est recusandae sapiente neque aperiam facere expedita ex accusantium saepe perspiciatis possimus, vel necessitatibus reiciendis aut natus voluptatem doloremque quia soluta! Voluptates, culpa corrupti!
            Fugit libero animi hic. Perspiciatis, excepturi. Accusamus iusto ducimus quos doloremque nisi voluptatem voluptatibus quis, eligendi, nesciunt aut sequi maxime qui excepturi amet beatae quasi. Reiciendis nobis corporis ullam sapiente!
            Excepturi earum eligendi vero? Fuga doloremque unde officia nesciunt odit aperiam natus, consequatur esse harum ipsa dolores provident nam quo quidem eveniet voluptate magnam beatae! Harum modi quibusdam deleniti temporibus!
            Ipsam modi voluptas quae eum consequuntur dolore deleniti nobis praesentium minima ea deserunt quos aliquam, itaque rerum doloremque vitae ducimus cumque delectus ad aut, fugit mollitia dignissimos? Quae, voluptates earum!
            Quidem, similique hic ea culpa a deleniti sed labore est adipisci earum! Autem, odio! Aliquam modi iure sequi accusantium, delectus dolor architecto id praesentium voluptate rerum commodi, doloribus, eaque dignissimos.
            Possimus, sapiente eveniet sit blanditiis unde saepe, modi assumenda dolor in tenetur quaerat numquam delectus perspiciatis, asperiores odit molestiae et aspernatur nostrum voluptas repellat. Deserunt rerum quam qui incidunt temporibus.
            Alias iusto reiciendis aperiam assumenda architecto ipsa nisi, possimus nemo saepe voluptate hic debitis consequatur accusantium adipisci? Nam magnam tenetur quia laudantium, porro nulla veritatis sed ipsum praesentium quisquam repellat?
            Vitae voluptates debitis eum rerum, exercitationem iure. Ducimus placeat ab nesciunt porro modi nihil earum quam tenetur, soluta vel quibusdam blanditiis, quo rerum sunt distinctio eligendi eius perferendis aliquid quisquam.
            Qui totam repellat corporis perspiciatis ipsum quia quas eius labore suscipit iure? Qui nostrum est, sequi nulla veritatis nesciunt nihil iusto omnis harum illo impedit, facilis illum incidunt dolorum consectetur?
            Quasi expedita sapiente blanditiis autem cumque voluptatum a eaque est rem ducimus deserunt beatae, quos distinctio repellat illo assumenda, qui corporis quam. Nulla eum excepturi placeat expedita repellendus delectus voluptatibus?
            Ex, quidem ab amet nulla mollitia laboriosam beatae, tempore vitae illum eligendi deserunt, id nobis et non iste voluptate explicabo dolores suscipit ea excepturi ipsa. Nesciunt dolore nobis voluptates repellat?
            Animi aut velit cum possimus libero ab optio magni totam impedit officiis inventore quibusdam a, suscipit voluptatum exercitationem culpa aspernatur ea provident doloremque eos quod quis quam. Libero, nemo rerum.
            Doloremque commodi doloribus iusto numquam unde voluptatibus, veritatis dolore, asperiores quis quidem ipsa dignissimos deleniti necessitatibus. Et, amet quis officiis neque quibusdam, animi deleniti voluptates molestiae quisquam, reiciendis fugit repellendus.
            Exercitationem, aperiam. Blanditiis, exercitationem illo. Eligendi ipsum quibusdam, cupiditate laudantium qui vel vero explicabo autem culpa molestiae! Aut sequi repellat unde modi iure expedita, quibusdam illum eius quo tempore eveniet?
            Obcaecati fugit voluptas consequuntur aliquid cumque quos necessitatibus illum soluta, ea nulla fugiat a! Accusamus, repudiandae alias. Doloremque eos fugit, pariatur nam in delectus tempora repellat, architecto totam, veniam aliquid.
            Autem commodi architecto aut est at maiores sequi sapiente ex accusamus quae ut iure, accusantium voluptates repellendus fugiat assumenda eveniet harum aliquid doloribus hic! Quam debitis deserunt voluptatem consequuntur ea? <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam voluptatem non enim nobis.
            </p>
        </div>
    </section>
  )
}

export default Paralax