// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import Skills from '../components/Skills';
// import Projects from '../components/Projects'

// export default function Home() {
//   return (
//     <div>
//       <Hero /> {/* Other components or content here */}
//       <About /> {/* Other components or content here */}
//       <Skills /> {/* Other components or content here */}
//       <Projects /> {/* Other components or content here */}
//     </div>
//   );
// }

import Hero from '@/components/Hero';
	import About from '@/components/About';
	import Skills from '@/components/Skills';
	import Projects from '@/components/Projects';
	import Contact from '@/components/Contact';

	import Head from 'next/head';

	const Home = () => {
	  return (
		<>
		  <Head>
			<title>Carlos' Portfolio</title>
			<meta name="description" content="Carlos' Portfolio" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		  </Head>
		  <div>
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
		  </div>
		</>
	  );
	};

	export default Home;