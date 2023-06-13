import home from "../assets/home_logo.png";

const dataLeague = {
	home: { name: "Home", url: "/", flag: home, id: "HOME" },
	premier: {
		name: "Premier League",
		url: "/league/PL",
		flag: "https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg",
		id: "PL",
	},
  spain: {
		name: "Liga Santander",
		url: "/league/PD",
		flag:
			"https://crests.football-data.org/760.svg",
		id: "PD",
	},
	serieA: {
		name: "Serie A",
		url: "/league/SA",
		flag:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
		id: "SA",
	},
	bundesliga: {
		name: "Bundesliga",
		url: "/league/BL1",
		flag:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
		id: "BL1",
	},
	ligueOne: {
		name: "Ligue 1",
		url: "/league/FL1",
		flag:
			"https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
		id: "FL1",
	},
};

export { dataLeague };
