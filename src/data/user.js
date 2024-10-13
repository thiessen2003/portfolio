const INFO = {
	main: {
		title: "Reactfolio by Gabriel Thiessen",
		name: "Gabriel Thiessen",
		email: "tgabriel@seas.upenn.edu",
		logo: "../newlogo.png",
	},

	socials: {
		github: "https://github.com/thiessen2003",
		linkedin: "https://www.linkedin.com/in/gabriel-thiessen/",
		instagram: "https://www.instagram.com/gabriel_thiessen/",
	},

	homepage: {
		title: "Computer Science student, full-stack developer, and aspiring cloud architect",
		description:
			"I am a back-end with experience working in C#, Node.js and Python. I have experience developing microservices-based, monolithic, and cloub-based code for web and mobile applications with diverse technologies and frameworks. I am also particulary interested in software architecture and working with high-performance programming languages such as Go and Rust. Fun facts: big fan of clean architecture and cold brew; favorite sport is basketball and favorite food is feijoada; if (Dog.isBetterThanCat == false) {return false}",
	},
	//I am a backend

	about: {
		title: "Hi, I'm Gabriel and ...",
		description:
			`... I was born and raised in Porto Alegre, Brazil, but I moved to the US in 2023 to start my academic journey as a Computer Science student at School of Engineering of the University of Pennsylvania. 
			I have always considered myself a quite curious and creative person (that is where the interest for coding comes from). In addition to coding and cracking my head trying to find the bugs making my unit tests to fail, I love cycling, 
			basketball, cooking, fishing, and reading. Besides from coding, I am really into the world of startups: I love to read newsletters and books about them, watch startup pitches all the time on YouTube. \n Moving back to professional topics, I have worked on a variety of projects and at different companies. 
			On the technical side, I have used a wide range of frameworks, programming languages and technologies, 
			including C#, JavaScript, Python, Swift, Rust, Go, React, Node.js, ASP.NET, Docker, and the list goes on. On the less technical jobs and projects, I have always liked to get involved with logistics and operations. Also, at Penn, I am currently a member of Spark as a red developer, one of the most relevant coding clubs at Penn, PennApps, Penn's premier hackathon, and I also work at Penn's Venture Lab and conduct research on blockchains and cybersecurity. `,
	},

	articles: {
		title: "Sometimes I also like to write down some stuff",
		description:
			"Not every single day, but sometimes I write to write articles and simple posts about personal, professional, and academic experiences. So far, I have been focused on writing some of my thoughts regarding AI and LLMs. Thus, below you can access what I have written on AI and I will hopefully write more article on different topics in the future. ",
	},

	projects: [
		{
			title: "Simple Bank",
			description:
				"Program in Go that simulates the functionality of an online banking, including making transactions and depositing money. Technologies: Go, Gin, Docker, ORMs, gRPC, PostgreSQL",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/go/go.png",
			linkText: "View Project",
			link: "https://github.com/thiessen2003/Simple-Bank",
		},

		{
			title: "Virtual Store",
			description:
				"Application to simulate the working back-end of a virtual store, including inventory managemenet and buying and selling products. Technologies: C#, ASP.NET, JWT, Microservices",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png",
			linkText: "View Project",
			link: "https://github.com/thiessen2003/Virtual-Store",
		},

		{
			title: "Twitter Clone",
			description:
				"(Under development) Application to simulate the Twitter app and all its features. Technologies: TypeScript, React, Node.js, Express.js, Axios",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/thiessen2003/Twitter-Clone",
		},

		{
			title: "AI Rust Server Creator",
			description:
				"Application integrated with OpenAI API to automatically create Rust-based web servers. Technologies: Rust, AI, Tokio, Actix, Serde.",
			logo: "https://www.rust-lang.org/logos/rust-logo-64x64.png",
			linkText: "View Project",
			link: "https://github.com/thiessen2003/Rust-Server-Auto-Creator",
		},

		{
			title: "QuizMee",
			description:
				"Educational app on Swift integrated with ChatGPT API to generate flash cards on diverse topics. Technologies: Swift, SwiftUI, AI.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/swift/swift.png",
			linkText: "View Project",
			link: "https://github.com",
		},
		{
			title: "Yahoo Finance Stock Analyzer",
			description:
				"Web application developed integrated with OpenAI Api and Hugging Face models to analyze the sentiment of stock news articles and suggest operations. Technologies: Python, Flask, AI, Hugging Face.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/thiessen2003/Yahoo-Finance-Stock-Analyzer",
		},
		{
			title: "Ticketing App",
			description:
				"Program in JavaScript that simulates the functionality of a Ticketmaster-based app to buy tickets for events using the concept of microservices. Technologies: JavaScript, Docker, Kubernetes, Node.js, Gin, React, NATS.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/thiessen2003/Even-Ticketing-App/tree/main",
		},

	],
};

export default INFO;
