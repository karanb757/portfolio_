import React from 'react'
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Link from 'next/link';

const StickyScrollSections = () => {

  //Programming Languages -> 
    const content1 = [
      {
        title: "C",
        description:
          "C is a general-purpose, procedural programming language that provides low-level memory access and efficient performance. It is widely used for system programming, operating systems, embedded systems, and applications where speed and resource control are critical. C serves as the foundation for many modern languages like C++, Java, and Python, making it a cornerstone of computer science and software development.",
        content: (
          <div className="flex w-60 h-60 items-center justify-center bg-black">
            <img
              src="/StickyScroll/c.jpg"
              width={300}
              height={300}
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-36 lg:h-28 object-contain transition-transform duration-300 hover:scale-110"
              alt="c logo"
            />
          </div>
        ),
      },
      {
        title: "C++",
        description:
          "C++ is a powerful, high-performance programming language widely used for system software, game development, and applications requiring efficient resource management. C++ supports multiple programming paradigms including procedural, object-oriented, and generic programming through templates, making it suitable for complex, performance-critical applications across various domains.",
        content: (
          <div className="flex w-60 h-60 items-center justify-center bg-black">
            <img
              src="/StickyScroll/c++.png"
              width={300}
              height={300}
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-36 lg:h-36 object-contain transition-transform duration-300 hover:scale-110"
              alt="c++ logo"
            />
          </div>
        ),
      },
    {
      title: "JavaScript",
      description:
        "JavaScript makes my applications interactive and dynamic. I used it for client-side validations, API integrations, and smooth animations to improve user experience. In my projects, JavaScript powers features like form handling, data visualization, and real-time updates, making my web apps engaging and functional.",
      content: (
        <div className="flex w-60 h-60 items-center justify-center bg-black">
          <img
            src="/jss.png"
            width={300}
            height={300}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-36 lg:h-30 mb-3 object-contain transition-transform duration-300 hover:scale-110"
            alt="JavaScript Logo"
          />
        </div>
      ),
    },
  ]

  const content2 = [
    {
      title: "HTML",
      description:
        "HTML (HyperText Markup Language) is the foundation of every website, defining the structure and layout of web pages. I used HTML to create well-organized and semantic page structures, ensuring better SEO, accessibility, and browser compatibility. In my projects, I build responsive skeletons with clean tags that integrate seamlessly with CSS and JavaScript for dynamic functionality.",
      content: (
        <div className="flex w-60 h-60 items-center justify-center bg-black">
          <img
            src="/htmll.png"
            width={300}
            height={300}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-50 lg:h-50 object-cover transition-transform duration-300 hover:scale-110"
            alt="HTML Logo"
          />
        </div>
      ),
    },
    {
      title: "CSS",
      description:
        "CSS (Cascading Style Sheets) brings my web pages to life by adding color, layout, and responsive designs. I used Flexbox and Grid for modern layouts and custom animations to enhance user interaction. In my projects, CSS helps me deliver clean, visually appealing interfaces that work smoothly across devices and screen sizes.",
      content: (
        <div className="flex w-60 h-60 items-center justify-center bg-black">
          <img
            src="/csss.webp"
            width={300}
            height={300}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-50 lg:h-50 object-cover transition-transform duration-300 hover:scale-110"
            alt="CSS Logo"
          />
        </div>
      ),
    },
    {
      title: "Tailwind CSS",
      description:
        "Tailwind CSS is my preferred styling framework for building responsive and modern UIs. I switched from traditional CSS because Tailwind's utility-first approach not only speeds up development but also minimizes the need for large, complex CSS files. In my projects, I use Tailwind to create clean, responsive layouts and style components directly within JSX, ensuring consistency and faster design updates across all pages.",
      content: (
        <div className="flex w-60 h-60 items-center justify-center bg-black">
          <img
            src="/tailwindcsss.png"
            width={300}
            height={300}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-36 lg:h-36 object-contain transition-transform duration-300 hover:scale-110"
            alt="Tailwind CSS Logo"
          />
        </div>
      ),
    },
    {
      title: "React.JS ",
      description:
        "React.js allows me to build reusable and scalable UI components for my projects. I leverage its virtual DOM and state management to create fast, dynamic single-page applications. In my web apps, React simplifies complex user interfaces and ensures smooth, responsive performance across different platforms.",
      content: (
        <div className="flex w-60 h-60 items-center justify-center bg-black">
          <img
            src="/react.js.png"
            width={300}
            height={300}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-50 lg:h-50 object-cover transition-transform duration-300 hover:scale-110"
            alt="React Logo"
          />
        </div>
      ),
    },
    {
      title: "Next.JS",
      description:
        "Next.js enhances my React applications with server-side rendering and static generation for better SEO and performance. I used it for building scalable, production-ready applications with clean routing and optimized assets. In my projects, Next.js ensures faster load times and a smoother user experience for dynamic and static content.",
      content: (
        <div className="flex w-60 h-60 items-center justify-center bg-black">
          <img
            src="/next.png"
            width={300}
            height={300}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-50 lg:h-50 object-cover transition-transform duration-300 hover:scale-110"
            alt="Next.js Logo"
          />
        </div>
      ),
    },
  ];

  //  State Management & Testing - data -> 
  const content3 = [
    {
      title: "Redux Toolkit ",
      description:
        "Redux Toolkit allows me to manage application state in a more efficient and scalable way. By simplifying the Redux setup, it reduces boilerplate code, making state management predictable and easier to maintain. In my projects, Redux Toolkit streamlines complex state logic, integrates easily with React, and ensures smooth performance when handling large, dynamic applications",
      content: (
        <div className="flex w-60 h-60 items-center justify-center bg-black">
          <img
            src="/StickyScroll/redux.jpg"
            width={300}
            height={300}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-50 lg:h-50 object-cover transition-transform duration-300 hover:scale-110"
            alt="Redux Logo"
          />
        </div>
      ),
    },
    {
      title: "Zustand",
      description:
        "Zustand is a small, fast, and scalable state management solution with a simple API based on hooks. It provides a minimalistic approach to state management without the boilerplate of Redux while offering similar capabilities. Zustand features a simple hook-based API, minimal boilerplate, built-in middleware support, excellent TypeScript integration, and the ability to manage state without wrapping components in providers, making it ideal for small to medium applications with straightforward state needs.",
      content: (
        <div className="flex w-60 h-60 items-center justify-center bg-black">
          <img
            src="/StickyScroll/zustand2.webp"
            width={300}
            height={300}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-49 lg:h-40 object-cover transition-transform duration-300 hover:scale-110"
            alt="Zustand logo"
          />
        </div>
      ),
    },
    {
      title: "React Query",
      description:
        "React Query (TanStack Query) is a powerful data synchronization library for React applications that handles server state management, caching, synchronization, and updating server data. It simplifies data fetching with hooks that provide caching, background updates, stale-while-revalidate strategies, and pagination support. React Query eliminates the need for redundant global state for server data, reduces network requests through smart caching, and provides excellent devtools for debugging and monitoring query states.",
      content: (
        <div className="flex w-60 h-60 items-center justify-center bg-black">
          <img
            src="/StickyScroll/reactQuery.webp"
            width={300}
            height={300}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-50 lg:h-50 object-contain transition-transform duration-300 hover:scale-110"
            alt="React Query logo"
          />
        </div>
      ),
    },
  ]

  // Database - content
  const content4 = [
    {
        title: "MongoDB Database",
        description:
          "MongoDB is my go-to NoSQL database for storing flexible and scalable data structures. I use it to handle dynamic content and efficiently manage large datasets. In my projects, MongoDB integrates seamlessly with Node.js and supports features like real-time updates, high performance, and easy schema management for modern web apps.",
        content: (
          <div className="flex w-60 h-60 items-center justify-center bg-black">
            <img
              src="/mongo.png"
              width={300}
              height={300}
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-30 lg:h-30 object-contain transition-transform duration-300 hover:scale-110"
              alt="MongoDB"
            />
          </div>
        ),
      },
      {
        title: "Supabase",
        description:
          "Supabase is an open-source Firebase alternative providing a PostgreSQL database, authentication, instant APIs, real-time subscriptions, and storage. It simplifies backend development with built-in authentication, serverless functions, and easy scalability while maintaining the power and reliability of PostgreSQL with developer-friendly tools and APIs.",
        content: (
          <div className="flex w-60 h-60 items-center justify-center bg-black">
            <img
              src="/StickyScroll/supabase2.png"
              width={300}
              height={300}
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-50 lg:h-50 object-contain transition-transform duration-300 hover:scale-110"
              alt="Supabase logo"
            />
          </div>
        ),
      },
  ]

  //backend & apis -> 
  const content5 = [
    {
      title: "Express.js",
      description:
        "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies server creation with powerful features for web and mobile applications, offering middleware support, routing, template engines, and easy integration with databases. Express provides a thin layer of fundamental web application features without obscuring Node.js features.",
      content: (
        <div className="flex w-60 h-60 items-center justify-center bg-black">
          <img
            src="/StickyScroll/express.png"
            width={300}
            height={300}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-50 lg:h-50 object-contain transition-transform duration-300 hover:scale-110"
            alt="Express.js logo"
          />
        </div>
      ),
    },
    {
      title: "Node.JS Backend",
      description:
        "Node.js powers the backend of my applications, enabling me to handle APIs, databases, and real-time events efficiently. Its event-driven, non-blocking architecture allows me to build scalable and fast servers. In my projects, I use Node.js with frameworks like Express to deliver secure, high-performance backends for my web apps.",
      content: (
        <div className="flex w-60 h-60 items-center justify-center bg-black">
          <img
            src="/Node.js.png"
            width={300}
            height={300}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-36 lg:h-36 object-contain transition-transform duration-300 hover:scale-110"
            alt="Node.js Logo"
          />
        </div>
      ),
    },
    {
      title: "RESTful APIs",
      description:
        "RESTful APIs are architectural style for designing networked applications using HTTP protocols. They provide a standardized way for systems to communicate over the web using stateless operations and standard HTTP methods (GET, POST, PUT, DELETE). REST APIs enable clean separation between client and server, scalability through statelessness, cacheability for improved performance, and uniform interface for consistent communication between different systems and platforms.",
      content: (
        <div className="flex w-60 h-60 items-center justify-center bg-black">
          <img
            src="/StickyScroll/restfulAPI.png"
            width={300}
            height={300}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-50 lg:h-50 object-contain transition-transform duration-300 hover:scale-110"
            alt="RESTful API logo"
          />
        </div>
      ),
    },
    {
      title: "GraphQL",
      description:
        "GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. It provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need, and makes it easier to evolve APIs over time. GraphQL enables efficient data fetching with single endpoints, reduces over-fetching and under-fetching of data, and provides strong typing and introspection capabilities for better developer experience.",
      content: (
        <div className="flex w-60 h-60 items-center justify-center bg-black">
          <img
            src="/StickyScroll/graphQL.jpeg"
            width={300}
            height={300}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-50 lg:h-50 object-contain transition-transform duration-300 hover:scale-110"
            alt="GraphQL logo"
          />
        </div>
      ),
    },

  ]
  
  return (
    <div>
        <div className="relative bg-black w-full mt-0 md:mt-8 lg:mt-12 p-4 sm:p-0">
            <h1 className="text-center text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 lg:px-10 text-gray-300 pb-20">
            Programming Languages
            </h1>
            <StickyScroll content={content1}/>
            <div className='pb-35 lg:pb-60 xl:pb-60'></div>

            <h1 className="text-center text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 lg:px-10 text-gray-300 pb-20">
              Frontend Tools
            </h1>
            <StickyScroll content={content2}/>
            <div className='pb-35 lg:pb-60 xl:pb-60'></div>

            <h1 className="text-center text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 lg:px-10 text-gray-300 pb-20">
              State Management 
            </h1>
            <StickyScroll content={content3}/>
            <div className='pb-35 lg:pb-60 xl:pb-60'></div>

            <h1 className="text-center text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 lg:px-10 text-gray-300 pb-20">
              Database
            </h1>
            <StickyScroll content={content4}/>
            <div className='pb-35 lg:pb-60 xl:pb-60'></div>

            <h1 className="text-center text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 lg:px-10 text-gray-300 pb-20">
              Backend & APIs
            </h1>
            <StickyScroll content={content5}/>

            <Link href="/showcase">
            <div className='flex items-center justify-end'>
              <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDBlb2xkcWQ5c3d4YWMwNHZ3emtxM2NpZmV2Znh2aGszamU4MWltaSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/nmSI3nLv8gCJRWM4bK/giphy.gif" alt="" className='h-20 w-25 mr-8'/>
            </div>
            <h2 className='flex justify-end pr-2 text-xs mr-10 pb-6'>NEXT PAGE</h2>
            </Link>
        </div>        
    </div>
  )
}

export default StickyScrollSections