export const turfs = [
  {
    id: "1",
    label: "Football turf in Chuyen Viet",
    imgSrc: require("./images/p1.jpg"),
    subTurfs: [
      {
        id: "1",
        label: "Turf A",
        price: 123,
        imgSrc: require("./images/p1.jpg"),
      },
      {
        id: "2",
        label: "Turf B",
        price: 233,
        imgSrc: require("./images/p1.jpg"),
      },
      {
        id: "3",
        label: "Turf C",
        price: 561,
        imgSrc: require("./images/p1.jpg"),
      },
      {
        id: "4",
        label: "Turf D",
        price: 787,
        imgSrc: require("./images/p1.jpg"),
      },
    ],
  },

  {
    id: "2",
    label: "Football turf in Tuyen Son",
    imgSrc: require("./images/p2"),
    subTurfs: [
      { id: "1", label: "Turf A", price: 50, imgSrc: require("./images/p2") },
      { id: "2", label: "Turf B", price: 75, imgSrc: require("./images/p2") },
      { id: "3", label: "Turf C", price: 68, imgSrc: require("./images/p2") },
      { id: "4", label: "Turf D", price: 85, imgSrc: require("./images/p2") },
    ],
  },

  {
    id: "3",
    label: "Football turf in Duy Tan",
    imgSrc: require("./images/p3"),
    subTurfs: [
      { id: "1", label: "Turf A", price: 75, imgSrc: require("./images/p3") },
      { id: "2", label: "Turf B", price: 100, imgSrc: require("./images/p3") },
      { id: "3", label: "Turf C", price: 95, imgSrc: require("./images/p3") },
      { id: "4", label: "Turf D", price: 80, imgSrc: require("./images/p3") },
    ],
  },

  {
    id: "4",
    label: "Football turf in Truong Chinh",
    imgSrc: require("./images/p4"),
    subTurfs: [
      {
        id: "1",
        label: "Turf A",
        price: 100,
        imgSrc: require("./images/p4"),
      },
      {
        id: "2",
        label: "Turf B",
        price: 150,
        imgSrc: require("./images/p4"),
      },
      {
        id: "3",
        label: "Turf C",
        price: 112,
        imgSrc: require("./images/p4"),
      },
      {
        id: "4",
        label: "Turf D",
        price: 102,
        imgSrc: require("./images/p4"),
      },
    ],
  },

  {
    id: "5",
    label: "Football turf in Trung Nu Vuong",
    imgSrc: require("./images/p5"),
    subTurfs: [
      { id: "1", label: "Turf A", price: 25, imgSrc: require("./images/p5") },
      { id: "2", label: "Turf B", price: 37, imgSrc: require("./images/p5") },
      { id: "3", label: "Turf C", price: 42, imgSrc: require("./images/p5") },
      { id: "4", label: "Turf D", price: 50, imgSrc: require("./images/p5") },
    ],
  },

  {
    id: "6",
    label: "Football turf in Trang Hoang",
    imgSrc: require("./images/p6"),
    subTurfs: [
      {
        id: "1",
        label: "Turf A",
        price: 87.5,
        imgSrc: require("./images/p6"),
      },
      {
        id: "2",
        label: "Turf B",
        price: 90,
        imgSrc: require("./images/p6"),
      },
      {
        id: "3",
        label: "Turf C",
        price: 95,
        imgSrc: require("./images/p6"),
      },
      {
        id: "4",
        label: "Turf D",
        price: 100,
        imgSrc: require("./images/p6"),
      },
    ],
  },

  {
    id: "7",
    label: "Football turf in Ba Dinh",
    imgSrc: require("./images/p7"),
    subTurfs: [
      {
        id: "1",
        label: "Turf A",
        price: 112.5,
        imgSrc: require("./images/p7"),
      },
      {
        id: "2",
        label: "Turf B",
        price: 114,
        imgSrc: require("./images/p7"),
      },
      {
        id: "3",
        label: "Turf C",
        price: 120,
        imgSrc: require("./images/p7"),
      },
      {
        id: "4",
        label: "Turf D",
        price: 110,
        imgSrc: require("./images/p7"),
      },
    ],
  },

  {
    id: "8",
    label: "Football turf in My Nhat Quang",
    imgSrc: require("./images/p2"),
    subTurfs: [
      {
        id: "1",
        label: "Turf A",
        price: 137.5,
        imgSrc: require("./images/p2"),
      },
      {
        id: "2",
        label: "Turf B",
        price: 140,
        imgSrc: require("./images/p2"),
      },
      {
        id: "3",
        label: "Turf C",
        price: 150,
        imgSrc: require("./images/p2"),
      },
      {
        id: "4",
        label: "Turf D",
        price: 170,
        imgSrc: require("./images/p2"),
      },
    ],
  },
];

export const accounts = {
  owner: [
    {
      id: "1",
      username: "long",
      address: "13 Nguyen Van Linh",
      image: "",
      phone: "123456",
      balance: 0,
      password: "abcdef",
      role: "owner",
    },
  ],

  renter: [
    {
      id: "1",
      username: "lin",
      image: "",
      phone: "123123",
      balance: 0,
      password: "98765",
      role: "renter",
    },
  ],

  users: [
    { username: "long", password: "abcdef", image: "", role: "owner", },
    { username: "lin", password: "98765", image: "", role: "renter", },
  ]
};
