const express = require("express");

const app = express();
const PORT = 4000;

app.set("views", "./view");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	var blogs = [
		{
			name: "Lorem ipsum dolor",
			snippet: "Lorem ipsum dolor sit amet, consectetur"
		},
		{
			name: "sit amet consectetur.",
			snippet: "adipisicing elit. Veritatis soluta voluptatibus eum."
		},
		{
			name: "Temporibus laudantium excepturi inventore!",
			snippet:
				"Pariatur natus similique necessitatibus alias ratione blanditiis eaque."
		}
	];
	res.render("index", { title: "Homepage", blogs });
});

app.get("/about", (req, res) => {
	res.render("about", { title: "About Blog" });
});

app.get("/home", (req, res) => {
	res.redirect("/");
});

app.get("/blogs/create", (req, res) => {
	res.render("create", { title: "Create a new blog" });
});

app.use((req, res) => {
	res.render("404");
});

app.use(express.static("public"))

app.listen(PORT, () => {
	console.log(`Your server is running at ${PORT}`);
});
