import React from 'react'
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const StickyScrollSections = () => {

  const content = [
    {
      title: "HTML Development",
      description:
        "HTML (HyperText Markup Language) is the foundation of every website, defining the structure and layout of web pages. I used HTML to create well-organized and semantic page structures, ensuring better SEO, accessibility, and browser compatibility. In my projects, I build responsive skeletons with clean tags that integrate seamlessly with CSS and JavaScript for dynamic functionality.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-black">
          <img
            src="/htmll.png"
            width={300}
            height={300}
            className="w-40 h-40 object-cover scale-125 transition-transform duration-300 hover:scale-150"
            alt="HTML Logo"
          />
        </div>
      ),
    },
    {
      title: "CSS Styling",
      description:
        "CSS (Cascading Style Sheets) brings my web pages to life by adding color, layout, and responsive designs. I used Flexbox and Grid for modern layouts and custom animations to enhance user interaction. In my projects, CSS helps me deliver clean, visually appealing interfaces that work smoothly across devices and screen sizes.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white bg-black">
          <img
            src="/csss.webp"
            width={300}
            height={300}
            className="w-60 h-60 object-contain pb-4 transition-transform duration-300 hover:scale-125"
            alt="CSS Logo"
          />
        </div>
      ),
    },
    {
      title: "Tailwind CSS",
      description:
        "Tailwind CSS is my preferred styling framework for building responsive and modern UIs. I switched from traditional CSS because Tailwind’s utility-first approach not only speeds up development but also minimizes the need for large, complex CSS files. In my projects, I use Tailwind to create clean, responsive layouts and style components directly within JSX, ensuring consistency and faster design updates across all pages.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white bg-black">
          <img
            src="/tailwindcsss.png"
            width={300}
            height={300}
            className="w-60 h-60 object-contain pb-4 transition-transform duration-300 hover:scale-125"
            alt="CSS Logo"
          />
        </div>
      ),
    },
    {
      title: "JavaScript",
      description:
        "JavaScript makes my applications interactive and dynamic. I used it for client-side validations, API integrations, and smooth animations to improve user experience. In my projects, JavaScript powers features like form handling, data visualization, and real-time updates, making my web apps engaging and functional.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-black">
          <img
            src="/jss.png"
            width={300}
            height={300}
            className="w-35 h-35 object-contain object-center transition-transform duration-300 hover:scale-125"
            alt="JavaScript Logo"
          />
        </div>
      ),
    },
    {
      title: "React.js Library",
      description:
        "React.js allows me to build reusable and scalable UI components for my projects. I leverage its virtual DOM and state management to create fast, dynamic single-page applications. In my web apps, React simplifies complex user interfaces and ensures smooth, responsive performance across different platforms.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white bg-black">
          <img
            src="/react.js.png"
            width={300}
            height={300}
            className="h-43 transition-transform duration-300 hover:scale-125"
            alt="React Logo"
          />
        </div>
      ),
    },
    {
      title: "Next.js Framework",
      description:
        "Next.js enhances my React applications with server-side rendering and static generation for better SEO and performance. I used it for building scalable, production-ready applications with clean routing and optimized assets. In my projects, Next.js ensures faster load times and a smoother user experience for dynamic and static content.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-black">
          <img
            src="/nextt.png"
            width={300}
            height={300}
            className="w-60 h-35 object-center transition-transform duration-300 hover:scale-125"
            alt="Next.js Logo"
          />
        </div>
      ),
    },
    {
      title: "Node.js Backend",
      description:
        "Node.js powers the backend of my applications, enabling me to handle APIs, databases, and real-time events efficiently. Its event-driven, non-blocking architecture allows me to build scalable and fast servers. In my projects, I use Node.js with frameworks like Express to deliver secure, high-performance backends for my web apps.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-black">
          <img
            src="/node.js.png"
            width={300}
            height={300}
            className="w-60 h-50 object-contain object-center pb-10 transition-transform duration-300 hover:scale-125"
            alt="Node.js Logo"
          />
        </div>
      ),
    },
    {
      title: "MongoDB Database",
      description:
        "MongoDB is my go-to NoSQL database for storing flexible and scalable data structures. I use it to handle dynamic content and efficiently manage large datasets. In my projects, MongoDB integrates seamlessly with Node.js and supports features like real-time updates, high performance, and easy schema management for modern web apps.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-black">
          <img
            src="/mongo.png"
            width={300}
            height={300}
            className="w-60 h-60 pt-4 object-contain object-center pb-10 transition-transform duration-300 hover:scale-125"
            alt="mongoDB"
          />
        </div>
      ),
    },
  ];
  

  return (
    <div>
        <div className="relative bg-black w-full mt-60 ">
            <h1 className="text-center text-6xl font-semibold mb-10 pl-10 text-gray-300"></h1>
            <StickyScroll content={content}/>
        </div>        
    </div>
  )
}

export default StickyScrollSections
