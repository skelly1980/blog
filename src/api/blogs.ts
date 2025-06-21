import coding from "../../public/blog-coding.png";
import flyFishing from "../../public/blog-flyfishing.png";
import hockey from "../../public/blog-hockey.png";
import { Blog, BlogContent } from "../types/blog";

export const createBlog = (blog: BlogContent): Blog => {
	// Save the blog to the database or perform any other action
	return {
		id: 1,
		date: "2025-04-25",
    ...blog
	};
};

export const getBlogs = (): Blog[] => {
	fetch("http://localhost:3000/api/blogs")
		.then((response) => response.json())
		.then((data) => {
			console.log("Blogs fetched successfully:", data);
		});
	return [
		{
			id: 1,
			title: "Learning to Code: Why Slower Is Sometimes Smarter",
			img: coding,
			description: "Bootcamps and college coding courses often move too fast for beginners. Here's why learning to code at your own pace — through Udemy, tutoring, and repetition — is a better path.",
			tags: ["coding", "learning to code", "bootcamp vs self taught", "udemy", "programming advice", "coding bootcamps", "programming for beginners"],
			date: "2025-04-25",
			content: `
Learning to Code: Why Slower Is Sometimes Smarter

When it comes to learning how to code, there’s no shortage of advice. Some people say you need a computer science degree. Others swear by intensive coding bootcamps. And while both paths *can* work for some, they often move too quickly for most beginners to truly succeed.

The truth is: **coding takes repetition, not just exposure.**  
If you move too fast, you’re only stacking topics on top of shaky foundations.

## The Problem With Bootcamps and College Courses

Bootcamps and college coding courses often have rigid schedules designed to cover a massive amount of material in a short amount of time. One week you’re learning HTML and CSS — the next, you’re deep into JavaScript frameworks or server-side APIs. Every class introduces something new.

But here’s the catch: **mastery doesn’t happen at that speed.**  
In coding, concepts like functions, loops, objects, and APIs need *real* hands-on practice before they click. If you move onto the next topic before the last one truly sinks in, you’re building your knowledge on an unstable base.

This "move fast" model leads to two major problems:
- **Surface-level understanding:** You know *of* concepts but can't apply them when needed.
- **Frustration and burnout:** You feel lost, discouraged, and overwhelmed — not because you can’t code, but because you weren’t given time to absorb and apply what you learned.

## A Better Approach: Learn at Your Own Pace

Platforms like **Udemy**, **freeCodeCamp**, and **Scrimba**, along with **one-on-one tutoring**, offer a much better learning environment for most people. Why?  
Because you set the pace.  

You can:
- Rewatch lessons as many times as you need.
- Pause when something doesn’t make sense — and *actually* practice it.
- Spend a week (or longer) on a tricky concept like JavaScript promises if you need to — without getting left behind.

If you add **one-on-one tutoring** into the mix, it’s even better. You get personalized help, immediate feedback, and can focus entirely on your specific struggles without worrying about keeping up with a group.

**Repetition and practice** are the real keys to learning how to code.  
Not finishing a checklist of topics.

## Final Thoughts

Coding is not about how *fast* you learn — it’s about how *deeply* you understand each step along the way.  
If you’re just starting out, give yourself permission to go slow. Don’t feel pressured by bootcamp timelines or semester schedules. Choose a path that lets you master the basics at your own pace, with as much repetition as you need.

Because in the world of coding, slow and steady really *does* win the race.
`,
		},
		{
			id: 2,
			title: "blog 2",
			img: flyFishing,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit similique repellendus rerum est quam quasi in temporibus pariatur id?",
			tags: ["#NHL", "#ColoradoAvalanche", "#DallasStars", "#StanleyCupPlayoffs", "#Hockey", "#SportsAnalysis", "#Playoffs2025"],
			date: "2025-04-28",
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit similique repellendus rerum est quam quasi in temporibus pariatur id?",
		},
		{
			id: 3,
			title: "Avalanche’s Speed and Execution Overwhelm Stars in 2-0 Win",
			img: hockey,
			description: "The Colorado Avalanche showcased their relentless speed and precision to defeat the Dallas Stars 2-0, tying their playoff series 2-2. Here’s how Colorado’s execution left Dallas struggling to keep up.",
			tags: ["#NHL", "#ColoradoAvalanche", "#DallasStars", "#StanleyCupPlayoffs", "#Hockey", "#SportsAnalysis", "#Playoffs2025"],
			date: "2025-04-28",
			content: `​The Colorado Avalanche delivered a commanding performance in Game 4 of their first-round playoff series, defeating the Dallas Stars 4-0 at Ball Arena on Saturday night. This victory ties the series at 2-2 and showcased the Avalanche's speed and execution, which proved too much for the Stars to handle.​

Avalanche's Speed Overwhelms Stars
From the outset, Colorado's relentless pace set the tone. The Avalanche outshot the Stars 48-23, consistently pressuring Dallas and creating scoring opportunities. Logan O'Connor opened the scoring with a shorthanded goal, followed by a power-play goal from Nathan MacKinnon, highlighting Colorado's special teams' effectiveness. ​

Gabriel Landeskog, returning from a nearly three-year absence due to a knee injury, made a significant impact by scoring his first goal since 2022 and adding an assist. His performance energized the team and the crowd, exemplifying the depth and resilience of the Avalanche roster. ​

Defensive Mastery and Goaltending Excellence
Goaltender Mackenzie Blackwood recorded his first career playoff shutout with 23 saves, anchoring a defense that stifled Dallas's offensive efforts. The Avalanche's defensive unit effectively limited the Stars' scoring chances, maintaining control throughout the game. ​

Looking Ahead
With the series now tied, the momentum shifts as the teams prepare for Game 5 in Dallas on Monday. The Avalanche's display of speed, execution, and depth in Game 4 sets a high bar, and the Stars will need to adjust to counter Colorado's dynamic play.`,
		},
		{
			id: 4,
			title: "blog 4",
			img: hockey,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit similique repellendus rerum est quam quasi in temporibus pariatur id?",
			tags: ["#NHL", "#ColoradoAvalanche", "#DallasStars", "#StanleyCupPlayoffs", "#Hockey", "#SportsAnalysis", "#Playoffs2025"],
			date: "2025-04-28",
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit similique repellendus rerum est quam quasi in temporibus pariatur id?",
		},
		{
			id: 5,
			title: "blog 5",
			img: hockey,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit similique repellendus rerum est quam quasi in temporibus pariatur id?",
			tags: ["#NHL", "#ColoradoAvalanche", "#DallasStars", "#StanleyCupPlayoffs", "#Hockey", "#SportsAnalysis", "#Playoffs2025"],
			date: "2025-04-28",
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit similique repellendus rerum est quam quasi in temporibus pariatur id?",
		},
	];
};
